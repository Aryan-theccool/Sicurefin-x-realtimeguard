# RealtimeGuard Architecture

Complete technical architecture and design decisions for the financial fraud detection platform.

## System Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                        FRONTEND (React + Vite)                   │
│  ┌──────────────┬──────────────────┬──────────────────────────┐  │
│  │ Live Feed    │  MapView         │ ExplainabilityPanel     │  │
│  │ (Sorted TX)  │  (Leaflet Map)   │ (Risk Score + Rules)    │  │
│  ├──────────────┴──────────────────┴──────────────────────────┤  │
│  │            RiskGauge (Radial Score)                        │  │
│  ├──────────────────────────────────────────────────────────┤  │
│  │ StatsTicker (Real-time Stats)                             │  │
│  └──────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
                              │
                    WebSocket + HTTP REST
                              │
┌─────────────────────────────────────────────────────────────────┐
│                    BACKEND (Node.js + Express)                   │
│  ┌──────────────┬──────────────────┬──────────────────────────┐  │
│  │ WebSocket    │ Express API      │ Transaction Generator  │  │
│  │ Server       │ (Broadcast Hub)  │ (Mock Data)            │  │
│  └──────────────┴──────────────────┴──────────────────────────┘  │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │              FRAUD DETECTION ENGINE                       │  │
│  │  ┌────────────────────────────────────────────────────┐  │  │
│  │  │ PMLA Rules (Indian Compliance)                     │  │  │
│  │  │  • Structuring (₹45k-₹49.9k)                       │  │  │
│  │  │  • High-Value CTR (>₹10 Lakhs)                     │  │  │
│  │  │  • Round Figure Anomalies                          │  │  │
│  │  │  • Behavioral Analysis                             │  │  │
│  │  └────────────────────────────────────────────────────┘  │  │
│  └──────────────────────────────────────────────────────────┘  │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │              BLOCKCHAIN & AUDIT TRAIL                    │  │
│  │  ┌──────────────────────────────────────────────────┐   │  │
│  │  │ Block Structure                                  │   │  │
│  │  │  • Index + Timestamp + Data                      │   │  │
│  │  │  • SHA-256 Hash                                  │   │  │
│  │  │  • ECDSA Signature (Ethereum secp256k1)          │   │  │
│  │  │  • Signer Address + Previous Hash                │   │  │
│  │  │  • Hot-Reload Capability                         │   │  │
│  │  └──────────────────────────────────────────────────┘   │  │
│  └──────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
                              │
        ┌───────────────────────┼───────────────────────┐
        │                       │                       │
    [SQLite]            [NeDB]              [blockchain.json]
    Transactions        Fallback             Audit Trail
        DB                 DB              (Persisted)
```

## Communication Flow

### 1. Initial Connection
```
Frontend                                Backend
   │                                       │
   ├─── WebSocket Connect ──────────────>│
   │                                       │ Validate token
   │                                       │
   │<── HISTORY message (50 recent TX) ──┤
   │    [Set state: transactions]         │
   │                                       │
   └ Auto-select first TX
```

### 2. Real-Time Transaction Stream
```
Backend                                 Frontend
   │                                       │
   │ Generate TX                          │
   ├─ Check PMLA rules                    │
   ├─ Persist to DB                       │
   ├─ Broadcast via WS ──────────────────>│
   │                                       │ Parse message
   │                                       │ Update transactions array
   │                                       │ Re-render UI
   │                                       │ Update maps/gauges
```

### 3. Analyst Action (BLOCK/ALLOW)
```
Frontend                           Backend
   │                                 │
   ├─ User clicks Block/Allow       │
   │  (fills in notes)              │
   │                                 │
   ├─── POST /api/action ────────>│
   │    { transaction_id,           │
   │      action: "BLOCK/ALLOW",    │
   │      notes: "..." }            │
   │                                 │
   │                                 │ Create Block:
   │                                 │  1. Generate hash
   │                                 │  2. ECDSA sign
   │                                 │  3. Add to chain
   │                                 │  4. Persist JSON
   │                                 │
   │<── { success: true, hash: x } │
   │    (Show confirmation)         │
   │                                 │
   │                                 ├─> Optional Slack webhook
```

### 4. Blockchain Verification
```
Frontend                           Backend
   │                                 │
   ├─ User clicks "Verify Integrity"│
   │                                 │
   ├─── GET /api/blockchain/verify ─>│
   │                                 │
   │                                 │ Hot-load blockchain.json
   │                                 │ Validate each block:
   │                                 │  • Hash recalculation
   │                                 │  • Signature verification
   │                                 │  • Chain linking
   │                                 │
   │<── { valid: true/false, ... } │
   │                                 │
   │ If valid: Show "Secure"        │
   │ If invalid: Show TamperModal   │
   │            with error details  │
