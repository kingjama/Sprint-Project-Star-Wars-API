import React, { useEffect, useState } from "react";
import axios from "axios";
import StarWardsCard from "./StarWardsCard";
import NavBar from "./NavBar";
import StarWars from "./StarWars"
import { Switch, Route } from "react-router-dom";
import "../src/components/StarWars.css"
const App = () => {
  const [star, setStar] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/starships/")
      .then((response) => {
        setStar(response.data.results);
      })
      .catch((error) => console.log(error));
  }, []);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/StarWars">
          <StarWars star={star} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
