"use client"

import Image from "next/image";
import Background from "public/background/overview.jpg"
import CertItem1 from "public/static-images/cert-item-1.jpg"
import CertItem2 from "public/static-images/cert-item-2.jpg"
import CertItem3 from "public/static-images/cert-item-3.jpg"
import CertItem4 from "public/static-images/cert-item-4.jpg"
import CertItem5 from "public/static-images/cert-item-5.jpg"

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import './styles.css'

import { Navigation } from "swiper/modules";
import { useRef, useState } from "react";

const data = [
	{
		title: "PTE",
		imgSrc: CertItem1,
		content: "<p><strong>Chứng chỉ PTE (Pearson Test of English)</strong> là bài kiểm tra đánh giá khả năng sử dụng tiếng Anh trong các tình huống giao tiếp hằng ngày.<br/><br/> Nó có hai loại chứng chỉ: <strong>PTE General</strong> (đánh giá khả năng sử dụng tiếng Anh trong cuộc sống hàng ngày) và <strong>PTE Academic</strong> (đánh giá khả năng học thuật cho du học và nghiên cứu).</p>"
	},
	{
		title: "Các cấp trình độ",
		imgSrc: CertItem2,
		content: "<p><strong>PTE General:</strong> Đánh giá khả năng sử dụng tiếng Anh trong giao tiếp cơ bản và tương tác xã hội. <br/><br/><strong>PTE Academic:</strong> Đánh giá khả năng sử dụng tiếng Anh trong môi trường học thuật, phục vụ cho du học và nghiên cứu.</p>"
	},
	{
		title: "Giá trị",
		imgSrc: CertItem3,
		content: "<p>Chứng chỉ PTE cung cấp cơ hội cải thiện khả năng ngôn ngữ, mở ra cánh cửa cho việc làm và học tập ở nước ngoài, và đóng vai trò quan trọng trong việc xây dựng hồ sơ chuyên nghiệp.</p>"
	},
	{
		title: "PTE",
		imgSrc: CertItem4,
		content: "<p><strong>Chứng chỉ PTE (Pearson Test of English)</strong> là bài kiểm tra đánh giá khả năng sử dụng tiếng Anh trong các tình huống giao tiếp hằng ngày. Nó có hai loại chứng chỉ: <strong>PTE General</strong> (đánh giá khả năng sử dụng tiếng Anh trong cuộc sống hàng ngày) và <strong>PTE Academic</strong> (đánh giá khả năng học thuật cho du học và nghiên cứu).</p>"
	},
	{
		title: "PTE",
		imgSrc: CertItem5,
		content: "<p><strong>Chứng chỉ PTE (Pearson Test of English)</strong> là bài kiểm tra đánh giá khả năng sử dụng tiếng Anh trong các tình huống giao tiếp hằng ngày. Nó có hai loại chứng chỉ: <strong>PTE General</strong> (đánh giá khả năng sử dụng tiếng Anh trong cuộc sống hàng ngày) và <strong>PTE Academic</strong> (đánh giá khả năng học thuật cho du học và nghiên cứu).</p>"
	},
]

export default function Overview() {
	const [activeIndex, setActiveIndex] = useState(-1)
	const nextBtn = useRef(null);
	const prevBtn = useRef(null);

	const handleActiveItem = (index: number) => {
		setActiveIndex(index)
	}

	return (
		<section className="flex h-screen overflow-hidden flex-col items-center justify-center overview">
			<Image src={Background} width={1920} height={1080} alt="home background"
				className="absolute top-0 left-0 w-full h-full object-cover" />

			<div className="container z-20 text-center py-[10%]">
				<span className="text-[32px] font-svn">Thông tin chung về</span>
				<h2 className="font-bold text-[48px] text-[#FEE7B5]">Chứng chỉ PTE</h2>

				<div className="mx-auto mt-[65px] relative">
					<Swiper
						slidesPerView={4}
						spaceBetween={80}
						modules={[Navigation]}
						className="mySwiper"
						navigation={true}
					>
						{data.map((d, index) => 
							<SwiperSlide key={index}>
								<div className={`hover:rounded-full cursor-pointer overflow-hidden relative transition-all duration-300 ${activeIndex === index && "rounded-full"}`} onClick={() => handleActiveItem(index)}>
									<Image src={d.imgSrc} alt="certificate" width={280} height={280} className="object-cover w-full h-full" />
									<div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-sea/70 from-[30.71%] to-sea/10 to[100%] flex justify-center items-end pb-8 font-bold text-cyan text-[22px]">{d.title}</div>
								</div>
							</SwiperSlide>
						)}
					</Swiper>
				</div>

				{data.map((d, index) => 
					activeIndex === index && <div key={index} dangerouslySetInnerHTML={{__html: d.content}} className="container mt-[75px] mx-auto text-left max-w-[900px]"></div>
				)}
			</div>

			<div className="scroll-down-arrow">
				<span></span>
				<span></span>
				<span></span>
			</div>
		</section>
	);
}