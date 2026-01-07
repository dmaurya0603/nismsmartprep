#!/bin/bash
# Deploy script for S3 static hosting
# Requires AWS CLI configured with appropriate credentials

set -e

# Configuration - UPDATE THESE
S3_BUCKET="your-bucket-name"           # Your S3 bucket name
CLOUDFRONT_DIST_ID=""                  # Optional: CloudFront distribution ID for cache invalidation

echo "=========================================="
echo "Deploying Client to S3..."
echo "=========================================="

# Build client
echo "Building client..."
cd client
npm run build

# Sync to S3
echo "Uploading to S3..."
aws s3 sync dist/ s3://$S3_BUCKET/ --delete

# Set cache headers for different file types
echo "Setting cache headers..."

# HTML files - no cache (always fetch latest)
aws s3 cp s3://$S3_BUCKET/ s3://$S3_BUCKET/ \
    --exclude "*" \
    --include "*.html" \
    --metadata-directive REPLACE \
    --cache-control "no-cache, no-store, must-revalidate" \
    --content-type "text/html" \
    --recursive

# JS/CSS files - long cache (hashed filenames)
aws s3 cp s3://$S3_BUCKET/assets/ s3://$S3_BUCKET/assets/ \
    --metadata-directive REPLACE \
    --cache-control "public, max-age=31536000, immutable" \
    --recursive

# Invalidate CloudFront cache (if using CloudFront)
if [ -n "$CLOUDFRONT_DIST_ID" ]; then
    echo "Invalidating CloudFront cache..."
    aws cloudfront create-invalidation \
        --distribution-id $CLOUDFRONT_DIST_ID \
        --paths "/*"
fi

echo "=========================================="
echo "Client deployment complete!"
echo "S3 URL: http://$S3_BUCKET.s3-website-us-east-1.amazonaws.com"
echo "=========================================="
