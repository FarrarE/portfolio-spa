import React from 'react';
import { Fade } from 'reactstrap';
import Footer from '../../Components/Footer';
import "./styles.css";
import cooking from "./icons/cutting-board.svg";
import code from "./icons/code.svg";
import book from "./icons/open-book.svg";
import art from "./icons/tools.svg";
import games from "./icons/board-games.svg";

function About() {
  return (
    <Fade className="about-page" >
      <div className="About">
        <h2 className="display-3">Ezra Farrar</h2>
        <p className="lead">Web Developer</p>
        <hr className="my-2" />
        <p className="about-text">
          I'm a Portland State University graduate with a Bachelor's in Computer Science. I've always had a deep interest
          in both art and technical problem solving. I found my perfect outlet in web development.
      </p>
        <p className="about-text">
          I enjoy the unique challenges presented in backend database management and frontend object stylization. My framework of choice
          is React, which I use with nodejs or serverless backends to create web based applications.
      </p>
        <div className="hobbies">
          <p>What I like to do in my spare time.</p>

          <div className="icons">
            <object className="hobby" type="image/svg+xml" data={cooking}>
              Your browser does not support SVG
          </object>
            <div>
              <object className="hobby" type="image/svg+xml" data={code} />
            </div>
            <div>
              <object className="hobby" type="image/svg+xml" data={book} />
            </div>
            <div>
              <object className="hobby" type="image/svg+xml" data={art} />
            </div>
            <div>
              <object className="hobby" type="image/svg+xml" data={games} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fade >
  );
}

export default About;
