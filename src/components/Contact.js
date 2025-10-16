import React from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';

const Section = styled.section``;

const Heading = styled.h2`
  margin:0 0 1.8rem;
  font-size: clamp(1.6rem, 4vw, 2.2rem);
`;

const Methods = styled.div`
  display:grid;
  gap:1rem;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
`;

const Item = styled.a`
  display:flex; align-items:center; gap:.85rem;
  padding:.9rem 1rem;
  border:1px solid #e4e4e4;
  border-radius:14px;
  background:#fff;
  font-size:1.1rem;
  font-weight:500;
  color:#222;
  transition: background .2s, box-shadow .25s, transform .25s;
  &:hover { background:#fafafa; box-shadow:0 4px 10px -4px rgba(0,0,0,.12); transform:translateY(-3px); }
`;

const IconWrap = styled.span`
  width:42px; height:42px; border-radius:12px; background:#f2f2f2; display:flex; align-items:center; justify-content:center; font-size:1.1rem; color:#222; box-shadow:inset 0 0 0 1px rgba(0,0,0,.06);
`;

function Contact({ id }){
  const BigText = styled.p`
    font-size: 1.25rem;
    margin-bottom: 0.7rem;
  `;

  return (
    <Section id={id}>
      <Heading>Get In Touch</Heading>
      <BigText>Do you have an idea we can build together?</BigText>
      <BigText>Feel free to contact me:</BigText>
      <Methods>
        <Item 
          href="mailto:ocarranza99@gmail.com"
        >
        <IconWrap><FaEnvelope /></IconWrap> ocarranza99@gmail.com
        </Item>
        <Item
          href="https://www.linkedin.com/in/oscar-e-carranza-salazar-680a891b2/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconWrap><FaLinkedin /></IconWrap> LinkedIn
        </Item>
      </Methods>
    </Section>
  );
}

export default Contact;
