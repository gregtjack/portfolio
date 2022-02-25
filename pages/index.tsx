import type { NextPage } from 'next'
import { Layout } from '../components/Layout'
import { Button, Mark, UnderlineLink } from '../components/Links'
import { IoLogoGithub, IoLogoLinkedin, IoOpenOutline } from "react-icons/io5";

const Home: NextPage = () => {
  const meta = {
    title: "Greg Jackson — About"
  }

  return (
    <Layout meta={meta}>
      <div >
        <h1 className='font-bold text-6xl my-6'>
          Hi! I'm <Mark>Greg</Mark> 👋
        </h1>
        <br />
        <p className="text-2xl">
          I'm a software engineer currently studying computer science at 
          the <UnderlineLink href="https://cs.umd.edu">University of Maryland</UnderlineLink>. Besides programming, my interests include
          <UnderlineLink href="https://soundcloud.com/gregoriousj">composing music</UnderlineLink>, playing video games, and watching anime.
        </p>
        <br />
        <p className="text-2xl">
          Wanna talk? <UnderlineLink href='mailto:gregtj30@gmail.com'>Send me an email.</UnderlineLink>
        </p>
        <br />
        <Button href='/files/resume.pdf'>
          <span className='mr-2'>Resume</span>
          <IoOpenOutline />
        </Button>
        <Button href='https://github.com/gregtjack'>
          <span className='mr-2'>GitHub</span>
          <IoLogoGithub />
        </Button>
        <Button href='https://www.linkedin.com/in/gregory-t-jackson/'>
        <span className='mr-2'>LinkedIn</span>
          <IoLogoLinkedin />
        </Button>
      </div>
    </Layout>
  )
}

export default Home