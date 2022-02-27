import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" default="system">
      <NextNProgress color='#106aff'/>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
