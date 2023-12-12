"use client"

import Calendar from 'react-calendar';
import moment from 'moment';

const data = [
	{
		date: '08-11-2023',
		state: 'full',
		location: ['TP.Hà Nội', 'TP.Đà Nẵng', 'TP.Hồ Chí Minh']
	},
	{
		date: '09-11-2023',
		state: 'full',
		location: ['TP.Hà Nội', 'TP.Đà Nẵng', 'TP.Hồ Chí Minh']
	},
	{
		date: '15-11-2023',
		state: 'offline',
		location: ['TP.Hà Nội', 'TP.Đà Nẵng', 'TP.Hồ Chí Minh']
	},
	{
		date: '16-11-2023',
		state: 'offline',
		location: ['TP.Hà Nội', 'TP.Đà Nẵng', 'TP.Hồ Chí Minh']
	},
	{
		date: '22-11-2023',
		state: 'offline',
		location: ['TP.Hà Nội', 'TP.Đà Nẵng', 'TP.Hồ Chí Minh']
	},
	{
		date: '23-11-2023',
		state: 'offline',
		location: ['TP.Hà Nội', 'TP.Đà Nẵng', 'TP.Hồ Chí Minh']
	},
	{
		date: '29-11-2023',
		state: 'offline',
		location: ['TP.Hà Nội', 'TP.Đà Nẵng', 'TP.Hồ Chí Minh']
	},
	{
		date: '30-11-2023',
		state: 'offline',
		location: ['TP.Hà Nội', 'TP.Đà Nẵng', 'TP.Hồ Chí Minh']
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
									<span className="block w-[22px] h-[22px] rounded-full bg-gray"></span>
									<span>Lịch thi kín</span>
								</div>
							</div>
						</div>

						<div className='mt-[40px] flex flex-col gap-[15px] whitespace-nowrap'>
							<div><strong>TP.Hà Nội:</strong> 13, 14, 20, 21</div>
							<div><strong>TP.Đà Nẵng:</strong>: 13, 14, 20, 21</div>
							<div><strong>TP.Hồ Chí Minh:</strong>: 13, 14, 20, 21</div>
						</div>
					</div>

					<div className='mt-[55px]'>
					Thời gian cấp chứng chỉ <br />
					<i>* Sau khi hoàn thành kỳ thi, thí sinh sẽ nhận được kết quả và chứng chỉ PTE qua email sau <strong>khoảng 5-7 ngày</strong> làm việc.</i>
					</div>
				</div>

				<div className="flex flex-col justify-center pr-[5%] text-box-2">
					<i className="font-svn text-[32px]">Thông tin về</i>
					<h2 className="font-bold text-[40px] text-[#FEE7B5]">
						Lịch thi CEFR
					</h2>
				</div>
			</div>
		</section>
	);
}