/** @format */
import { FormattedMessage } from 'react-intl';

import { useQuery } from 'react-query';

import Body from '../../../../components/Typography/body';

import Heading from '../../../../components/Typography/heading';

import { api, services } from '../../../../config/api';

import Image from 'next/image';

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

const fetchServices = async () => {
  const res = await api.get(services);

  return res.data;
};

export default function Services() {
  const { data } = useQuery('services', fetchServices);

  const renderServiceCard = () => {
    if (data) {
      const baseUrl = 'http://localhost:1337';

      return data.map((service, index) => {
        return (
          <ServiceCard type={service.type} key={index}>
            <ServiceLogo type={service.type}>
              <Image
                src={`${baseUrl}${service.logo.url}`}
                alt={service.type}
                width={service.logo.width}
                height={service.logo.height}
              />
            </ServiceLogo>
            <ServiceDescription>
              <Heading variant='small'>
                <FormattedMessage id={service.type} />
              </Heading>
              <ServiceBody>
                <Body light>{service.description}</Body>
              </ServiceBody>
            </ServiceDescription>
          </ServiceCard>
        );
      });
    }
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
