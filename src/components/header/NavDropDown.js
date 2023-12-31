import React from 'react';
import { useDispatch } from 'react-redux';
import { ui } from 'reducers/ui'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';

export const NavDropDown = () => {
  const dispatch = useDispatch();
  const handleNavLinkClick = () => {
    dispatch(ui.actions.toggleMenu())
  }

  return (
    <NavOptions>
      <div><StyledNavLink to="/" onClick={handleNavLinkClick}>Forside</StyledNavLink></div>
      <div><StyledNavLink to="/ydelser" onClick={handleNavLinkClick}>Jeg tilbyder</StyledNavLink></div>
      <div><StyledNavLink to="/praktiskInfo" onClick={handleNavLinkClick}>Praktisk info</StyledNavLink></div>
      <div><StyledNavLink to="/minTilgang" onClick={handleNavLinkClick}>Min tilgang</StyledNavLink></div>
      <div><StyledNavLink to="/kontakt" onClick={handleNavLinkClick}>Kontakt mig</StyledNavLink></div>
      <div><StyledNavLink to="/english" onClick={handleNavLinkClick}>In English</StyledNavLink></div>
    </NavOptions>
  )
}

// Styled Components

const NavOptions = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;
  text-align: center;
  // animation: growDown 300ms ease-in-out forwards;
  animation: fadeIn 0.5s; 
  transform-origin: top center;
  @media (min-width: 1024px) {
    display: none;
  }
  /*
  @keyframes growDown {
    0% {
        transform: scaleY(0)
    }
    80% {
        transform: scaleY(1.1)
    }
    100% {
        transform: scaleY(1)
    }
  }
  */
  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
`

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-family: 'M PLUS Rounded 1c', 'Courier Prime', 'Courier New', monospace;
  font-weight: 700;
  color: var(--purple);
  font-size: 1.125rem;
  letter-spacing: 1.3px;
  // background-color: var(--purple);
  background: var(--transparentWhite);
  padding: 0.8em;
  //border-bottom: 1px var(--lightPurple) solid;
  width: 100vw;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  &.active {
    text-decoration: underline;
    background-color: var(--transparentPurple)
  }
  &:hover {
    background-color: var(--lightPurple)
  }
  @media (min-width: 1024px) {
    display: none;
  }
`