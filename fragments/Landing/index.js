/** @format */

import styled from 'styled-components';

import Footer from '../../components/Footer';

import Header from '../../components/Header';

import About from './components/About';

import Carousel from './components/Carousel';

import Client from './components/Client';
import OurWork from './components/Our Work';

import Services from './components/Service';

const Banner = styled.div`
  background-image: url('/images/banner.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export default function Landing() {
  return (
    <div>
      <Banner>
        <Header />
        <Carousel />
        <Client />
      </Banner>
      <Services />
      <About />
      <OurWork />
      <Footer />
    </div>
  );
}
