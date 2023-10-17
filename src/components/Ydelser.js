import React from 'react';
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom';
import { Header1, Header2, TextPurple } from './GlobalStyles'

export const Ydelser = () => {
  return (
    <SectionWrapper>
      <Header1>Ydelser</Header1>
      <ContentWrapper>
        <SubHeader>Individuel samtaleterapi:</SubHeader>
        <TextPurple>
        Jeg tilbyder individuel samtaleterapi til alle voksne og unge over 15 år.
        Individuel terapi består af løbende samtaler hvor du og jeg i fællesskab
        arbejder med lige præcis det, der er vigtigt for dig. Der er intet,
        der er for stort eller småt, og forløbet vil altid være skræddersyet
        dig og dine behov.
        </TextPurple>
        <SubHeader>Par/gruppeterapi:</SubHeader>
        <TextPurple>
        Jeg tilbyder også samtaler jer, der har brug for støtte i fællesskab.
        Det kan være ifm. forhold, familier, venskaber, m.m., hvor jeg faciliterer
        dialogen mellem flere parter. Hos mig er alle typer af forhold velkomne -
        min praksis er sexpositiv samt poly- og kink-venlig.
        Du og din(e) partner(e) kan kontakte mig direkte på mail
        med nærmere informationer om jeres situation.
        </TextPurple>
        <SubHeader>Gruppeforløb:</SubHeader>
        <TextPurple>
        Jeg kører løbende nye gruppeforløb, hvor du fast vil mødes med en
        mindre gruppe af andre, der tilhører samme målgruppe som dig.
        Til hver møde&shy;gang vil vi i fællesskab dele erfaringer og oplevelser
        i et trygt rum, som regel med et specifikt tema for dagen.
        Jeg vil løbende tilbyde skiftende typer af gruppe&shy;forløb for
        forskellige mål&shy;grupper, så kontakt mig endelig hvis du har
        særlige ønsker til en ny type gruppe.
        </TextPurple>
        <TextPurple>
          <StyledLink to="/ydelser/grupper">Læs mere om aktuelle gruppeforløb her.</StyledLink>
        </TextPurple>
        <SubHeader>ADHD-mentoring:</SubHeader>
        <TextPurple>
        Har du ADHD - eller mistanke om dette - kan det være nødvendigt med støtte og
        psykoedukation for at få hverdagen skruet sammen på en måde,
        der fungerer godt for dig. Jeg støtter dig desuden gerne i processen,
        hvis du vælger at blive udredt hos en psykiater, så du føler dig godt
        klædt på til dette og ikke står alene.
        </TextPurple>
      </ContentWrapper>
    </SectionWrapper>
  )
}

// Styled components
const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 70vh;
  animation: fadeIn 0.5s;
  padding-bottom: 40px;
  padding-top: 50px;
    @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
    }
`

const ContentWrapper = styled.div`
  margin: 10px auto 50px auto;
  width: 70%;
  min-width: 320px;
  max-width: 600px;
  padding: 0 8px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  text-align: justify;
  hyphens: auto;
`

const SubHeader = styled(Header2)`
  margin-top: 30px;
`

const StyledLink = styled(Link)`
  color: var(--purple);
`