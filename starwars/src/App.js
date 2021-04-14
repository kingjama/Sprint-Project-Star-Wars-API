import React, { useEffect, useState } from 'react';
import axios from "axios"

import './App.css';
import Data from "./data"

const App = () => {

  const [star, setStar]=useState([])

  useEffect(()=>{
    axios.get("https://swapi.dev/api/starships/9/").then((response)=>{
      setStars(response.data)
    }).catch((error)=> console.log(error))

  }, [])
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.



  return (
    <div className="App">
      <h1 className="Header">Star Wars</h1>

      <Switch>
        <Route path="/StarWars">
          <StarWars star={star}/>
        </Route>

        <Route
      </Switch>
    </div>
  );
}

export default App;
