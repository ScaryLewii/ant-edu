"use client"

import Link from "next/link"
import * as Scroll from "react-scroll"

export default function NavItem({item}: {
	item: {
		id: number,
		name: string,
		slug: string,
		type?: string,
		children?: {
			id: number,
			name: string,
			slug: string,
		}[]
	}
}) {
	const CustomLink = Scroll.Link
	return (
		<li className="relative group">
			{!item.type && 
				<Link className="px-[15px] py-[7px] rounded-[20px] group-hover:bg-white group-hover:text-black flex" href={`/${item.slug}`}>{item.name}</Link>
			}
			{item.type && 
				<CustomLink to={item.slug} spy={true} smooth={true} offset={0} duration={500}
					className="px-[15px] py-[7px] rounded-[20px] group-hover:bg-white group-hover:text-black flex cursor-pointer"
				>
					{item.name}
				</CustomLink>
			}
			
			{item.children &&
				<div className="p-[22px] absolute top-full -left-[70%] hidden group-hover:block">
					<ul className="flex flex-col gap-[16px] p-[30px]
						backdrop-blur-md bg-[#00313D] bg-opacity-[0.05]
						rounded-[20px] border border-[#00313D] border-opacity-[0.01]
						shadow-[0px 4px 40px 0px] shadow-[rgba(0, 0, 0, 0.10)]
					">
					{item.children.map(child => 
						<li key={child.id} className="flex">
							<Link className="p-[10px] text-center w-full min-w-[260px] border border-white rounded-[20px] hover:bg-white hover:text-black whitespace-nowrap" href={`/${child.slug}`}>{child.name}</Link>
						</li>
					)}
				</ul>
				</div>
			}
		</li>
	)
}