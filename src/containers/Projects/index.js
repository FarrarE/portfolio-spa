import React from 'react';
import {
  CardLink, Fade,
  UncontrolledPopover, PopoverHeader, PopoverBody,
  Card, CardText, CardBody,
  CardTitle, Button, CardFooter
} from 'reactstrap';
import "./styles.css";

function Projects() {
  return (
    <Fade in="true" >
      <div className="Projects">
        <Card className="card">
          <CardBody className="card-body">
            <CardTitle><h3>Battlemap Web App</h3></CardTitle>
            <CardText>
              Users can upload their own battlemaps for any tabletop game, add tokens, and move those tokens around a grid of
              variable size.
          </CardText>
          </CardBody>
          <CardFooter className="card-footer">
            <div className="dev-icons">
              <i id="reactPopover" class="devicon-react-original colored"></i>
              <i id="amazonPopover" class="devicon-amazonwebservices-original colored"></i>
            </div>
            <div>
              <CardLink href="https://github.com/FarrarE/GameBoard" target="_blank">
                <Button>Repo</Button>
              </CardLink>
              <CardLink href="https://farrare.github.io/GameBoard/" target="_blank">
                <Button>Deployment</Button>
              </CardLink>
            </div>
          </CardFooter>
        </Card>
        <Card className="card">
          <CardBody className="card-body">
            <CardTitle><h3>Turn Order Tracker</h3></CardTitle>
            <CardText>This app allows to track turn order for tabletop games, including a feature to sort by iniative.</CardText>
          </CardBody>
          <CardFooter className="card-footer">
            <div className="dev-icons">
              <i id="reactPopover" class="devicon-react-original colored"></i>
              <i id="bootstrapPopover" class="devicon-bootstrap-plain colored"></i>
              <i id="nodePopover" class="devicon-nodejs-plain colored"></i>
            </div>
            <div>
              <CardLink href="https://github.com/FarrarE/DMScreen?" target="_blank">
                <Button>Repo</Button>
              </CardLink>
              <CardLink href="https://master.d1w4ohx8frzj9u.amplifyapp.com/?" target="_blank">
                <Button>Deployment</Button>
              </CardLink>
            </div>
          </CardFooter>
        </Card>
        <Card className="card">
          <CardBody className="card-body">
            <CardTitle><h3>5E Character Sheet</h3></CardTitle>
            <CardText>A digital charactersheet for Dungeons and Dragons 5th Edition that stores the information in your local browser for later use.</CardText>

          </CardBody>
          <CardFooter className="card-footer">
            <div className="dev-icons">
              <i id="bootstrapPopover" class="devicon-bootstrap-plain colored"></i>
              <i id="jqueryPopover" class="devicon-jquery-plain colored"></i>
            </div>
            <div>
              <CardLink href="https://github.com/FarrarE/5eCharacterSheet?" target="_blank">
                <Button>Repo</Button>
              </CardLink>
              <CardLink href="https://farrare.github.io/5eCharacterSheet/?" target="_blank">
                <Button>Deployment</Button>
              </CardLink>
            </div>
          </CardFooter>
        </Card>

        <UncontrolledPopover trigger="click" placement="bottom" target="reactPopover">
          <PopoverHeader>React</PopoverHeader>
          <PopoverBody>A Javascript framework for building component based user interfaces.</PopoverBody>
        </UncontrolledPopover>
        <UncontrolledPopover trigger="click" placement="bottom" target="bootstrapPopover">
          <PopoverHeader>Boostrap</PopoverHeader>
          <PopoverBody>A html, css, and javascript toolkit for building responsive layouts.</PopoverBody>
        </UncontrolledPopover>
        <UncontrolledPopover trigger="click" placement="bottom" target="nodePopover">
          <PopoverHeader>Node</PopoverHeader>
          <PopoverBody>A opensource javascript runtime environment for executing javascript outside of the browser to serve REST API endpoints. </PopoverBody>
        </UncontrolledPopover>
        <UncontrolledPopover trigger="click" placement="bottom" target="amazonPopover">
          <PopoverHeader>Amazon WebServices</PopoverHeader>
          <PopoverBody>Amazon provides a variety of cloud based services. This project used S3, Cognito, Lambda, and DynamoDB to handle serverless api calls, user identification, and store user information.</PopoverBody>
        </UncontrolledPopover>
        <UncontrolledPopover trigger="click" placement="bottom" target="jqueryPopover">
          <PopoverHeader>JQuery</PopoverHeader>
          <PopoverBody>A Javascript library that simplifies many tasks and provides a unique selector syntax.</PopoverBody>
        </UncontrolledPopover>
        {/*

      <UncontrolledPopover trigger="click" placement="bottom" target="webpackPopover">
        <PopoverHeader>Webpack</PopoverHeader>
        <PopoverBody>A opensource module bundler that generates static assets from HTML and CSS for deployment.</PopoverBody>
      </UncontrolledPopover>
      */}

      </div>

    </Fade>
  );
}

export default Projects;
