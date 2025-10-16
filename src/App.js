import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Navbar from './components/Navbar';
import Heading from './components/Heading';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Companies from './components/Companies';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { margin:0; font-family: 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Arial, sans-serif; background:#f2f2f2; color:#111; }
  a { color: inherit; text-decoration:none; }
  img { max-width:100%; display:block; }
`; 

const PageWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  background: #f5f5f5;
`;

const Content = styled.main`
  display:flex;
  flex-direction:column;
  gap:5rem;
  padding: 6.75rem clamp(1rem, 4vw, 3rem) 5rem; /* top padding accounts for fixed nav */
  width:85%;
  max-width:1480px; /* widened from previous 1280 */
  margin:0 auto;
  @media (max-width: 1100px){
    width:100%;
  }
  @media (max-width: 820px){
    padding: 6rem 1.25rem 3.75rem;
    gap:4rem;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <PageWrapper>
        <Navbar />
        <Content>
          <Heading id="home" />
          <Projects id="projects" />
          <Skills id="skills" />
          <Companies id="companies" />
          <About id="about" />
          <Contact id="contact" />
        </Content>
        <Footer />
      </PageWrapper>
    </>
  );
}

export default App;
