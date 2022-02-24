import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <NextNProgress color='#1ee3b2'/>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
