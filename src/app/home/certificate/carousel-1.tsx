"use client"
import Image from "next/image";

import { EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { type IData } from "./certificate";

export default function Carousel1({data}: {data: IData[]}) {
	return (
		<Swiper
			effect={'coverflow'}
			grabCursor={true}
			centeredSlides={true}
			slidesPerView={'auto'}
			modules={[EffectCoverflow]}
			breakpoints={{
				768: {
					initialSlide: 0,
					coverflowEffect: {
						rotate: 0,
						stretch: 1,
						depth: 50,
						slideShadows: true,
					}
				},
				1000: {
					initialSlide: 2,
					coverflowEffect: {
						rotate: 0,
						stretch: 20,
						depth: 100,
						slideShadows: true,
					}
				}
			}}
		>
			{data.map((d, index) => 
				<SwiperSlide key={index}>
					<Image src={d.imgSrc} alt="certificate" width={200} height={100} className="object-cover max-w-[90%]" />
				</SwiperSlide>
			)}
		</Swiper>
	)
}