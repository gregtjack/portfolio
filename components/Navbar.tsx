import { FunctionComponent, SyntheticEvent } from 'react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState, Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { IoDocumentText, IoEllipsisVertical, IoMoon, IoMusicalNotes, IoSunny } from 'react-icons/io5'

interface NavType {
  text: string,
  to: string
}

const NavLink = ({text, to}: NavType) => {
  const router = useRouter()
  const activeStyle = router.asPath === to ? ' text-accent underline' : 'text-gray-600 dark:text-gray-300'

  const handleClick = (e: SyntheticEvent) => {
    e.preventDefault()
    router.push(to)
  }

  return (
    <Link href={to}>
      <a className={"text-lg px-2 hover:opacity-60 transition-all" + activeStyle} onClick={handleClick}>
        {text}
      </a>
    </Link>
  )
}

const DropdownMenu = () => {
  const { theme, setTheme } = useTheme()
  return (
    <Menu as="div" className="relative z-10 inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center w-full p-2 text-2xl font-medium transition-colors hover:bg-gray-200 dark:hover:bg-zinc-800 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
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
          <Menu.Items className="absolute right-0 w-56 mt-2 bg-white shadow-lg origin-top-right dark:bg-zinc-800 divide-y divide-gray-100 rounded-md ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
            <Menu.Item>
                {({ active }) => (
                  <a
                    href='/'
                    className={`${
                      active ? 'bg-accent text-white' : ''
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    Home
                  </a>
                )}
              </Menu.Item> 
              <Menu.Item>
                {({ active }) => (
                  <a
                    href='/resume.pdf'
                    className={`${
                      active ? 'bg-accent text-white' : ''
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    View resume
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
type Link = {
  href: string
}
const BigButton: FunctionComponent<Link> = ({href, children}) => {
  return (
    <a href={href} target="_blank" className="inline-flex items-center h-10 px-3 mr-2 text-lg text-white rounded-lg hover:bg-accent-dark transition-all bg-accent">
      {children}
    </a>
  )
}

const Navbar = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="px-4 py-4 bg-opacity-30 backdrop-blur-sm">
      <div className="flex items-center justify-between md:flex-row">
        <div className='flex items-center'>
          <div className=' hidden md:inline-block'>
            <div className='text-lg mr-2 inline-block'>👨‍💻 Greg Jackson</div>
            <NavLink text='Home' to='/' />
          </div>
        </div>
        <div className='flex items-center'>
          <BigButton href='/resume.pdf'>
              <span className='mr-2'>Resume</span>
              <IoDocumentText />
          </BigButton>
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="hidden w-10 h-10 p-3 rounded md:inline-block"
            onClick={() => setTheme(theme == 'dark' ? 'light' : 'dark')}
          >
            {mounted && theme === 'dark' ? (
              <IoSunny />
            ) : (
              <IoMoon />
            )}
          </button>
          <div className='inline-block md:hidden'>
            <DropdownMenu />
          </div>
        </div>
      </div>
    </div>
  )
}

export { Navbar }
