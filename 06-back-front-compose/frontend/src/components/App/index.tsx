import React, { useEffect, useState } from 'react';
import './App.css';
import { Character } from '../../types';
import Spinner from '../Spinner';
import Error from '../Error';
import CharacterCard from '../CharacterCard';

export default function App() {
  const [data, setData] = useState<Character>();
  const [err, setErr] = useState<string>();

  useEffect(() => {
    fetch('http://localhost:4000/character/random')
      .then(res => {
        if (res.ok) {
          return res.json().then(setData);
        }
        setErr(`${res.status} ${res.statusText}`);
      })
      .catch(err => setErr(err.message));
  }, []);

  if (err) {
    return <div className="App"><Error err={err}/></div>;
  }

  if (data) {
    return <div className="App"><CharacterCard character={data}/></div>;
  }

  return <div className="App"><Spinner/></div>;
}
