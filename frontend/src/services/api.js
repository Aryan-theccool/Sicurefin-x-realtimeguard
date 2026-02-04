const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';

export async function fetchLatest(limit=50){
  const res = await fetch(`${API_URL}/api/latest?limit=${limit}`);
  if(!res.ok) throw new Error('fetch failed');
  return res.json();
}

export async function postAction(transaction_id, action, notes=''){
  const res = await fetch(`${API_URL}/api/action`, {
    method:'POST',
    headers:{ 'Content-Type':'application/json' },
    body: JSON.stringify({ transaction_id, action, notes })
  });
  return res.json();
}
