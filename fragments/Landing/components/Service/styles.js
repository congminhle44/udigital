/** @format */

import styled from 'styled-components';

export const ServiceWrapper = styled.div`
  background-image: url('/images/services-bg.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0 3rem;
  margin-top: 2rem;
  @media (min-width: 1280px) {
    margin-top: 10.3125rem;
  }
`;

export const ServiceContainer = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`;

export const ServiceHead = styled.div`
  text-align: center;
`;

export const BodyWrap = styled.div`
  max-width: 28.5625rem;
  margin: 1.5rem auto;
`;

export const ServicesWrap = styled.div`
  display: block;
  margin: 5.6875rem auto;
  @media (min-width: 1280px) {
    display: flex;
    aligh-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

export const ServiceCard = styled.div`
  position: relative;
  padding: 1.5rem;
  background-color: ${({ type }) => switchBg(type)};
  margin-bottom: 1rem;
  width: 100%;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-5%) scale(1.1);
    box-shadow: 0 0.625rem 2.5rem rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  @media (min-width: 1280px) {
    width: 45%;
    margin: 1rem;
    &:nth-child(odd) {
      margin-left: 0;
    }
    &:nth-child(even) {
      margin-right: 0;
    }
  }
`;

export const ServiceLogo = styled.div`
  display: none;
  @media (min-width: 1024px) {
    position: absolute;
    top: 20%;
    left: -5%;
    width: 6rem;
    height: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: ${({ type }) => switchBgLogo(type)};
  }
  @media (min-width: 1280px) {
    top: 25%;
    left: -10%;
  }
`;

export const ServiceDescription = styled.div`
  margin: 0;
  @media (min-width: 1024px) {
    margin-left: 2.25rem;
  }
`;

export const ServiceBody = styled.div`
  margin-top: 1.5rem;
`;

const switchBg = (type) => {
  switch (type) {
    case 'planning':
      return 'var(--primary-faded)';
    case 'design':
      return 'var(--purple-faded)';
    case 'branding':
      return 'var(--pink-faded)';
    case 'media':
      return 'var(--orange-faded)';
    case 'app':
      return 'var(--blue-faded)';
    default:
      return 'var(--yellow-faded)';
  }
};

const switchBgLogo = (type) => {
  switch (type) {
    case 'planning':
      return 'var(--primary)';
    case 'design':
      return 'var(--purple)';
    case 'branding':
      return 'var(--pink)';
    case 'media':
      return 'var(--orange)';
    case 'app':
      return 'var(--blue)';
    default:
      return 'var(--yellow)';
  }
};
