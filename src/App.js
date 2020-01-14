import React from 'react';
import Routes from "./Routes";
import Header from "./Components/Header";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
      <div className="Footer">
      © Copyright 2020 Ezra Farrar
      </div>
    </div>
  );
}

export default App;
