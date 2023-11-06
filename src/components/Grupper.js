import React from 'react';
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom';
import { TextPurple, Header1, StyledButton, Header2 } from './GlobalStyles';

export const Grupper = () => {
  return (
    <SectionWrapper>
      <Header1>Grupper</Header1>
      <ContentWrapper>
        <SubHeader>Fokus&shy;gruppe til ud&shy;vikling af queer&shy;-venlig terapi</SubHeader>
        <TextPurple>
          Minoritets&shy;stress, mar&shy;ginali&shy;se&shy;ring, u&shy;tryg&shy;hed og manglende
          for&shy;ståelse fra
          fag&shy;personer og sundheds&shy;væsenet – der er mange grunde til, at det kan være
          svært som LGBT+ person at søge hjælp, selv når krisen kradser. Derfor er
          det vigtigere end nogen&shy;sinde at udvikle norm&shy;kritisk, inter&shy;sektionel og
          inkluderende terapi, der aktivt imøde&shy;kommer de behov, vi som mål&shy;gruppe har.
        </TextPurple>
        <TextPurple>
          I den for&shy;bindelse søger jeg en mindre gruppe af LGBT+ personer,
          der gennem samtale&shy;terapi vil bidrage til mine refleksioner
          om&shy;kring min praksis – og samtidig få et tera&shy;peutisk gruppe&shy;forløb
          med andre LGBT+ personer ud af det, hvor der reflekteres over
          og arbejdes med trivsel og mentalt vel&shy;være i fælles&shy;skab.
        </TextPurple>
        <TextPurple>
          For at deltage, skal du…
          <ul>
            <li>
                være LGBT+ person over 18 år.
            </li>
            <li>
                kunne deltage i mindst 5 fælles workshops med en lille
                gruppe andre deltagere.
            </li>
            <li>
                have tidligere erfaring med at gå til psykolog,
                terapeut eller psykiater – eller have holdt dig fra det,
                fordi du ikke følte dig tryg.
            </li>
            <li>
                have et ønske om at forbedre den hjælp, LGBT+ personer har adgang til. ♡
            </li>
          </ul>
        </TextPurple>
        <TextPurple>
          Fordi du hjælper mig med min forskning og praksis får du 50% rabat på
          hele forløbet + 50% rabat på 3 sessioner af individuel terapi.
          Du betaler derfor kun 800 kr. i alt for hele gruppeforløbet + 325 kr.
          per individuel samtale &#40;valgfrit&#41;.
        </TextPurple>
        <TextPurple>
          Vil du skri&shy;ves op til en gruppe&shy;op&shy;start eller bare høre lidt
          nær&shy;mere om for&shy;løb&shy;et, kan du kon&shy;takte mig på:
        </TextPurple>
        <Centered>
          normfriterapi@protonmail.com
        </Centered>
        <Centered>
          Jeg ser frem til at høre fra dig!
        </Centered>
      </ContentWrapper>
      <Button><StyledLink to="/ydelser">Tilbage til ydelser</StyledLink></Button>
    </SectionWrapper>
  )
}

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
  margin: 40px auto 50px auto;
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
  text-align: left;
`

const Centered = styled(TextPurple)`
  text-align: center;
`

const Button = styled(StyledButton)`
  background-color: var(--lightPurple);
  width: fit-content;
  padding: 0.6em 1.2em;
  border-radius: 25px;
  font-size: 1.125rem;
  margin: 25px auto 15px auto;
  &:Hover{
    background-color: var(--purple);
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`