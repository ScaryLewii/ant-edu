"use client"

import Block from "~/app/_components/layout/block";

const data = [
	{
		stt: 1,
		content: "Lệ phí thi IELTS trên giấy",
		pricing: "VND 4.664.000 "
	},
	{
		stt: 2,
		content: "Lệ phí thi IELTS trên máy tính",
		pricing: "VND 4.664.000 "
	},
	{
		stt: 3,
		content: "Lệ phí thi IELTS UKVI",
		pricing: "VND 5.252.000 "
	},
	{
		stt: 4,
		content: "Lệ phí thi IELTS Life Skills",
		pricing: "VND 4.414.00"
	},
	{
		stt: 5,
		content: "<strong>Phí chuyển phát nhanh DHL để gửi bảng điểm ra nước ngoài </strong><br /><i>* mỗi địa chỉ quy định tối đa 500gr</i>",
		pricing: "VND  1.400.000 "
	}
]

export default function Pricing() {
	return (
		<Block>
			<div className="container flex justify-between h-full mx-auto">
				<div className="flex flex-col justify-center text-box-1">
					<i className="font-svn text-[32px]">Thông tin về</i>
					<h2 className="font-bold text-[40px] text-[#FEE7B5]">
						Lệ phí và những <br/>
						khoản phí khác
					</h2>
				</div>

				<div className="flex items-center">
					<table>
						<thead className="bg-light text-black">
							<tr>
								<th className="border border-white py-6 px-8">STT</th>
								<th className="border border-white py-6 px-8">Loại phí</th>
								<th className="border border-white py-6 px-8">Mức phí</th>
							</tr>
						</thead>
						<tbody>
							{data.map((d, index) =>
								<tr key={index}>
									<td className="border border-white py-6 px-6 text-center">{d.stt}</td>
									<td className="border border-white py-6 px-8"><div dangerouslySetInnerHTML={{__html: d.content}}></div></td>
									<td className="border border-white py-6 px-8">{d.pricing}</td>
								</tr>
							)}
						</tbody>
					</table>
				</div>
			</div>
		</Block>
	);
}