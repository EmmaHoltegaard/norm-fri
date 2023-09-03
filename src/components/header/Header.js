import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components/macro';
import { ui } from 'reducers/ui'
// import { cart } from 'reducers/cart'
import { Link } from 'react-router-dom';
import logo from 'images/logo.png'
import { Navbar } from './Navbar';
import { HamburgerIcon } from './HamburgerIcon';
import { HamburgerMenu } from './HamburgerMenu';
// import { Title } from '../GlobalStyles'

export const Header = () => {
  const menuIsActive = useSelector((state) => state.ui.menuIsActive);
  const dispatch = useDispatch();

  const onMenuClick = () => {
    dispatch(ui.actions.toggleMenu())
  }

  return (
    <section>
      <HeaderWrapper>
        <HeaderInnerWrapper>
          <LeftWrapper>
            <StyledLink to="/"><Logo src={logo} Alt="Normfri Terapi" /></StyledLink>
          </LeftWrapper>
          <RightWrapper>
            <LargeScreenNav>
              <Navbar />
            </LargeScreenNav>
            <SmallScreenNav>
              <HamburgerIcon onMenuClick={onMenuClick} />
            </SmallScreenNav>
          </RightWrapper>
        </HeaderInnerWrapper>
      </HeaderWrapper>
      {menuIsActive && (
        <HamburgerMenu />
      )}
    </section>
  )
}

// styled components
const HeaderWrapper = styled.header`
  height: 10rem;
  display: flex;
  justify-content: center;
  padding-left: 50px;
  padding-right: 50px;
  align-items: center;
`

const HeaderInnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1050px;
  min-width: 300px;
`

const LeftWrapper = styled.div`
  display: flex;
`

const RightWrapper = styled.div`
  display: flex;
  gap: 20px;
`

const LargeScreenNav = styled.div`
  display: none;
  @media (min-width: 1024px) {
    display: flex;
    width: 525px;
    margin-right: 10px;
  }
`

const SmallScreenNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  @media (min-width: 1024px) {
    display: none;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
`

const Logo = styled.img`
height: 4rem; 
`