import { type ReactNode } from "react";
import Image, { type StaticImageData } from "next/image";

export default function Block({children, extraChildren, id, className, backgroundSrc, backgroundArticle, childrenClassName} : {
	className?: string,
	id?: string,
	children?: ReactNode | JSX.Element,
	childrenClassName?: string,
	backgroundSrc?: StaticImageData,
	backgroundArticle?: boolean,
	extraChildren?: JSX.Element
}) {
	return (
		<section id={id} className={`${className}
			flex flex-col items-center justify-center relative min-h-screen w-full overflow-hidden snap-center
		`}>
			{backgroundSrc && !backgroundArticle &&
				<Image src={backgroundSrc} width={1920} height={1080} alt="block background"
					className="absolute top-0 left-0 w-full h-full object-cover z-[0]" />
			}

			{backgroundSrc && backgroundArticle &&
				<div className="absolute top-0 left-0 w-full object-cover z-[0]">
					<Image src={backgroundSrc} width={1920} height={1080} alt="block background"
						className="w-full object-cover z-[0]" />
					<div className="absolute top-0 left-0 w-full h-full object-cover z-[1] bg-gradient-to-t from-sea"></div>
				</div>
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