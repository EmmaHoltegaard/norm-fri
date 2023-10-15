import React from 'react';
import styled from 'styled-components/macro'
import { Player } from '@lottiefiles/react-lottie-player'
import animationData from 'lotties/not-found'
import { Link } from 'react-router-dom';
import { TextPurple, Header1, StyledButton } from './GlobalStyles';

export const Grupper = () => {
  return (
    <SectionWrapper>
      <Header1>Grupper</Header1>
      <ContentWrapper>
        <PlayerWrapper>
          <Player
            autoplay
            controls
            loop
            mode="normal"
            src={animationData}
            style={{ height: '100%', width: '100%' }} />
        </PlayerWrapper>
        <TextPurple>
            Denne side er underopbygning<br />- der kommer snart mere information.
        </TextPurple>
        <Button><StyledLink to="/ydelser">Tilbage til ydelser</StyledLink></Button>
      </ContentWrapper>
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
  margin: 10px auto 50px auto;
  width: 70%;
  min-width: 320px;
  max-width: 600px;
  padding: 0 8px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  text-align: center;
  //hyphens: auto;
`

const PlayerWrapper = styled.div`
width: 260px;
margin: auto;
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