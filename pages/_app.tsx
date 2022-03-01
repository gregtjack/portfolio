import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" default="light">
      <NextNProgress color='#2573d9'/>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp