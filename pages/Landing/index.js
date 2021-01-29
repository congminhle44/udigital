/** @format */

import styled from 'styled-components';

import Footer from '../../components/Footer';

import Header from '../../components/Header';
import Carousel from './components/Carousel';

const Banner = styled.div`
  background-image: url('/images/banner.png');
  background-size: cover;
  background-repeat: no-repeat;
`;

export default function Landing() {
  return (
    <div>
      <Banner>
        <Header />
        <Carousel />
      </Banner>
      <Footer />
    </div>
  );
}
