/** @format */

import { FormattedMessage } from 'react-intl';
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
          <img src='/images/teammate.png' alt='Team mate' />
        </AboutImgWrap>
        <AboutDetail>
          <Heading>
            <FormattedMessage id='abouttitle' />
          </Heading>
          <AboutBody>
            <Body light>
              Uddoktagiri Digital is a Digital Agency focused on providing fully
              Customised, Growth oriented and ROI (Return On Investment) based
              Digitalisation services. We are a team of professional digital
              marketing experts. We strive to transform your marketing
              experience taking it to a brand-new level. We are lucubrating here
              in Uddoktagiri Digital with all our heart and mind. We are into
              providing digital-marketing solutions and are committed to propel
              your business to the top of search rankings
            </Body>
          </AboutBody>
        </AboutDetail>
      </AboutContainer>
    </AboutWrapper>
  );
}
