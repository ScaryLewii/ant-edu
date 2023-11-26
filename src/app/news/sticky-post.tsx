import Link from "next/link";


export default function StickyPost({data}: {data: Post}) {
	return (
		<article className="max-w-[500px]">
			<h2 className="text-[30px] uppercase font-semibold">{data.title}</h2>
			<div className="my-[18px]">{data.date} | <span className="uppercase">{data.category}</span></div>
			<p>{data.excerpt}</p>

			<Link href="#" className="px-[45px] py-[15px] rounded-[9px] bg-cyan hover:bg-opacity-80 inline-block mt-[55px]">Đọc tiếp</Link>
		</article>
	)
}