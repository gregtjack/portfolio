import { SyntheticEvent } from 'react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState, Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { IoChevronDown, IoEllipsisVertical, IoMoon, IoMusicalNotes, IoSunny } from 'react-icons/io5'

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

const DropdownMenu = () => {
  const { theme, setTheme } = useTheme()
  return (
    <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="transition-colors inline-flex justify-center w-full hover:bg-gray-200 dark:hover:bg-zinc-800 rounded-md text-2xl p-2 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <IoEllipsisVertical />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white dark:bg-zinc-800 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
            <Menu.Item>
                {({ active }) => (
                  <a
                    href='/'
                    className={`${
                      active ? 'bg-accent text-white' : ''
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    About
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href='/projects'
                    className={`${
                      active ? 'bg-accent text-white' : ''
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    Projects
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-accent text-white' : ''
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  >
                    {theme === 'dark' ? 'Turn on the lights 🌞' : 'Turn off the lights 🌙'}
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
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
        <div className='md:hidden inline-block'>
          <DropdownMenu />
        </div>
      </div>
    </div>
  )
}

export { Navbar }