```

### 5. Tamper Detection (File Watcher)
```
External Event              Backend                    Frontend
(Manual edit of              │                           │
blockchain.json)             │                           │
    │                        │                           │
    └──> blockchain.json     │                           │
         modified            │                           │
                             │                           │
                    fs.watch detects                     │
                             │                           │
                    Verify chain                         │
                             │                           │
                    Invalid ──────────> BLOCKCHAIN_TAMPERED
                      │                 message via WS ──>│
                      │                                    │
                      └─> Broadcast alert              Show modal
                                                        (Details)
```

## Data Models

### Transaction Object
```javascript
{
  id: "tx_uuid",
  transaction_id: "tx_uuid",
  timestamp: "2024-07-24T10:30:00Z",
  amount: 49900,                      // INR
  currency: "INR",
  payment_mode: "UPI|IMPS|NEFT|...",
  device_id: "device_xyz",
  ip: "203.0.113.42",
  lat: 28.6139,                       // Delhi coords
  lon: 77.2090,
  location: "Delhi, India",
  user_id: "user_123",
  merchant: "E-Commerce Inc",
  fraud_score: 0-100,                 // Overall risk
  risk_score: 0-100,
  features: {
    velocity: 5,                      // TX per hour
    new_device: false,
    geo_jump: false,
    unusual_amount: true
  },
  rule_triggers: [
    "PMLA_STRUCTURING_ALERT",
    "VELOCITY_SPIKE"
  ]
}
```

### Blockchain Block
```javascript
{
  index: 0,                           // Chain position
  timestamp: "2024-07-24T10:35:00Z",
  data: {
    id: "tx_uuid",
    action: "BLOCK",                  // or "ALLOW"
    notes: "Suspected structuring"
  },
  previousHash: "abc123...",          // Link to prior block
  hash: "def456...",                  // SHA-256(content)
  signature: "0x789...",              // ECDSA signature
  signer: "0xabc...",                 // Signer address (Ethereum)
  nonce: 0
}
```

### API Error Response
```javascript
{
  error: "Descriptive message",
  status: 400 | 404 | 500,
  timestamp: "2024-07-24T10:40:00Z"
}
```

## Security Architecture

### 1. Cryptographic Signing
```
Transaction Analysis
       │
       ├─> PMLA Check
       │
       ├─> Fraud Score
       │
       └─> Create Block
            │
            ├─> Generate Hash (SHA-256)
            │   Input: index + prev_hash + timestamp + data + nonce
            │
            ├─> Sign Hash (ECDSA)
            │   Key: Ethereum Private Key (secp256k1)
            │   Output: Signature + Signer Address
            │
            ├─> Save to Chain
            │
            └─> Persist JSON
                 │
                 └─> File Watcher monitors for edits
```

### 2. Tamper Detection Mechanism
```
blockchain.json modified manually

    ↓

fs.watch event triggered

    ↓

Backend loads chain from disk

    ↓

Validate each block:
  • Verify ECDSA signature with stored signer address
  • Recalculate SHA-256 hash
  • Check previousHash link

    ↓

If any block invalid:
  ├─ Extract error details
  ├─ Identify signer/block
  ├─ Broadcast to all clients
  └─ Frontend shows TamperModal

    ↓

UI displays:
  • Which block was corrupted
  • What changed
  • Who made the decision
  • Complete signer history
```

### 3. Access Control Layers
```
┌─────────────────────────────────┐
│ Frontend: Session Token         │
│ (localStorage)                  │
└─────────────────────────────────┘
              │
              ↓
┌─────────────────────────────────┐
│ WebSocket: Optional Token Auth  │
│ (query parameter)               │
└─────────────────────────────────┘
              │
              ↓
┌─────────────────────────────────┐
│ HTTP: Rate Limiting             │
│ (200 req/15min per IP)          │
└─────────────────────────────────┘
              │
              ↓
