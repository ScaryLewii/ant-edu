import { type ReactNode } from "react";
import Image, { type StaticImageData } from "next/image";

export default function Block({children, extraChildren, id, className, backgroundSrc, childrenClassName} : {
	className?: string,
	id?: string,
	children?: ReactNode | JSX.Element,
	childrenClassName?: string,
	backgroundSrc?: StaticImageData,
	extraChildren?: JSX.Element
}) {
	return (
		<section id={id} className={`${className}
			flex flex-col items-center justify-center relative min-h-screen w-full overflow-hidden snap-center
		`}>
			{backgroundSrc &&
				<Image src={backgroundSrc} width={1920} height={1080} alt="block background"
					className="absolute top-0 left-0 w-full h-full object-cover z-[0]" />
			}
			{extraChildren}

			{children &&
				<div className={`relative z-[2] w-full ${childrenClassName}`}>
					{children}
				</div>
			}
		</section>
	)
}