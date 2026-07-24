# Contributing to RealtimeGuard

Guidelines for contributing to the RealtimeGuard project.

## Code of Conduct

- Be respectful and inclusive
- Focus on the code, not the person
- Help others learn and grow
- Report issues responsibly

## Getting Started

1. **Fork the Repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/realtimeguard.git
   cd realtimeguard
   ```

2. **Create a Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Set Up Development Environment**
   ```bash
   # Backend
   cd backend
   npm install
   
   # Frontend
   cd frontend
   npm install
   ```

4. **Make Changes**
   - Write clean, readable code
   - Follow project conventions
   - Add comments for complex logic

5. **Test Your Changes**
   ```bash
   # Backend
   cd backend && npm start
   
   # Frontend (new terminal)
   cd frontend && npm run dev
   ```

6. **Commit & Push**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   git push origin feature/your-feature-name
   ```

7. **Create Pull Request**
   - Provide clear description
   - Link any related issues
   - Wait for review

---

## Coding Standards

### JavaScript/Node.js

**File Naming**
```
snake_case.js for modules
camelCase.js for utilities
```

**Code Style**
```javascript
// ✅ Good
function checkPMLA(transaction) {
  const rules = [
    structuringCheck(transaction),
    highValueCheck(transaction)
  ];
  return rules.filter(r => r.triggered);
}

// ❌ Avoid
function checkpmla(transaction){
  let rules=[];
  // ...
  return rules;
}
```

**Comments**
```javascript
// Explain WHY, not WHAT
// ✅ Detect structuring attempts below ₹50k threshold
const STRUCTURING_THRESHOLD = 50000;

// ❌ Pointless
const STRUCTURING_THRESHOLD = 50000; // Set threshold
```

### React/JSX

**Component Naming**
```jsx
// ✅ PascalCase for components
export function TransactionList({ transactions }) {
  return (
    <div className="...">
      {transactions.map(tx => (
        <TransactionItem key={tx.id} transaction={tx} />
      ))}
    </div>
  );
}

// ❌ Avoid
export function transactionList({ transactions }) {
  // ...
}
```

**Props & State**
```jsx
// ✅ Destructure props
function Component({ title, description, onClose }) {
  return <div>{title}: {description}</div>;
}

// ✅ Use hooks
const [transactions, setTransactions] = useState([]);
const [selectedTx, setSelectedTx] = useState(null);

// ❌ Avoid
function Component(props) {
  return <div>{props.title}</div>;
}
```

### CSS/Tailwind

**Class Usage**
```jsx
// ✅ Use Tailwind utilities
<div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
  {content}
</div>

// ❌ Avoid inline styles
<div style={{backgroundColor: '#111827', border: '1px solid #1e293b', borderRadius: '8px', padding: '16px'}}>
  {content}
</div>
```

---

## Commit Messages

Follow conventional commits format:

```
type(scope): subject

body (optional)

footer (optional)
```

**Types**
- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation
- `style` - Code style (no logic change)
- `refactor` - Code refactor
- `test` - Tests
- `chore` - Build, dependencies

**Examples**
```
feat(pmla): add round figure anomaly detection

fix(blockchain): correct hash calculation for blocks

docs: update API documentation

style(frontend): format component indentation

refactor(backend): extract fraud rules to separate module
```

---

## Pull Request Guidelines

### Before Submitting

- [ ] Code follows project standards
- [ ] No console errors/warnings
- [ ] Tests pass (if applicable)
- [ ] Documentation updated
- [ ] Branch is up to date with main

### PR Description Template

```markdown
## Description
Brief explanation of changes

## Related Issue
Closes #123

## Changes
- Change 1
- Change 2

## Testing
How to verify these changes work

## Screenshots (if UI changes)
[Add screenshots]
```

---

## Areas for Contribution

### Backend
- **Fraud Detection**: Add more PMLA rules or ML models
- **Database**: Optimize queries, add caching
- **APIs**: New endpoints for integrations
- **Security**: Enhance encryption, authentication
- **Performance**: Optimize WebSocket, reduce latency

