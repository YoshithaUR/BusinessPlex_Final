import React, { useState } from 'react';
import { performFullConnectionCheck } from '../utils/connectionCheck.js';

/**
 * Simple Connection Example Component
 * Shows how to use the connection checking utilities
 */
const ConnectionExample = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCheckConnection = async () => {
    setLoading(true);
    setResult(null);
    
    try {
      const connectionResult = await performFullConnectionCheck();
      setResult(connectionResult);
    } catch (error) {
      setResult({
        error: error.message,
        overall: { connected: false, healthy: false, allChecksPassed: false }
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Backend Connection Test</h1>
      
      <button
        onClick={handleCheckConnection}
        disabled={loading}
        className="w-full py-3 px-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed mb-6"
      >
        {loading ? 'Checking Connection...' : 'Test Backend Connection'}
      </button>

      {result && (
        <div className="space-y-4">
          {/* Overall Status */}
          <div className={`p-4 rounded-lg ${
            result.overall?.allChecksPassed 
              ? 'bg-green-100 border border-green-300' 
              : 'bg-red-100 border border-red-300'
          }`}>
            <h2 className="text-xl font-semibold mb-2">
              {result.overall?.allChecksPassed ? '✅ All Checks Passed!' : '❌ Some Checks Failed'}
            </h2>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <span className="font-medium">Connected:</span> 
                <span className={`ml-2 ${result.overall?.connected ? 'text-green-600' : 'text-red-600'}`}>
                  {result.overall?.connected ? 'Yes' : 'No'}
                </span>
              </div>
              <div>
                <span className="font-medium">Healthy:</span> 
                <span className={`ml-2 ${result.overall?.healthy ? 'text-green-600' : 'text-red-600'}`}>
                  {result.overall?.healthy ? 'Yes' : 'No'}
                </span>
              </div>
              <div>
                <span className="font-medium">All Passed:</span> 
                <span className={`ml-2 ${result.overall?.allChecksPassed ? 'text-green-600' : 'text-red-600'}`}>
                  {result.overall?.allChecksPassed ? 'Yes' : 'No'}
                </span>
              </div>
            </div>
          </div>

          {/* Individual Check Results */}
          {result.checks && (
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Individual Check Results:</h3>
              
              {/* Basic Connection */}
              <div className={`p-3 rounded border ${
                result.checks.basicConnection?.success ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
              }`}>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Basic Connection Test</span>
                  <span className={`px-2 py-1 rounded text-xs ${
                    result.checks.basicConnection?.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {result.checks.basicConnection?.success ? 'PASS' : 'FAIL'}
                  </span>
                </div>
                {result.checks.basicConnection?.message && (
                  <p className="text-sm text-gray-600 mt-1">{result.checks.basicConnection.message}</p>
                )}
              </div>

              {/* Health Check */}
              <div className={`p-3 rounded border ${
                result.checks.health?.success ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
              }`}>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Health Check</span>
                  <span className={`px-2 py-1 rounded text-xs ${
                    result.checks.health?.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {result.checks.health?.success ? 'PASS' : 'FAIL'}
                  </span>
                </div>
                {result.checks.health?.data?.status && (
                  <p className="text-sm text-gray-600 mt-1">Status: {result.checks.health.data.status}</p>
                )}
              </div>

              {/* Connection Status */}
              <div className={`p-3 rounded border ${
                result.checks.connectionStatus?.success ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
              }`}>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Detailed Connection Status</span>
                  <span className={`px-2 py-1 rounded text-xs ${
                    result.checks.connectionStatus?.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {result.checks.connectionStatus?.success ? 'PASS' : 'FAIL'}
                  </span>
                </div>
                {result.checks.connectionStatus?.data?.message && (
                  <p className="text-sm text-gray-600 mt-1">{result.checks.connectionStatus.data.message}</p>
                )}
              </div>
            </div>
          )}

          {/* Error Display */}
          {result.error && (
            <div className="p-4 bg-red-100 border border-red-300 rounded-lg">
              <h4 className="font-semibold text-red-800">Error:</h4>
              <p className="text-red-600">{result.error}</p>
            </div>
          )}

          {/* Timestamp */}
          <div className="text-sm text-gray-500 text-center">
            Check performed at: {new Date(result.timestamp).toLocaleString()}
          </div>
        </div>
      )}
    </div>
  );
};

export default ConnectionExample;
