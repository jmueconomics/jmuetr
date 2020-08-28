import styled from "styled-components";

const HeadBottomPara = styled.div`
    text-align: center;
    padding: 0% 10% 6% 10%;
    font-size: 1.25rem;
`;

const HeadBp = styled.div`
    padding-top: 8%;
`;

const HeadBpSnip = styled.div`
    padding-top: 7%;
    padding-bottom: 7%;
`;

const SnipBtn = styled.button`
    background: linear-gradient(to bottom, #ffe18e 50%, #f0c465 100%);
    background-color: #ffe18e;
    border-radius: 10px;
    display: inline-block;
    cursor: pointer;
    color: #27004b;
    font-size: 17px;
    padding: 14px 31px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #ffe18e;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.514);
    transition: transform .35s;
    font-weight: 600;
    border: none;

    &:hover {
        background: linear-gradient(to bottom, #f0c465 5%, #ffe18e 100%);
        background-color: #f0c465;
        text-decoration: none;
        color: #27004b;
        transform: scale(1.05);
    }
    &:focus {
        outline: none;
    }
    `;

export {HeadBottomPara, HeadBp, HeadBpSnip, SnipBtn};