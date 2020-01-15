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
      <h1 className="landing-header">Welcome to my web portfolio, take a look around.</h1>
    </Fade>
  );
}

export default Home;
