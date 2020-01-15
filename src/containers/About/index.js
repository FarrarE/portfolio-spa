import React from 'react';
import { Fade } from 'reactstrap';
import "./styles.css";
import cooking from "./icons/cutting-board.svg";
import code from "./icons/code.svg";
import book from "./icons/open-book.svg";
import art from "./icons/tools.svg";
import games from "./icons/board-games.svg";

function About() {
  return (
    <Fade className="About">
        <h2 className="display-3">Ezra Farrar</h2>
        <p className="lead">Web Developer</p>
        <hr className="my-2" />
        <p className="text-body">I'm a Portland State University graduate with a Bachelor's in Computer Science.</p>
        <div className="hobbies">
          What I like to do in my spare time.
          <div className="icons">
          <object className="hobby" type="image/svg+xml" data={cooking}>
            Your browser does not support SVG
          </object>
          <object className="hobby" type="image/svg+xml" data={code} />
          <object className="hobby" type="image/svg+xml" data={book} />
          <object className="hobby" type="image/svg+xml" data={art} />
          <object className="hobby" type="image/svg+xml" data={games} />
          </div>
        </div>
    </Fade>
  );
}

export default About;
