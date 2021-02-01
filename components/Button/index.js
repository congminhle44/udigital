/** @format */

import styled from 'styled-components';

const Button = styled.button`
  font-family: montserratMedium;
  font-size: 1rem;
  line-height: calc(24 / 16);
  color: white;
  padding: ${({ rounded, variant }) =>
    rounded
      ? '1rem 1.5rem'
      : variant === 'large'
      ? '1.5rem 5.625rem'
      : '1.5rem 3.1875rem'};
  background-color: var(--primary);
  outline: none;
  border: none;
  border-radius: ${({ rounded }) =>
    rounded ? '6.25rem 0 6.25rem 6.25rem' : '0'};
  box-shadow: none;
  transition: all 0.3s;
  &:hover {
    filter: brightness(1.2);
  }
  &:active {
    filter: brightness(0.95);
  }
  &:disabled {
    cursor: no-drag;
    opacity: 0.6;
  }
`;

Button.defaultProps = {
  rounded: false,
  variant: 'small',
};

export default Button;
