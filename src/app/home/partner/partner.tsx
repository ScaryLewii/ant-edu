import Image from "next/image";
import Background from "public/background/partner.jpg";
import P1 from "public/static-images/p1.png"
import P2 from "public/static-images/p2.png"
import P3 from "public/static-images/p3.png"
import P4 from "public/static-images/p4.png"
import P5 from "public/static-images/p5.png"
import P6 from "public/static-images/p6.png"
import P7 from "public/static-images/p7.png"
import P8 from "public/static-images/p8.png"
import P9 from "public/static-images/p9.png"
import P10 from "public/static-images/p10.png"
import P11 from "public/static-images/p11.png"
import P12 from "public/static-images/p12.png"
import P13 from "public/static-images/p13.png"
import P14 from "public/static-images/p14.png"

const partners1 = [
	{imgSrc: P1},
	{imgSrc: P2},
	{imgSrc: P3},
	{imgSrc: P4},
]

const partners2 = [
	{imgSrc: P5},
	{imgSrc: P6},
	{imgSrc: P7},
	{imgSrc: P8},
]

const partners3 = [
	{imgSrc: P9},
	{imgSrc: P10},
	{imgSrc: P11},
	{imgSrc: P12},
	{imgSrc: P13},
	{imgSrc: P14},
]

export default function Partner() {
	return (
		<section className="flex lg:h-screen overflow-hidden flex-col items-center justify-end relative py-[90px] lg:py-0">
			<Image src={Background} width={1920} height={1080} alt="home background"
				className="absolute top-0 left-0 w-full h-full object-cover" />

			<div className="container flex flex-col items-center justify-center z-20 text-center">
				<header>
					<h1 className="ext-[24px] lg:text-[48px] font-bold text-glow">Đối tác của chúng tôi</h1>
					<i className="text-[12px] lg:text-[18px] font-bold mt-[30px]">Bạn hãy chọn một bài thi và khám phá!</i>
				</header>
			</div>

			<section className="bg-[#001730] bg-opacity-40 py-[80px] z-20 w-full mt-[90px] px-[15px]">
				<div className="container mx-auto">
					<div className="flex flex-wrap justify-center items-center gap-[20px] lg:gap-[100px]">
						{partners1.map((img, index) =>
							<Image key={index} src={img.imgSrc} width={140} height={50} className="object-contain" alt="partner" />	
						)}
					</div>

					<div className="flex flex-wrap justify-center items-center gap-[20px] lg:gap-[100px] my-[50px]">
						{partners2.map((img, index) =>
							<Image key={index} src={img.imgSrc} width={100} height={30} className="object-contain" alt="partner" />	
						)}
					</div>

					<div className="flex flex-wrap justify-center items-center gap-[20px] lg:gap-[120px]">
						{partners3.map((img, index) =>
							<Image key={index} src={img.imgSrc} width={60} height={60} className="object-contain" alt="partner" />	
						)}
					</div>
				</div>
			</section>
		</section>
	);
}