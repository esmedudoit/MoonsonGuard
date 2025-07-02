#!/bin/bash
export PORT=3000
export NODE_ENV=development

# Kill any existing processes on port 3000
pkill -f "tsx.*server/index.ts" || true
pkill -f "vite.*client" || true

# Start the backend server in background
cd /home/runner/workspace
tsx server/index.ts &
SERVER_PID=$!

# Wait a moment for server to start
sleep 2

# Start the frontend development server
cd client
npx vite --host 0.0.0.0 --port 5173 &
CLIENT_PID=$!

echo "🌧️ Monsoon Insurance Platform starting..."
echo "📱 Frontend: http://localhost:5173"
echo "🖥️ Backend: http://localhost:3000"
echo "💾 Database seeded with authentic Indian monsoon insurance data"

# Function to cleanup on exit
cleanup() {
    echo "Shutting down servers..."
    kill $SERVER_PID $CLIENT_PID 2>/dev/null
    exit 0
}

trap cleanup SIGINT SIGTERM

# Wait for both processes
wait $SERVER_PID $CLIENT_PID
