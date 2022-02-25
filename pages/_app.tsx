import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" default="dark">
      <NextNProgress color='#596aff'/>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
