import React from "react";
import createButton from "../../created-functions/main-button";
import {Container, Row, Col} from "react-bootstrap";

const gitButtons = () => 
    <div className = "git-buttons-div">
        <Container>
            <div>
                <Row>
                    <Col md={6}>
                        {createButton("head-resources-cards-btn", "https://github.com/join?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home", "headTopBtn", "CREATE AN ACCOUNT")}
                    </Col>
                    <Col md={6}>
                        {createButton("head-resources-cards-btn", "/github", "headTopBtn", "JMU REPOSITORY")}
                    </Col>
                </Row>
            </div>
        </Container>
    </div>


export default gitButtons;
