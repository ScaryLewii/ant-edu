"use client"
import Image from "next/image";

import { EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { type IData } from "./certificate";

export default function Carousel2({data}: {data: IData[]}) {
	return (
		<Swiper
			grabCursor={true}
			spaceBetween={20}
		>
			{data.map((d, index) => 
				<SwiperSlide key={index}>
					<Image src={d.imgSrc} alt="certificate" width={200} height={100} className="object-cover max-w-[90%]" />
				</SwiperSlide>
			)}
		</Swiper>
	)
}