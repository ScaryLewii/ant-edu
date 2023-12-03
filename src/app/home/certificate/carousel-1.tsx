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
			initialSlide={2}
			grabCursor={true}
			centeredSlides={true}
			slidesPerView={'auto'}
			coverflowEffect={{
				rotate: 0,
				stretch: 10,
				depth: 100,
				slideShadows: true,
			}}
			modules={[EffectCoverflow]}
		>
			{data.map((d, index) => 
				<SwiperSlide key={index}>
					<Image src={d.imgSrc} alt="certificate" width={200} height={100} className="object-cover max-w-[90%]" />
				</SwiperSlide>
			)}
		</Swiper>
	)
}