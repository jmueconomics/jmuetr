import React from "react";
import {Container, Row, Col} from "react-bootstrap";

import Card from "../card-folder/card"
import headCards from "../../js-files/head-page/head-top-card-content"



function headTop () {
    return <div className = "head-github-container">
    <div className = "head-github-title">
        <h3>Github Resources</h3>
    </div>
    <div >
        <Container>
            <div className = "head-github-cards">
                <Row>
                    {headCards.map(e => <Col className = "headGitCards" md={4}><Card img = {e.img} title = {e.title} content = {e.content} btnSrc = {e.btnSrc} btnTitle = {e.btnTitle} /></Col>)}
                </Row>
            </div>
        </Container>
    </div>
    <div className = "head-github-btn">
        <a href="https://github.com/" class="headTopBtn">GO TO GITHUB</a>
    </div>
    </div>
}

export default headTop;


