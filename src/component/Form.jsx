import React, { useState } from 'react'

function Form({ onAddItem }) {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1); 
    function handleSubmit(e) {
      e.preventDefault();
      if (!description) return;
  
      const newItem = { description, quantity, bought: false, id: Date.now() };
      console.log(newItem);
      onAddItem(newItem);
      setDescription("");
      setQuantity(1);
    }
    return (
      <form className="form" onSubmit={handleSubmit}>
        <h3>What would you like to buy?</h3>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
  
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <button>Add</button>
      </form>
    );
  }

export default Form