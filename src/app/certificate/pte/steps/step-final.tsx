"use client"

import Link from "next/link"
import StepIndex from "./step-index"

const FinalStep = () => {
	return (
		<>
		<h2 className="font-bold text-[40px] text-light">Đăng ký thi PTE</h2>

		<div className="mx-auto mt-[80px] max-w-[888px]">
			<StepIndex step={5} />
		</div>

		<div className="mx-auto mt-[80px] text-center">
			Chúc mừng bạn đã hoàn thiện thủ tục đăng ký thi chứng chỉ PTE. <br/>
			Chúng tôi sẽ cùng bạn luyện tập chăm chỉ để đạt kết quả cao.  
			<br/><br/>
			Nào chúng ta cùng bắt đầu
		</div>

		<div className="flex justify-center gap-[20px] mt-[70px]">
			<Link href="/" className="bg-none hover:bg-cyan px-[24px] py-[12px] rounded-[9px] border border-cyan">
				Trở lại trang chủ
			</Link>

			<Link href="https://ant-edu.ai/auth/login" className="bg-cyan hover:bg-opacity-80 px-[24px] py-[12px] rounded-[9px]">
				Kiểm tra lịch thi
			</Link>
		</div>
		</>
	)
}

export default FinalStep