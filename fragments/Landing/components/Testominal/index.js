/** @format */

import axios from 'axios';

import { useQuery } from 'react-query';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.css';

import Quotes from '../../../../components/Icons/quotes';

import Body from '../../../../components/Typography/body';

import Heading from '../../../../components/Typography/heading';

// import { testominal } from './data';

import {
  QuoteAvatar,
  QuoteAvaWrap,
  QuoteCard,
  QuoteCardWrap,
  QuoteHead,
  QuoteWrap,
  TestoContainer,
  TestoWrapper,
} from './styles';

const fetchQuotes = async () => {
  const res = await axios.get(
    'https://6017f21a971d850017a3f3df.mockapi.io/quotes'
  );

  return res.data;
};

const Testominal = () => {
  const { data, status } = useQuery('quotes', fetchQuotes);

  const renderQuote = () => {
    if (status === 'loading') {
      return <div>Loading...</div>;
    }
    if (data) {
      return data.map((quote, index) => {
        return (
          <SwiperSlide key={index}>
            <QuoteCardWrap>
              <QuoteCard>
                <QuoteAvaWrap>
                  <QuoteAvatar></QuoteAvatar>
                </QuoteAvaWrap>
                <div>
                  <QuoteHead>
                    <Heading variant='small'>{quote.name}</Heading>
                    <Body light>{quote.title}</Body>
                  </QuoteHead>
                  <Body>{quote.quote}</Body>
                </div>
              </QuoteCard>
            </QuoteCardWrap>
          </SwiperSlide>
        );
      });
    }
  };

  return (
    <TestoWrapper>
      <TestoContainer>
        <QuoteWrap>
          <Quotes />
        </QuoteWrap>
        <Swiper
          centeredSlides={true}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          grabCursor={true}
          slidesPerView={1}>
          {renderQuote()}
        </Swiper>
      </TestoContainer>
    </TestoWrapper>
  );
};

export default Testominal;
