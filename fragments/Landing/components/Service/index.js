/** @format */
import { FormattedMessage } from 'react-intl';
import Body from '../../../../components/Typography/body';

import Heading from '../../../../components/Typography/heading';

import { services } from './data';

import {
  ServiceCard,
  ServiceLogo,
  ServiceDescription,
  ServiceWrapper,
  ServiceContainer,
  ServiceHead,
  ServiceBody,
  BodyWrap,
  ServicesWrap,
} from './styles';

export default function Services() {
  const renderServiceCard = () => {
    return services.map((service, index) => {
      return (
        <ServiceCard type={service.type} key={index}>
          <ServiceLogo type={service.type}>
            <img src={service.logo} alt={service.head} />
          </ServiceLogo>
          <ServiceDescription>
            <Heading variant='small'>
              <FormattedMessage id={service.type} />
            </Heading>
            <ServiceBody>
              <Body light>{service.body}</Body>
            </ServiceBody>
          </ServiceDescription>
        </ServiceCard>
      );
    });
  };

  return (
    <ServiceWrapper>
      <ServiceContainer>
        <ServiceHead>
          <Heading>
            <FormattedMessage id='servicetitle' />
          </Heading>
          <BodyWrap>
            <Body light>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore magna aliquyam erat,
            </Body>
          </BodyWrap>
        </ServiceHead>
        <ServicesWrap>{renderServiceCard()}</ServicesWrap>
      </ServiceContainer>
    </ServiceWrapper>
  );
}
