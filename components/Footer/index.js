/** @format */

import styled from 'styled-components';

import Body from '../../components/Typography/body';

import Heading from '../../components/Typography/heading';

const Wrapper = styled.div`
  background-color: var(--mint);
`;

const Container = styled.div`
  padding: 2rem;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    max-width: 1140px;
    margin: 0 auto;
  }
`;

const ImgWrap = styled.div`
  width: 5rem;
  height: 2rem;
  margin-bottom: 1rem;
  @media (min-width: 1280px) {
    width: fit-content;
    height: fit-content;
    margin-bottom: 0;
  }
`;

const Img = styled.img`
  width: 100%;
`;

const Description = styled.div`
  display: none;
  max-width: 22.6875rem;
  margin-top: 1.5rem;
  @media (min-width: 768px) {
    display: block;
  }
`;

const Company = styled.div`
  display: none;
  @media (min-width: 1280px) {
    display: block;
  }
`;

const CompanyDetail = styled.div`
  margin-top: 2rem;
`;

const SocialWrap = styled.div`
  margin-top: 2rem;
`;

export default function Footer() {
  return (
    <Wrapper>
      <Container>
        <div>
          <ImgWrap>
            <Img src='/images/Logo.png' alt='brand' />
          </ImgWrap>
          <Description>
            <Body light>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd
            </Body>
          </Description>
        </div>
        <Company>
          <Heading variant='small'>Company</Heading>
          <CompanyDetail>
            <Body>Work</Body>
            <Body>Services</Body>
            <Body>About Us</Body>
          </CompanyDetail>
        </Company>
        <div>
          <Body light>+8801913876520</Body>
          <Body light>company@gmail.com</Body>
          <SocialWrap>
            <img src='/images/social.jpg' alt='social' />
          </SocialWrap>
        </div>
      </Container>
    </Wrapper>
  );
}
