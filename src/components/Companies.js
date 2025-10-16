import React from 'react';
import styled from 'styled-components';

import ford_logo from '../images/ford_logo.png';
import cfe_logo from '../images/cfe_logo.png';

const Section = styled.section``;

const Heading = styled.h2`
  margin:0 0 1.75rem;
  font-size: clamp(1.9rem, 4.5vw, 2.6rem);
  letter-spacing:-.5px;
`;

const Row = styled.div`
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2.25rem 3.25rem;
  align-items:stretch;
`;

const LogoLink = styled.a`
  text-decoration:none; color:inherit;
  margin:0; display:flex; align-items:center; justify-content:center; padding:1.1rem 1.6rem; background:#fff; border:1px solid #e0e0e0; border-radius:16px; box-shadow:0 4px 12px rgba(0,0,0,.06); transition: box-shadow .3s, transform .3s;
  cursor:pointer; width:100%; height:140px;
  &:hover{ box-shadow:0 8px 28px -8px rgba(0,0,0,.25); transform:translateY(-6px); }
`;

const LogoImg = styled.img`
  max-height:72px; width:auto; max-width:100%; transition: transform .35s;
  ${LogoLink}:hover & { transform:scale(1.05); }
`;

const logos = [
  { src: ford_logo, alt:'Ford Logo', url: 'https://www.ford.mx/' },
  { src: cfe_logo, alt:'CFE Logo', url: 'https://www.cfe.gob.mx/Pages/default.aspx' }
];

function Companies({ id }){
  return (
    <Section id={id}>
      <Heading>Companies I have collaborated with</Heading>
      <Row>
        {logos.map(l => (
          <LogoLink key={l.src} href={l.url} target="_blank" rel="noopener noreferrer" aria-label={l.alt}>
            <LogoImg src={l.src} alt={l.alt} loading="lazy" />
          </LogoLink>
        ))}
      </Row>
    </Section>
  );
}

export default Companies;
