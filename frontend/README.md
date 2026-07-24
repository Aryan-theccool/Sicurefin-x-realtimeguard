# RealtimeGuard Frontend

React + Vite modern UI for real-time financial fraud detection dashboard with blockchain audit visualization.

## Quick Start

```bash
npm install
npm run dev      # runs on http://localhost:5173
npm run build    # production build
npm run preview  # preview production build
```

## Architecture

### Component Structure

```
src/
├── App.jsx                           # Main dashboard orchestrator
├── components/
│   ├── LoginPage.jsx                 # Authentication screen
│   ├── StatsTicker.jsx               # Real-time statistics header
│   ├── LiveFeed.jsx                  # Transaction list (left panel)
│   ├── MapView.jsx                   # Geographic visualization (center)
│   ├── RiskGauge.jsx                 # Fraud score radial gauge
│   ├── ExplainabilityPanel.jsx       # Rule breakdown (right panel)
│   ├── AuditLog.jsx                  # Blockchain audit trail modal
│   └── TamperModal.jsx               # Tamper detection alert modal
├── services/
│   ├── api.js                        # HTTP API client
│   └── websocket.js                  # WebSocket connection handler
├── config.js                         # API endpoints & configuration
├── styles/
│   └── app.css                       # Component-specific styles
├── index.css                         # Global styles & Tailwind imports
└── main.jsx                          # React entry point
```

## Key Components

### `App.jsx`
Main orchestrator component that:
- Manages authentication state (LoginPage)
- Establishes WebSocket connection for real-time updates
- Coordinates between all dashboard panels
- Handles blockchain verification and tamper detection
- Manages modal states (Audit Log, Tamper Alert)

### `StatsTicker.jsx`
Header statistics display:
- Total transactions processed
- Fraud alerts triggered count
- Transactions blocked
- WebSocket connection status indicator

### `LiveFeed.jsx`
Left panel transaction list:
- Sortable by risk score, timestamp, amount
- Color-coded fraud indicators (red/yellow/green)
- Click to select transaction (updates map, gauge, explainability)
- Scrollable with auto-update of new transactions
- Shows merchant, amount, location, fraud_score

### `MapView.jsx`
Center panel interactive map:
- Leaflet.js powered geographic display
- Real-time transaction markers
- Selected transaction highlight
- Zoom/pan controls
- Clustering for dense regions
- Risk-based marker coloring

### `RiskGauge.jsx`
Radial gauge visualization:
- 0-100 fraud score display
- Color gradient (green → red)
- Animated needle
- Real-time updates on transaction selection
- Percentage text display

### `ExplainabilityPanel.jsx`
Right panel analysis:
- Rule triggers breakdown (which PMLA rules fired)
- Transaction details (ID, amount, merchant, device)
- Fraud score justification
- Block/Allow action buttons
- Analyst notes textarea
- Auto-disables when no transaction selected

### `AuditLog.jsx`
Modal showing blockchain audit trail:
- All analyst decisions (BLOCK/ALLOW) in chronological order
- Cryptographic signatures and signer addresses
- Block hashes and timestamps
- Reverse-chronological display
- Full blockchain history accessible

### `TamperModal.jsx`
Alert modal for tampering detection:
- Shows detailed error information
- Identifies which blocks were modified
- Lists signer history for each affected block
- Displays previous valid state vs current state
- Emergency restore button

### `LoginPage.jsx`
Simple authentication UI:
- Mock login (development)
- Analyst credentials entry
- Transition to main dashboard on login

## Services

### `api.js`
HTTP client functions:
- `getLatestTransactions(limit)` - Fetch recent transactions
- `submitAction(transactionId, action, notes)` - Record BLOCK/ALLOW decision
- `getAuditLog()` - Retrieve blockchain audit trail
- `verifyBlockchain()` - Check chain integrity
- Error handling and retry logic

### `websocket.js`
WebSocket real-time handler:
- Connection establishment with optional token auth
- Message parsing and type routing
- HISTORY batch on connection
- TX incremental transaction updates
- BLOCKCHAIN_TAMPERED alerts
- BLOCKCHAIN_RECOVERY notifications
- Automatic reconnection

