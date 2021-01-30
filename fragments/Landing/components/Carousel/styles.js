/** @format */
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 3rem 2rem;
  max-width: 1140px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  @media (min-width: 1280px) {
    align-items: center;
    justify-content: space-between;
  }
`;

export const IdeaWrap = styled.div`
  display: none;
  @media (min-width: 1280px) {
    display: block;
  }
`;

export const Intro = styled.div`
  max-width: 448px;
  text-align: center;
  @media (min-width: 1280px) {
    margin-right: 2rem;
    text-align: left;
  }
`;

export const IntroHead = styled.div`
  margin-bottom: 1.5rem;
`;

export const SeeWork = styled.div`
  margin-top: 3.1875rem;
`;
