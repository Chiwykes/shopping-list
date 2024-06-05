import { useState } from "react";

import Header from "./Header";
import Form from "./Form";
import PackingList from "./PackingList";
import Footer from "./Footer";

const shoppingList = [
  { id: 1, description: "car", quantity: 4, bought: false },
  { id: 2, description: "apples", quantity: 2, bought: true },
  { id: 3, description: "toy", quantity: 1, bought: false },
];
function App() {
  const [items, setItems] = useState([]);

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, bought: !item.bought } : item
      )
    );
  }
  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
    setItems([]);
  }
  // function handleAddItem(){
  //   setItems(items => )
  // }

  return (
    <div className="app">
      <Header />
      <Form onAddItem={handleAddItem} />
      <div className="container">
        <PackingList
          items={items}
          onToggleItem={handleToggleItem}
          onDeleteItem={handleDeleteItem}
          onClearList={handleClearList}
        />
      </div>
      <Footer items={items} />
    </div>
  );
}

export default App;
