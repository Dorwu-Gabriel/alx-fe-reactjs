import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ border: '1px solid #90caf9', padding: '16px', borderRadius: '8px', textAlign: 'center', margin: '16px 0', backgroundColor: '#e3f2fd' }}>
      <p style={{ fontSize: '1.2em', color: '#1565c0', marginBottom: '12px' }}>Current Count: {count}</p>
      <button style={{ margin: '0 6px', padding: '8px 16px', backgroundColor: '#1976d2', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button style={{ margin: '0 6px', padding: '8px 16px', backgroundColor: '#1976d2', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <button style={{ margin: '0 6px', padding: '8px 16px', backgroundColor: '#bdbdbd', color: '#263238', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

export default Counter;