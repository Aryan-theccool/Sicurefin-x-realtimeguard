# RealtimeGuard Deployment Guide

Complete instructions for deploying RealtimeGuard to production environments.

## Table of Contents
1. [Local Development](#local-development)
2. [Docker Deployment](#docker-deployment)
3. [Vercel (Frontend)](#vercel-frontend)
4. [Render/Railway (Backend)](#renderrailway-backend)
5. [Database Setup](#database-setup)
6. [Environment Configuration](#environment-configuration)
7. [Monitoring & Maintenance](#monitoring--maintenance)

---

## Local Development

### Prerequisites
- Node.js 16+ and npm
- Git
- Optional: Docker & Docker Compose

### Step 1: Clone Repository
```bash
git clone <repository-url>
cd Sicurefin-x-realtimeguard
```

### Step 2: Backend Setup
```bash
cd backend
npm install

# Create .env file
cat > .env << EOF
PORT=4000
ENABLE_MOCK_DATA=true
FRONTEND_URL=http://localhost:5173
EOF

# Start backend
npm start
```
✅ Backend running at `http://localhost:4000`

### Step 3: Frontend Setup (New Terminal)
```bash
cd frontend
npm install
npm run dev
```
✅ Frontend running at `http://localhost:5173`

### Step 4: Access Dashboard
Open browser: `http://localhost:5173`
- Mock data auto-generates transactions
- Full blockchain functionality available
- No authentication required (dev mode)

---

## Docker Deployment

### Prerequisites
- Docker 20.10+
- Docker Compose 2.0+

### Single Command Deployment
```bash
docker-compose up --build
```

Services start:
- Backend: `http://localhost:4000`
- Frontend: `http://localhost:5173`
- Optional SecureFin: `http://localhost:3000`

### Persistent Data
Data automatically persisted in volumes:
```yaml
volumes:
  backend-data:
    driver: local
```

### Environment in Docker
Edit `.env` before running:
```bash
cp backend/.env.example backend/.env
# Edit backend/.env with your values
docker-compose up --build
```

### Docker Development Tips
```bash
# View logs
docker-compose logs -f backend

# Rebuild specific service
docker-compose up --build backend

# Stop services
docker-compose down

# Remove volumes (fresh start)
docker-compose down -v
```

---

## Vercel (Frontend)

### Step 1: Push to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/repo.git
git push -u origin main
```

### Step 2: Connect Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import GitHub repository
4. Select `frontend` as root directory
5. Click "Deploy"

### Step 3: Configure Environment
In Vercel dashboard:
- Settings → Environment Variables
- Add: `VITE_API_BASE_URL` = backend URL
- Add: `VITE_WS_URL` = backend WS URL

### Step 4: Update Frontend Config
Edit `frontend/src/config.js`:
```javascript
export const ENDPOINTS = {
  BASE: process.env.VITE_API_BASE_URL || 'http://localhost:4000/api',
  LATEST: `${process.env.VITE_API_BASE_URL || 'http://localhost:4000/api'}/latest`,
  ACTION: `${process.env.VITE_API_BASE_URL || 'http://localhost:4000/api'}/action`,
  AUDIT_LOG: `${process.env.VITE_API_BASE_URL || 'http://localhost:4000/api'}/actions`,
  VERIFY: `${process.env.VITE_API_BASE_URL || 'http://localhost:4000/api'}/blockchain/verify`
};

export const WS_URL = process.env.VITE_WS_URL || 'ws://localhost:4000';
```

### Step 5: Deploy
Vercel auto-deploys on push:
```bash
git add .
git commit -m "Update frontend for production"
git push
```

✅ Frontend deployed to `https://<project>.vercel.app`

---

## Render/Railway (Backend)

### Option A: Render.com

#### Step 1: Create Service
1. Go to [render.com](https://render.com)
2. Click "New +" → "Web Service"
3. Connect GitHub repository
4. Select root directory: `backend`

#### Step 2: Configure Build & Start Commands
- **Build Command**: `npm install`
- **Start Command**: `npm start`
- **Node Version**: 18.x (set in environment)

#### Step 3: Set Environment Variables
In Render dashboard → Environment:
```
PORT=4000
ENABLE_MOCK_DATA=true
FRONTEND_URL=https://<vercel-domain>.vercel.app
```

#### Step 4: Add PostgreSQL Database (Optional)
- Render → Create Database
- Connect to backend via DATABASE_URL
- Update `db.js` to use PostgreSQL instead of SQLite

#### Step 5: Deploy
Push to GitHub (auto-deploy):
```bash
git push
```

✅ Backend deployed to `https://<service>.onrender.com`

### Option B: Railway.app

#### Step 1: Create Project
1. Go to [railway.app](https://railway.app)
2. Click "New Project" → "Deploy from GitHub"
3. Select repository

#### Step 2: Add Node Service
- Railway auto-detects Node.js
- Connect backend folder

#### Step 3: Configure Environment
Railway Variables tab:
```
PORT=$PORT
ENABLE_MOCK_DATA=true
FRONTEND_URL=https://<vercel-domain>.vercel.app
```

#### Step 4: Deploy
Railway auto-deploys on push

✅ Backend deployed to Railway domain

---

## Database Setup

### SQLite (Default - No Setup Required)
- Automatically created in `backend/data/`
- Persists transactions and audit logs
- No additional configuration needed

### PostgreSQL (Production Recommended)

#### Step 1: Create Database
```bash
# Local
createdb realtimeguard

# Or use cloud provider (Render, Railway, Heroku)
```

#### Step 2: Update Connection String
`backend/.env`:
```
DATABASE_URL=postgresql://user:password@localhost:5432/realtimeguard
```

#### Step 3: Update `db.js`
```javascript
const pg = require('pg');
const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL
});

// Replace NeDB calls with pg queries
```

#### Step 4: Run Migrations
```bash
# Create tables
psql realtimeguard < schema.sql
```

### MongoDB (Alternative)

#### Step 1: Create Cluster
- MongoDB Atlas: https://mongodb.com/cloud/atlas
- Create free cluster
- Get connection string

#### Step 2: Update `.env`
```
MONGODB_URL=mongodb+srv://user:pass@cluster.mongodb.net/realtimeguard
```

#### Step 3: Update `db.js`
```javascript
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL);

// Define schemas
const transactionSchema = new mongoose.Schema({...});
```

---

## Environment Configuration

### Required Variables
```bash
# Core
PORT=4000
ENABLE_MOCK_DATA=true

# Frontend
FRONTEND_URL=http://localhost:5173
VITE_API_BASE_URL=http://localhost:4000/api
VITE_WS_URL=ws://localhost:4000

# Optional: Integrations
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/YOUR/WEBHOOK/URL
WS_TOKEN=your_secure_token_here
```

### Secure Variables (Never Commit)
- Slack webhook URLs
- Database passwords
- API keys
- JWT secrets

### .env Example
```bash
# backend/.env
PORT=4000
ENABLE_MOCK_DATA=true
FRONTEND_URL=https://realtimeguard.vercel.app
SLACK_WEBHOOK_URL=                          # Optional: your Slack webhook URL
WS_TOKEN=your_secure_token_here
DATABASE_URL=postgresql://user:pass@db.host:5432/realtimeguard
```

### frontend/.env
```bash
VITE_API_BASE_URL=https://backend.onrender.com/api
VITE_WS_URL=wss://backend.onrender.com
```

---

## CI/CD Pipeline

### GitHub Actions (Auto-Deploy)

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: 18
      
      - name: Install backend
        run: cd backend && npm install
      
      - name: Lint backend
        run: cd backend && npm run lint || true
      
      - name: Install frontend
        run: cd frontend && npm install
      
      - name: Build frontend
        run: cd frontend && npm run build
        env:
          VITE_API_BASE_URL: https://backend.onrender.com/api
          VITE_WS_URL: wss://backend.onrender.com

  deploy:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Deploy to Vercel
        env:
          VERCEL_TOKEN: ${{ secrets.VERCEL_TOKEN }}
        run: |
          npm install -g vercel
          vercel --prod --token $VERCEL_TOKEN
```

---

## Monitoring & Maintenance

### Health Checks

**Backend Health**
```bash
curl http://localhost:4000/

# Expected: {"status": "RealtimeGuard Simulator Running", ...}
```

**WebSocket Connection**
```bash
# Test with wscat
npm install -g wscat
wscat -c ws://localhost:4000
```

### Logging

View backend logs:
```bash
# Docker
docker-compose logs -f backend

# Local
npm start  # Shows logs in stdout

# Production (Render/Railway)
# Use dashboard → Logs tab
```

### Backup & Recovery

**Backup blockchain.json**
```bash
cp backend/data/blockchain.json backup/blockchain.json.$(date +%s)
```

**Backup database**
```bash
# SQLite
cp backend/data/database.sqlite backup/

# PostgreSQL
pg_dump realtimeguard > backup/realtimeguard.sql
```

**Restore from backup**
```bash
cp backup/blockchain.json backend/data/
# Restart backend
npm start
```

### Performance Monitoring

**Check database size**
```bash
# SQLite
ls -lh backend/data/database.sqlite

# PostgreSQL
psql realtimeguard -c "SELECT pg_size_pretty(pg_database_size('realtimeguard'));"
```

**Monitor memory usage**
```bash
# Node process
ps aux | grep node
# Look at RSS (Resident Set Size)
```

**Monitor WebSocket connections**
```bash
# Add logging to server.js
console.log(`WebSocket clients: ${wss.clients.size}`);
```

### Scaling Checklist

If experiencing slowness:
1. ✅ Check database size (may need cleanup)
2. ✅ Monitor memory usage (may need more RAM)
3. ✅ Check transaction throughput (may need load balancing)
4. ✅ Verify blockchain validation time
5. ✅ Consider database optimization (indexing)
6. ✅ Enable database connection pooling

### Zero-Downtime Deployment

**Rolling Update Strategy**
```bash
# 1. Deploy new backend version to staging
docker tag backend:latest backend:staging
docker run -d --name backend-staging ...

# 2. Verify functionality
curl http://localhost:4001/

# 3. Switch traffic
docker stop backend
docker rename backend-staging backend
docker start backend

# 4. Monitor for errors
docker logs backend -f
```

---

## Troubleshooting

### Connection Refused
```
Error: connect ECONNREFUSED 127.0.0.1:4000
```
**Solution**: Ensure backend is running
```bash
cd backend && npm start
```

### CORS Error
```
Access to XMLHttpRequest blocked by CORS policy
```
**Solution**: Update FRONTEND_URL in backend .env
```env
FRONTEND_URL=https://your-frontend-domain.vercel.app
```

### WebSocket Disconnects
```
WebSocket connection closed
```
**Solution**: Check WS_URL in frontend config
```javascript
export const WS_URL = 'wss://your-backend-domain.com';  // Use wss:// for HTTPS
```

### Database Locked
```
SQLITE_CANTOPEN: unable to open database file
```
**Solution**: Remove corrupted database
```bash
rm backend/data/*.db
npm start  # Will recreate fresh
```

### Out of Memory
```
JavaScript heap out of memory
```
**Solution**: Increase Node memory limit
```bash
NODE_OPTIONS=--max-old-space-size=2048 npm start
```

---

## Security Checklist

Before going live:

- [ ] Change default WS_TOKEN
- [ ] Set strong FRONTEND_URL whitelist
- [ ] Enable HTTPS (wss:// for WebSocket)
- [ ] Use environment variables (never hardcode secrets)
- [ ] Set up database backups
- [ ] Enable rate limiting
- [ ] Use HTTPS only (redirect HTTP)
- [ ] Set up monitoring/alerting
- [ ] Regular security audits
- [ ] Keep dependencies updated (`npm audit fix`)

---

## Support

For issues during deployment:
1. Check logs: `docker-compose logs backend`
2. Verify environment variables: `echo $VARIABLE_NAME`
3. Test connectivity: `curl http://localhost:4000/`
4. Check documentation: See ARCHITECTURE.md

