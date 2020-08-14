import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Character from './components/Character';
import { BASE_URL, API_KEY } from './constants';

const App = () => {
  const [characters, setCharacter] = useState([])
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  useEffect(() => {
    axios.get(`${BASE_URL}${API_KEY}`)
      .then(res => 
        setCharacter(res.data.results))
      .catch(err => 
          console.log(err, 'And I Oop!'))
  }, [])

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Star Wars Characters</h1>
      {
      characters.map((data) => {
        return <Character key={data.name} props={data}/>
      })
      }
    </div>
  );
}

export default App;
