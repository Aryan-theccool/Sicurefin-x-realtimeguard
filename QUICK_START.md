# RealtimeGuard Quick Start Guide

Get up and running in 5 minutes.

## ⚡ 30-Second Setup

```bash
# Terminal 1: Backend
cd backend
npm install
npm start

# Terminal 2: Frontend (new terminal window)
cd frontend
npm install
npm run dev
```

Open: **http://localhost:5173**

Done! 🎉

---

## What You'll See

1. **Login Screen** - Click any button to enter dashboard
2. **Live Transaction Feed** - Left panel updates every 2-4 seconds
3. **World Map** - Center shows transaction locations
4. **Risk Gauge** - Right shows fraud probability
5. **Stats Ticker** - Top shows real-time counters

---

## Interactive Demo

### 1. Watch Real-Time Transactions
- Transactions auto-generate with mock data
- Click any transaction in the left panel
- Map highlights the location
- Risk gauge shows fraud score

### 2. Block a Suspicious Transaction
1. Wait for transaction with high risk score (red)
2. Click "Block" button (right panel)
3. Add optional notes
4. Click "Submit"
5. Transaction added to audit trail

### 3. Verify Blockchain Integrity
1. Click "Verify Integrity" button (top right)
2. See alert: ✅ "Blockchain Integrity Verified"
3. Shows chain length

### 4. Prove Tamper Detection
1. Stop backend: `Ctrl+C`
2. Edit `backend/data/blockchain.json`
   - Change a "BLOCK" to "ALLOW"
   - Save file
3. Restart backend: `npm start`
4. Click "Verify Integrity" again
5. See alert: ❌ "TAMPERING DETECTED"
6. Shows exactly which block was modified

---

## File Structure

```
RealtimeGuard/
├── backend/              # Node.js server
│   ├── server.js         # Main API
│   ├── blockchain.js     # Blockchain logic
│   ├── pmla.js           # Fraud detection rules
│   └── data/             # Database & blockchain
├── frontend/             # React dashboard
│   ├── src/App.jsx       # Main component
│   ├── src/components/   # UI panels
│   └── src/services/     # API calls
└── README.md             # Full documentation
```

---

## Key Endpoints

| Endpoint | Purpose |
|----------|---------|
| GET `/api/latest` | Fetch recent transactions |
| POST `/api/action` | Record BLOCK/ALLOW decision |
| GET `/api/actions` | View audit log |
| GET `/api/blockchain/verify` | Check blockchain integrity |
| `ws://localhost:4000` | Real-time transaction stream |

---

## Environment Setup

### Backend (.env)
```env
PORT=4000
ENABLE_MOCK_DATA=true
FRONTEND_URL=http://localhost:5173
```

### For Production
```env
FRONTEND_URL=https://your-domain.vercel.app
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/YOUR/WEBHOOK
```

---

## Common Commands

```bash
# Backend
npm start              # Run server
npm run dev           # Run with auto-reload
npm run test          # Run tests (if available)

# Frontend
npm run dev           # Dev server
npm run build         # Production build
npm run preview       # Preview build

# Docker
docker-compose up --build      # Start all services
docker-compose down            # Stop all services
```

---

## Troubleshooting

**"Port 4000 already in use"**
```bash
lsof -i :4000              # Find process
kill -9 <PID>              # Kill it
PORT=4001 npm start        # Or use different port
```

**"Cannot connect to WebSocket"**
- Check backend is running
- Check port 4000 is accessible
- Check frontend config uses right WS URL

**"Transactions not showing"**
- Ensure `ENABLE_MOCK_DATA=true`
- Check browser console for errors
- Verify WebSocket connection (look for green dot)

**"Blockchain verification fails"**
- Backend may have crashed
- Restart with: `npm start`
- Check `backend/data/blockchain.json` exists

---

## Architecture at a Glance

```
Frontend (React)
    ↓ WebSocket
Backend (Node.js)
    ├─ Fraud Detection (PMLA Rules)
    ├─ Blockchain (SHA-256 + ECDSA)
    ├─ Transaction Generator
    └─ Database (SQLite + NeDB)
```

---

## Features You Can Test

✅ **Real-Time Streaming** - New transactions every 2-4 seconds
✅ **Fraud Detection** - Automatic PMLA rule checking
✅ **Geographic Mapping** - Interactive Leaflet map
✅ **Risk Scoring** - Radial gauge visualization
✅ **Immutable Audit** - Cryptographic blockchain
✅ **Tamper Detection** - File watcher alerts
✅ **Explainability** - Rule breakdown panel

---

## Next Steps

1. **Review Code** → `backend/pmla.js` (fraud rules)
2. **Explore Database** → `backend/data/`
3. **Check Blockchain** → Edit `blockchain.json` and verify breaks
4. **Read Full Docs** → `README.md` for complete guide
5. **Deploy** → `DEPLOYMENT.md` for production setup

---

## Support

- **Full README** → `README.md`
- **Architecture** → `ARCHITECTURE.md`
- **Deployment** → `DEPLOYMENT.md`
- **Backend Docs** → `backend/README.md`
- **Frontend Docs** → `frontend/README.md`

---

**Questions?** Check the documentation files above or review the source code with detailed comments.

**Ready to deploy?** See `DEPLOYMENT.md` for Vercel, Render, Docker, or other platforms.

