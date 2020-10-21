import React from 'react';
import Routes from "./Routes";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="background"></div>
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}


export default App;
