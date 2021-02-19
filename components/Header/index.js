/** @format */

import styled from 'styled-components';

import Body from '../../components/Typography/body';

import Button from '../../components/Button';

import { BurgerNav } from '../Icons';

import { useState } from 'react';

import { FormattedMessage } from 'react-intl';

import Image from 'next/image';

/** @format */
const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  @media (min-width: 1280px) {
    max-width: 1140px;
    margin: 0 auto;
  }
`;

const Nav = styled.div`
  display: none;
  @media (min-width: 1280px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const ButtonWrap = styled.div`
  display: none;
  @media (min-width: 1280px) {
    display: block;
  }
`;

const MobileButton = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
`;

const NavSecItem = styled.div`
  margin: 2rem 0;
  @media (min-width: 1280px) {
    margin: 0 4.5rem;
  }
`;

const BurgerMenu = styled.div`
  cursor: pointer;
  @media (min-width: 1280px) {
    display: none;
  }
`;

const MobileNavWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: ${({ show }) => (show ? 'flex' : 'none')};
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.65);
  @media (min-width: 1280px) {
    display: none;
  }
`;

const MobileNav = styled.div`
  width: 50%;
  height: 100%;
  background-color: #fff;
  padding: 2rem 1.5rem;
  @media (min-width: 768px) {
    text-align: center;
  }
`;

export default function Header() {
  const [show, setShow] = useState(false);

  return (
    <HeaderWrap>
      <div>
        <Image width={120} height={40} src='/images/Logo.png' alt='brand' />
      </div>
      <Nav>
        <Body>
          <FormattedMessage id='nav1' />
        </Body>
        <NavSecItem>
          <Body>
            <FormattedMessage id='nav2' />
          </Body>
        </NavSecItem>
        <Body>
          <FormattedMessage id='nav3' />
        </Body>
      </Nav>
      <ButtonWrap>
        <Button rounded>
          <Body font='montserrat-medium'>
            <FormattedMessage id='start' />
          </Body>
        </Button>
      </ButtonWrap>
      <BurgerMenu onClick={() => setShow(!show)}>
        <BurgerNav />
      </BurgerMenu>
      <MobileNavWrap onClick={() => setShow(!show)} show={show}>
        <MobileNav show={show}>
          <Body>Services</Body>
          <NavSecItem>
            <Body>Work</Body>
          </NavSecItem>
          <Body>About Us</Body>
          <MobileButton>
            <Button rounded>
              <Body font='montserrat-medium'>Get Started</Body>
            </Button>
          </MobileButton>
        </MobileNav>
      </MobileNavWrap>
    </HeaderWrap>
  );
}
