import { Router } from "express";

/**
 * Connection Controller
 * Handles backend-frontend connection status and health checks
 */

// Connection status endpoint
export const getConnectionStatus = (req, res) => {
  try {
    const startTime = Date.now();
    
    // Basic connection check
    const connectionStatus = {
      connected: true,
      status: "success",
      message: "Backend and Frontend are connected successfully",
      timestamp: new Date().toISOString(),
      responseTime: `${Date.now() - startTime}ms`,
      
      // Server information
      server: {
        environment: process.env.NODE_ENV || 'development',
        uptime: process.uptime(),
        uptimeFormatted: formatUptime(process.uptime()),
        version: process.version,
        platform: process.platform,
        arch: process.arch,
        pid: process.pid,
        memory: {
          used: Math.round(process.memoryUsage().heapUsed / 1024 / 1024) + ' MB',
          total: Math.round(process.memoryUsage().heapTotal / 1024 / 1024) + ' MB',
          external: Math.round(process.memoryUsage().external / 1024 / 1024) + ' MB',
          rss: Math.round(process.memoryUsage().rss / 1024 / 1024) + ' MB'
        },
        cpu: {
          usage: process.cpuUsage(),
          loadAverage: process.platform !== 'win32' ? require('os').loadavg() : [0, 0, 0]
        }
      },
      
      // API information
      api: {
        version: "1.0.0",
        endpoints: {
          contact: "/api/contact",
          newsletter: "/api/newsletter", 
          application: "/api/application",
          enrolment: "/api/enrolment",
          test: "/api/test",
          connectionStatus: "/api/connection-status",
          healthCheck: "/api/health"
        },
        cors: {
          enabled: true,
          origin: process.env.NODE_ENV === 'production' ? process.env.CLIENT_URL : 'all origins',
          methods: process.env.NODE_ENV === 'production' ? ['GET', 'POST'] : ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
        },
        rateLimit: {
          enabled: process.env.NODE_ENV === 'production',
          windowMs: "15 minutes",
          maxRequests: 100
        }
      },
      
      // Database status (placeholder for future database integration)
      database: {
        status: "not_configured",
        message: "No database connection configured",
        type: null,
        connected: false
      },
      
      // Email service status
      email: {
        status: "configured",
        service: "nodemailer",
        configured: !!(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS)
      },
      
      // Security status
      security: {
        helmet: true,
        cors: true,
        rateLimit: process.env.NODE_ENV === 'production',
        environment: process.env.NODE_ENV || 'development'
      }
    };

    res.status(200).json(connectionStatus);
    
  } catch (error) {
    console.error('Connection status error:', error);
    res.status(500).json({
      connected: false,
      status: "error",
      message: "Failed to get connection status",
      error: error.message,
      timestamp: new Date().toISOString()
    });
  }
};

// Health check endpoint (simpler version)
export const healthCheck = (req, res) => {
  const health = {
    status: "healthy",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development',
    version: process.version
  };

  res.status(200).json(health);
};

// Detailed system information endpoint
export const getSystemInfo = (req, res) => {
  try {
    const os = require('os');
    
    const systemInfo = {
      timestamp: new Date().toISOString(),
      system: {
        platform: os.platform(),
        arch: os.arch(),
        release: os.release(),
        hostname: os.hostname(),
        type: os.type(),
        uptime: os.uptime(),
        uptimeFormatted: formatUptime(os.uptime())
      },
      cpu: {
        model: os.cpus()[0]?.model || 'Unknown',
        cores: os.cpus().length,
        speed: os.cpus()[0]?.speed || 0,
        loadAverage: os.loadavg()
      },
      memory: {
        total: Math.round(os.totalmem() / 1024 / 1024 / 1024 * 100) / 100 + ' GB',
        free: Math.round(os.freemem() / 1024 / 1024 / 1024 * 100) / 100 + ' GB',
        used: Math.round((os.totalmem() - os.freemem()) / 1024 / 1024 / 1024 * 100) / 100 + ' GB'
      },
      network: {
        interfaces: Object.keys(os.networkInterfaces()).length,
        hostname: os.hostname()
      }
    };

    res.status(200).json(systemInfo);
    
  } catch (error) {
    console.error('System info error:', error);
    res.status(500).json({
      status: "error",
      message: "Failed to get system information",
      error: error.message,
      timestamp: new Date().toISOString()
    });
  }
};

// Helper function to format uptime
function formatUptime(seconds) {
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);
  
  if (days > 0) {
    return `${days}d ${hours}h ${minutes}m ${secs}s`;
  } else if (hours > 0) {
    return `${hours}h ${minutes}m ${secs}s`;
  } else if (minutes > 0) {
    return `${minutes}m ${secs}s`;
  } else {
    return `${secs}s`;
  }
}

export default {
  getConnectionStatus,
  healthCheck,
  getSystemInfo
};
