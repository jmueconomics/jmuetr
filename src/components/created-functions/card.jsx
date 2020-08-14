import React from "react";
import {Card} from "react-bootstrap";


const createCard = (props) => {
    return <a href={props.btnSrc}>
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
}

export default createCard;
