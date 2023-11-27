import Image from "next/image";
import Background from "public/background/contact.jpg";
import FacebookPage from "./facebook";
import Link from "next/link";
import Logo from "public/logo-big.png"
import { FacebookIcon, InstagramIcon, TiktokIcon } from "../assets/icons";

export default function Footer() {
	return (
		<main className="flex h-screen overflow-hidden flex-col items-center justify-center relative">
			<Image src={Background} width={1920} height={1080} alt="home background"
				className="absolute top-0 left-0 w-full h-full object-cover" />

			<div className="container flex justify-around items-center z-20 h-full gap-[120px]">
				<div className="flex flex-col gap-[30px]">
					<h1 className="flex gap-2">
						<Image src={Logo} alt="ant edu" width={110} height={108} />
						<div className="flex flex-col gap-[2px]">
							<b className="text-[36px]">AI BOOSTED ENGLISH</b>
							<i className="text-[24px]">One Click for Everything</i>
						</div>
					</h1>
					<h2 className="text-[28px] font-bold">Công ty Cổ Phần giáo dục và đào tạo ANT EDU</h2>
					<div className="flex flex-col gap-[16px]">
						<p>Mã số thuế: <span className="text-cyan">0110083457</span></p>
						<p>Địa chỉ: Tầng 2 Sevin Office, 609 Trương Định, Hoàng Mai, Hà Nội</p>
						<p>Hotline: <Link href="tel:0922985555" className="text-cyan">092 298 5555</Link></p>
						<p>Email: <Link href="mailto:info@ant-edu.vn" className="text-cyan">Info@ant-edu.vn</Link></p>
					</div>

					<ul className="flex items-center gap-[50px]">
						<li>
							<Link href="" target="_blank">
								<FacebookIcon />
							</Link>
						</li>

						<li>
							<Link href="" target="_blank">
								<InstagramIcon />
							</Link>
						</li>

						<li>
							<Link href="" target="_blank">
								<TiktokIcon />
							</Link>
						</li>
					</ul>
				</div>

				<FacebookPage />
			</div>
		</main>
	);
}