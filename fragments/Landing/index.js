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
  background-image: url('/images/bg.jpg');
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
        <meta
          name='description'
          content='The clone implementation for udigital design'
        />
        <meta property='og:title' content='Udigital' />
        <meta
          property='og:description'
          content='The clone implementation for udigital design'
        />
        <meta property='og:image' content='/images/thumbs.jpg' />
        <meta property='og:type' content='service' />
        <meta property='og:url' content='http://udigital.sestud.io' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <html lang={lang} />
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
