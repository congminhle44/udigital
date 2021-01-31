/** @format */

import styled from 'styled-components';

export const AboutWrapper = styled.div`
  background-image: url('/images/about-us-bg.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const AboutContainer = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 1.5rem 2rem;
  @media (min-width: 1280px) {
    display: flex;
    justify-content: center;
  }
`;

export const AboutImgWrap = styled.div`
  display: none;
  @media (min-width: 1280px) {
    display: block;
    margin-right: 2.6875rem;
  }
`;

export const AboutDetail = styled.div`
  text-align: center;
  max-width: 31.25rem;
  margin: 0 auto;
  margin-top: 2rem;
  @media (min-width: 1280px) {
    text-align: left;
  }
`;

export const AboutBody = styled.div`
  margin-top: 1.5rem;
`;
