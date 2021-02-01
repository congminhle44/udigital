/** @format */

import styled from 'styled-components';

export const WorkWrapper = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 2rem;
  @media (min-width: 1280px) {
    padding: 7.1875rem 2rem;
  }
`;

export const WorkHead = styled.div`
  margin-bottom: 5rem;
  text-align: center;
`;

export const WorkBody = styled.div`
  max-width: 28.5625rem;
  margin: 0 auto;
  margin-top: 1.5rem;
`;

export const WorkCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const WorkCard = styled.div`
  max-width: 22.0625rem;
  box-shadow: 0 0.1875rem 0.375rem rgba(0, 0, 0, 0.16);
  margin: 1.5rem auto;
`;

export const WorkCardBody = styled.div`
  padding: 1.5rem;
`;

export const WorkCardButton = styled.div`
  width: fit-content;
  margin: 0 auto;
  margin-top: 6.25rem;
`;
