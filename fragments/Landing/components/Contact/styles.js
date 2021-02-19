/** @format */

import styled from 'styled-components';

export const HideLabel = styled.div`
  color: transparent;
`;

export const ContactWrapper = styled.div`
  position: relative;
  background-color: white;
  text-align: center;
  padding: 2rem 0;
`;

export const ContactForm = styled.form`
  max-width: 56.8125rem;
  margin: 6rem auto;
  padding: 2rem;
  z-index: 1;
`;

export const StartedButton = styled.div`
  margin-top: 8rem;
`;

export const TreeLeft = styled.div`
  display: none;
  position: absolute;
  bottom: 0;
  left: 0;
  @media (min-width: 1280px) {
    display: block;
  }
`;

export const TreeRight = styled.div`
  display: none;
  position: absolute;
  bottom: 0;
  right: 0;
  @media (min-width: 1280px) {
    display: block;
  }
`;
