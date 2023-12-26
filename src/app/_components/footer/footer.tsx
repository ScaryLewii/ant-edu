"use client"

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Background from "public/background/contact.jpg";
import Logo from "public/logo-big.png";
import { FacebookIcon, InstagramIcon, TiktokIcon } from "../assets/icons";
import FacebookPage from "./facebook";

export default function Footer() {
	const pathName = usePathname()

	if (pathName.includes('test-register')) {
		return <></>
	}

	return (
		<footer className="flex flex-col items-center justify-center relative px-[15px] pt-[90px] pb-[40px]">
			<Image src={Background} width={1920} height={1080} alt="home background"
				className="absolute top-0 left-0 w-full h-full object-cover" />

			<div className="container flex flex-col lg:flex-row justify-around items-center z-20 h-full gap-[60px] lg:gap-[120px]">
				<div className="flex flex-col gap-[30px]">
					<h2 className="flex gap-2 items-center">
						<Image src={Logo} alt="ant edu" width={110} height={108} className="w-[52px] h-[51px] lg:w-[110px] lg:h-[108px]" />
						<div className="text-[20px] lg:text-[40px] uppercase font-bold">ANT EDU</div>
					</h2>
					<h3 className="text-[14px] lg:text-[28px] font-bold">Công ty Cổ Phần giáo dục và đào tạo ANT EDU</h3>
					<div className="flex flex-col gap-[16px] text-[12px] lg:text-[16px]">
						<p>Mã số thuế: <span className="text-cyan">0110083457</span></p>
						<p>Địa chỉ: Tầng 2 Sevin Office, 609 Trương Định, Hoàng Mai, Hà Nội</p>
						<p>Hotline: <Link href="tel:0922985555" className="text-cyan">092 298 5555</Link></p>
						<p>Email: <Link href="mailto:info@ant-edu.vn" className="text-cyan">Info@ant-edu.vn</Link></p>
					</div>

					<ul className="flex items-center gap-[20px] lg:gap-[50px]">
						<li>
							<Link href="" target="_blank" className="block w-[30px] lg:w-[50px] hover:opacity-60">
								<FacebookIcon />
							</Link>
						</li>

						<li>
							<Link href="" target="_blank" className="block w-[30px] lg:w-[50px] hover:opacity-60">
								<InstagramIcon />
							</Link>
						</li>

						<li>
							<Link href="" target="_blank" className="block w-[30px] lg:w-[50px] hover:opacity-60">
								<TiktokIcon />
							</Link>
						</li>
					</ul>
				</div>

				<FacebookPage />
			</div>
		</footer>
	);
}