import Link from "next/link";
import { type INews } from "./news.types";
import moment from "moment";


export default function Post({data}: {data: INews}) {
	return (
		<article className="flex flex-col gap-4">
			<div className="text-cyan">{moment(data.updatedAt || data.createdAt).format("DD/MM/YYYY")} | <span className="uppercase">{data.type}</span></div>
			<Link href={`/news/${data.slug}`} className="text-[22px] uppercase font-semibold hover:text-cyan">{data.title}</Link>
			<p>{data.description}</p>

			<Link href={`/news/${data.slug}`} className="italic font-semibold underline">Đọc tiếp</Link>
		</article>
	)
}