"use client"
import { useEffect } from "react"

const GTM = () => {
	const script = `<!-- Google tag (gtag.js) -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-E80BDB2LKF"></script>
	<script>
	  window.dataLayer = window.dataLayer || [];
	  function gtag(){dataLayer.push(arguments);}
	  gtag('js', new Date());
	
	  gtag('config', 'G-E80BDB2LKF');
	</script>`

	useEffect(() => {
		if (window !== undefined) {

		}
	}, [])
	return <div dangerouslySetInnerHTML={{__html: script}}></div>
}

export default GTM