### `config.js`
Configuration centralization:
- `ENDPOINTS` - Backend API URLs
- `WS_URL` - WebSocket connection string
- `API_BASE_URL` - Base API path
- Environment-based URLs

## Styling

### Tailwind CSS Integration
- Dark theme (bg-slate-950, text-slate-200)
- Indigo accent color scheme
- Responsive grid layouts
- Glass-morphism effects
- Smooth animations and transitions

### CSS Modules
- `app.css` - Component-specific styling
- `index.css` - Global styles and imports
- Framer Motion animations for smooth transitions

## Real-Time Updates

### WebSocket Flow
1. App connects on mount
2. Backend sends HISTORY with recent transactions
3. New transactions arrive via TX messages
4. Frontend updates state and broadcasts to components
5. UI auto-selects first transaction if none selected
6. Map and gauge update based on selection

### State Management
- React hooks (useState, useEffect)
- WebSocket as single source of truth
- Transaction state persisted in component
- Selected transaction state shared across panels

## Features

### User Interactions
- **Select Transaction**: Click list item → map highlights, gauge updates, explainability shows details
- **Block/Allow**: Click action button → API call → blockchain record → audit log updates
- **Add Notes**: Type in textarea → saved with blockchain record
- **View Audit Log**: Click button → modal shows all decisions with signatures
- **Verify Integrity**: Click button → checks blockchain → shows tamper alerts if needed

### Responsive Design
- 4-column grid layout (Feed | Map+Gauge | Analysis)
- Collapses to single column on mobile
- Scrollable panels with overflow handling
- Sticky header with controls

### Accessibility
- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast compliance
- Focus indicators on buttons

## Configuration

Edit `src/config.js`:
```javascript
export const ENDPOINTS = {
  BASE: 'http://localhost:4000/api',
  LATEST: 'http://localhost:4000/api/latest',
  ACTION: 'http://localhost:4000/api/action',
  AUDIT_LOG: 'http://localhost:4000/api/actions',
  VERIFY: 'http://localhost:4000/api/blockchain/verify'
};

export const WS_URL = 'ws://localhost:4000';
```

## Environment Setup

Frontend connects to backend automatically:
- Backend must be running on `http://localhost:4000` (dev)
- WebSocket on `ws://localhost:4000`
- CORS handled by backend configuration

For production, update `config.js` with deployment URLs.

## Development

### Hot Module Reloading
Vite provides instant component updates during development:
```bash
npm run dev
```

### Build for Production
```bash
npm run build          # Creates optimized dist/
npm run preview        # Test production build locally
```

### Build Output
- Minified JavaScript bundles
- Optimized CSS with Tailwind purging
- Source maps included
- Ready for Vercel/static hosting

## Dependencies

- **react** 18.2.0 - UI library
- **react-dom** 18.2.0 - DOM rendering
- **react-router-dom** 7.9.6 - Client routing
- **react-leaflet** 4.2.1 - Map integration
- **leaflet** 1.9.4 - Mapping library
- **framer-motion** 10.12.16 - Animations
- **lucide-react** 0.554.0 - Icons
- **tailwindcss** 3.4.1 - Styling
- **clsx** 2.1.1 - Class name utilities
- **tailwind-merge** 3.4.0 - Tailwind class merging

## Performance Optimizations

- Lazy component loading with React.lazy
- Memoized components to prevent re-renders
- WebSocket batching for initial history
- Capped transaction history at 50 in memory
- Efficient transaction filtering and sorting

## Troubleshooting

**Connection refused to backend?**
- Ensure backend is running: `npm start` in backend/
- Check backend port: default 4000
- Verify FRONTEND_URL in backend .env

**Map not loading?**
- Leaflet CSS may not be injected
- Check browser console for errors
- Verify react-leaflet installation

**WebSocket disconnected?**
- Check ws:// URL in config.js
- Verify backend WebSocket server running
- Check browser console for connection errors

**Transactions not updating?**
- Check browser Network tab for WS frames
- Verify backend mock data enabled: ENABLE_MOCK_DATA=true
- Check browser console for parsing errors

**Styling issues?**
- Clear browser cache: Ctrl+Shift+Delete
- Rebuild Tailwind: npm run dev
- Check tailwind.config.cjs for theme setup
