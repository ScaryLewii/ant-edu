import Image from "next/image";
import Background from "public/background/schedule.jpg";


export default function Schedule() {
	return (
		<main className="flex flex-col items-center justify-center">
			<Image src={Background} width={1920} height={1080} alt="home background"
				className="absolute top-0 left-0 w-full h-full object-cover" />
			
			<div className="container flex items-center justify-around z-20 h-full">
				<header className="w-[45%]">
					<h1 className="text-[48px] font-bold mb-[30px] text-glow">AI BOOSTED ENGLISH</h1>
					<i className="text-[18px]">Hãy bắt đầu với một vài câu hỏi về bạn để chúng mình có thể tìm ra lộ trình Khảo thí cho bạn một cách tối ưu nhất nhé!</i>
				</header>

				<form className="w-[45%] flex flex-col gap-[40px] px-[50px] py-[70px]
					backdrop-blur-md bg-[#00313D] bg-opacity-[0.05]
					rounded-[20px] border border-[#00313D] border-opacity-[0.01]
					shadow-[0px 4px 40px 0px] shadow-[rgba(0, 0, 0, 0.10)]">
						<div>
							<label htmlFor="city" className="block mb-[20px]">Bạn đang ở đâu vậy?</label>
							<select id="city" className="bg-transparent border rounded-[14px] focus:ring-cyan block w-full px-[20px] py-[15px]">
								<option className="text-black" value="HN">Hà Nội</option>
								<option className="text-black" value="DN">Đà Nẵng</option>
								<option className="text-black" value="HCM">Tp. Hồ Chí Minh</option>
							</select>
						</div>

						<div>
							<label htmlFor="city" className="block mb-[20px]">Bạn đang muốn đặt lịch thi cho chứng chỉ?</label>
							<select id="city" className="bg-transparent border rounded-[14px] focus:ring-cyan block w-full px-[20px] py-[15px]">
								<option className="text-black" value="HN">IELTS Academic</option>
								<option className="text-black" value="DN">IELTS Academic 2</option>
							</select>
						</div>

						<div>
							<label htmlFor="city" className="block mb-[20px]">Bạn đang tìm hiểu cho</label>
							<select id="city" className="bg-transparent border rounded-[14px] focus:ring-cyan block w-full px-[20px] py-[15px]">
								<option className="text-black" value="HN">Cá nhân</option>
								<option className="text-black" value="DN">Tổ chức</option>
							</select>
						</div>

						<div className="text-center mt-[60px]"><button className="px-[34px] py-[15px] bg-cyan hover:bg-opacity-80 rounded-[9px]">Tiếp theo</button></div>
				</form>
			</div>
		</main>
	);
}