import React from 'react';
import "./styles.css";
import { Fade } from 'reactstrap';
import code from './icons/coding.svg';

function Home() {
  return (
    <Fade className="Home">
      <object className="icon" type="image/svg+xml" data={code}>
        Your browser does not support SVG
      </object>
      <div className="intro">
        <h1>Welcome to my web portfolio.</h1>
        <h1>Take a look around.</h1>
      </div>
    </Fade>
  );
}

export default Home;
