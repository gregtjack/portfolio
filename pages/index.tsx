import type { NextPage } from 'next'
import { Layout } from '../components/Layout'
import { UnderlineLink } from '../components/Links'
import SectionHeader from '../components/SectionHeader'
import { motion } from "framer-motion"
import { IoOpenOutline } from "react-icons/io5";
import { FunctionComponent } from 'react';
import EaseInSection from '../components/EaseInSection'
import { Project } from '../components/Project'

type Link = {
  href: string
}


const ResumeButton: FunctionComponent<Link> = ({href, children}) => {
  return (
    <a href={href} target="_blank" className="hover:bg-accent-dark font-varela inline-flex items-center h-10 mr-2 mb-2 px-3 transition-all text-white text-lg bg-accent rounded-lg">
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
          <div className='mb-6 px-10 py-10 bg-gray-100 dark:bg-zinc-900 rounded-xl hidden sm:block'>
            <div className='flex items-center justify-center'>
              <div className='mr-10'>
                <div className='font-varela font-semibold text-5xl mb-2'>Greg Jackson</div>
                <div className='text-md rounded-xl'>Software engineer / student at UMD</div>
              </div>
              <img src='/images/profile.jpg' className='rounded-full w-24 h-24 transition-colors' />
            </div>
          </div>
          <div className='flex justify-center sm:hidden'>
            <img src='/images/profile.jpg' className='rounded-full w-28 h-28 mb-5' />
          </div>
        </EaseInSection>
        <EaseInSection delay={0.1}>
          <SectionHeader name='Bio' />
          <p className="text-xl mt-3 mb-3 text-gray-600 dark:text-gray-300">
            Hi! I'm a software engineer studying computer science at the <UnderlineLink href="https://umd.edu">University of Maryland</UnderlineLink>. I'm interested in fullstack web development. 
          </p>
          <p className='text-xl mt-3 mb-3 text-gray-600 dark:text-gray-300'>
            Outside of coding, I'm passionate about music. Sometimes I like to <UnderlineLink href="https://soundcloud.com/gregoriousj">compose tunes of my own</UnderlineLink>.
            At UMD, I'm involved with the Marching and Pep Band where I play trumpet.
          </p>
          <br />
        </EaseInSection>
        <EaseInSection delay={0.2}>
          <ResumeButton href='/resume.pdf'>
            <span className='mr-2'>View Resume</span>
            <IoOpenOutline />
          </ResumeButton>
        </EaseInSection>
        
      </div>
    </Layout>
  )
}

export default Home