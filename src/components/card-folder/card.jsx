import React from "react";
import {Card} from "react-bootstrap";


function createCard (props) {
    return <Card className = "each-card" >
    <Card.Img variant="top" src={props.img} />
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>
        {props.content}
      </Card.Text>
      <a href={props.btnSrc} class="cardBtn">{props.btnTitle}</a>
    </Card.Body>
    </Card>
}

export default createCard;
