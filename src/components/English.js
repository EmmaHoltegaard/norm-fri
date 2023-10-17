import React from 'react';
import styled from 'styled-components/macro'
import { Player } from '@lottiefiles/react-lottie-player'
import animationData from 'lotties/not-found'
import { TextPurple, Header1, BoldSpan } from './GlobalStyles';

export const English = () => {
  return (
    <SectionWrapper>
      <ContentWrapper>
        <Header1>In English</Header1>
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
          This page is under construction - stay tuned for more in-depth information.
        </TextPurple>
        <TextPurple>
          In the meantime, you are welcome to contact
          me on <BoldSpan>normfri.terapi@gmail.com</BoldSpan> if
          you are interested in more information about therapy sessions in English.
        </TextPurple>
        <TextPurple>
          I look forward to hearing from you!
        </TextPurple>

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
  max-width: 500px;
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