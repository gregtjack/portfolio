import type { NextPage } from 'next'
import { Layout } from '../components/Layout'
import { Mark, NiceLink } from '../components/Links'


const Home: NextPage = () => {
  const meta = {
    title: "Greg Jackson — About"
  }
  return (
    <Layout meta={meta}>
      <div>
        <h1 className='font-sans text-6xl my-6'>
          Hi, I'm <Mark>Greg</Mark>.
        </h1>
        <br />
        <p className="text-2xl">
          I'm an aspiring software engineer currently studying <Mark>computer science</Mark> at 
          the <NiceLink href="https://cs.umd.edu">University of Maryland</NiceLink>. Besides coding, my interests include (in no particular order): <NiceLink href="https://soundcloud.com/gregoriousj">composing music</NiceLink>, playing video games, and watching anime.
        </p>
        <br />
        <p className="text-2xl">
          Pog business inquiries? <NiceLink href='mailto:gregtj30@gmail.com'>Send an email.</NiceLink>
        </p>        
      </div>
    </Layout>
  )
}

export default Home
