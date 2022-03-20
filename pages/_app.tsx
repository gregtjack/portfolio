import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <NextNProgress color='#009de0' height={2}/>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp