/** @format */
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
            <Heading variant='small'>{service.head}</Heading>
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
          <Heading>Our Services</Heading>
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
