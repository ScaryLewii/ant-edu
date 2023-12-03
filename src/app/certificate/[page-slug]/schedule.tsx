"use client"

import Calendar from 'react-calendar';
import moment from 'moment';

const data = [
	{
		date: '13-12-2023',
		state: 'full',
		location: ['Hanoi', 'Ho Chi Minh']
	},
	{
		date: '14-12-2023',
		state: 'full',
		location: ['Hanoi', 'HoChiMinh']
	},
	{
		date: '20-12-2023',
		state: 'online',
		location: ['Hanoi', 'HoChiMinh']
	},
	{
		date: '21-12-2023',
		state: 'offline',
		location: ['Hanoi', 'HoChiMinh']
	}
]

export default function Schedule() {
	return (
		<section className="flex h-screen overflow-hidden flex-col items-center justify-center relative schedule z-20">
			<div className="container flex justify-between h-full">
				<div className="flex flex-col items-center justify-center w-[60%]">
					<div className='flex gap-[36px] items-end'>
						<div className="bg-white rounded-[25px] p-[45px] text-black">
							<Calendar 
								tileClassName={({ date, view }) => {
									if (data.find(x => x.date === moment(date).format("DD-MM-YYYY") && x.state === 'full')){
										return 'full'
									}

									if (data.find(x => x.date === moment(date).format("DD-MM-YYYY") && x.state === 'online')) {
										return 'online'
									}

									if (data.find(x => x.date === moment(date).format("DD-MM-YYYY") && x.state === 'offline')) {
										return 'offline'
									}
								}} 
							/>

							<div className="flex gap-[20px] items-center justify-center mt-[40px]">
								<div className="inline-flex items-center gap-[12px]">
									<span className="block w-[22px] h-[22px] rounded-full bg-pink"></span>
									<span>Lịch Online</span>
								</div>

								<div className="inline-flex items-center gap-[12px]">
									<span className="block w-[22px] h-[22px] rounded-full bg-cyan"></span>
									<span>Lịch Offline</span>
								</div>

								<div className="inline-flex items-center gap-[12px]">
									<span className="block w-[22px] h-[22px] rounded-full bg-pink"></span>
									<span>Lịch Full</span>
								</div>
							</div>
						</div>

						<div className='mt-[40px] flex flex-col gap-[15px] whitespace-nowrap'>
							<div><strong>HaNoi:</strong> 13, 14, 20, 21</div>
							<div><strong>HoChiMinh:</strong>: 13, 14, 20, 21</div>
						</div>
					</div>

					<div className='mt-[55px]'>
					Thời gian cấp chứng chỉ <br />
					* Sau khi tham gia kỳ thi IELTS, thời gian cấp chứng chỉ thường là từ 7 đến 14 ngày. Thời gian chính xác có thể thay đổi tùy theo quy trình kiểm tra và đánh giá kết quả thi.
					</div>
				</div>

				<div className="flex flex-col justify-center pr-[5%] text-box-2">
					<i className="font-svn text-[32px]">Thông tin về</i>
					<h2 className="font-bold text-[40px] text-[#FEE7B5]">
						Lịch thi IELTS
					</h2>
				</div>
			</div>
		</section>
	);
}