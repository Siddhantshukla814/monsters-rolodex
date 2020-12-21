import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import CardList from "./Components/CardList/CardList";
import SearchBox from "./Components/SearchBox/SearchBox";

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    const data = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setMonsters(data);
    };
    data();
  }, [searchField]);

  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
  );

  return (
    <div className="App">
      <h1>Monster Rolodex</h1>
      <SearchBox
        placeholder="Search Monsters..."
        handleChange={(e) => setSearchField(e.target.value)}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
