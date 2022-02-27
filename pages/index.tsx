import type { NextPage } from 'next'
import { Layout } from '../components/Layout'
import { Button, Mark, UnderlineLink } from '../components/Links'
import { IoOpenOutline } from "react-icons/io5";

const Home: NextPage = () => {
  const meta = {
    title: "Greg Jackson — About"
  }

  return (
    <Layout meta={meta}>
      <div >
        <h1 className='font-bold text-6xl mb-2'>
          Hi! <br />
          My name is <Mark>Greg</Mark>.
        </h1>
        <br />
        <p className="text-2xl mt-3 mb-3 text-gray-600 dark:text-gray-300">
          I'm a software engineer studying computer science at 
          the <UnderlineLink href="https://cs.umd.edu">University of Maryland</UnderlineLink>. 
          My interests and hobbies include <UnderlineLink href="https://soundcloud.com/gregoriousj">composing music</UnderlineLink>
          , playing video games, and watching anime. 
        </p>
        <br />
        <Button href='/files/resume.pdf'>
          <span className='mr-2'>View Resume</span>
          <IoOpenOutline />
        </Button>
        
      </div>
    </Layout>
  )
}

export default Home