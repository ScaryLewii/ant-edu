"use client"

import { useContext, type Dispatch, type SetStateAction } from "react"
import { StepContext } from "~/app/context/context"

const GuideStep = () => {
	const stepContext = useContext(StepContext) as {
		setStep: Dispatch<SetStateAction<number>>,
	}

	return (
		<>
		<h2 className="font-bold text-[40px] text-light">Đăng ký thi thử PTE</h2>
		<i className="font-svn text-[32px]">trong môi trường khảo thí thật</i>

		<div className="mx-auto mt-[80px] max-w-[888px]">
			<div>
			<p>AI BOOSTED ENGLISH sẽ giúp bạn làm quen với phòng thi thật,  làm quan với trang thiết bị và xử lý tình huống phát sinh trong môi trường khảo thí thật bằng việc đến thi thật trong môi trường khảo thí thực tế được giả lập giống buổi thi thật</p>

			<p>Sau khi hoàn tất quy trình đăng ký, bạn sẽ nhận được xác nhận đăng ký cùng với thông tin chi tiết về thời gian và địa điểm thi.</p>
			<br />
			<p>Sau khi hoàn tất quy trình đăng ký, bạn sẽ nhận được xác nhận đăng ký cùng với thông tin chi tiết về thời gian và địa điểm thi.</p>
			<br />
			
			<p>Khi thi thử trong môi trường khảo thí thật AI BOOSTED ENGLISH sẽ giúp bạn:</p>

			<ul className="list-disc pl-4">
				<li>Tự tin khi đi thật</li>
				<li>Biết và tải nghiệm các tình huống có thể gặp phải khi đi thi thật</li>
				<li>Biết cách xử lý các tình huống phát sinh.</li>
				<li>Nắm được các thủ tục checkin.</li>
				<li>Không bị liệt vì những lý do: tai nghe, không nghe được, ...</li>
			</ul>
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