import { SyntheticEvent } from 'react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

interface NavType {
  text: string,
  to: string
}

const NavLink = ({text, to}: NavType) => {
  const router = useRouter()
  const activeStyle = router.asPath === to ? 'font-bold' : 'text-gray-400'

  const handleClick = (e: SyntheticEvent) => {
    e.preventDefault()
    router.push(to)
  }

  return (
    <Link href={to}>
      <a className={"font-sans text-2xl px-3 hover:text-accent transition-all " + activeStyle} onClick={handleClick}>
        {text}
      </a>
    </Link>
  )
}

const Navbar = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="max-w-6xl px-4 py-16 md:py-12">
      <div className="flex items-center justify-between md:flex-row">
        <Link href="/">
          <a>
            <img 
              className="outline-gray-400 hover:outline-accent rounded-full w-24 h-24" 
              src="/images/profile.jpg"/>
          </a>
        </Link>
        <div>
          <NavLink text='About' to='/' />
          <NavLink text='Projects' to='/projects' />
        </div>
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="h-10 w-10 rounded p-3 focus:outline-none"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {mounted && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              className="h-4 w-4 dark:text-white text-black"
            >
              {theme === 'dark' ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              )}
            </svg>
          )}
        </button>
      </div>
    </div>
  )
}

export { Navbar }