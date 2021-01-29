/** @format */

import styled from 'styled-components';

import Button from '../../../../components/Button';

import Heading from '../../../../components/Typography/heading';

import Body from '../../../../components/Typography/body';

const Wrapper = styled.div`
  padding: 3rem 2rem;
  max-width: 1140px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  @media (min-width: 1280px) {
    align-items: center;
    justify-content: space-between;
  }
`;

const IdeaWrap = styled.div`
  display: none;
  @media (min-width: 1280px) {
    display: block;
  }
`;

const Intro = styled.div`
  max-width: 448px;
  margin-right: 2rem;
  text-align: center;
  @media (min-width: 1280px) {
    text-align: left;
  }
`;

const IntroHead = styled.div`
  margin-bottom: 1.5rem;
`;

const SeeWork = styled.div`
  margin-top: 3.1875rem;
`;

export default function Carousel() {
  return (
    <Wrapper>
      <Intro>
        <IntroHead>
          <Heading variant='large'>
            Let's Grow Your Brand To The Next Level
          </Heading>
        </IntroHead>
        <Body light>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna.
        </Body>
        <SeeWork>
          <Button>See Out Work</Button>
        </SeeWork>
      </Intro>
      <IdeaWrap>
        <img src='/images/idea.png' alt='Idea' />
      </IdeaWrap>
    </Wrapper>
  );
}
