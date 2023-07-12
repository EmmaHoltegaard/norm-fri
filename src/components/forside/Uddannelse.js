import React from 'react';
import styled from 'styled-components/macro'
import lineart2 from 'svg/lineart2.svg'
import { Header1, TextPurple, BoldSpan } from '../GlobalStyles'
import { UddannelseData } from './UddannelseData';
import { KurserData } from './KurserData';

export const Uddannelse = () => {
  return (
    <SectionWrapper>
      <Image src={lineart2} alt="lineart" />
      <ContentWrapper>
        <ExperienceWrapper>
          <Header1>Uddannelse</Header1>
          {UddannelseData.map((item) => (
            <Education key={item.id}>
              <BoldSpan>{item.title} </BoldSpan>
              <p>{item.description}</p>
              {/* HOW SHOULD THIS BE STYLED?? */}
              {item.year}, {item.source}
            </Education>
          ))}
        </ExperienceWrapper>
        <ExperienceWrapper>
          <Header1>Kurser</Header1>
          {KurserData.map((item) => (
            <Experience key={item.id}>
              <BoldSpan>{item.title}</BoldSpan> » {item.source}
            </Experience>
          ))}
        </ExperienceWrapper>
      </ContentWrapper>
    </SectionWrapper>
  )
}

// Styled Components

const SectionWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  /* min-height: 100vh; */
  background-color: var(--pink);
  padding-bottom: 30px;
`

const Image = styled.img`
  height: 491px;
  width: 206px;
  margin-top: 0;
  @media (max-width: 550px) {
    display:none;
  }
`

const ContentWrapper = styled.div`
  margin-top: 100px;
  margin-right: 40px;
  min-width: 320px;
  margin: 100px 40px 60px 0;
  @media (max-width: 550px) {
    width: 320px;
    margin: 100px auto 60px auto;
  }
`

const ExperienceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 30px;
`

const Education = styled(TextPurple)`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
`

const Experience = styled(TextPurple)`
  margin-bottom: 10px;
`