import React from 'react'

function Footer({ items }) {
    if (!items.length) {
      return (
        <p className="stats">
          <em>Start adding items to you shopping list 🛒</em>
        </p>
      );
    }
    const numItems = items.length;
    const numBought = items.slice().filter((item) => item.bought).length;
    const percentage = Math.round((numBought / numItems) * 100);
    return (
      <footer className="stats">
        <em>
          {percentage === 100
            ? "You have bought everything on your List🎉🎉"
            : `You have ${numItems} items on your list, and you already bought ${numBought} (${percentage}%)`}
        </em>
      </footer>
    );
  }

export default Footer