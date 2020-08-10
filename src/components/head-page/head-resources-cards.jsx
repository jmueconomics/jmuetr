import React from "react";
import {Container, Row, Col} from "react-bootstrap";

import Card from "../card-folder/card";
import HeadMore from "../../js-files/head-page/head-more-resources-cards";


function headMoreCards () {
    return <div className = "head-resources-cards">
    <div className = "head-resources-cards-title">
        <h3>Github Resources</h3>
    </div>
    <Container>
    <Row>
        {HeadMore.map(e => <Col className = "headResCards" md={3}><Card img = {e.img} title = {e.title} content = {e.content} btnSrc = {e.btnSrc} btnTitle = {e.btnTitle} /></Col>)}
    </Row>
    </Container>
    <div className = "head-resources-cards-btn">
        <a href="https://github.com/" class="headTopBtn">Overview</a>
    </div>
    </div>
}

export default headMoreCards;