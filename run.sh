#!/bin/bash
echo "🌧️ Starting Monsoon Insurance Platform..."

# Kill any existing processes
pkill -f "tsx\|vite" 2>/dev/null || true

# Start backend server
echo "Starting backend server on port 3000..."
PORT=3000 tsx server/index.ts &
BACKEND_PID=$!

# Wait for backend to start
sleep 3

# Start frontend server
echo "Starting frontend server on port 5173..."
cd client && npx vite --host 0.0.0.0 --port 5173 &
FRONTEND_PID=$!

# Wait for frontend to start
sleep 2

echo "✅ Monsoon Insurance Platform is running!"
echo "📱 Frontend: http://localhost:5173"
echo "🖥️ Backend: http://localhost:3000"
echo "💾 Database: Seeded with authentic Indian insurance data"

# Keep the script running
wait $BACKEND_PID $FRONTEND_PID