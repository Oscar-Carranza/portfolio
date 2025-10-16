import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
`;

const Title = styled.h1`
  margin:0;
  font-size: clamp(3rem, 8.5vw, 5.5rem);
  line-height:1.02;
  font-weight:800;
  letter-spacing:-2px;
`;

const Sub = styled.h2`
  margin:0;
  font-size: clamp(1.35rem, 2.6vw, 2.85rem);
  max-width: 54ch;
  color:#333;
  font-weight:500;
  line-height:1.35;
`;

const Par = styled.p`
  margin:0;
  font-size: clamp(0.85rem, 1.8vw, 1.85rem);
  max-width: 100%;
  color:#333;
  font-weight:500;
  line-height:1.35;
`;

function Heading({ id }){
  return (
    <Wrapper id={id}>
      <Title>Oscar E. Carranza Salazar</Title>
      <Sub>Full-Stack Software Developer</Sub>
      <Par>Enhancing company processes with scalable, user-friendly, and innovative software solutions.</Par>
    </Wrapper>
  );
}

export default Heading;
