import { useState } from "react";
import { useSelector } from "react-redux";

function Cart() {
  const cart = useSelector((state) => state.cart.items);
  const [selectedCategory, setCategory] = useState("All");
  const categories = [
    "All",
    ...new Set(Object.values(cart).map((item) => item.category))
  ];

  const filteredCart = selectedCategory === "All"
      ? Object.values(cart)
      : Object.keys(cart).filter(
        (item) => item.category === selectedCategory
        );

  return (
    <div>
      <h2>Cart Items</h2>
      <label htmlFor="category-select">Filter by Category: </label>
      <select
        id="category-select"
        value={selectedCategory}
        onChange={(e) => setCategory(e.target.value)}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <ul>
        {filteredCart.map((item) => (
          <li key={item.id}>
            {item.name} - Category: {item.category}
          </li>
        ))}
      </ul>
    </div>

  );
}

export default Cart;