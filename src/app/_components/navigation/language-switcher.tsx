"use client"

import { ArrowDown } from "../assets/icons";
import Image from "next/image";
import VN from "public/static-images/vn-flag.png";
import EN from "public/static-images/en.png";
import { useState } from "react";

export default function LangSwithcer () {
	const [lang, setLang] = useState('VN');
	const [isExpanded, setIsExpanded] = useState(false);

	const handleSwitch = (lang: string) => {
		setLang(lang)
		setIsExpanded(false)
	}

	return (
		<div className="relative cursor-pointer">
			
			<button onClick={() => setIsExpanded(true)}
				className="border border-white rounded-[9px] w-[73px] h-[48px] inline-flex items-center justify-center gap-[10px]"
			>
				<Image src={lang === 'VN' ? VN : EN} width={29} height={29} alt="language" />
				<ArrowDown />
			</button>

			{isExpanded &&
				<div className="flex flex-col items-center w-full
					absolute top-full left-0
				">
					<button onClick={() => handleSwitch('VN')}
						className="bg-sea p-2 bg-opacity-40 w-full flex justify-center hover:bg-cyan"
					>
						<Image src={VN} width={29} height={29} alt="vietnamese" />
					</button>

					<button onClick={() => handleSwitch('EN')}
						className="bg-sea p-2 bg-opacity-40 w-full flex justify-center hover:bg-cyan"
					>
						<Image src={EN} width={29} height={29} alt="english" />
					</button>
				</div>
			}
		</div>
	)
}