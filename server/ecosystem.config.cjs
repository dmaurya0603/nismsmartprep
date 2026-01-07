// PM2 Configuration for EC2 deployment
module.exports = {
  apps: [
    {
      name: 'nism-api',
      script: 'dist/index.js',
      instances: 'max', // Use all available CPU cores
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      // Logging
      log_file: '/var/log/nism-api/combined.log',
      out_file: '/var/log/nism-api/out.log',
      error_file: '/var/log/nism-api/error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      // Graceful restart
      kill_timeout: 5000,
      wait_ready: true,
      listen_timeout: 10000
    }
  ]
};
