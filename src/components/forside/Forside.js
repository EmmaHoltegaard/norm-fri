import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import head from 'svg/head.svg'
import { Intro } from './Intro'
import { Uddannelse } from './Uddannelse'
import { StyledButton, TextPurple } from '../GlobalStyles'

export const Forside = () => {
  return (
    <>
      <SectionWrapper>
        <ContentWrapper>
          <ContentWrapperTop>
            <Image src={head} alt="head" />
            <ContentTopText>
              <HeaderTitle>Normfri terapi <br /><StyledSpan>/v Rebekka Pi</StyledSpan></HeaderTitle>
              <WelcomeText>Velkommen - dejligt du er her.</WelcomeText>
            </ContentTopText>
          </ContentWrapperTop>
          <ContentWrapperBottom>
            <ContentBottomText>
              Vi oplever alle perioder, hvor vi har brug for ekstra støtte
              og sparring i hverdagen.
              Uanset om du står med en specifik problematik,
              du gerne vil arbejde med, eller blot savner
              at føle dig mindre alene med alt det, der fylder,
              kan terapi være en fordel for dig.
            </ContentBottomText>
            <ContentBottomText>
              Terapi er en fælles proces - et samarbejde mellem klient og terapeut,
              hvor der er plads til, at du udtrykker og udfolder dig på lige præcis din måde.
              Det er en rejse, vi tager på sammen, henimod en tilværelse
              du er glad for og trives i.
            </ContentBottomText>
            <ContentBottomText>
              Du har allerede taget det første skridt på vejen.
              Jeg ser frem til at høre fra dig.
            </ContentBottomText>
            <Link to="/kontakt"><Button type="button">Kontakt mig</Button></Link>
          </ContentWrapperBottom>
        </ContentWrapper>
      </SectionWrapper>
      <Intro />
      <Uddannelse />
    </>
  )
}

// Styled components

const SectionWrapper = styled.div`
 // border: dotted pink 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 70px auto;
  animation: fadeIn 0.5s;
  @keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
  }
`

const ContentWrapper = styled.div`
 //  border: dotted blue 2px;
  display: flex;
  flex-direction: column;
  //padding: 20px 0 20px 0; ??
  gap: 25px;
  align-items: center;
  justify-content: center;
  // margin-bottom: 30px; ??
`

const ContentWrapperTop = styled.div`
  // border: dotted purple 2px;
  display: flex;
  flex-direction: column;
  margin: auto;
  gap: 15px;
  // padding: 20px 0 20px 0;
  margin-bottom: 20px;
  @media (min-width: 620px) {
    flex-direction: row;
  }
`

const Image = styled.img`
  height: 180px;
  //transform: scaleX(-1)  Mirrors image
`

const ContentTopText = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

const HeaderTitle = styled.h1`
  font-family: 'M PLUS Rounded 1c','Courier Prime', 'Courier New', monospace;
  color: var(--purple);
  font-size: 2.375rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 1rem;
  line-height: 3rem;
  margin-top: 10px;
`

const WelcomeText = styled(TextPurple)`
  font-weight: 600;
  font-size: 1.2rem;
  text-align: justify;
  hyphens: auto;
  margin-bottom: 1rem;
`

const ContentWrapperBottom = styled.div`
 // border: 3px red dotted;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 510px;
  padding: 0px 5px;
  @media (max-width: 620px) {
    width: 80%; 
    min-width: 320px;
  }
`

const ContentBottomText = styled(TextPurple)`
  margin-bottom: 10px;
  text-align: justify;
  hyphens: auto;
  margin-bottom: 1rem;
`

const Button = styled(StyledButton)`
  background-color: var(--lightPurple);
  width: fit-content;
  padding: 0.6em 1.2em;
  border-radius: 25px;
  font-size: 1.125rem;
  margin: 20px auto 10px auto;
  &:Hover{
    background-color: var(--purple);
  }
`

const StyledSpan = styled.span`
  font-size: 2.1rem;
`