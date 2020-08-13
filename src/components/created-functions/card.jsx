import React from "react";
import {Card} from "react-bootstrap";


const createCard = (props) => {
    return <Card className = "each-card" >
    <div>
    <Card.Img variant="top" src={props.img} className = {props.imgClass} />
    </div>
    <Card.Body>
      <Card.Title className = "card-title">{props.title}</Card.Title>
      <Card.Text>
        {props.content}
      </Card.Text>
      <a href={props.btnSrc} class="cardBtn">{props.btnTitle}</a>
    </Card.Body>
    </Card>
}

export default createCard;
