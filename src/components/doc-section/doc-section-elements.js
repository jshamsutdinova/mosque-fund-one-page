import styled from "styled-components";

export const DocContainer = styled.div `
    background: #f9f9f9;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 0.5fr 0.5fr 0.3fr; 
    gap: 0px 0px;
    grid-template-areas:
        "info info card-details"
        "docs docs card-details"
        "docs docs card-details";

    margin: 20px 35px;

    @media screen and (max-width: 768px) {
        padding: 10px 0;
        grid-template-areas:
        "info info info"
        "docs docs docs"
        "card-details card-details card-details";
        margin: 10px 15px;

    }   
`


export const Info = styled.div `
    grid-area: info;

    @media screen and (max-width:768px) {
        padding-top: 80px;
    }
`

export const CardDetails = styled.div `
    grid-area: card-details;

    @media screen and (max-width:768px) {
        padding-top: 80px;
    }
`

export const Docs = styled.div `
    grid-area: docs;

    @media screen and (max-width:768px) {
        padding-top: 80px;
    }
`

export const TopLine = styled.h1`
    color: #010606;
    font-size: 2rem;
    /* line-height: 16px; */
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 15px;

    @media screen and (max-width:768px) {
        margin-top: 15px;
    }
`

export const Heading = styled.p `
    margin-bottom: 10px;
    font-size: 1.2rem;
    line-height: 1.1;
    font-weight: 600;
    color: #01bf71;
    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const Subtitle = styled.span`
    font-size: 1.2rem;
    color: #010606;
    text-transform: uppercase;
`

export const Text = styled.p`
    margin-bottom: 15px;
    font-size: 18px;
    line-height: 30px;
    color: '#010606';
`

export const ImgContainer = styled.div`
    display: block;
    text-align: center;
`

export const QR =styled.img `
    width: 50%;
    height: 20%;

    @media screen and (max-width:768px) {
        width: 70%;
        height: 30%;
        margin-left: auto;
        margin-right: auto;
    }
`

export const DocLink = styled.div `
    font-size: 2.5rem;
    text-decoration: none;
    transition: 0.2s ease-in-out;
    cursor: pointer;

    color: #01bf71;
    /* line-height: 20px; */
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 15px;

    :hover {
        color: #f2c14e;
        transition: 0.2s ease-in-out;
    }

    @media screen and (max-width:768px) {
        font-size: 1.8rem;
    }
`
