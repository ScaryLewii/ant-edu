import Image from "next/image";
import Background from "public/background/community.jpg";

export default function Community() {
	return (
		<main className="flex flex-col items-center justify-center">
			<Image src={Background} width={1920} height={1080} alt="home background"
				className="absolute top-0 left-0 w-full h-full object-cover" />

			<div className="container flex flex-col items-center justify-center z-20 h-full text-center">
				<div className="text-[40px] font-bold">Cộng đồng người học Tiếng Anh</div>
				<h1 className="text-[65px] font-bold uppercase mt-[10px] mb-[30px]">lớn nhất Việt Nam</h1>
				<div className="max-w-5xl">
				Ant Edu tự hào là sở hữu các cộng đồng người học tiếng Anh lớn nhất Việt Nam với nhiều Fanpage, Group chia sẻ kiến thức, phương pháp học cho cả học viên và giáo viên. Người học có thể tìm hiểu thêm nhiều kiến thức thú vị, trao đổi và  giao lưu, kết nối để đạt được hiệu quả học tập và công việc.
				</div>
			</div>
		</main>
	);
}