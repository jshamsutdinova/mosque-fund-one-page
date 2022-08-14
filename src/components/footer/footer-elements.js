import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div `
    background-color: #101522;
`

export const FooterWrap = styled.div `
    padding: 10px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 30px;
`

export const SocialMedia = styled.section `
    max-width: 1000px;
    width: 100%;
`

export const SocialMediaWrap = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 15px auto 0 auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`

export const SocialLogo = styled(Link) `
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;

    @media screen and (max-width: 768px) {
        font-size: 1rem;
    }
`

export const WebsiteRights = styled.small `
    color: #fff;
    margin-bottom: 16px;
`

