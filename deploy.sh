#!/bin/bash

# Portfolio Deployment Script
echo "🚀 Starting deployment process..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building the project..."
npm run build

# Check if build was successful
if [ ! -d "dist" ]; then
    echo "❌ Error: Build failed. dist directory not found."
    exit 1
fi

echo "✅ Build completed successfully!"

# Optional: Start the server
if [ "$1" = "--start" ]; then
    echo "🌐 Starting server..."
    npm run serve
fi

echo "🎉 Deployment script completed!"
echo ""
echo "📁 Built files are in the 'dist' directory"
echo "🔧 To start the server: npm run serve"
echo "🌐 To start development: npm run start"
