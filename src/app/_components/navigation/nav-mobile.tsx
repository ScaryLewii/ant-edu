"use client"

import Image from "next/image";
import Link from "next/link";
import Logo from "public/logo.png";
import VN from "public/static-images/VN.png";
import { useState } from "react";
import { ArrowDown, ChatIcon, Hambuger, SearchIcon } from "../assets/icons";
import HeaderBg from "./header-bg";
import NavItemMobile from "./nav-items-mobile";

export default function NavMobile({navItems}: {navItems: {
	id: number,
	name: string,
	slug: string,
	children?: {
		id: number,
		slug: string,
		name: string
	}[]
}[]}) {
	const [showSubNav, setShowSubNav] = useState(false)

	return (
		<header className="flex xl:hidden justify-between items-center p-[15px] fixed top-0 left-0 w-full z-50">
			<HeaderBg />
			<Link href="/" className="flex gap-2 relative z-[2]">
				<Image src={Logo} alt="ant edu" width={55} height={54} className="object-contain w-[32px] h-[31px]" />
				<div className="uppercase text-[10px] font-semibold">The Assessment<br/> Center</div>
			</Link>

			<button className="relative z-[2]" onClick={() => setShowSubNav(!showSubNav)}><Hambuger /></button>

			{showSubNav &&
				<>
					<div className="bg-sea absolute top-0 leff-0 w-full h-[100vh] bg-opacity-60"
						itemType="button" onClick={() => setShowSubNav(!showSubNav)}
					></div>
				
					<div className="absolute top-0 left-0 h-[100vh] z-50 bg-sea w-[300px]">
						<nav className="pt-6">
							<ul className="font-semibold text-md flex flex-col gap-3">
								{navItems.map(item => 
									<NavItemMobile key={item.id} item={item} onClick={() => setShowSubNav(false)} />
								)}
							</ul>
						</nav>

						<div className="flex gap-5 pl-3 my-10">
							<button className="fill-white hover:fill-cyan">
								<SearchIcon />
							</button>

							<button className="fill-white hover:fill-cyan">
								<ChatIcon />
							</button>
						</div>

						<div className="flex gap-5 px-3">
							<Link href="" className="bg-cyan px-[7px] py-[12px] rounded-[9px] hover:bg-opacity-80">Đăng nhập</Link>
						
							<button className="border border-white rounded-[9px] w-[73px] h-[48px] inline-flex items-center justify-center gap-[10px]">
								<Image src={VN} width={29} height={29} alt="language" />
								<ArrowDown />
							</button>
						</div>
					</div>
				</>
			}
		</header>
	)
}