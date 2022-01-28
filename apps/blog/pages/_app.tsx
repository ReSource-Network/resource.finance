// global styles shared across the entire site
import "katex/dist/katex.min.css"
import "prismjs"
import "prismjs/components/prism-bash"
import "prismjs/components/prism-javascript"
import "prismjs/components/prism-markup"
import "prismjs/components/prism-typescript"
import "prismjs/themes/prism-coy.css"
import "react-notion-x/src/styles.css"
import "react-static-tweets/styles.css"
import "styles/global.css"
import "styles/notion.css"
import "styles/prism-theme.css"

import { ChakraProvider, ColorModeScript } from "@chakra-ui/react"
import * as Fathom from "fathom-client"
import { bootstrap } from "lib/bootstrap-client"
import { fathomConfig, fathomId } from "lib/config"
import { useRouter } from "next/router"
import React from "react"

import { theme } from "../theme/theme"

// core styles shared by all of react-notion-x (required)
// used for code syntax highlighting (optional)
// this might be better for dark mode
// import 'prismjs/themes/prism-okaidia.css'

// used for collection views selector (optional)
// TODO: re-add if we enable collection view dropdowns
// import 'rc-dropdown/assets/index.css'

// used for rendering equations (optional)
// core styles for static tweet renderer (optional)
// global style overrides for notion
// global style overrides for prism theme (optional)
// here we're bringing in any languages we want to support for
// syntax highlighting via Notion's Code block
if (typeof window !== "undefined") {
  bootstrap()
}

export default function App({ Component, pageProps }) {
  const router = useRouter()

  React.useEffect(() => {
    if (fathomId) {
      Fathom.load(fathomId, fathomConfig)

      function onRouteChangeComplete() {
        Fathom.trackPageview()
      }

      router.events.on("routeChangeComplete", onRouteChangeComplete)

      return () => {
        router.events.off("routeChangeComplete", onRouteChangeComplete)
      }
    }
  }, [])

  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
