import React from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';

const NavShell = styled.nav`
  position:fixed; top:0; left:0; width:100%; z-index:20;
  backdrop-filter: blur(8px);
  background:rgba(255,255,255,0.78);
  border-bottom:1px solid rgba(0,0,0,0.06);
  display:flex; align-items:center; justify-content:center;
`;

const Inner = styled.div`
  width:100%; max-width:1480px; display:flex; align-items:center; justify-content:space-between; padding:.9rem clamp(1rem,4vw,2rem);
`;

const Brand = styled.a`
  font-weight:700; font-size:1.05rem; letter-spacing:.5px; color:#111; text-decoration:none; display:flex; align-items:center; gap:.55rem;
`;

const Menu = styled.ul`
  list-style:none; margin:0; padding:0; display:flex; align-items:center; gap:1.75rem;
  @media (max-width:860px){
    gap:1.1rem;
  }
  @media (max-width:720px){
    display:none;
  }
`;

const Item = styled.li``;

const Link = styled.a`
  position:relative; font-size:.8rem; font-weight:600; text-transform:uppercase; letter-spacing:.7px; color:#222; padding:.4rem .2rem; text-decoration:none;
  &:after{content:''; position:absolute; left:0; bottom:0; height:2px; width:0; background:#111; transition:width .3s;}
  &:hover:after{width:100%;}
`;

const MobileToggle = styled.button`
  display:none; background:none; border:none; cursor:pointer; font-size:1.15rem; color:#222; padding:.5rem; border-radius:8px; transition:background .25s;
  &:hover{background:rgba(0,0,0,.06);}  
  @media (max-width:720px){ display:inline-flex; }
`;

function Navbar(){
  const items = [
    { href:'#home', label:'Home' },
    { href:'#projects', label:'Projects' },
    { href:'#skills', label:'Skills' },
    { href:'#companies', label:'Companies' },
    { href:'#about', label:'About' },
    { href:'#contact', label:'Contact' }
  ];

  return (
    <NavShell>
      <Inner>
        <Brand href="#home">Oscar Carranza - Portfolio</Brand>
        <Menu>
          {items.map(it => (
            <Item key={it.href}><Link href={it.href}>{it.label}</Link></Item>
          ))}
        </Menu>
        <MobileToggle aria-label="Menu"><FaBars /></MobileToggle>
      </Inner>
    </NavShell>
  );
}

export default Navbar;