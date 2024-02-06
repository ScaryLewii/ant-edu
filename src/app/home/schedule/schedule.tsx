import Image from "next/image";
import patternBg from "public/background/pattern.png";
import Background from "public/background/schedule.jpg";
import { useEffect, useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import Block from "~/app/_components/layout/block";

type Inputs = {
  name: string,
  phone: string,
  email: string | null,
  wonderingType: string,
  certificateType: string,
  city: string,
  learningType: string,
  objectType: string,
}

export default function Schedule() {
	const {
    register,
    handleSubmit,
		setValue,
  } = useForm<Inputs>()
	const [isSubmit, setIsSubmit] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
		const requestInit: RequestInit = { 
			headers: {
				"Content-Type": "application/json",
			},
			method: 'POST',
			body: JSON.stringify(formData)
		}
		const data = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "consultations", requestInit)
		const result = await data.text()
		const jsonResult = JSON.parse(result) as {
			data: object,
			isSuccess: boolean,
			errors: object
		}

		if (jsonResult.isSuccess) {
			setIsSubmit(true)
		}
	}

	useEffect(() => {
		setValue('email', null);
	}, [setValue])

	if (isSubmit) {
		return (
			<Block id="schedule" childrenClassName="container flex flex-wrap items-center justify-around h-full" backgroundSrc={Background}>
				<div className="container mx-auto min-h-[600px] flex items-center justify-center bg-[#001730] bg-opacity-40 relative px-[130px] py-[50px] text-center">
					<Image src={patternBg} width={900} height={478} alt="background" className="absolute bottom-0 left-0 w-full object-cover" />
					<div className="absolute top-0 left-1/2 -translate-x-1/2 bg-cyan w-1/2 h-[17px] rounded-bl-[20px] rounded-br-[20px]"></div>

					<div className="relative z-10">
						<h2 className="text-[32px] font-bold text-cyan text-center mb-[30px]">ĐĂNG KÝ THÀNH CÔNG</h2>

						<div className="text-[16px] italic font-medium mt-[80px] mb-[120px]">Cảm ơn bạn đã quan tâm. AI Boosted English đã nhận được thông tin của bạn, <br />và sẽ liên hệ với bạn trong thời gian sớm nhất,</div>
					</div>
				</div>
			</Block>
		)
	}

	return (
		<Block id="schedule" childrenClassName="container flex flex-wrap items-center justify-around h-full" backgroundSrc={Background}>
			<>
				<header className="w-full xl:w-[45%] max-w-[90%]">
					<h2 className="text-[24px] lg:text-[48px] font-bold mb-[20px] lg:mb-[30px] text-glow">ĐĂNG KÝ TƯ VẤN</h2>
					<i className="text-[12px] lg:text-[18px]">Hãy bắt đầu với một vài câu hỏi về bạn để chúng mình có thể tìm ra lộ trình Khảo thí cho bạn một cách tối ưu nhất nhé!</i>
				</header>

				<form className="w-full lg:w-[45%] flex flex-col gap-[40px] 
					px-[15px] py-[30px] xl:px-[50px] xl:py-[70px]
					mt-[30px] xl:mt-0
					backdrop-blur-md bg-[#00313D] bg-opacity-[0.05]
					rounded-[20px] border border-[#00313D] border-opacity-[0.01]
					shadow-[0px 4px 40px 0px] shadow-[rgba(0, 0, 0, 0.10)]"
					onSubmit={handleSubmit(onSubmit)}
				>
						<div className="flex flex-col gap-[20px]">
							<label className="font-bold">Họ và tên *</label>
							<input type="text" placeholder="Enter here" className="bg-transparent border rounded-[14px] focus:ring-cyan block w-full px-[20px] py-[15px]" {...register("name")} />
						</div>
						<div className="flex flex-col gap-[20px]">
							<label className="font-bold">Số điện thoại *</label>
							<input type="text" placeholder="Enter here" className="bg-transparent border rounded-[14px] focus:ring-cyan block w-full px-[20px] py-[15px]" {...register("phone")} />
						</div>
						<div>
							<label htmlFor="wonderingType" className="block mb-[20px] font-bold">Bạn đang quan tâm đến?</label>
							<select id="wonderingType" className="bg-transparent border rounded-[14px] focus:ring-cyan block w-full px-[20px] py-[15px]" {...register("wonderingType")}>
								<option className="text-black" value="khao-thi">Khảo thí</option>
								<option className="text-black" value="luyen-thi">Luyện thi</option>
								<option className="text-black" value="thi-thu">Thi thử</option>
							</select>
						</div>
						<div>
							<label htmlFor="certificateType" className="block mb-[20px] font-bold">Chứng chỉ?</label>
							<select id="certificateType" className="bg-transparent border rounded-[14px] focus:ring-cyan block w-full px-[20px] py-[15px]" {...register("certificateType")}>
								<option className="text-black" value="ielts">IELTS</option>
								<option className="text-black" value="pte">PTE</option>
								<option className="text-black" value="cefr">CEFR</option>
							</select>
						</div>
						<div className="flex flex-col gap-[20px]">
							<label className="font-bold">Thành phố sinh sống</label>
							<input type="text" placeholder="Enter here" className="bg-transparent border rounded-[14px] focus:ring-cyan block w-full px-[20px] py-[15px]" {...register("city")} />
						</div>
						<div className="flex flex-col gap-[20px]">
							<label className="font-bold">Hình thức học</label>
							<input type="text" placeholder="Enter here" className="bg-transparent border rounded-[14px] focus:ring-cyan block w-full px-[20px] py-[15px]" {...register("learningType")} />
						</div>
						<div>
							<label htmlFor="objectType" className="block mb-[20px] font-bold">Bạn đang tìm hiểu cho</label>
							<select id="objectType" className="bg-transparent border rounded-[14px] focus:ring-cyan block w-full px-[20px] py-[15px]" {...register("objectType")}>
								<option className="text-black" value="ca-nhan">Cá nhân</option>
								<option className="text-black" value="to-chuc">Tổ chức</option>
							</select>
						</div>

						<div className="text-center mt-[60px]"><button className="px-[34px] py-[15px] bg-cyan hover:bg-opacity-80 rounded-[9px]">Đăng ký ngay</button></div>
				</form>
			</>
		</Block>
	);
}