import React from 'react';
import {
  UncontrolledPopover, PopoverHeader, PopoverBody,
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardHeader, CardFooter
} from 'reactstrap';
import "./styles.css";

function Projects() {
  return (
    <div className="Projects">
   
      <Card className="card">
        <CardBody>
          <CardTitle>DMScreen</CardTitle>
          <CardText>DMScreen is a web app tool for Dungeons Masters to track important information about the game they are playing. This version has been designed specifically for Dungeon and Dragons 5th Edition and is open source to allow others to adapt it for other editions.</CardText>
          <Button>Repo</Button>
          <Button>Deployment</Button>
        </CardBody>
        <CardFooter className="card-footer">
          <i class="devicon-react-original colored"></i>
          <i class="devicon-bootstrap-plain colored"></i>
          <i class="devicon-nodejs-plain colored"></i>
        </CardFooter>
      </Card>
      <Card className="card">
        <CardBody>
          <CardTitle>MTGSpellbook</CardTitle>
          <CardText>MTGSpellbook is a web app that allows users to store information about their Magic the Gathering collection. Using AWS API gateways, it can store user information in DynamoDB and uses Cognito identity pools to authenticate user login and API requests.
          </CardText>
          <Button>Repo</Button>
          <Button>Deployment</Button>
        </CardBody>
        <CardFooter className="card-footer">
          <i class="devicon-react-original colored"></i>
          <i class="devicon-bootstrap-plain colored"></i>
          <i class="devicon-amazonwebservices-original colored"></i>
          <i class="devicon-webpack-plain colored"></i>
        </CardFooter>
      </Card>
      <Card className="card"> 
        <CardBody>
          <CardTitle>5E Character Sheet</CardTitle>
          <CardText>A digital charactersheet for Dungeons and Dragons 5th Edition that stores the information in your local browser for later use.</CardText>
          <Button>Repo</Button>
          <Button>Deployment</Button>
        </CardBody>
        <CardFooter className="card-footer">
          <i class="devicon-bootstrap-plain colored"></i>
          <i class="devicon-jquery-plain colored"></i>
        </CardFooter>
      </Card>

    </div>
  );
}

export default Projects;
