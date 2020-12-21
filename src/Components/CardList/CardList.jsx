import React from "react";
import "./CardList.css";
import Card from "../Card/Card";

function CardList({ monsters }) {
  return (
    <div className="CardList">
      {monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
}

export default CardList;
