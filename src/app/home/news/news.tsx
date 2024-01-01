import Background from "public/background/news.jpg";
import ScrollDownArrow from "~/app/_components/assets/scroll-down-arrow";
import Block from "~/app/_components/layout/block";
import Post from "./post";
import StickyPost from "./sticky-post";
import { useEffect, useState } from "react";
import { type INews } from "./news.types";

const extraChildren = (datas: INews[]) => (
	<div className="container flex flex-col lg:flex-row items-center justify-center z-[2] h-full px-[15px] py-[90px] xl:py-0">
		<div className="bg-[#001730] bg-opacity-40 absolute top-0 right-0 w-[45%] h-full z-[1]"></div>

		{datas[0] &&
			<div className="lg:w-[60%]">
				<StickyPost data={datas[0]} />
			</div>
		}

		<div className="xl:max-w-[450px] xl:max-h-[600px] flex flex-col gap-[60px] mt-[80px] lg:mt-0 overflow-x-auto z-10">
			{datas.map((d, index) => 
				index !== 0 && <Post key={index} data={d} />
			)}

			<ScrollDownArrow />
		</div>
	</div>
)

export default function News() {
	const [data, setData] = useState<INews[]>([])

	useEffect(() => {
		const getData = async () => {
			const data = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "blog-categories/18/posts?Page=1&PageSize=100")
			const result = await data.text()

			// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
			const news = JSON.parse(result).data.items as unknown as INews[] || []
			setData(news)
		}

		getData().catch(error => console.log(error))
	}, [])

	return (
		<Block id="news" backgroundSrc={Background} extraChildren={extraChildren(data)}
			childrenClassName="container flex flex-col lg:flex-row items-center justify-center z-[2] h-full px-[15px] py-[90px] xl:py-0"
		>
		</Block>
	);
}