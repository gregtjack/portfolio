import type { NextPage } from 'next'
import { Layout } from '../components/Layout'
import { UnderlineLink } from '../components/Links'
import SectionHeader from '../components/SectionHeader'
import { IoDocumentText } from "react-icons/io5";
import { FunctionComponent } from 'react';
import EaseInSection from '../components/EaseInSection'

type Link = {
  href: string
}

const BigButton: FunctionComponent<Link> = ({href, children}) => {
  return (
    <a href={href} target="_blank" className="inline-flex items-center h-10 px-3 mb-2 mr-2 text-lg text-white rounded-lg hover:bg-accent-dark font-varela transition-all bg-accent">
      {children}
    </a>
  )
}

const Home: NextPage = () => {
  return (
    <Layout meta={{
      title: "Greg Jackson"
    }}>
      <div>
        <EaseInSection delay={0}>
          <div className='hidden px-10 py-10 mb-6 rounded-xl sm:block'>
            <div className='flex items-center justify-center'>
              <div className='mr-10'>
                <div className='mb-2 text-5xl font-semibold font-varela'>Gregory Jackson</div>
                <div className='text-md rounded-xl'>Incoming SWE Intern @ <UnderlineLink href='https://www.immuta.com'>Immuta</UnderlineLink> // UMD '24</div>
              </div>
                <img src='/images/profile.jpg' className='w-24 h-24 rounded-full transition-colors' />
            </div>
          </div>
          <div className='flex justify-center sm:hidden'>
            <img src='/images/profile.jpg' className='mb-5 rounded-full w-28 h-28' />
          </div>
        </EaseInSection>
        <EaseInSection delay={0.1}>
          <SectionHeader name='Bio' />
          <p className="mt-3 mb-3 text-xl text-gray-600 dark:text-gray-300">
            Hi, I'm a software engineer, hardware enthusiest, and student currently studying computer science at the <UnderlineLink href="https://umd.edu">University of Maryland</UnderlineLink>. 
            I'm open to all types of developement roles, but I am especially interested in fullstack.
          </p>
          <p className='mt-3 mb-3 text-xl text-gray-600 dark:text-gray-300'>
            My interests and hobbies include playing video games, watching anime, and playing/writing music. You can check tunes I've written <UnderlineLink href="https://soundcloud.com/gregoriousj">here</UnderlineLink>.
            At UMD, I'm a member of the Mighty Sound of Maryland and the Maryland Pep Band where I play trumpet.
          </p>      
          <br />
        </EaseInSection>
        <EaseInSection delay={0.2}>
          <BigButton href='/resume.pdf'>
            <span className='mr-2'>View Resume</span>
            <IoDocumentText />
          </BigButton>
        </EaseInSection> 
      </div>
    </Layout>
  )
}

export default Home
