/** @format */

import styled from 'styled-components';

const switchFontSize = (variant) => {
  switch (variant) {
    case 'large':
      return '3.5rem';
    case 'medium':
      return '3rem';
    case 'small':
      return '1.5rem';
  }
};

const switchLineHeight = (variant) => {
  switch (variant) {
    case 'large':
      return 'calc(72 / 56)';
    case 'medium':
      return 'calc(80 / 48)';
    case 'small':
      return 'calc(32 / 24)';
  }
};

const Heading = styled.h1`
  font-family: gilroyBold;
  font-size: ${({ variant }) => switchFontSize(variant)};
  line-height: ${({ variant }) => switchLineHeight(variant)};
`;

Heading.defaultProps = {
  variant: 'medium',
};

export { Heading };
