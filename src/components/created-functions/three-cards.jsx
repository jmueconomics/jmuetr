import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import Card from "./card";

const threeCards = (titleDiv, threeDiv, title, arr, containerSpace) => {
    return <div>
       <div className = {titleDiv}>
           <h3>{title}</h3>
       </div>
       <Container>
           <div className = {threeDiv}>
               <Row>
                   {arr.map(e => <Col className = "headGitCards" md={containerSpace}><Card img = {e.img} title = {e.title} content = {e.content} btnSrc = {e.btnSrc} btnTitle = {e.btnTitle} /></Col>)}
               </Row>
           </div>
       </Container>
   </div>
}

export default threeCards;
