#!/bin/bash

# DuskKeeper Development Environment Initialization
# This script sets up the complete development environment

echo "🚀 Initializing DuskKeeper Development Environment..."
echo ""

# Function to check if a command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Check prerequisites
echo "🔍 Checking prerequisites..."

# Check Docker
if ! command_exists docker; then
    echo "❌ Docker is not installed. Please install Docker first."
    echo "   https://docs.docker.com/get-docker/"
    exit 1
fi

# Check Node.js
if ! command_exists node; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    echo "   https://nodejs.org/"
    exit 1
fi

# Check Yarn
if ! command_exists yarn; then
    echo "❌ Yarn is not installed. Please install Yarn first."
    echo "   https://yarnpkg.com/getting-started/install"
    exit 1
fi

echo "✅ All prerequisites are installed"
echo ""

# Start Docker if not running
echo "🐳 Checking Docker service..."
if ! docker info > /dev/null 2>&1; then
    echo "Starting Docker service..."
    if [[ "$OSTYPE" == "linux-gnu"* ]]; then
        sudo systemctl start docker
    elif [[ "$OSTYPE" == "darwin"* ]]; then
        open -a Docker
        echo "Waiting for Docker to start..."
        sleep 20
    fi
fi
echo "✅ Docker is running"
echo ""

# Initialize database infrastructure
echo "📊 Setting up database infrastructure..."
cd database
./init.sh
if [ $? -ne 0 ]; then
    echo "❌ Database initialization failed"
    exit 1
fi
cd ..
echo ""

# Install dependencies and setup server
echo "🖥️ Setting up server..."
cd server
echo "📦 Installing server dependencies..."
yarn install

echo "🔄 Running database migrations..."
yarn prisma generate
yarn prisma migrate dev --name init

echo "🚀 Starting server..."
yarn dev &
SERVER_PID=$!
cd ..
echo ""

# Install dependencies and setup web client
echo "🌐 Setting up web client..."
cd web
echo "📦 Installing web dependencies..."
yarn install

echo "🚀 Starting web client..."
yarn dev &
WEB_PID=$!
cd ..
echo ""

# Print success message
echo "🎉 DuskKeeper development environment is ready!"
echo ""
echo "📊 Services running:"
echo "   Database:    http://localhost:5432"
echo "   MeiliSearch: http://localhost:7700"
echo "   Adminer:     http://localhost:8080"
echo "   Server:      http://localhost:3000"
echo "   Web Client:  http://localhost:2000"
echo ""
echo "🔧 Development tools:"
echo "   Database UI:     http://localhost:8080 (Adminer)"
echo "   MeiliSearch UI: http://localhost:7700"
echo ""
echo "📝 Default credentials:"
echo "   Database:"
echo "     User: duskkeeper"
echo "     Pass: duskkeeper_password"
echo "   MeiliSearch:"
echo "     Key: duskkeeper_master_key"
echo ""
echo "💡 To stop all services:"
echo "   1. Press Ctrl+C to stop this script"
echo "   2. Run: cd database && ./scripts/stop.sh"
echo ""
echo "🔍 Logs are available at:"
echo "   Server:   server/logs"
echo "   Web:      web/logs"
echo "   Database: docker-compose logs"
echo ""

# Wait for user interrupt
echo "Press Ctrl+C to stop all services..."
wait $SERVER_PID $WEB_PID 