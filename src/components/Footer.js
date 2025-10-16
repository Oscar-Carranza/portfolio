import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
  margin-top: 4rem;
  background:#000; color:#fff;
  width:100%;
  padding:2.25rem 1.25rem; 
  display:flex; align-items:center; justify-content:center;
  font-size:.85rem; font-weight:500; letter-spacing:.4px;
`;

function Footer(){
  const year = new Date().getFullYear();
  return (
    <Wrapper>© {year} Oscar Carranza - Portfolio.</Wrapper>
  );
}

export default Footer;