┌─────────────────────────────────┐
│ CORS: Whitelist Origins         │
│ (localhost, Vercel domains)     │
└─────────────────────────────────┘
```

## Performance Optimization

### 1. WebSocket Batching
- Initial connection: Send 50 recent transactions (HISTORY message)
- Subsequent updates: Send only new transaction (TX message)
- Broadcast to all connected clients simultaneously

### 2. Database Indexing
- SQLite indexed on timestamp for fast retrieval
- NeDB indexed on transaction_id for deduplication
- Query optimization for >50K transaction datasets

### 3. In-Memory Caching
- Keep 100 most recent transactions in memory
- Faster WebSocket broadcast vs disk reads
- Automatic eviction when max size exceeded

### 4. Lazy Loading
- Frontend components lazy-loaded with React.lazy()
- Map only renders when visible
- Modals rendered on-demand

### 5. Rate Limiting
- Express rate limiter: 200 requests/15 minutes
- Prevents API abuse and DDoS
- Per-IP tracking with Redis-compatible backend

## Database Strategy

### Hybrid Persistence Model
```
┌────────────────────────────────────────┐
│        Transaction Data Flow            │
├────────────────────────────────────────┤
│ New TX arrives                          │
│   │                                     │
│   ├─> SQLite (Primary history)          │
│   │   └─ Long-term persistence          │
│   │                                     │
│   ├─> NeDB (Fallback/Cache)             │
│   │   └─ Fast queries                   │
│   │                                     │
│   └─> RAM (Live buffer)                 │
│       └─ WebSocket broadcast            │
│                                         │
└────────────────────────────────────────┘

┌────────────────────────────────────────┐
│        Audit Trail (Blockchain)         │
├────────────────────────────────────────┤
│ Analyst Action (BLOCK/ALLOW)            │
│   │                                     │
│   ├─> Create Block (in-memory)          │
│   │   └─ Generate hash + signature      │
│   │                                     │
│   └─> Persist blockchain.json           │
│       └─ File watched for tampering     │
│                                         │
└────────────────────────────────────────┘
```

### Query Patterns
```javascript
// Get recent transactions (pagination)
SELECT * FROM transactions 
ORDER BY timestamp DESC 
LIMIT 50

// Get transactions by date range (audit)
SELECT * FROM transactions 
WHERE timestamp BETWEEN ? AND ?

// Check if transaction already actioned
SELECT * FROM blockchain 
WHERE data->>'id' = ?

// Verify blockchain integrity (validation)
SELECT * FROM blockchain_json
// (loaded entirely, validated in-memory)
```

## Deployment Architecture

### Development
```
localhost:3000  <- SecureFin (Optional next.js)
localhost:5173  <- Frontend (Vite dev server)
localhost:4000  <- Backend (Express + WS)
```

### Production (Docker)
```
Docker Compose orchestrates:
  • Backend service (port 4000)
  • Frontend service (port 5173)
  • Volume mounts for persistence

Database files persisted:
  • /data/blockchain.json
  • /data/database.sqlite
  • /data/*.db
```

### Cloud Deployment
```
Vercel/Render:
  ├─ Frontend deployed to CDN
  ├─ Backend deployed to serverless (Node.js)
  └─ Database persisted in managed storage

Environment differences:
  • Production: FRONTEND_URL to deployed domain
  • Auth: Enhanced with JWT tokens
  • Monitoring: Sentry/DataDog integration
  • Alerts: Slack webhooks for critical events
```

## Scalability Considerations

### Current Limits (Single Instance)
- **TPS**: ~200 transactions/second
- **Concurrent Connections**: 1000+ WebSocket clients
- **Memory**: ~100MB with 5000+ transactions
- **Storage**: ~10MB per 100K transactions

### Scaling Strategies (Future)
1. **Horizontal Scaling**
   - Load balancer distributing traffic
   - Redis for distributed session store
   - Database clustering

2. **Vertical Scaling**
   - Increase node memory/CPU
   - Move to bigger machine

3. **Microservices**
   - Separate fraud detection service
   - Blockchain service
   - Data aggregation service

4. **Real Blockchain**
   - Move audit trail to Ethereum/Polygon
   - Reduce database dependency
   - Immutable on-chain verification

## Monitoring & Observability

### Application Metrics
- Transaction throughput (TX/sec)
- WebSocket connections count
- Blockchain verification time
- API response times
- Error rates

### Logging
- Morgan HTTP request logs
- Console.log with timestamps
- File watcher tamper alerts
- Blockchain validation failures

### Alerting
- Slack webhook on tampering detection
- Email alerts on critical errors
- Dashboard health checks
- Performance degradation warnings

## Testing Strategy

### Unit Tests
- PMLA rule validation
- Blockchain hash calculation
- Signature verification

### Integration Tests
- WebSocket message flow
- API endpoint functionality
- Database persistence
- File watcher accuracy

### E2E Tests
- Full user journey (login → action → verify)
- Tamper detection flow
- Audit log consistency

## Compliance & Audit Trail

### Indian Financial Regulations
- **PMLA Compliance**: Rules engine matches Indian AML requirements
- **Audit Trail**: Complete history of all decisions
- **Non-Repudiation**: ECDSA signatures prevent denial
- **Retention**: Historical data persisted indefinitely

### Blockchain Audit
- Every decision immutable once recorded
- Tamper attempts detected and logged
- Complete chain verification available
- Legal admissibility via cryptographic proof
