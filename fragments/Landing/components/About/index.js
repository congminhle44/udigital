/** @format */

import { FormattedMessage } from 'react-intl';

import Image from 'next/image';

import Body from '../../../../components/Typography/body';

import Heading from '../../../../components/Typography/heading';

import {
  AboutWrapper,
  AboutBody,
  AboutContainer,
  AboutDetail,
  AboutImgWrap,
} from './styles';

export default function About() {
  return (
    <AboutWrapper>
      <AboutContainer>
        <AboutImgWrap>
          <Image
            src='/images/teammate.png'
            alt='Team mate'
            width={600}
            height={600}
          />
        </AboutImgWrap>
        <AboutDetail>
          <Heading>
            <FormattedMessage id='abouttitle' />
          </Heading>
          <AboutBody>
            <Body light>
              <FormattedMessage id='aboutcontent' />
            </Body>
          </AboutBody>
        </AboutDetail>
      </AboutContainer>
    </AboutWrapper>
  );
}
