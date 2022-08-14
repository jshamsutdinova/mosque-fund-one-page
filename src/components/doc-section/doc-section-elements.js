import styled from "styled-components";

const greenColor = '#01bf71';


export const DocContainer = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 0.5fr 0.5fr 0.5fr; 
    gap: 0px 0px;
    grid-template-areas:
        "message message docs"
        "card-details card-details info"
        "card-details card-details info";

    margin: 20px 35px;

    @media screen and (max-width: 768px) {
        padding: 10px 0;
        grid-template-areas:
        "message message message"
        "card-details card-details card-details"
        "docs docs docs"
        "info info info";
        margin: 10px 15px;
    }

    @media screen and (min-width: 1900px) {
        margin: 20px 235px;
    }

`

export const Message = styled.div `
    grid-area: message;
    
    @media screen and (min-width: 768px) {
        padding-right: 50px;
    }
`

export const Info = styled.div `
    grid-area: info;
    margin-left: 20px;
`

export const CardDetails = styled.div `
    grid-area: card-details;
    @media screen and (min-width: 768px) {
        padding-right: 20px;
    }    
`

export const Docs = styled.div `
    grid-area: docs;
    margin-left: 20px;
    
    @media screen and (max-width:768px) {
        margin: 15px;
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
    font-size: 1.5rem;
    line-height: 1.1;
    font-weight: 600;
    color: ${greenColor};
    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const Subtitle = styled.span`
    font-size: 1.5rem;
    color: #010606;
    text-transform: uppercase;
`

export const Text = styled.p`
    margin-bottom: 15px;
    font-size: 18px;
    line-height: 30px;
    color: '#010606';
    text-align: justify;

    @media screen and (min-width: 1900px) {
        font-size: 24px;
    }
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
    font-size: 2.3rem;
    text-decoration: none;
    transition: 0.2s ease-in-out;
    cursor: pointer;

    color: ${greenColor};
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

export const TextHighlight = styled.p `
    font-size: 1.7rem;
    line-height: 1.1;
    font-weight: 600;
    background-color: #b1f8c1;
    padding: 15px;
`

export const InfoHeading = styled.p `
    margin-top: 10px;
    font-size: 1.5rem;
    line-height: 1.1;
    font-weight: 600;
    color: ${greenColor};
    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const InfoText = styled.p `
    font-size: 1.2rem;
    color: #010606;
`

export const Phone = styled.span `
    font-weight: 600;
`