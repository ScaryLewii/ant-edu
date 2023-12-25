import Image from "next/image";
import Background from "public/background/news.jpg";
import StickyPost from "./sticky-post";
import Post from "./post";
import Block from "../_components/layout/block";

const data = [
	{
		title: "10 ngày trước kì thi PTE - Những lưu ý trước ngày thi bạn cần biết",
		sticky: true,
		date: "August 13, 2023",
		category: "TIPS",
		excerpt: "Bạn đã dành ra nhiều thời gian để chuẩn bị cho bài thi PTE Academic? Cùng xem thêm các lưu ý trước khi thi PTE hay còn gọi là mẹo thi PTE ngay sau đây để giúp đạt thành tích cao như mong muốn."
	},
	{
		title: "Thi giấy hay thi máy với IELTS Academic?",
		date: "August 13, 2023",
		category: "news",
		excerpt: "Khi thi IELTS, song song với việc chuẩn bị về kiến thức thì việc lựa chọn cách thức thi, loại bài thi cũng là một yếu tố vô cùng quan trọng. Mình xin nhắc tới 3 mục so sánh mà bạn chắc chắn phải biết trước khi chính thức cống tiền đăng kí thi IELTS cho IDP/BC nhé!"
	},
	{
		title: "Ant Edu và Language Confidence ký hợp tác chiến lược",
		date: "August 13, 2023",
		category: "news",
		excerpt: "Sự kiện này đã đánh dấu một bước tiến lớn trong hành trình của Ant Edu để trở thành một đơn vị hàng đầu tại Việt Nam trong việc áp dụng công nghệ giáo dục và mang lại hiệu quả thực tế cho người học."
	},
]

export default function News() {
	return (
		<Block backgroundSrc={Background}>

			<div className="container flex items-center justify-center z-20 h-full">
				<div className="w-[60%]">
					{data.map((d, index) => 
						d.sticky && <StickyPost key={index} data={d} />
					)}
				</div>

				<div className="max-w-[450px] flex flex-col gap-[60px]">
					{data.map((d, index) => 
						!d.sticky && <Post key={index} data={d} />
					)}
				</div>
			</div>
		</Block>
	);
}