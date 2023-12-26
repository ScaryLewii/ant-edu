import Background from "public/background/schedule.jpg";
import Block from "~/app/_components/layout/block";


export default function Schedule() {
	return (
		<Block id="schedule" childrenClassName="container flex flex-wrap items-center justify-around h-full" backgroundSrc={Background}>
			<>
				<header className="xl:w-[45%] max-w-[90%]">
					<h1 className="text-[24px] lg:text-[48px] font-bold mb-[20px] lg:mb-[30px] text-glow">AI BOOSTED ENGLISH</h1>
					<i className="text-[12px] lg:text-[18px]">Hãy bắt đầu với một vài câu hỏi về bạn để chúng mình có thể tìm ra lộ trình Khảo thí cho bạn một cách tối ưu nhất nhé!</i>
				</header>

				<form className="xl:w-[45%] flex flex-col gap-[40px] 
					px-[15px] py-[30px] xl:px-[50px] xl:py-[70px]
					mt-[30px] xl:mt-0
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
			</>
		</Block>
	);
}