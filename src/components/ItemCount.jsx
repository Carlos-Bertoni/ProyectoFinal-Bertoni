// src/components/ItemCount.jsx
import React from 'react';

const ItemCount = ({ count, setCount }) => {
  const handleAdd = () => setCount(count + 1);
  const handleSubtract = () => setCount(count > 1 ? count - 1 : 1);

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <button onClick={handleSubtract}>-</button>
      <span style={{ margin: '0 20px' }}>{count}</span>
      <button onClick={handleAdd}>+</button>
    </div>
  );
};

export default ItemCount;

