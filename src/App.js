import React from 'react';
import logo from './logo.svg';
import './App.css';
import CVHeader from './components/CVHeader';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CVHeader firstName="Mohammad" lastName="Heidari" title="CEO" photoURL="./photo.png" /> </header> </div>
  );
}

export default App;
