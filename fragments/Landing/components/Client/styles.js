/** @format */

import styled from 'styled-components';

export const ClientWrapper = styled.div`
  display: none;
  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1140px;
    padding: 2rem;
    margin: 1.5rem auto;
    margin-top: 12.5rem;
  }
`;

export const ClientCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 9.875rem;
  height: 8.8125rem;
  padding: 1rem 1.5rem;
  background-color: white;
  box-shadow: 0.125rem 1.25rem 2.6875rem rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-5%) scale(1.1);
  }
`;
