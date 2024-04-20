import Link from "next/link";
import { type INews } from "./news.types";
import moment from "moment";

export default function StickyPost({data}: {data: INews}) {
	return (
		<article className="xl:max-w-[500px]">
			<Link href={`/news/${data.slug}`} className="text-[30px] uppercase font-semibold hover:text-cyan">{data.title}</Link>
			<div className="my-[18px]">{moment(data.updatedAt || data.createdAt).format("DD/MM/YYYY")} | <span className="uppercase">{data.type}</span></div>
			<p>{data.description} <Link href={`/news/${data.slug}`} className="italic font-semibold underline">Đọc tiếp</Link></p>

			<Link href={`/news`} className="px-[45px] py-[15px] rounded-[9px] bg-cyan hover:bg-opacity-80 inline-block mt-[55px]">Đọc thêm</Link>
		</article>
	)
}