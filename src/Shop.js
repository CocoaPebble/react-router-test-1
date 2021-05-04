import React, { useState, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("https://reqres.in/api/users?page=2");
    const items = await data.json();

    console.log(items);
    setItems(items.data);
  };

  return (
    <div>
      {items.map((item) => (
        <h3 key={item.id}>
          <Link to={`shop/${item.id}`}>
            {item.first_name} {item.last_name}
          </Link>
        </h3>
      ))}
    </div>
  );
}

export default Shop;
