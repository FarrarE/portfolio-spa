import React from 'react';
import { CardLink, Fade,
  UncontrolledPopover, PopoverHeader, PopoverBody,
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardHeader, CardFooter
} from 'reactstrap';
import "./styles.css";

function Projects() {
  return (
    <Fade in="true" className="Projects">
      <Card className="card">
        <CardBody>
          <CardTitle><h3>Battle Map Web App</h3></CardTitle>
          <CardText>This app lets the user upload different images and converts those images into grid boards of variable size. Tokens can be added
            to the gameboard, scale to the grid, and can be moved around as a representation for tabletop games.
          </CardText>
          <CardLink href="https://github.com/FarrarE/GameBoard" target="_blank">
            <Button>Repo</Button>
          </CardLink>
          <CardLink href="https://farrare.github.io/GameBoard/" target="_blank">
            <Button>Deployment</Button>
          </CardLink>
        </CardBody>
        <CardFooter className="card-footer">
          <i id="reactPopover" class="devicon-react-original colored"></i>
          <i id="amazonPopover" class="devicon-amazonwebservices-original colored"></i>
        </CardFooter>
      </Card>
      <Card className="card">
        <CardBody>
          <CardTitle><h3>Turn Order Tracker</h3></CardTitle>
          <CardText>This app allows to track turn order for tabletop games, including a feature to sort by iniative.</CardText>
          <CardLink href="https://github.com/FarrarE/DMScreen?" target="_blank">
            <Button>Repo</Button>
          </CardLink>
          <CardLink href="https://master.d1w4ohx8frzj9u.amplifyapp.com/?" target="_blank">
            <Button>Deployment</Button>
          </CardLink>
        </CardBody>
        <CardFooter className="card-footer">
          <i id="reactPopover" class="devicon-react-original colored"></i>
          <i id="bootstrapPopover" class="devicon-bootstrap-plain colored"></i>
          <i id="nodePopover" class="devicon-nodejs-plain colored"></i>
        </CardFooter>
      </Card>
      <Card className="card">
        <CardBody>
          <CardTitle><h3>MTGSpellbook</h3></CardTitle>
          <CardText>MTGSpellbook is a web app that allows users to store information about their Magic the Gathering collection. Using AWS API gateways, it can store user information in DynamoDB and uses Cognito identity pools to authenticate user login and API requests.
          </CardText>
          <CardLink href="https://github.com/FarrarE/mtgspellbook?" target="_blank">
            <Button>Repo</Button>
          </CardLink>
          <CardLink href="https://prod.dv0y2bh0z5aj9.amplifyapp.com/?" target="_blank">
            <Button>Deployment</Button>
          </CardLink>
        </CardBody>
        <CardFooter className="card-footer">
          <i id="reactPopover" class="devicon-react-original colored"></i>
          <i id="bootstrapPopover" class="devicon-bootstrap-plain colored"></i>
          <i id="amazonPopover" class="devicon-amazonwebservices-original colored"></i>
          <i id="webpackPopover" class="devicon-webpack-plain colored"></i>
        </CardFooter>
      </Card>
      <Card className="card"> 
        <CardBody>
          <CardTitle><h3>5E Character Sheet</h3></CardTitle>
          <CardText>A digital charactersheet for Dungeons and Dragons 5th Edition that stores the information in your local browser for later use.</CardText>
          <CardLink href="https://github.com/FarrarE/5eCharacterSheet?" target="_blank">
            <Button>Repo</Button>
          </CardLink>
          <CardLink href="https://farrare.github.io/5eCharacterSheet/?" target="_blank">
            <Button>Deployment</Button>
          </CardLink>
        </CardBody>
        <CardFooter className="card-footer">
          <i id="bootstrapPopover" class="devicon-bootstrap-plain colored"></i>
          <i id="jqueryPopover" class="devicon-jquery-plain colored"></i>
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
      <UncontrolledPopover trigger="click" placement="bottom" target="webpackPopover">
        <PopoverHeader>Webpack</PopoverHeader>
        <PopoverBody>A opensource module bundler that generates static assets from HTML and CSS for deployment.</PopoverBody>
      </UncontrolledPopover>
    </Fade>
  );
}

export default Projects;
