import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// import Product from './Product';
import Image from 'next/image';

// const OwlCarousel = dynamic(import("react-owl-carousel"), {ssr: false});
import OwlCarousel from 'react-owl-carousel';

export default function Sliders() {
  return (
    <OwlCarousel className="owl-theme mt-1" loop margin={10} items={1} center autoPlay>
      {
        [1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
          <div key={`sli-${index}`} className="item" style={{height: 300}}>
            <Image src="/assets/img/sliders/slider.png" layout="fill" />
          </div>
        ))
      }
    </OwlCarousel>
  )
}