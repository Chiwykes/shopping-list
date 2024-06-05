import React, { useState } from 'react';
import Item from './Item';



function PackingList({ items, onToggleItem, onDeleteItem, onClearList }) {
    // function handleToggle(id){
    //   setItem()
    // }
    const [sortBy, setSortBy] = useState("input");
  
    let sortedItems;
    if (sortBy === "input") {
      sortedItems = items;
    }
    if (sortBy === "description")
      sortedItems = items
        .slice()
        .sort((a, b) => a.description.localeCompare(b.description));
    if (sortBy === "bought")
      sortedItems = items
        .slice()
        .sort((a, b) => Number(a.bought) - Number(b.bought));
    return (
      <div className="list">
        <ul>
          {sortedItems.map((item) => (
            <Item
              item={item}
              onToggleItem={onToggleItem}
              onDeleteItem={onDeleteItem}
            />
          ))}
        </ul>
  
        <div className="actions">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">Sort By Input Order</option>\
            <option value="description">Sort By Description</option>
            <option value="bought">Sort By Bought Status</option>
          </select>
          <button onClick={onClearList}>Clear List</button>
        </div>
      </div>
    );
  }
  

export default PackingList