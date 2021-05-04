import React, { useState, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function ItemDetail({ match }) {
  useEffect(() => {
    fetchItem();
    // console.log(match);
  }, []);

  const [item, setItem] = useState({});

  const fetchItem = async () => {
    const fetchItem = await fetch(`https://reqres.in/api/users/${match.params.id}`);
    const item = await fetchItem.json();
    setItem(item.data);
    console.log(item);
  };

  return (
    <div>
      <h1 key={item.id}>{item.first_name} {item.last_name}</h1>
    </div>
  );
}

export default ItemDetail;
