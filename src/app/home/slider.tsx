"use client"

import Image from "next/image";
import VisionImg from "public/background/vision.jpg"
import ApparatusImg from "public/background/apparatus.jpg"
import ValueImg from "public/background/value.jpg"
import MissionImg from "public/background/mission.jpg"
import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";

const data = [
	{
		id: 1,
		imgSrc: VisionImg,
		title: "Tầm nhìn",
		content: "<p>Trở thành hệ thống đào tạo ngoại ngữ đa nền tảng uy tín nhất tại Việt Nam</p>"
	},
	{
		id: 2,
		imgSrc: MissionImg,
		title: "Sứ mệnh",
		content: `
		<p>- Đem lại môi trường học ngoại ngữ trực tuyến tốt nhất cho hơn 90 triệu người dân Việt Nam.</p><br />
		<p>- Kết nối người học với đội ngũ giáo viên chất lượng cao mà không phụ thuộc vào khu vực địa lý.</p><br />
		<p>- Kết nối cộng đồng, chia sẻ kiến thức, góp phần nâng tầm ngoại ngữ người Việt.</p>
		`
	},
	{
		id: 3,
		imgSrc: ValueImg,
		title: "Gá trị cốt lõi",
		content: `
		<p>- Nỗ lực thật, giá trị thật</p><br />
		<p>- Không ngừng sáng tạo, không ngừng đổi mới</p><br />
		<p>- Trung thực và uy tín</p><br />
		<p>- Kỷ luật và trách nhiệm</p><br />
		<p>- Đoàn kết cùng phát triển</p>
		`
	},
	{
		id: 4,
		imgSrc: ApparatusImg,
		title: "Bộ máy",
		content: `
		<p><b>- Khảo thí viên</b></p>
		<p>+ Nhận thông tin đăng ký thi. Hỗ trợ và giải đáp thắc mắc từ người tham gia thi</p>
		<p>+ Cung cấp thông tin và tư vấn về thi khảo thí </p>
		<br />
		<p><b>- Giám sát viên</b></p>
		<p>+ Chuẩn bị và thiết lập phòng thi cho các kỳ thi</p>
		<p>+ Chịu trách nhiệm tổ chức các kỳ thi và đảm bảo tuân thủ quy trình và quy định của tổ chức khảo thí</p>
		<br />
		<p><b>- Ban Giám đốc trung tâm</b></p>
		<p>+ Lập kế hoạch phát triển và triển khai hoạt động của trung tâm</p>
		<p>+ Điều hành các hoạt động của Trung tâm </p>
		<p>+ Phối hợp và triển khai các hoạt động với đối tác</p>
		`
	},
]

export default function Slider() {
	const [activeIndex, setActiveIndex] = useState(0)

	useEffect(() => {
		isMobile && setActiveIndex(1)
		!isMobile && setActiveIndex(0)
	}, [])

	return (
		<div className="flex gap-[20px] flex-col xl:flex-row flex-1 items-end w-full">
			<div className="flex gap-[20px] justify-center xl:justify-start">
				{data.map(d =>
					<div key={d.id}
						className={`cursor-pointer
							rounded-[14px] relative w-[150px] h-[315px] overflow-hidden transition-all duration-300
							${activeIndex !== 0 ? activeIndex === d.id ? "w-[150px]" : "w-[30px]" : "w-[150px]"}
						`}
						onMouseEnter={() => setActiveIndex(d.id)}
					>
						<Image src={d.imgSrc} alt={d.title} className="absolute h-full object-cover" />
						{activeIndex == 0 &&
							<>
								<div className="absolute top-0 left-0 bottom-0 right-0 bg-black bg-opacity-30"></div>
								<h2 className="text-[20px] whitespace-nowrap font-bold absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-[1]">{d.title}</h2>
							</>
						}
					</div>
				)}
			</div>

			{activeIndex !==0 &&
				<div className="ml-5 relative flex-1 pt-[300px] lg:pb-[100px] lg:h-full w-full mt-[50px] xl:mt-0">
					{data.map(d => 
						<div key={d.id} 
							className={`flex flex-col justify-center
								xl:absolute bottom-0 min-h-full max-w-[90%]
								transition-all duration-300
								${activeIndex === d.id ? "translate-y-0 block" : "translate-y-1/3 none"}
							`}
						>
							<div className={`flex flex-col gap-[20px] items-center justify-center text-center transition-all duration-[5000]
								${activeIndex === d.id ? "opacity-100 visible" : "opacity-0 hidden"}`}
							>
								<h3 className="text-[24px] text-cyan font-bold ">{d.title}</h3>
								<div dangerouslySetInnerHTML={{__html: d.content}} className="text-left"></div>
							</div>
						</div>
					)}
				</div>
			}
		</div>
	)
}