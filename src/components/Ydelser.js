import React from 'react';
import styled from 'styled-components/macro'
import { Header1 } from './GlobalStyles'

export const Ydelser = () => {
  return (
    <SectionWrapper>
      <Header1>Ydelser...</Header1>
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
    @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
    }
`