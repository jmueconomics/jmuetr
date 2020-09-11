import React from "react";
import createButton from "../../created-functions/main-button";
import {Container, Row, Col} from "react-bootstrap";
import YouTube from "react-youtube";


const gitButtons = () => {
    const _onReady = (event) => {
        event.target.pauseVideo();
    }

    const opts = {
        height: '600',
        width: '700',
        playerVars: {
        autoplay: 2,
        },
    };
    return <div className = "git-buttons-div">
        <Container>
            <div>
                <Row>
                    <Col md={6}>
                        {createButton("head-resources-cards-btn", "https://github.com/join?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home", "headTopBtn", "CREATE AN ACCOUNT")}
                    </Col>
                    <Col md={6}>
                        {createButton("head-resources-cards-btn", "https://github.com/jmueconomicsalumni", "headTopBtn", "JMU REPOSITORY")}
                    </Col>
                </Row>
            </div>
        </Container>
        <div className = "git-youtube">
            <YouTube className = "snip" videoId = "EUvmCuPjHD4" opts={opts} onReady={_onReady}/>
        </div>
    </div>
}

export default gitButtons;
