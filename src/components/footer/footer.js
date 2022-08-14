import React from 'react'
import { animateScroll } from 'react-scroll'
import { FooterContainer, FooterWrap, SocialMedia,
  SocialMediaWrap, SocialLogo} from './footer-elements'

const Footer = () => {
  const toggleHome = () => {
    animateScroll.scrollToTop();
  }

  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
            © {new Date().getFullYear()} Мечеть города Свирска 
            </SocialLogo>
            {/* <WebsiteRights> 8-914-922-46-97 </WebsiteRights> */}
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer 