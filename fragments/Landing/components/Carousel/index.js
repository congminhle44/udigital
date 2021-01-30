/** @format */

import Button from '../../../../components/Button';

import Heading from '../../../../components/Typography/heading';

import Body from '../../../../components/Typography/body';

import { IdeaWrap, Intro, IntroHead, SeeWork, Wrapper } from './styles';

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
