import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from 'next/dynamic';
import Product from './Product';
import Image from 'next/image';

const OwlCarousel = dynamic(import("react-owl-carousel"), {ssr: false});

export function Sliders() {
  return (
    <OwlCarousel className="owl-theme mt-1" loop margin={10} items={1} center autoPlay>
      {
        [1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
          <div className="item" style={{height: 300}}>
            <Image src="/assets/img/sliders/slider.png" layout="fill" />
          </div>
        ))
      }
    </OwlCarousel>
  )
}

export function SliderProduct() {
  return (
    <OwlCarousel className="owl-theme" loop margin={10} items={4} autoPlay>
      {
        [1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
          <Product />
        ))
      }
    </OwlCarousel>
  )
}