import React, { useState } from "react";
import "./header.css";
import pizzaImage from "../assets/images/pizza.png";
import dishes from "./dishes";

export default function Header() {
  const [state, setState] = new useState({ query: "", list: [] });
  const handleSearch = (event) => {
    const results = dishes.filter((dish) => {
      if (event.target.value === "") return dishes;
      return dish.title
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });
    setState({
      query: event.target.value,
      list: results,
    });
  };
  return (
    <div>
      <div className="header">
        <img src={pizzaImage} alt="Delicious pizza" />
        <h1 className="h1">Food Delights</h1>
        <p className="p">Explore mouthwatering dishes from around the world</p>
        <input
          type="search"
          placeholder="Search dishes"
          onChange={handleSearch}
          value={state.query}
        />
      </div>
      <ul id="dishes">
        {state.list.map((dish) => {
          return (
            <li className="dish">
              <img src={dish.image} alt="dish title" />
              <h2>{dish.title}</h2>
              <p>{dish.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
