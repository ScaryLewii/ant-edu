"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { type Dispatch, type SetStateAction } from "react"
import * as Scroll from "react-scroll"

export default function NavItemMobile({item, onClick}: {
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
	},
	onClick?: Dispatch<SetStateAction<boolean>>
}) {
	const pathname = usePathname()
	const CustomLink = Scroll.Link

	return (
		<li className="relative group">
			{!item.type && 
				<Link className="px-[15px] py-[7px] group-hover:bg-white group-hover:text-black flex" href={`/${item.slug}`}>{item.name}</Link>
			}

			{item.type && pathname.length < 2 &&
				<CustomLink to={item.slug} spy={true} smooth={true} offset={0} duration={500}
					onClick={() => onClick}
					className="px-[15px] py-[7px] group-hover:bg-white group-hover:text-black flex cursor-pointer"
				>
					{item.name}
				</CustomLink>
			}

			{item.type && pathname.length > 1 &&
				<Link className="px-[15px] py-[7px] group-hover:bg-white group-hover:text-black flex" href={`/#${item.slug}`}>{item.name}</Link>
			}
			
			{item.children &&
				<div className="hidden group-hover:block">
					<ul className="flex flex-col gap-[16px] pt-3
						backdrop-blur-md bg-[#00313D] bg-opacity-[0.05]
						border border-[#00313D] border-opacity-[0.01]
						shadow-[0px 4px 40px 0px] shadow-[rgba(0, 0, 0, 0.10)]
					">
					{item.children.map(child => 
						<li key={child.id} className="flex">
							<Link className="p-[10px] text-center w-full min-w-[260px] border border-white  hover:bg-white hover:text-black whitespace-nowrap" href={`/${child.slug}`}>{child.name}</Link>
						</li>
					)}
				</ul>
				</div>
			}
		</li>
	)
}