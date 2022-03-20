import { SyntheticEvent } from 'react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { IoMenu, IoMoon, IoMusicalNotes, IoSunny } from 'react-icons/io5'

interface NavType {
  text: string,
  to: string
}

const NavLink = ({text, to}: NavType) => {
  const router = useRouter()
  const activeStyle = router.asPath === to ? 'text-accent' : 'text-gray-600 dark:text-gray-300'

  const handleClick = (e: SyntheticEvent) => {
    e.preventDefault()
    router.push(to)
  }

  return (
    <Link href={to}>
      <a className={"text-xl px-3 hover:underline transition-all " + activeStyle} onClick={handleClick}>
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
    <div className="max-w-6xl px-4 py-8">
      <div className="flex items-center justify-between md:flex-row">
        <div className='items-center flex'>
          <a href="/" className='text-xl mr-6 flex items-center'>
            <IoMusicalNotes className='mr-1' />
            <div className='font-varela'>
              gregtjack
            </div>
          </a>
          <div className='md:inline-block items-center hidden'>
            <NavLink text='Projects' to='/projects' />
          </div>
        </div>
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="h-10 w-10 rounded p-3 md:inline-block hidden"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {mounted && theme === 'dark' ? (
            <IoSunny />
          ) : (
            <IoMoon />
          )}
        </button>
        <div className='md:hidden flex text-2xl'>
          <label className="btn m-1">Click</label>
            <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export { Navbar }