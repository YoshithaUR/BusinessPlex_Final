import React, { useState, useEffect } from 'react';
import { 
  checkConnectionStatus, 
  checkHealth, 
  testConnection, 
  performFullConnectionCheck 
} from '../utils/connectionCheck.js';

/**
 * Connection Status Component
 * Displays real-time backend-frontend connection status
 */
const ConnectionStatus = () => {
  const [connectionData, setConnectionData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [lastCheck, setLastCheck] = useState(null);

  // Check connection status
  const handleCheckConnection = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const result = await checkConnectionStatus();
      setConnectionData(result.data);
      setLastCheck(new Date().toISOString());
      
      if (!result.success) {
        setError(result.error);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Perform full connection check
  const handleFullCheck = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const result = await performFullConnectionCheck();
      setConnectionData(result.checks.connectionStatus.data);
      setLastCheck(new Date().toISOString());
      
      if (!result.overall.allChecksPassed) {
        setError('Some connection checks failed');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Auto-check on component mount
  useEffect(() => {
    handleCheckConnection();
  }, []);

  return (
    <div className="connection-status-container p-6 bg-white rounded-lg shadow-lg max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          🔗 Backend Connection Status
        </h2>
        <div className="flex space-x-2">
          <button
            onClick={handleCheckConnection}
            disabled={loading}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Checking...' : 'Check Connection'}
          </button>
          <button
            onClick={handleFullCheck}
            disabled={loading}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Checking...' : 'Full Check'}
          </button>
        </div>
      </div>

      {/* Connection Status Indicator */}
      <div className="mb-6">
        {connectionData ? (
          <div className={`p-4 rounded-lg ${
            connectionData.connected 
              ? 'bg-green-100 border border-green-300' 
              : 'bg-red-100 border border-red-300'
          }`}>
            <div className="flex items-center">
              <div className={`w-4 h-4 rounded-full mr-3 ${
                connectionData.connected ? 'bg-green-500' : 'bg-red-500'
              }`}></div>
              <div>
                <h3 className={`font-semibold ${
                  connectionData.connected ? 'text-green-800' : 'text-red-800'
                }`}>
                  {connectionData.connected ? '✅ Connected' : '❌ Disconnected'}
                </h3>
                <p className={`text-sm ${
                  connectionData.connected ? 'text-green-600' : 'text-red-600'
                }`}>
                  {connectionData.message}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-4 bg-gray-100 border border-gray-300 rounded-lg">
            <p className="text-gray-600">No connection data available</p>
          </div>
        )}
      </div>

      {/* Error Display */}
      {error && (
        <div className="mb-6 p-4 bg-red-100 border border-red-300 rounded-lg">
          <h4 className="font-semibold text-red-800">Error:</h4>
          <p className="text-red-600">{error}</p>
        </div>
      )}

      {/* Detailed Connection Information */}
      {connectionData && (
        <div className="space-y-6">
          {/* Server Information */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">🖥️ Server Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium">Environment:</span> {connectionData.server.environment}
              </div>
              <div>
                <span className="font-medium">Uptime:</span> {connectionData.server.uptimeFormatted}
              </div>
              <div>
                <span className="font-medium">Node Version:</span> {connectionData.server.version}
              </div>
              <div>
                <span className="font-medium">Platform:</span> {connectionData.server.platform}
              </div>
              <div>
                <span className="font-medium">Memory Used:</span> {connectionData.server.memory.used}
              </div>
              <div>
                <span className="font-medium">Response Time:</span> {connectionData.responseTime}
              </div>
            </div>
          </div>

          {/* API Information */}
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">🔌 API Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium">API Version:</span> {connectionData.api.version}
              </div>
              <div>
                <span className="font-medium">CORS Enabled:</span> {connectionData.api.cors.enabled ? 'Yes' : 'No'}
              </div>
              <div>
                <span className="font-medium">Rate Limiting:</span> {connectionData.api.rateLimit.enabled ? 'Enabled' : 'Disabled'}
              </div>
              <div>
                <span className="font-medium">Allowed Origins:</span> {connectionData.api.cors.origin}
              </div>
            </div>
            
            <div className="mt-3">
              <span className="font-medium">Available Endpoints:</span>
              <div className="mt-2 grid grid-cols-2 md:grid-cols-3 gap-2 text-xs">
                {Object.entries(connectionData.api.endpoints).map(([key, endpoint]) => (
                  <div key={key} className="bg-white p-2 rounded border">
                    <span className="font-medium">{key}:</span> {endpoint}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Service Status */}
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">⚙️ Service Status</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium">Email Service:</span> 
                <span className={`ml-2 px-2 py-1 rounded text-xs ${
                  connectionData.email.configured ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {connectionData.email.configured ? 'Configured' : 'Not Configured'}
                </span>
              </div>
              <div>
                <span className="font-medium">Database:</span> 
                <span className={`ml-2 px-2 py-1 rounded text-xs ${
                  connectionData.database.connected ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {connectionData.database.status}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Last Check Time */}
      {lastCheck && (
        <div className="mt-6 text-sm text-gray-500 text-center">
          Last checked: {new Date(lastCheck).toLocaleString()}
        </div>
      )}
    </div>
  );
};

export default ConnectionStatus;
