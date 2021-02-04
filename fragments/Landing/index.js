/** @format */

import styled from 'styled-components';

import Head from 'next/head';

import Footer from '../../components/Footer';

import Header from '../../components/Header';

import About from './components/About';

import Carousel from './components/Carousel';

import Client from './components/Client';

import Contact from './components/Contact';

import OurWork from './components/Our Work';

import Services from './components/Service';

import Testominal from './components/Testominal';

import ChangeLanguage from '../../components/Language';

import { TranslateProvider, LOCALES } from '../../public/locales';
import { useState } from 'react';

const Banner = styled.div`
  background-image: url('/images/banner.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export default function Landing() {
  const [lang, setLang] = useState(LOCALES.ENGLISH);

  const changeVietLang = () => {
    setLang(LOCALES.VIETNAM);
  };

  const changeEnLang = () => {
    setLang(LOCALES.ENGLISH);
  };

  return (
    <TranslateProvider locale={lang}>
      <ChangeLanguage Vietlang={changeVietLang} EnLang={changeEnLang} />
      <Head>
        <title>Udigital</title>
      </Head>
      <Banner>
        <Header />
        <Carousel />
        <Client />
      </Banner>
      <Services />
      <About />
      <OurWork />
      <Testominal />
      <Contact />
      <Footer />
    </TranslateProvider>
  );
}
