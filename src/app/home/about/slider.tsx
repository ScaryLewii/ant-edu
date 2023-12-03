"use client"

import Image from "next/image";
import VisionImg from "public/background/vision.jpg"
import ApparatusImg from "public/background/apparatus.jpg"
import ValueImg from "public/background/value.jpg"
import MissionImg from "public/background/mission.jpg"
import { useState } from "react";

const data = [
	{
		id: 1,
		imgSrc: VisionImg,
		title: "Tầm nhìn",
		content: "“Trở thành hệ thống đào tạo ngoại ngữ đa nền tảng lớn nhất Việt Nam”"
	},
	{
		id: 2,
		imgSrc: MissionImg,
		title: "Sứ mệnh",
		content: "“Trở thành hệ thống đào tạo ngoại ngữ đa nền tảng lớn nhất Việt Nam”"
	},
	{
		id: 3,
		imgSrc: ValueImg,
		title: "Gá trị cốt lõi",
		content: "“Trở thành hệ thống đào tạo ngoại ngữ đa nền tảng lớn nhất Việt Nam”"
	},
	{
		id: 4,
		imgSrc: ApparatusImg,
		title: "Bộ máy",
		content: "“Trở thành hệ thống đào tạo ngoại ngữ đa nền tảng lớn nhất Việt Nam”"
	},
]

export default function Slider() {
	const [activeIndex, setActiveIndex] = useState(1)

	return (
		<div className="flex gap-[20px] flex-col xl:flex-row flex-1">
			<div className="flex gap-[20px] justify-center xl:justify-start">
				{data.map(d =>
					<div key={d.id}
						className={`cursor-pointer
							rounded-[14px] relative w-[150px] h-[315px] overflow-hidden transition-all duration-300
							${activeIndex !== 0 ? activeIndex === d.id ? "w-[150px]" : "w-[30px]" : "w-[150px]"}
						`}
						onClick={() => setActiveIndex(d.id)}
						onMouseEnter={() => setActiveIndex(d.id)}
					>
						<Image src={d.imgSrc} alt={d.title} className="absolute h-full object-cover" />
						<h2>{d.title}</h2>
					</div>
				)}
			</div>

			<div className="ml-5 relative flex-1 py-[100px] xl:h-full w-full mt-[50px] xl:mt-0">
				{data.map(d => 
					<div key={d.id} 
						className={`flex flex-col justify-center
							absolute top-1/2 h-full max-w-[90%]
							transition-all duration-300
							${activeIndex === d.id ? "-translate-y-1/2 block" : "-translate-y-1/3 none"}
						`}
					>
						<div className={`flex flex-col gap-[20px] items-center justify-center  transition-all duration-[5000]
							${activeIndex === d.id ? "opacity-100" : "opacity-0"}`}
						>
							<h2 className="text-[24px] text-cyan font-bold ">{d.title}</h2>
							<p>{d.content}</p>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}