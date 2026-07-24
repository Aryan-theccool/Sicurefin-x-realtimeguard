# RealtimeGuard Backend

Node.js + Express server powering the real-time financial fraud detection and blockchain audit system.

## Quick Start

```bash
npm install
npm start       # runs on http://localhost:4000
```

Or with hot-reload during development:
```bash
npm run dev
```

## Core Modules

### `server.js` - Main API Server
- Express.js HTTP server with CORS, rate limiting, and security headers
- WebSocket server for real-time transaction streaming
- RESTful API endpoints for transactions and analyst actions
- File watcher for detecting blockchain tampering
- Mock transaction generation (configurable via `ENABLE_MOCK_DATA`)

### `blockchain.js` - Blockchain & Cryptography
- Immutable blockchain implementation with SHA-256 hashing
- Ethereum ECDSA signing using Web3.js for non-repudiation
- Block linking and chain validation
- Hot-reload capability to detect tampering
- Persistent JSON storage

### `pmla.js` - Fraud Detection Rules Engine
- Indian PMLA (Prevention of Money Laundering Act) rule checks
- Detects: Structuring, High-Value transactions, Round figure anomalies
- Behavioral analysis: Velocity spikes, new devices, geo-hopping
- Configurable rule thresholds

### `generator.js` - Mock Transaction Generator
- Generates realistic transaction data for testing
- Produces ~1 transaction every 2-4 seconds
- Realistic variations in merchant, location, amount, device
- Optional forced fraud injection for demo

### `db.js` - Database Layer
- SQLite + NeDB hybrid persistence
- Transaction history storage and retrieval
- Query optimization for large datasets
- Database initialization and schema setup

## API Endpoints

### Transactions
```
GET /api/latest?limit=50              # Get recent transactions
POST /api/transaction                 # Ingest external transaction
```

### Analyst Actions
```
POST /api/action                      # Record BLOCK/ALLOW decision
GET /api/actions                      # Get audit log (blockchain)
```

### Blockchain Operations
```
GET /api/blockchain/verify            # Verify chain integrity
POST /api/blockchain/simulate-attack  # Demo: corrupt a block
POST /api/blockchain/restore          # Demo: restore chain
```

### WebSocket
```
ws://localhost:4000                   # Real-time transaction stream
```

## Environment Variables

Create `.env` file:

```env
PORT=4000
ENABLE_MOCK_DATA=true              # Enable/disable transaction generation
WS_TOKEN=                           # Optional WebSocket auth token
SLACK_WEBHOOK_URL=                  # Optional: Send alerts to Slack
FRONTEND_URL=http://localhost:5173  # Frontend URL for CORS
```

## Database Files

Located in `data/` directory:
- `blockchain.json` - Immutable audit trail (cryptographically signed blocks)
- `database.sqlite` - SQLite transaction history
- `transactions.json` - Recent transaction cache
- `local_transactions.db` - NeDB transaction store

## Testing

View database contents:
```bash
node scripts/view_db.js
```

Verify blockchain integrity:
```bash
node scripts/verify_blockchain.js
```

Test PMLA rules:
```bash
node scripts/verify_india.js
```

## Security Features

- **ECDSA Signatures**: Ethereum-grade cryptography on every action
- **Rate Limiting**: 200 requests/15min per IP
- **Helmet Security Headers**: Protection against common web attacks
- **CORS Whitelist**: Only specified origins allowed
- **File Monitoring**: Real-time detection of blockchain tampering
- **Request Logging**: Morgan HTTP request logger

## Performance Notes

- Blockchain operations: <10ms
- WebSocket broadcast: <100ms latency
- Database queries: optimized with indexing
- Mock generation: ~100-200 tx/second
- Memory: ~50-100MB with 5000+ transactions

## Integration Points

- **Frontend**: Connects via WebSocket for real-time updates
- **External Systems**: Accept transactions via `/api/transaction` POST
- **Slack**: Optional alerts on critical events
- **Blockchain**: Self-contained, no external chain required

## Troubleshooting

**Port already in use?**
```bash
# Change port via environment
PORT=4001 npm start
```

**Database locked?**
Remove `data/*.db` files and restart:
```bash
rm data/*.db
npm start
```

**WebSocket connection failed?**
Check frontend URL matches `FRONTEND_URL` in `.env`

**Blockchain corrupted?**
```bash
# Restore from backup or use the restore API
POST /api/blockchain/restore
```
