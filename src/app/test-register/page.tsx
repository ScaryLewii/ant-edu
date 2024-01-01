"use client"

import Image from "next/image";
import Background from "public/background/test-register.jpg";
import Decorate from "public/background/decorate.jpg";
import { useState } from "react";
import Link from "next/link";
import { ContactUs, RightArrow } from "../_components/assets/icons";
import patternBg from "public/background/pattern.png"

interface IFormData {
	fullname: string;
	email: string;
	phone: string;
	title: string;
	content: string;
}

export default function Contact() {
	const [step, setStep] = useState(1)
	const [formData, setFormData] = useState<IFormData>({
		fullname: '',
		email: '',
		phone: '',
		title: '',
		content: '',
	})

	const handleSubmit = async () => {
		const requestInit: RequestInit = { 
			headers: {
				"Content-Type": "application/json",
			},
			method: 'POST',
			body: JSON.stringify(formData)
		}
		const data = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "fqa-systems", requestInit)
		const result = await data.text()
		const jsonResult = JSON.parse(result) as {
			data: object,
			isSuccess: boolean,
			errors: object
		}

		if (jsonResult.isSuccess) {
			setStep(3)
		}
	}
	
	return (
		<main className="flex flex-col items-center justify-center relative min-h-screen">
			<Image src={Background} width={1920} height={1080} alt="home background"
				className="absolute top-0 left-0 w-full h-full object-cover" />

			{step === 1 && <section className="w-full relative z-20 py-[100px]">
				<Image src={Decorate} width={400} height={800} alt="home background"
					className="absolute top-1/2 -translate-y-1/2 right-0 h-[95%] object-cover" />

				<div className="container flex justify-between items-center relative z-10 pl-[90px] mx-auto bg-[#001730] bg-opacity-40">
					<div className="absolute top-1/2 -translate-y-1/2 left-0 bg-cyan h-1/2 w-[17px] rounded-tr-[20px] rounded-br-[20px]"></div>

					<div className="flex flex-col gap-[40px] py-[90px]">
						<p>Hãy liên hệ với chúng tôi qua Hotline nếu bạn cần thông tin luôn nhé!</p>
						<div className="flex flex-col gap-[10px]">
							<h2 className="text-[18px] font-bold mb-[18px]">Công ty Cổ Phần giáo dục và đào tạo ANT EDU</h2>
							<p>Địa chỉ: Tầng 2 Sevin Office, 609 Trương Định, Hoàng Mai, Hà Nội</p>
							<Link href="#" target="_blank">Xem bản đồ</Link>
							<p>Hotline: <Link href="tel:0922985555" className="text-cyan">092 298 5555</Link></p>
							<p>Email: <Link href="mailto:info@ant-edu.vn" className="text-cyan">Info@ant-edu.vn</Link></p>
						</div>
					</div>

					<div className="flex flex-col gap-[100px] px-[60px] py-[30px] h-full bg-cyan w-[30%]">
						<ContactUs />

						<p className="text-black text-[14px]">Hãy nhấn vào nút Liên hệ trực tuyến để gửi thư cho chúng tôi</p>

						<button className="flex justify-between items-center group hover:fill-white"
							onClick={() => setStep(2)}
						>
							<span className="font-bold text-black whitespace-nowrap group-hover:text-white">Liên hệ trực tuyến</span>
							<RightArrow />
						</button>
					</div>
				</div>
			</section>}

			{step === 2 && <section className="w-full relative z-20 py-[100px]">
				<div className="container mx-auto bg-[#001730] bg-opacity-40 relative px-[130px] py-[50px]">
					<div className="absolute top-0 left-1/2 -translate-x-1/2 bg-cyan w-1/2 h-[17px] rounded-bl-[20px] rounded-br-[20px]"></div>

					<h2 className="text-[32px] font-bold text-cyan text-center mb-[30px]">Gửi tin nhắn</h2>

					<form action={handleSubmit}>
						<div className="flex justify-between">
							<div className="flex flex-col gap-[20px] w-[45%]">
								<label className="font-bold">Họ và tên *</label>
								<input type="text" onChange={e => setFormData(data => ({...data, fullname: e.target.value}))} placeholder="Enter here" className="bg-transparent border rounded-[14px] focus:ring-cyan block w-full px-[20px] py-[15px]" />
							</div>

							<div className="flex flex-col gap-[20px] w-[45%]">
								<label htmlFor="city" className="font-bold">Câu hỏi của bạn là về?</label>
								<select id="city" className="bg-transparent border rounded-[14px] focus:ring-cyan block w-full px-[20px] py-[15px]" onChange={e => setFormData(data => ({...data, title: e.target.value}))}>
									<option className="text-black" value="">Chọn câu hỏi</option>
									<option className="text-black" value="Khóa học IELTS offline tại Hà Nội">Khóa học IELTS offline tại Hà Nội</option>
									<option className="text-black" value="Khóa học IELTS online">Khóa học IELTS online</option>
									<option className="text-black" value="Khóa học Tiếng Anh online">Khóa học Tiếng Anh online</option>
								</select>
							</div>
						</div>

						<div className="flex justify-between mt-[20px]">
							<div className="flex flex-col gap-[20px] w-[45%]">
								<div className="flex flex-col gap-[20px]">
									<label className="font-bold">Email  *</label>
									<input type="email" placeholder="Enter here" className="bg-transparent border rounded-[14px] focus:ring-cyan block w-full px-[20px] py-[15px]" onChange={e => setFormData(data => ({...data, email: e.target.value}))} />
								</div>

								<div className="flex flex-col gap-[20px]">
									<label className="font-bold">Số điện thoại *</label>
									<input type="text" placeholder="Enter here" className="bg-transparent border rounded-[14px] focus:ring-cyan block w-full px-[20px] py-[15px]" onChange={e => setFormData(data => ({...data, phone: e.target.value}))} />
								</div>
							</div>

							<div className="flex flex-col gap-[20px] w-[45%]">
								<label className="font-bold">Câu hỏi</label>
								<textarea placeholder="Viết câu hỏi của bạn tại đây..." className="bg-transparent border rounded-[14px] focus:ring-cyan block w-full px-[20px] py-[15px] h-full" onChange={e => setFormData(data => ({...data, content: e.target.value}))} />
							</div>
						</div>

						<div className="mt-[30px] mb-[20px]">
						AI Boosted sẽ sử dụng thông tin cá nhân của bạn để các yêu cầu phát sinh từ phía bạn được xử lý, bao gồm cả việc liên hệ với bạn để thực hiện yêu cầu này. Chúng tôi không chia sẻ thông tin của bạn tới bất cứ bên nào khác. Bằng việc nhấn nộp/gửi, bạn đã khẳng định bạn đồng ý với các điều khoản về quyền riêng tư và quy định về sử dụng (hợp đồng) của chúng tôi. 

Bảo vệ dữ liệu

AI Boosted tuân thủ luật bảo vệ dữ liệu theo quy định của pháp luật Việt Nam và các đối tác Quốc tế mà AI Boosted ký kết hợp tác.

Bạn có quyền yêu cầu một bản sao thông tin của bạn mà chúng tôi nắm giữ và bạn cũng có quyền yêu cầu chúng tôi sửa bất kỳ thông tin không chính xác nào trong thông tin đó. Nếu bạn có thắc mắc về việc chúng tôi đã sử dụng thông tin cá nhân của bạn như thế nào, bạn cũng có quyền khiếu nại với cơ quan quản lý quyền riêng tư. 

Để biết thông tin chi tiết, vui lòng tham khảo phần bảo mật cá nhân trên trang web của chúng tôi hoặc liên hệ với chúng tôi. Chúng tôi sẽ giữ thông tin của bạn theo chính sách lưu trữ của chúng tôi từ thời điểm nhận thông tin
						</div>

						<div className="flex">
							<label>
								<input type="checkbox" />
								<span className="ml-[13px]">Tôi đã đọc và chấp nhận chính sách về bảo mật thông tin và quy định sử dụng của AI Boosted</span>
							</label>
						</div>

						<div className="text-center">
							<button className="font-bold text-[18px] py-[15px] px-[86px] bg-cyan hover:bg-opacity-80 rounded-[9px] inline-block mx-auto mt-[30px]">
								Gửi
							</button>
						</div>
					</form>
				</div>
			</section>}

			{step === 3 && <section className="w-full min-h-screen relative z-20 py-[100px] flex items-center">

				<div className="container mx-auto min-h-[600px] flex items-center justify-center bg-[#001730] bg-opacity-40 relative px-[130px] py-[50px] text-center">
					<Image src={patternBg} width={900} height={478} alt="background" className="absolute bottom-0 left-0 w-full object-cover" />
					<div className="absolute top-0 left-1/2 -translate-x-1/2 bg-cyan w-1/2 h-[17px] rounded-bl-[20px] rounded-br-[20px]"></div>

					<div className="relative z-10">
						<h2 className="text-[32px] font-bold text-cyan text-center mb-[30px]">ĐĂNG KÝ THÀNH CÔNG</h2>

						<div className="text-[16px] italic font-medium mt-[80px] mb-[120px]">Cảm ơn bạn đã quan tâm. AI Boosted English đã nhận được thông tin của bạn, <br />và sẽ liên hệ với bạn trong thời gian sớm nhất,</div>

						<Link href="/" className="rounded-[9px] bg-cyan px-[39px] py-[13px] font-bold">Trở về trang chủ</Link>
					</div>
				</div>

			</section>}
		</main>
	);
}