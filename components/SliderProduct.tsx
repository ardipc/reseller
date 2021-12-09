import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Product from './Product';
// import Image from 'next/image';

// const OwlCarousel = dynamic(import("react-owl-carousel"), {ssr: false});
import OwlCarousel from 'react-owl-carousel';

export default function SliderProduct() {
  return (
    <OwlCarousel className="owl-theme" loop margin={10} items={4} autoPlay>
      {
        [1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
          <Product key={`slipr-${index}`} />
        ))
      }
    </OwlCarousel>
  )
}