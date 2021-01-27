/** @format */
import styled from 'styled-components';

const switchfont = (font) => {
  switch (font) {
    case 'gilroy':
      return 'gilroyLight';
    case 'montserrat-medium':
      return 'montserratMedium';
    case 'montserrat':
      return 'monserrat';
  }
};

const Body = styled.p`
  font-family: ${({ font }) => switchfont(font)};
  font-size: 1rem;
  color: ${({ light }) => (light ? 'var(--text)' : '#000')};
  line-height: calc(24 / 16);
`;

Body.defaultProps = {
  font: 'gilroy',
  light: false,
};

export { Body };
