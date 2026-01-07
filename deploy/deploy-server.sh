#!/bin/bash
# Deploy script for EC2 server
# Run this from your local machine or CI/CD

set -e

# Configuration - UPDATE THESE
EC2_HOST="ubuntu@YOUR_EC2_IP"  # Replace with your EC2 public IP
EC2_KEY="~/.ssh/your-key.pem"   # Path to your SSH key
REMOTE_DIR="/var/www/server"

echo "=========================================="
echo "Deploying Server to EC2..."
echo "=========================================="

# Build locally
echo "Building server..."
cd server
npm run build

# Sync files to EC2 (excluding node_modules and .env)
echo "Syncing files to EC2..."
rsync -avz --progress \
    -e "ssh -i $EC2_KEY" \
    --exclude 'node_modules' \
    --exclude '.env' \
    --exclude '*.log' \
    ./ $EC2_HOST:$REMOTE_DIR/

# Install dependencies and restart on EC2
echo "Installing dependencies and restarting..."
ssh -i $EC2_KEY $EC2_HOST << 'ENDSSH'
    cd /var/www/server
    npm install --production
    pm2 restart ecosystem.config.cjs --env production || pm2 start ecosystem.config.cjs --env production
    pm2 save
ENDSSH

echo "=========================================="
echo "Server deployment complete!"
echo "=========================================="
