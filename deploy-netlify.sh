#!/bin/bash

# GWC Logistics - Netlify Deployment Script
# Run this script to deploy your project to Netlify

echo "🚀 GWC Logistics - Netlify Deployment"
echo "======================================"
echo ""

# Check if netlify CLI is installed
if ! command -v netlify &> /dev/null
then
    echo "❌ Netlify CLI not found. Installing..."
    npm install -g netlify-cli
fi

echo "✅ Netlify CLI is installed"
echo ""

# Check if logged in
echo "🔐 Checking Netlify authentication..."
netlify status &> /dev/null
if [ $? -ne 0 ]; then
    echo "📝 Please login to Netlify..."
    netlify login
fi

echo "✅ Authenticated with Netlify"
echo ""

# Build the project
echo "🔨 Building project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please fix errors and try again."
    exit 1
fi

echo "✅ Build successful"
echo ""

# Ask user which deployment type
echo "📦 Choose deployment type:"
echo "1) Production deploy"
echo "2) Preview deploy"
read -p "Enter choice (1 or 2): " choice

case $choice in
    1)
        echo ""
        echo "🚀 Deploying to PRODUCTION..."
        netlify deploy --prod
        ;;
    2)
        echo ""
        echo "🔍 Creating PREVIEW deploy..."
        netlify deploy
        ;;
    *)
        echo "❌ Invalid choice. Exiting."
        exit 1
        ;;
esac

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Deployment successful! 🎉"
    echo ""
    echo "📊 Next steps:"
    echo "  1. Check your site is working"
    echo "  2. Set environment variables in Netlify dashboard"
    echo "  3. Configure custom domain (optional)"
    echo ""
    netlify open:site
else
    echo ""
    echo "❌ Deployment failed. Check the errors above."
    exit 1
fi

