/** @format */

import Heading from '../../../../components/Typography/heading';

import Body from '../../../../components/Typography/body';

import Button from '../../../../components/Button';

import { works } from './data';

import {
  WorkBody,
  WorkCard,
  WorkCardBody,
  WorkCardButton,
  WorkCardWrapper,
  WorkHead,
  WorkWrapper,
} from './styles';

export default function OurWork() {
  const renderWorkCard = () => {
    return works.map((work, index) => {
      return (
        <WorkCard key={index}>
          <div>
            <img src={work.image} alt={work.title} />
          </div>
          <WorkCardBody>
            <Body light>{work.description}</Body>
            <Heading variant='small'>{work.title}</Heading>
          </WorkCardBody>
        </WorkCard>
      );
    });
  };

  return (
    <WorkWrapper>
      <WorkHead>
        <Heading>Our Work</Heading>
        <WorkBody>
          <Body light>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore magna aliquyam erat,
          </Body>
        </WorkBody>
      </WorkHead>
      <WorkCardWrapper>{renderWorkCard()}</WorkCardWrapper>
      <WorkCardButton>
        <Button>See More Work</Button>
      </WorkCardButton>
    </WorkWrapper>
  );
}
