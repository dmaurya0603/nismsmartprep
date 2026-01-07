#!/bin/bash
# EC2 Ubuntu Server Setup Script for NISM Smart Prep API
# Run this script on a fresh Ubuntu 22.04/24.04 EC2 instance

set -e

echo "=========================================="
echo "NISM Smart Prep - EC2 Server Setup"
echo "=========================================="

# Update system
echo "Updating system packages..."
sudo apt update && sudo apt upgrade -y

# Install Node.js 20.x
echo "Installing Node.js 20.x..."
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Verify installation
node --version
npm --version

# Install PM2 globally
echo "Installing PM2..."
sudo npm install -g pm2

# Install nginx for reverse proxy
echo "Installing Nginx..."
sudo apt install -y nginx

# Create app directory
echo "Creating application directory..."
sudo mkdir -p /var/www/server
sudo mkdir -p /var/log/nism-api
sudo chown -R $USER:$USER /var/www/server
sudo chown -R $USER:$USER /var/log/nism-api

# Install Certbot for SSL (Let's Encrypt)
echo "Installing Certbot for SSL..."
sudo apt install -y certbot python3-certbot-nginx

echo "=========================================="
echo "Base setup complete!"
echo ""
echo "Next steps:"
echo "1. Upload your server code to /var/www/server"
echo "2. Create .env file with your environment variables"
echo "3. Run: cd /var/www/server && npm install && npm run build"
echo "4. Configure Nginx (see nginx config file)"
echo "5. Start with PM2: pm2 start ecosystem.config.cjs --env production"
echo "=========================================="
