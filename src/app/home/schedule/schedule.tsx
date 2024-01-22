import Background from "public/background/schedule.jpg";
import Block from "~/app/_components/layout/block";


export default function Schedule() {
	return (
		<Block id="schedule" childrenClassName="container flex flex-wrap items-center justify-around h-full" backgroundSrc={Background}>
			<>
				<header className="w-full xl:w-[45%] max-w-[90%]">
					<h2 className="text-[24px] lg:text-[48px] font-bold mb-[20px] lg:mb-[30px] text-glow">AI BOOSTED ENGLISH</h2>
					<i className="text-[12px] lg:text-[18px]">Hãy bắt đầu với một vài câu hỏi về bạn để chúng mình có thể tìm ra lộ trình Khảo thí cho bạn một cách tối ưu nhất nhé!</i>
				</header>

				<form className="xl:w-[45%] flex flex-col gap-[40px] 
					px-[15px] py-[30px] xl:px-[50px] xl:py-[70px]
					mt-[30px] xl:mt-0
					backdrop-blur-md bg-[#00313D] bg-opacity-[0.05]
					rounded-[20px] border border-[#00313D] border-opacity-[0.01]
					shadow-[0px 4px 40px 0px] shadow-[rgba(0, 0, 0, 0.10)]">
						<div className="flex flex-col gap-[20px]">
							<label className="font-bold">Họ và tên *</label>
							<input type="text" placeholder="Enter here" className="bg-transparent border rounded-[14px] focus:ring-cyan block w-full px-[20px] py-[15px]" />
						</div>
						<div className="flex flex-col gap-[20px]">
							<label className="font-bold">Số điện thoại *</label>
							<input type="text" placeholder="Enter here" className="bg-transparent border rounded-[14px] focus:ring-cyan block w-full px-[20px] py-[15px]" onChange={e => setFormData(data => ({...data, phone: e.target.value}))} />
						</div>
						<div>
							<label htmlFor="city" className="block mb-[20px] font-bold">Bạn đang quan tâm đến?</label>
							<select id="city" className="bg-transparent border rounded-[14px] focus:ring-cyan block w-full px-[20px] py-[15px]">
								<option className="text-black" value="khao-thi">Khảo thí</option>
								<option className="text-black" value="luyen-thi">Luyện thi</option>
								<option className="text-black" value="thi-thu">Thi thử</option>
							</select>
						</div>
						<div>
							<label htmlFor="city" className="block mb-[20px] font-bold">Chứng chỉ?</label>
							<select id="city" className="bg-transparent border rounded-[14px] focus:ring-cyan block w-full px-[20px] py-[15px]">
								<option className="text-black" value="ielts">IELTS</option>
								<option className="text-black" value="pte">PTE</option>
								<option className="text-black" value="cefr">CEFR</option>
							</select>
						</div>
						<div className="flex flex-col gap-[20px]">
							<label className="font-bold">Thành phố sinh sống</label>
							<input type="text" placeholder="Enter here" className="bg-transparent border rounded-[14px] focus:ring-cyan block w-full px-[20px] py-[15px]" onChange={e => setFormData(data => ({...data, phone: e.target.value}))} />
						</div>
						<div className="flex flex-col gap-[20px]">
							<label className="font-bold">Hình thức học</label>
							<input type="text" placeholder="Enter here" className="bg-transparent border rounded-[14px] focus:ring-cyan block w-full px-[20px] py-[15px]" onChange={e => setFormData(data => ({...data, phone: e.target.value}))} />
						</div>
						<div>
							<label htmlFor="city" className="block mb-[20px] font-bold">Bạn đang tìm hiểu cho</label>
							<select id="city" className="bg-transparent border rounded-[14px] focus:ring-cyan block w-full px-[20px] py-[15px]">
								<option className="text-black" value="HN">Cá nhân</option>
								<option className="text-black" value="DN">Tổ chức</option>
							</select>
						</div>

						<div className="text-center mt-[60px]"><button className="px-[34px] py-[15px] bg-cyan hover:bg-opacity-80 rounded-[9px]">Đăng ký ngay</button></div>
				</form>
			</>
		</Block>
	);
}