import React from 'react'

function Item({ item, onToggleItem, onDeleteItem }) {
    return (
      <li key={item.id}>
        <input
          type="checkbox"
          value={item.bought}
          onChange={() => onToggleItem(item.id)}
        />
        <span style={item.bought ? { textDecoration: "line-through" } : {}}>
          {item.quantity} {item.description}
        </span>
        <button onClick={() => onDeleteItem(item.id)}>❌</button>
      </li>
    );
  }

export default Item