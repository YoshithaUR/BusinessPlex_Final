/**
 * Connection Check Utility
 * Provides functions to check backend-frontend connectivity
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

/**
 * Check if backend is connected and get detailed status
 * @returns {Promise<Object>} Connection status object
 */
export const checkConnectionStatus = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/connection-status`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return {
      success: true,
      connected: data.connected,
      data: data,
      error: null
    };
  } catch (error) {
    return {
      success: false,
      connected: false,
      data: null,
      error: error.message
    };
  }
};

/**
 * Simple health check
 * @returns {Promise<Object>} Health status object
 */
export const checkHealth = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/health`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return {
      success: true,
      healthy: data.status === 'healthy',
      data: data,
      error: null
    };
  } catch (error) {
    return {
      success: false,
      healthy: false,
      data: null,
      error: error.message
    };
  }
};

/**
 * Test basic connectivity
 * @returns {Promise<Object>} Basic test result
 */
export const testConnection = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/test`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return {
      success: true,
      connected: true,
      message: data.message,
      timestamp: data.timestamp,
      error: null
    };
  } catch (error) {
    return {
      success: false,
      connected: false,
      message: null,
      timestamp: null,
      error: error.message
    };
  }
};

/**
 * Comprehensive connection check with all endpoints
 * @returns {Promise<Object>} Complete connection status
 */
export const performFullConnectionCheck = async () => {
  const results = {
    timestamp: new Date().toISOString(),
    checks: {},
    overall: {
      connected: false,
      healthy: false,
      allChecksPassed: false
    }
  };

  // Test 1: Basic connection test
  results.checks.basicConnection = await testConnection();

  // Test 2: Health check
  results.checks.health = await checkHealth();

  // Test 3: Detailed connection status
  results.checks.connectionStatus = await checkConnectionStatus();

  // Determine overall status
  results.overall.connected = results.checks.basicConnection.success;
  results.overall.healthy = results.checks.health.success;
  results.overall.allChecksPassed = 
    results.checks.basicConnection.success && 
    results.checks.health.success && 
    results.checks.connectionStatus.success;

  return results;
};

/**
 * React hook for connection status
 * @param {number} interval - Check interval in milliseconds (default: 30000)
 * @returns {Object} Connection status and controls
 */
export const useConnectionStatus = (interval = 30000) => {
  const [connectionStatus, setConnectionStatus] = React.useState({
    connected: false,
    loading: true,
    lastCheck: null,
    error: null
  });

  const checkConnection = React.useCallback(async () => {
    setConnectionStatus(prev => ({ ...prev, loading: true }));
    
    const result = await checkConnectionStatus();
    
    setConnectionStatus({
      connected: result.connected,
      loading: false,
      lastCheck: new Date().toISOString(),
      error: result.error,
      data: result.data
    });
  }, []);

  React.useEffect(() => {
    // Initial check
    checkConnection();

    // Set up interval
    const intervalId = setInterval(checkConnection, interval);

    return () => clearInterval(intervalId);
  }, [checkConnection, interval]);

  return {
    ...connectionStatus,
    checkConnection,
    isConnected: connectionStatus.connected,
    isLoading: connectionStatus.loading
  };
};

// Export default for easy importing
export default {
  checkConnectionStatus,
  checkHealth,
  testConnection,
  performFullConnectionCheck,
  useConnectionStatus
};