### Frontend
- **UI/UX**: Improve dashboard layout, add animations
- **Components**: New panels, visualizations
- **Accessibility**: WCAG compliance improvements
- **Performance**: Reduce bundle size, optimize rendering
- **Internationalization**: Add multi-language support

### Documentation
- Add tutorials
- Improve examples
- Create video guides
- Add troubleshooting guides
- Translate to other languages

### DevOps
- Docker improvements
- CI/CD pipeline enhancements
- Kubernetes deployment
- Monitoring/logging setup
- Database migration scripts

---

## Bug Reports

### Before Reporting
- Check existing issues
- Verify on latest version
- Gather error logs

### Report Template
```markdown
## Description
Clear description of bug

## Steps to Reproduce
1. Step 1
2. Step 2
3. Step 3

## Expected Behavior
What should happen

## Actual Behavior
What actually happens

## Screenshots/Logs
Error messages or logs

## Environment
- OS: [Windows/Mac/Linux]
- Node: [version]
- Browser: [Chrome/Firefox/etc]
```

---

## Feature Requests

### Suggest an Enhancement
```markdown
## Description
What you want to add

## Motivation
Why this feature is needed

## Proposed Solution
How should it work

## Alternatives Considered
Other approaches

## Additional Context
Screenshots, examples, etc
```

---

## Development Workflow

### Branch Naming
```
feature/feature-name          # New feature
bugfix/bug-description        # Bug fix
docs/documentation-topic      # Documentation
refactor/component-name       # Refactoring
chore/task-description        # Maintenance
```

### Local Testing Checklist
```
□ Backend starts without errors
□ Frontend builds successfully
□ WebSocket connection works
□ Transactions stream in real-time
□ Blockchain operations work
□ PMLA rules trigger correctly
□ UI is responsive
□ No console errors
□ No security warnings
□ Performance acceptable
```

### Before Pushing
```bash
# Make sure code is clean
npm run lint                  # If linter configured

# Verify builds work
cd backend && npm install
cd frontend && npm install && npm run build

# Test locally
npm start                     # In backend
npm run dev                   # In frontend
```

---

## Code Review Process

### What Reviewers Look For
1. **Functionality** - Does it work as intended?
2. **Code Quality** - Is code clean and maintainable?
3. **Performance** - Any performance implications?
4. **Security** - Are there security concerns?
5. **Tests** - Are changes covered by tests?
6. **Documentation** - Are changes documented?

### Responding to Feedback
- Be open to suggestions
- Ask clarifying questions
- Update code based on feedback
- Re-request review when done

---

## Development Tips

### Useful Commands
```bash
# Backend debugging
DEBUG=* npm start             # Verbose logging

# Frontend debugging
npm run dev -- --inspect      # Inspector on :9229

# Database inspection
cd backend && node scripts/view_db.js

# Test blockchain
cd backend && node scripts/verify_blockchain.js
```

### Common Issues & Fixes

**WebSocket Connection Fails**
```bash
# Check port is available
lsof -i :4000

# Use different port
PORT=4001 npm start
```

**Database Locked**
```bash
# Remove corrupted files
rm backend/data/*.db
npm start
```

**Hot Reload Not Working**
```bash
# Clear cache and restart
rm -rf node_modules/.cache
npm start
```

---

## Documentation Standards

### README Files
- Clear overview
- Installation steps
- Usage examples
- Troubleshooting

### Code Comments
```javascript
// Use comments to explain WHY
// Keep comments up-to-date with code
// Use JSDoc for functions

/**
 * Detects money laundering patterns in transaction
 * @param {Object} transaction - Transaction data
 * @returns {Array} Array of triggered rules
 */
function checkPMLA(transaction) {
  // ...
}
```

### Architecture Docs
- System overview with diagrams
- Component interactions
- Data flow
- Deployment details

---

## License

By contributing, you agree that your contributions will be licensed under the same MIT License as the project.

---

## Questions?

- **Issues**: Open a GitHub issue
- **Discussions**: Use GitHub Discussions
- **Email**: [maintainer-email]

---

## Recognition

Contributors will be recognized in:
- Project README
- Release notes
- Contributors page

Thank you for contributing! 🙏

