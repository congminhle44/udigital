/** @format */
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  bottom: 20%;
  right: 0;
  margin: 2rem 0;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 0.625rem;
  width: fit-content;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  opacity: 0.5;
  transition: all 0.3s;
  z-index: 2;
  &:hover {
    opacity: 1;
  }
`;

const ImageWrap = styled.div`
  width: 2rem;
  height: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  &:active {
    transform: scale(0.8);
  }
  &:first-child {
    margin-right: 1rem;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export default function ChangeLanguage({ EnLang, Vietlang }) {
  return (
    <Wrapper>
      <ImageWrap onClick={() => EnLang()}>
        <Img src='/images/en.png' alt='english' />
      </ImageWrap>
      <ImageWrap onClick={() => Vietlang()}>
        <Img src='/images/vi.png' alt='vietnam' />
      </ImageWrap>
    </Wrapper>
  );
}