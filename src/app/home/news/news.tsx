import Image from "next/image";
import Background from "public/background/news.jpg";
import StickyPost from "./sticky-post";
import Post from "~/app/news/post";

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
		<section className="flex flex-wrap h-auto xl:h-screen overflow-hidden flex-col items-center justify-center relative">
			<Image src={Background} width={1920} height={1080} alt="home background"
				className="absolute top-0 left-0 w-full h-full object-cover" />
			
			<div className="bg-[#001730] bg-opacity-40 absolute top-0 right-0 w-[45%] h-full"></div>

			<div className="container flex flex-col lg:flex-row items-center justify-center z-20 h-full px-[15px] py-[90px] xl:py-0">
				<div className="lg:w-[60%]">
					{data.map((d, index) => 
						d.sticky && <StickyPost key={index} data={d} />
					)}
				</div>

				<div className="xl:max-w-[450px] flex flex-col gap-[60px] mt-[80px] lg:mt-0 overflow-x-auto">
					{data.map((d, index) => 
						!d.sticky && <Post key={index} data={d} />
					)}
				</div>
			</div>
		</section>
	);
}