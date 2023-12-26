"use client"

import Image from "next/image";
import Background from "public/background/overview.jpg";
import Pte1 from "public/static-images/ielts1.jpg";
import Pte2 from "public/static-images/ielts2.jpg";
import Pte3 from "public/static-images/ielts3.jpg";
import Pte5 from "public/static-images/ielts5.jpg";
import Pte6 from "public/static-images/ielts6.jpg";
import Pte8 from "public/static-images/ielts8.jpg";

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import './styles.css';

import { useState } from "react";
import { Navigation } from "swiper/modules";

const data = [
	{
		title: "Tổng quan về IELTS",
		imgSrc: Pte1,
		content: `
			<div>
			<p><strong>Chứng chỉ IELTS (International English Language Testing System)</strong> là một trong những chứng chỉ tiếng Anh quốc tế phổ biến nhất. Nó được công nhận rộng rãi và được sử dụng để đánh giá khả năng sử dụng tiếng Anh trong môi trường học tập, làm việc và giao tiếp hàng ngày.</p>

			<p><strong>IELTS có hai hình thức thi chính:</strong> IELTS Academic dành cho người học muốn du học hoặc nghiên cứu ở nước ngoài, và IELTS General Training dành cho mục đích di cư hoặc làm việc ở nước ngoài. Chứng chỉ này đo lường bốn kỹ năng: Nghe, Đọc, Viết và Nói.</p>
			
			<p><strong>IELTS gồm các cấp trình độ từ 1 đến 9,</strong> trong đó cấp 1 đại diện cho người không sử dụng tiếng Anh và cấp 9 đại diện cho người sử dụng tiếng Anh giỏi như người bản xứ. 

				Mỗi cấp trình độ phản ánh khả năng sử dụng tiếng Anh trong các tình huống khác nhau, từ cơ bản đến chuyên sâu. Đối với mỗi cấp trình độ, bạn sẽ phải vượt qua các phần kiểm tra Nghe, Đọc, Viết và Nói tương ứng.</p>
			<p>Thời gian thi thường khoảng 3 giờ tùy theo loại chứng chỉ.</p>
				<div>
					<a href="#">Xem lịch thi chính thức</a>
					<a href="#">Đăng ký thi chính thức</a>
				</div>
			</div>
		`
	},
	{
		title: "Các khóa học",
		imgSrc: Pte2,
		content: "<div style='text-align:center'><p>Các khóa học cơ bản giúp người học nhanh chóng đạt mục tiêu thi lấy chứng chỉ với thời gian và chi phí thấp nhất.</p><a class='bg-cyan px-[50px] py-[13px] rounded-[9px] hover:bg-opacity-80 inline-block mt-8' href='https://therealielts.vn/lo-trinh-hoc-ielts/'>Khóa học luyện thi</a></div>"
	},
	{
		title: "Test trình độ",
		imgSrc: Pte6,
		content: `
		<div>
			<p>Chúng tôi sẽ hỗ trợ bạn hoàn thiện thủ tục đăng ký nhanh chóng và hiệu quả nhất. Tại đây, bạn có thể chọn lịch thi phù hợp, điền thông tin cá nhân và thực hiện thanh toán phí thi. Sau khi hoàn tất quy trình đăng ký, bạn sẽ nhận được xác nhận đăng ký cùng với thông tin chi tiết về thời gian và địa điểm thi.</p>
			
			<div class="mt-8 flex items-center justify-center gap-[30px]">
				<a href="https://ant-edu.ai/#testlist" class="rounded-[9px] bg-cyan px-[39px] py-[13px] font-bold">Đăng ký ngay</a>
			</div>
		</div>`
	},
	{
		title: "Tài liệu",
		imgSrc: Pte3,
		content: `
			<div class="text-center">
				<p>Chúng tôi sẽ cùng bạn chuẩn bị tốt nhất cho kỳ thi sắp tới nhé!</p>

				<div class="mt-8 flex items-center justify-center gap-[30px]">
					<a href="/404" class="rounded-[9px] border border-cyan px-[39px] py-[13px] font-bold">Hướng dẫn thi</a>
					<a href="#" class="rounded-[9px] bg-cyan px-[39px] py-[13px] font-bold">Tài liệu ôn thi</a>
					<a href="/404" class="rounded-[9px] border border-cyan px-[39px] py-[13px] font-bold">Câu hỏi thường gặp</a>
				</div>
			</div>
		`
	},
	{
		title: "Cộng đồng",
		imgSrc: Pte8,
		content: `
			<div class="text-center">
				<i>Ant Edu tự hào là sở hữu các cộng đồng người học tiếng Anh lớn nhất Việt Nam với nhiều Fanpage, Group chia sẻ kiến thức, phương pháp học cho cả học viên và giáo viên. Người học có thể tìm hiểu thêm nhiều kiến thức thú vị, trao đổi và  giao lưu, kết nối để đạt được hiệu quả học tập và công việc.</i>
			
				<div class="mt-8 flex items-center justify-center gap-[40px]">
					<a href="https://ant-edu.ai/" target="_blank" class="font-bold">Website</a>
					<a href="https://www.facebook.com/profile.php?id=6155391951562" target="_blank" class="font-bold">Facebook</a>
					<a href="https://www.tiktok.com/@thereal.ielts" target="_blank" class="font-bold">Tiktok</a>
					<a href="https://www.youtube.com/@therealielts5724" target="_blank" class="font-bold">Youtube</a>
				</div>
			</div>
		`
	}
]

export default function Overview() {
	const [activeIndex, setActiveIndex] = useState(-1)

	const handleActiveItem = (index: number) => {
		setActiveIndex(index)
	}

	return (
		<section className="flex flex-col items-center justify-center overview min-h-screen relative" style={{background: `url(${Background.src}) center / cover` }}>
			<div className="container z-20 text-center py-[10%]">
				<span className="text-[32px] font-svn">Thông tin chung về</span>
				<h2 className="font-bold text-[48px] text-[#FEE7B5]">Chứng chỉ IELTS</h2>

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