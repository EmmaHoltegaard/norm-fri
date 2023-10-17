// Footer with link to linkedin, contact Info, and credit to webdeveloper
import React from 'react'
import styled from 'styled-components/macro'
import LinkedInIcon from 'svg/linkedintwo.svg'
import { TextPurple, BoldSpan } from './GlobalStyles'

export const Footer = () => {
  return (
    <FooterWrapper>
      <InnerWrapper>
        <LeftInnerWrapper>
          <FooterText><BoldSpan>Normfri terapi v. Rebekka Pi</BoldSpan></FooterText>
          <FooterText>normfri.terapi@gmail.com</FooterText>
        </LeftInnerWrapper>
        <MiddleInnerWrapper>
          <Link href="https://www.linkedin.com/in/rebekkapi/" target="_blank" rel="noopener noreferrer">
            <Icon src={LinkedInIcon} alt="LinkedIn" />
          </Link>
        </MiddleInnerWrapper>
        <RightInnerWrapper>
          <FooterText>Hjemmeside af <Link href="https://www.linkedin.com/in/emmaholtegaard/" target="_blank" rel="noopener noreferrer">Emma Holtegaard</Link></FooterText>
        </RightInnerWrapper>
      </InnerWrapper>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  /* height: 150px; */
  /* background-color: var(--purple); */
  width: 100vw;
  height: 8rem;
  /* padding-top: 10px;
  padding-bottom: 15px; */
  display: flex;
  justify-content: center;
  padding-left: 50px;
  padding-right: 50px;
  align-items: center;
  @media (max-width: 615px) {
    height: auto;
    padding-top: 20px;
    padding-bottom: 25px;
  }
`

const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1050px;
  min-width: 300px;
  @media (max-width: 615px) {
    flex-direction: column;
    text-align: center;
    gap: 15px
  }
`

const LeftInnerWrapper = styled.div`
width: 200px;
`

const MiddleInnerWrapper = styled.div`
`

const Icon = styled.img`
  height: 40px;
  width: 40px;
  transition: 0.3s;
  &:hover {
    height: 50px;
    width: 50px;
    transition: 0.3s;
  }
  @media (max-width: 615px) {
    height: 35px;
    width: 35px;
    &:hover {
    height: 35px;
    width: 35px;
  }
  }
`

const RightInnerWrapper = styled.div`
 width: 200px;
 text-align: right;
`

const FooterText = styled(TextPurple)`
  font-size: 0.8rem;
`

const Link = styled.a`
  color: var(--purple);
`