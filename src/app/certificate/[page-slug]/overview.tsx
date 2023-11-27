"use client"

import Image from "next/image";
import Background from "public/background/cert-bg-1.jpg"
import CertItem1 from "public/static-images/cert-item-1.jpg"
import CertItem2 from "public/static-images/cert-item-2.jpg"
import CertItem3 from "public/static-images/cert-item-3.jpg"
import CertItem4 from "public/static-images/cert-item-4.jpg"
import CertItem5 from "public/static-images/cert-item-5.jpg"

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import './styles.css'

import Link from "next/link";
import { Navigation } from "swiper/modules";

export default function Overview() {
	return (
		<main className="flex h-screen overflow-hidden flex-col items-center justify-center">
			<Image src={Background} width={1920} height={1080} alt="home background"
				className="absolute top-0 left-0 w-full h-full object-cover" />

			<div className="container z-20 h-full text-center pt-[10%]">
				<span className="text-[32px] font-svn">Thông tin chung về</span>
				<h1 className="font-bold text-[48px] text-[#FEE7B5]">Chứng chỉ PTE</h1>

				<div className="mx-auto mt-[65px]">
					<Swiper
						slidesPerView={4}
						spaceBetween={80}
						navigation={true}
						modules={[Navigation]}
						className="mySwiper"
					>
						
						<SwiperSlide>
							<div></div>
							<Image src={CertItem1} alt="certificate" width={280} height={280} className="object-cover w-full h-full" />
						</SwiperSlide>

						<SwiperSlide>
							<div></div>
							<Image src={CertItem2} alt="certificate" width={280} height={280} className="object-cover w-full h-full" />
						</SwiperSlide>

						<SwiperSlide>
							<div></div>
							<Image src={CertItem3} alt="certificate" width={280} height={280} className="object-cover w-full h-full" />
						</SwiperSlide>

						<SwiperSlide>
							<div></div>
							<Image src={CertItem4} alt="certificate" width={280} height={280} className="object-cover w-full h-full" />
						</SwiperSlide>

						<SwiperSlide>
							<div></div>
							<Image src={CertItem5} alt="certificate" width={280} height={280} className="object-cover w-full h-full" />
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</main>
	);
}