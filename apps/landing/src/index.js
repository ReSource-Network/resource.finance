import React from "react"
import { ColorModeScript } from "@chakra-ui/react"
import App from "./components/App"
import reportWebVitals from "./reportWebVitals"
import { ChakraProvider } from "@chakra-ui/react"
import customTheme from "./theme/CustomTheme"

export default function NextIndexWrapper() {
  return (
    <React.StrictMode>
      <ChakraProvider theme={customTheme}>
        <ColorModeScript initialColorMode={customTheme.config.initialColorMode} />
        <App />
      </ChakraProvider>
    </React.StrictMode>
  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
