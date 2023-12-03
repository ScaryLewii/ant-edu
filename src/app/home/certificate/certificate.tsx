"use client"

import Image from "next/image";
import Background from "public/background/certificate.jpg"
import C1 from "public/static-images/c1.png"
import C2 from "public/static-images/c-2.jpg"
import C3 from "public/static-images/c-3.jpg"
import C4 from "public/static-images/c-4.jpg"
import C5 from "public/static-images/c-5.jpg"

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';

import './styles.css'

import { EffectCoverflow } from 'swiper/modules';
import Link from "next/link";

const data = [
	{
		imgSrc: C1,
	},
	{
		imgSrc: C2,
	},
	{
		imgSrc: C3,
	},
	{
		imgSrc: C4,
	},
	{
		imgSrc: C5,
	},
]

const bottomNav = [
	{
		href: "#",
		label: "Tổng quan"
	},
	{
		href: "#",
		label: "Cẩm nang luyện thi"
	},
	{
		href: "#",
		label: "Bí kíp về đích"
	},
	{
		href: "#",
		label: "Đánh giá năng lực"
	}
]

export default function Certificate() {
	return (
		<section className="flex h-screen overflow-hidden flex-col items-center justify-center relative">
			<Image src={Background} width={1920} height={1080} alt="home background"
				className="absolute top-0 left-0 w-full h-full object-cover" />

			<div className="container flex flex-col justify-center items-center z-20 h-full w-">
				<h1 className="font-bold text-[40px] mb-[16px]">Chứng chỉ</h1>
				<i>Bạn hãy chọn một bài thi và khám phá!</i>

				<div className="mx-auto mt-[50px] home-cert">
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
				</div>

				<nav className="mt-[50px]">
					<ul className="flex justify-center gap-[60px]">
						{bottomNav.map((item, index) =>
							<li key={index}>
								<Link className="hover:text-cyan text-[16px]" href={item.href}>{item.label}</Link>
							</li>
						)}
					</ul>
				</nav>
			</div>
		</section>
	);
}