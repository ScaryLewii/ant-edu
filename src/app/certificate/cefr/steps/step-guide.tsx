"use client"

import { type Dispatch, type SetStateAction, useContext } from "react"
import { StepContext } from "~/app/context/context"
import Link from "next/link"

const GuideStep = () => {
	const stepContext = useContext(StepContext) as {
		setStep: Dispatch<SetStateAction<number>>,
	}

	return (
		<>
		<i className="font-svn text-[32px]">Hướng dẫn</i>
		<h2 className="font-bold text-[40px] text-light">Đăng ký thi CEFR</h2>

		<div className="mx-auto mt-[80px] max-w-[888px]">
			<div>
			<p>Chúng tôi sẽ hỗ trợ bạn hoàn thiện thủ tục đăng ký nhanh chóng và hiệu quả nhất. <Link href="/404" target="_blank" className="font-bold text-cyan underline">Tại đây,</Link> bạn có thể chọn lịch thi phù hợp, điền thông tin cá nhân và thực hiện thanh toán phí thi. </p>
			<br /><br />
			<p>Sau khi hoàn tất quy trình đăng ký, bạn sẽ nhận được xác nhận đăng ký cùng với thông tin chi tiết về thời gian và địa điểm thi.</p>
			<br /><br />
			<p>Chúng tôi sẽ giúp bạn nắm rõ các bước cần thiết để tham gia kỳ thi một cách suôn sẻ và tự tin. Bao gồm:</p>
			<p>1. Giấy tờ tùy thân: CCCD/hộ chiếu</p>
			<p>2. Thời gian thi</p>
			<p>3. Quy tắc thi</p>
			<p>4. Quy trình nộp bài thi</p>
			<p>5. Các lưu ý khác trong khi làm bài thi</p>
			</div>
		</div>

		<div className="flex justify-center mt-[40px]">
			<button className="bg-cyan hover:bg-opacity-80 px-[24px] py-[12px] rounded-[9px]"
				onClick={() => stepContext.setStep(1)}
			>
				Đăng ký ngay
			</button>
		</div>
		</>
	)
}

export default GuideStep