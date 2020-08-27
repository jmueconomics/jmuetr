import styled from "styled-components";



const EachLinkDiv = styled.div`
    padding: 10px;
`;

const EachLinkA = styled.a`
    color: #27004b;
    text-decoration: underline !important;

    &:hover {
        color: #ffe18e;
    }
`;

const LinkDiv = styled.div`
    padding: 5%;
    text-align: left;
    box-shadow: 0 5px 10px rgba(0,0,0,0.6);
    border-radius: 10px;
    height: 400px;
    overflow: auto;
    width: 60%;
    margin: 0 auto;
    
    &::-webkit-scrollbar {
        width: 13px;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5); 
        height: 30px;
    }
`;

const AlRead = styled.div`
    text-align:center;
    margin: 2px auto;
    font-size: 0.6rem;
`;

export {LinkDiv, EachLinkA, EachLinkDiv, AlRead};