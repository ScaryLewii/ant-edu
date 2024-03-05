"use client"

import Image from "next/image";
import Background from "public/background/overview.jpg";
import Pte1 from "public/static-images/pte1.jpg";
import Pte2 from "public/static-images/pte2.jpg";
import Pte3 from "public/static-images/pte3.jpg";
import Pte5 from "public/static-images/pte5.jpg";
import Pte6 from "public/static-images/pte6.jpg";
import Pte8 from "public/static-images/pte8.jpg";

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import './styles.css';

import { useState } from "react";
import { Navigation } from "swiper/modules";
import ConvertTable from "~/app/_components/common/table";

const data = [
	{
		title: "Tổng quan về PTE",
		imgSrc: Pte1,
		content: `
			<div>
			<p><strong>Chứng chỉ PTE (Pearson Test of English)</strong> là bài kiểm tra đánh giá khả năng sử dụng tiếng Anh trong các tình huống giao tiếp hằng ngày. </p>

			<p>Nó có hai loại chứng chỉ: <strong>PTE General</strong> (đánh giá khả năng sử dụng tiếng Anh trong cuộc sống hàng ngày) và <strong>PTE Academic</strong> (đánh giá khả năng học thuật cho du học và nghiên cứu).</p>
			<p><strong>PTE General:</strong> Đánh giá khả năng sử dụng tiếng Anh trong giao tiếp cơ bản và tương tác xã hội. </p>
			
			<p><strong>PTE Academic:</strong> Đánh giá khả năng sử dụng tiếng Anh trong môi trường học thuật, phục vụ cho du học và nghiên cứu.<br>
			Chứng chỉ PTE cung cấp cơ hội cải thiện khả năng ngôn ngữ, mở ra cánh cửa cho việc làm và học tập ở nước ngoài, và đóng vai trò quan trọng trong việc xây dựng hồ sơ chuyên nghiệp.<br>
			Kỳ thi PTE được tổ chức trực tuyến và có thể thi bất kỳ lúc nào trong năm. Thí sinh sẽ được yêu cầu hoàn thành bài kiểm tra trong một phòng thi an toàn với hệ thống ghi âm và microphone.</p>
			
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
		content: "<div style='text-align:center'><p>Các khóa học cơ bản giúp người học nhanh chóng đạt mục tiêu thi lấy chứng chỉ với thời gian và chi phí thấp nhất.</p><a class='bg-cyan px-[50px] py-[13px] rounded-[9px] hover:bg-opacity-80 inline-block mt-8 font-bold' target='_blank' href='https://pte.ant-edu.ai/khoa-hoc-pte' target='_blank'>Khóa học luyện thi</a></div>"
	},
	{
		title: "Test trình độ",
		imgSrc: Pte6,
		content: `
		<div>
			<p>Tại sao bạn nên chọn kiểm tra trình độ tiếng Anh của mình tại AI Boosted English?
			<br />Miễn Phí và Tiện Lợi: Kiểm tra trình độ tiếng Anh của bạn mà không mất phí. Trải nghiệm kiểm tra tại đây là đơn giản và thuận tiện.</p>
			
			<div class="mt-8 flex items-center justify-center gap-[30px]">
				<a href="https://ant-edu.ai/#testlist" target="_blank" class="rounded-[9px] bg-cyan px-[39px] py-[13px] font-bold">Test trình độ</a>
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
					<a href="/page-not-found" target="_blank" class="rounded-[9px] border border-cyan px-[39px] py-[13px] font-bold">Hướng dẫn thi</a>
					<a href="/documents" target="_blank" class="rounded-[9px] bg-cyan px-[39px] py-[13px] font-bold">Tài liệu ôn thi</a>
					<a href="/page-not-found" target="_blank" class="rounded-[9px] border border-cyan px-[39px] py-[13px] font-bold">Câu hỏi thường gặp</a>
				</div>
			</div>
		`
	},
	{
		title: "Các cấp trình độ",
		imgSrc: Pte5,
		content: "<p><strong>PTE General:</strong> Đánh giá khả năng sử dụng tiếng Anh trong giao tiếp cơ bản và tương tác xã hội. <br/><br/><strong>PTE Academic:</strong> Đánh giá khả năng sử dụng tiếng Anh trong môi trường học thuật, phục vụ cho du học và nghiên cứu.</p>"
	},
	{
		title: "Cộng đồng",
		imgSrc: Pte8,
		content: `
			<div class="text-center">
				<i>Ant Edu tự hào là sở hữu các cộng đồng người học tiếng Anh lớn nhất Việt Nam với nhiều Fanpage, Group chia sẻ kiến thức, phương pháp học cho cả học viên và giáo viên. Người học có thể tìm hiểu thêm nhiều kiến thức thú vị, trao đổi và  giao lưu, kết nối để đạt được hiệu quả học tập và công việc.</i>
			
				<div class="mt-8 flex items-center justify-center gap-[40px]">
					<a href="https://pte.ant-edu.ai/khoa-hoc-pte" target="_blank" class="font-bold">Website</a>
					<a href="https://www.facebook.com/PTE.Booster/" target="_blank" class="font-bold">Facebook</a>
					<a href="/page-not-found" target="_blank" class="font-bold">Tiktok</a>
					<a href="/page-not-found" target="_blank" class="font-bold">Youtube</a>
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
			<div className="container z-20 text-center pt-[10%] py-20">
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
					activeIndex === index && (
						<>
							<div key={index} dangerouslySetInnerHTML={{__html: d.content}} className="container mt-[75px] mx-auto text-left max-w-[900px]"></div>
							{index === 4 && <ConvertTable />}
						</>
					)
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