import React from 'react';
import styled from 'styled-components';
import portrait from '../images/oscar_carranza.jpg';

const Section = styled.section``;

const Heading = styled.h2`
  margin:0 0 2.1rem;
  font-size: clamp(1.75rem, 4.5vw, 2.5rem);
`;

const Layout = styled.div`
  display: grid;
  grid-template-columns: minmax(200px, 300px) 1fr;
  gap: 2.5rem;
  align-items:start;
  @media (max-width: 780px) {
    grid-template-columns: 1fr;
    gap: 1.75rem;
  }
`;

const PortraitWrap = styled.div`
  width:100%; aspect-ratio:1/1; border-radius:50%; overflow:hidden; position:relative; box-shadow:0 8px 28px -10px rgba(0,0,0,.25);
`;

const PortraitImg = styled.img`
  width:100%; height:100%; object-fit:cover; display:block; filter:brightness(.95); transition:filter .4s ease, transform .6s ease;
  ${PortraitWrap}:hover & { filter:brightness(1); transform:scale(1.05); }
`;

const Bio = styled.div`
  display:flex;
  flex-direction:column;
  gap:1rem;
  font-size:1.3rem;
  line-height:1.55;
  color:#333;
  p { margin:0; }
  align-self: center;
  @media (max-width: 780px) {
    align-self: stretch;
  }
`;

function About({ id }){
  return (
    <Section id={id}>
      <Heading>About Me</Heading>
      <Layout>
        <PortraitWrap>
          <PortraitImg src={portrait} alt="Portrait of Oscar"/>
        </PortraitWrap>
        <Bio>
          <p>With a 3-years eperience in software development and data analytics, my expertise includes:</p>
          <ul>
            <li>Web development of Single-Page Applications in React </li>
            <li>API REST using FastAPI connecting SQL-databases</li>
            <li>Data Analysis in Python and R </li>
          </ul>
          <p>I thrive in collaborative environments to drive innovation and achieve project goals with excellence. </p>
        </Bio>
      </Layout>
    </Section>
  );
}

export default About;
