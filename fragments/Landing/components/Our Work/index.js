/** @format */

import Heading from '../../../../components/Typography/heading';

import Body from '../../../../components/Typography/body';

import Button from '../../../../components/Button';

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
} from './styles';

import { Eye } from '../../../../components/Icons';

import { FormattedMessage } from 'react-intl';

import { useQuery } from 'react-query';

import { api, works } from '../../../../config/api';
import Image from 'next/image';

const fetchWorks = async () => {
  const res = await api.get(works);

  return res.data;
};

export default function OurWork() {
  const { data } = useQuery('works', fetchWorks);

  const renderWorkCard = () => {
    if (data) {
      const baseUrl = 'http://localhost:1337';
      return data.map((work, index) => {
        return (
          <WorkCard key={index}>
            <WorkImage>
              <Image
                src={`${baseUrl}${work.images.url}`}
                alt={work.title}
                width={work.images.width}
                height={work.images.height}
              />
              <ImageLayer>
                <Button variant='large'>
                  <Eye /> {'  '} <FormattedMessage id='viewbtn' />
                </Button>
              </ImageLayer>
            </WorkImage>
            <WorkCardBody>
              <Body light>{work.title}</Body>
              <Heading variant='small'>{work.name}</Heading>
            </WorkCardBody>
          </WorkCard>
        );
      });
    }
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
