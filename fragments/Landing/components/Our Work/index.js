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
  WorkImage,
  ImageLayer,
  WorkImg,
} from './styles';
import { Eye } from '../../../../components/Icons';
import { FormattedMessage } from 'react-intl';

export default function OurWork() {
  const renderWorkCard = () => {
    return works.map((work, index) => {
      return (
        <WorkCard key={index}>
          <WorkImage>
            <WorkImg src={work.image} alt={work.title} />
            <ImageLayer>
              <Button variant='large'>
                <Eye /> {'  '} <FormattedMessage id='viewbtn' />
              </Button>
            </ImageLayer>
          </WorkImage>
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
        <Heading>
          <FormattedMessage id='ourworktitle' />
        </Heading>
        <WorkBody>
          <Body light>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore magna aliquyam erat,
          </Body>
        </WorkBody>
      </WorkHead>
      <WorkCardWrapper>{renderWorkCard()}</WorkCardWrapper>
      <WorkCardButton>
        <Button>
          <FormattedMessage id='morebtn' />
        </Button>
      </WorkCardButton>
    </WorkWrapper>
  );
}
