#!/bin/bash
# Render build script
# This ensures proper build on Render

echo "🔨 Starting build process..."

# Install dependencies
echo "📦 Installing dependencies..."
npm ci --only=production

# Install dev dependencies for build
echo "📦 Installing dev dependencies..."
npm install --save-dev typescript @types/node @types/express @types/cors

# Build TypeScript
echo "🏗️ Building TypeScript..."
npm run build

# Verify build output
if [ -d "dist" ] && [ -f "dist/index.js" ]; then
    echo "✅ Build successful! dist/index.js found"
    ls -la dist
else
    echo "❌ Build failed! dist/index.js not found"
    exit 1
fi

echo "🎉 Build process completed!"
