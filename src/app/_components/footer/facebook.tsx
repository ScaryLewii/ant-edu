"use client"

import { useEffect } from "react";

export default function FacebookPage() {
	useEffect(() => {
		const script = document.createElement('script')
		script.src = "https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v18.0&appId=1039019366282747";
		script.defer = true
		script.async = true
		script.crossOrigin = "anonymous"
		script.nonce = "dCJE0cU3"
		document.body.appendChild(script)

		return () => {
			document.body.removeChild(script);
		}
	}, []);

	return (
		<div>
			<div id="fb-root"></div>
			<div className="fb-page" 
				data-href="https://www.facebook.com/antedu.vn"
				data-width="580" 
				data-hide-cover="false"
				data-show-facepile="false"></div>
		</div>
	);
}