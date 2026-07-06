# Check if deployment task is still running
ps aux | grep vercel || echo "Vercel deployment may be complete"
