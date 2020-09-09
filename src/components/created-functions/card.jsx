/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import {Card} from "react-bootstrap";


//Using React bootstrap
const createCard = (props) => 
    <a className = "cardA" href={props.btnSrc} target = "_blank">
      <Card className = "each-card" >
        <div>
          <Card.Img variant="top" src={props.img} className = {props.imgClass} />
        </div>
        <Card.Body>
          <Card.Title className = "card-title">{props.title}</Card.Title>
          <Card.Text>
            {props.content}
          </Card.Text>
        </Card.Body>
      </Card>
  </a>


export default createCard;
