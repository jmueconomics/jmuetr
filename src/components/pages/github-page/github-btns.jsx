import React from "react";
import createButton from "../../created-functions/main-button";
import {Container, Row, Col} from "react-bootstrap";
import YouTube from "react-youtube";


const gitButtons = () => {
    const _onReady = (event) => {
        event.target.pauseVideo();
    }

    const med = window.innerWidth < 800;
    const sm = window.innerWidth < 499;

    let h = "600";
    let w = "700";

    if (sm) {
        h = "250"
        w = "300"
    } else if (med) {
        h = "300"
        w = "400"
    } 

    const opts = {
        height: h,
        width: w,
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
