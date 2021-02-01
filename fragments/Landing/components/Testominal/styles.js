/** @format */

import styled from 'styled-components';

export const TestoWrapper = styled.div`
  background-image: url('/images/testominal-bg.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const TestoContainer = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 6.25rem 2rem;
`;

export const QuoteWrap = styled.div`
  width: fit-content;
  margin: 0 auto;
  margin-bottom: 3rem;
`;

export const QuoteCardWrap = styled.div`
  padding: 50px 0;
`;

export const QuoteCard = styled.div`
  position: relative;
  padding: 3.125rem 3.75rem;
  max-width: 46.3125rem;
  margin: 0 auto;
  margin-top: 50px;
  text-align: center;
  background-color: white;
  box-shadow: 0 0.9375rem 2.5rem rgba(0, 0, 0, 0.1);
`;

export const QuoteAvaWrap = styled.div`
  position: absolute;
  top: -15%;
  left: 0;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const QuoteAvatar = styled.div`
  width: 5.625rem;
  height: 5.625rem;
  background-color: var(--gray);
  border: 3px solid #fff;
  border-radius: 50%;
`;

export const QuoteHead = styled.div`
  margin-bottom: 2.25rem;
`;
