import React from 'react';
import styled from 'styled-components/macro'
import { Header1, BoldSpan, TextPurple } from './GlobalStyles'

export const MinTilgang = () => {
  return (
    <SectionWrapper>
      <TextWrapper>
        <Header1>Min tilgang</Header1>
        <Text>
          <BoldSpan>
            Jeg har særlig viden indenfor:
          </BoldSpan>

        </Text>
        <ul>
          <li><Text>Normkritik</Text></li>
          <li><Text>Minioritetsstress</Text></li>
          <li><Text>LQBTQIA+</Text></li>
          <li><Text>Køn, krop og seksualitet</Text></li>
          <li><Text>Kropspositivisme</Text></li>
          <li><Text>Selvmordstanker</Text></li>
          <li><Text>Sygdomsaangst</Text></li>
          <li><Text>Angst</Text></li>
          <li><Text>ADHD</Text></li>
        </ul>
      </TextWrapper>
    </SectionWrapper>
  )
}

// Styled components
const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: fadeIn 0.5s;
  padding-bottom: 40px;
    @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
    }
`

const TextWrapper = styled.div`
  margin: 50px auto 60px auto;
  width: 70%;
  min-width: 320px;
  max-width: 550px;
  padding: 0 8px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const Text = styled(TextPurple)`
  text-align: justify;
`