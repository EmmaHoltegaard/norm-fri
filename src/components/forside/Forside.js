import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import head from 'svg/head.svg'
import { Intro } from './Intro'
import { Uddannelse } from './Uddannelse'
import { Header1, StyledButton, TextPurple } from '../GlobalStyles'

/* export const Forside = () => {
  return (
    <>
      <SectionWrapper>
        <ContentWrapper>
          <Image src={head} alt="head" />
          <TextWrapper>
            <InnerTextWrapper>
              <Header1>Normfri terapi <br /><StyledSpan>/v Rebekka Pi</StyledSpan></Header1>
              <WelcomeTextPart1>Velkommen - dejligt du er her.</WelcomeTextPart1>
            </InnerTextWrapper>
            <InnerTextWrapper>
              <WelcomeTextPart2>
                Vi oplever alle perioder, hvor vi har brug for ekstra støtte
                og sparring i hverdagen.
                Uanset om du står med en specifik problematik,
                du gerne vil arbejde med, eller blot savner
                at føle dig mindre alene med alt det, der fylder,
                kan terapi være en fordel for dig.
              </WelcomeTextPart2>
              <WelcomeTextPart2>
                Terapi er en fælles proces – et samarbejde mellem klient og terapeut,
                hvor der er plads til, at du udtrykker og udfolder dig på lige præcis din måde.
                Det er en rejse, vi tager på sammen, henimod en tilværelse
                du er glad for og trives i.
              </WelcomeTextPart2>
              <WelcomeTextPart2>
                Du har allerede taget det første skridt på vejen.
                Jeg ser frem til at høre fra dig.
              </WelcomeTextPart2>
            </InnerTextWrapper>
            <Link to="/kontakt"><Button type="button">Kontakt mig</Button></Link>
          </TextWrapper>
        </ContentWrapper>
      </SectionWrapper>
      <Intro />
      <Uddannelse />
    </>
  )
} */

export const Forside = () => {
  return (
    <>
      <SectionWrapper>
        <ContentWrapper>
          <Image src={head} alt="head" />
          <TextWrapper>
            <InnerTextWrapper>
              <Header1>Normfri terapi <br /><StyledSpan>/v Rebekka Pi</StyledSpan></Header1>
              <WelcomeText>Velkommen - dejligt du er her.</WelcomeText>
            </InnerTextWrapper>
            <Link to="/kontakt"><Button type="button">Kontakt mig</Button></Link>
          </TextWrapper>
        </ContentWrapper>
      </SectionWrapper>
      <Intro />
      <Uddannelse />
    </>
  )
}

/*
<WelcomeTextPart2>
Vi oplever alle perioder, hvor vi har brug for ekstra støtte
og sparring i hverdagen.
Uanset om du står med en specifik problematik,
du gerne vil arbejde med, eller blot savner
at føle dig mindre alene med alt det, der fylder,
kan terapi være en fordel for dig.
</WelcomeTextPart2>
<WelcomeTextPart2>
Terapi er en fælles proces – et samarbejde mellem klient og terapeut,
hvor der er plads til, at du udtrykker og udfolder dig på lige præcis din måde.
Det er en rejse, vi tager på sammen, henimod en tilværelse
du er glad for og trives i.
</WelcomeTextPart2>
<WelcomeTextPart2>
Du har allerede taget det første skridt på vejen.
Jeg ser frem til at høre fra dig.
</WelcomeTextPart2> */

// Styled components

const SectionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 80px auto;
  animation: fadeIn 0.5s;
  @keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
  }
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0 20px 0;
  gap: 30px;
  align-items: flex-start;
  margin-bottom: 30px;
  @media (min-width: 620px) {
    flex-direction: row;
    gap: 10px;
  }
`

const Image = styled.img`
  height: 200px;
`

const TextWrapper = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

const InnerTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`

const WelcomeText = styled(TextPurple)`
  font-weight: 400;
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
  &:Hover{
    background-color: var(--purple);
  }
`

const StyledSpan = styled.span`
  font-size: 2rem;
`