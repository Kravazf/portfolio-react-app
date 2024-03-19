import React from 'react';
import {
  Swiper,
  SwiperSlide,
} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import data from './data';
import './portfolio.css';
import Card from '../../components/card/Card';

const Portfolio = () => {
  const initialSlideIndex = Math.floor(data.length / 2);

  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination]}
        initialSlide={initialSlideIndex}
        keyboard= "true"
        className="swiper"
      >
        {
          data.map((item) => (
            <SwiperSlide key={item.id} className='swiper-slide'>
              <Card className='swipper__card'>
                <img src={item.image} alt={item.title} />
                <h5>{item.title}</h5>
              </Card>
              <div className='swipper card__action'>
                <a
                  className='btn primary sm'
                  href={item.url}
                  target='_blank'
                  rel="noreferrer"
                >
                  Go to website
                </a>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </section>
  );
};

export default Portfolio;
