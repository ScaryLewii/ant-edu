"use client"

import Image from "next/image";
import Link from "next/link";
import Background from "public/background/practice.jpg";
import P1 from "public/static-images/p-1.jpg";
import P2 from "public/static-images/p-2.jpg";
import P3 from "public/static-images/p-3.jpg";
import P4 from "public/static-images/p-4.jpg";

const data = [
	{
		title: "Test trình độ",
		imgSrc: P1,
		content: "Cung cấp kiểm tra trình độ tiếng Anh với các bài test 4 kỹ năng áp dụng công nghệ AI, nhận kết quả ngay sau 72 giờ.",
		btnLabel: "Test ngay",
		url: "/page-not-found",
		target: "_blank"
	},
	{
		title: "Các khóa học cơ bản",
		imgSrc: P2,
		content: "Các khóa học cơ bản giúp người học nhanh chóng đạt mục tiêu thi lấy chứng chỉ với thời gian và chi phí thấp nhất.",
		btnLabel: "Chi tiết",
		url: "#"
	},
	{
		title: "Các khóa học luyện thi",
		imgSrc: P3,
		content: "Các khóa học luyện thi giúp người học nhanh chóng đạt mục tiêu thi lấy chứng chỉ với thời gian và chi phí thấp nhất.",
		btnLabel: "Chi tiết",
		url: "#"
	},
	{
		title: "Tài liệu ôn thi",
		imgSrc: P4,
		content: "Chúng tôi cung cấp cho bạn danh sách các tài liệu ôn thi IELTS có sẵn, bao gồm sách giáo trình, tài liệu tham khảo và bộ đề thi mẫu.",
		btnLabel: "Chi tiết",
		url: "/documents",
		target: "_blank"
	},
]

export default function Practice() {
	return (
		<section className="flex flex-col items-center justify-center practice relative min-h-screen">
			<Image src={Background} width={1920} height={1080} alt="home background"
				className="absolute top-0 left-0 w-full h-full object-cover" />

			<div className="text-center z-20">
				<h2 className="font-bold text-[40px] text-light">Luyện thi CEFR</h2>

				<div className="container mx-auto mt-[140px] flex items-center justify-center gap-[40px]">
					{data.map((d, index) =>
						<div key={index} className="relative group">
							<Image alt={d.title} src={d.imgSrc} />
							<div className="absolute top-0 left-0 w-full h-full bg-sea bg-opacity-20 hidden group-hover:block"></div>
							
							<div className="absolute bottom-0 left-0 pb-[30px] px-[30px] w-full text-center z-[1]">
								<h3 className="font-bold text-[18px]">{d.title}</h3>
								
								<div className="hidden group-hover:block">
									<p className="mt-[10px] mb-[20px] text-[14px]">{d.content}</p>
									<Link href={d.url} className="inline-block bg-cyan rounded-[9px] w-[114px] py-[10px]" target={d.target}>{d.btnLabel}</Link>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</section>
	);
}