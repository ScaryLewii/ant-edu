import { type StaticImageData } from "next/image";
import Background from "public/background/certificate.jpg";
import C2 from "public/static-images/c-2.jpg";
import C3 from "public/static-images/c-3.jpg";
import C4 from "public/static-images/c-4.jpg";
import C5 from "public/static-images/c-5.jpg";
import C1 from "public/static-images/c1.png";


import 'swiper/css';
import 'swiper/css/effect-coverflow';

import './styles.css';

import Link from "next/link";
import Block from "~/app/_components/layout/block";
import Carousel1 from "./carousel-1";

export interface IData {
	imgSrc: StaticImageData
}

const data = [
	{
		imgSrc: C1,
	},
	{
		imgSrc: C3,
	},
	{
		imgSrc: C5,
	},
	{
		imgSrc: C4,
	},
	{
		imgSrc: C2,
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
		<Block id="certificate" backgroundSrc={Background} childrenClassName="container flex flex-col justify-center items-center z-20 h-full ">
			<>
				<h1 className="font-bold text-[40px] mb-[16px] text-glow">Chứng chỉ</h1>
				<i>Bạn hãy chọn một bài thi và khám phá!</i>

				<div className="mt-[50px] home-cert">
					<Carousel1 data={data} />
				</div>

				<nav className="mt-[50px]">
					<ul className="flex justify-center gap-[20px] xl:gap-[60px] flex-wrap">
						{bottomNav.map((item, index) =>
							<li key={index} className="group">
								<Link className="text-[16px] mb-1 block" href={item.href}>{item.label}</Link>
								<span className="border border-transparent block w-full group-hover:border-white"></span>
							</li>
						)}
					</ul>
				</nav>
			</>
		</Block>
	);
}