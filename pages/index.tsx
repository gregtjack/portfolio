import type { NextPage } from 'next'
import { Layout } from '../components/Layout'
import { UnderlineLink } from '../components/Links'
import SectionHeader from '../components/SectionHeader'
import { IoDocumentText } from "react-icons/io5";
import { FunctionComponent } from 'react';
import EaseInSection from '../components/EaseInSection'
import { Project } from '../components/Project';


const Home: NextPage = () => {
  return (
    <Layout meta={{
      title: "Greg Jackson"
    }}>
      <div>
        <EaseInSection delay={0}>
          <div className='py-6 mb-3 rounded-xl sm:block'>
            <div className='flex'>
              <div className='mr-10'>
                <div className='mb-3 md:text-6xl text-4xl font-semibold'>
                  Hi, I'm Greg 👋 
                </div>
                <div className='text-lg'>Incoming SWE Intern @ <UnderlineLink href='https://www.immuta.com'>Immuta</UnderlineLink> · CS @ UMD</div>
              </div>
            </div>
          </div>
        </EaseInSection>
        <EaseInSection delay={0.1}>
          <SectionHeader name='Bio' />
          <p className="mt-3 mb-3 text-xl text-gray-600 dark:text-gray-300">
            I'm a software engineer and student currently studying computer science at the <UnderlineLink href="https://umd.edu">University of Maryland</UnderlineLink>. 
            I'm open to all types of developement roles, but I am especially interested in fullstack.
          </p>
          <p className='mt-3 mb-3 text-xl text-gray-600 dark:text-gray-300'>
            My interests and hobbies include playing video games, watching anime, and playing/writing music. You can check tunes I've written <UnderlineLink href="https://soundcloud.com/gregoriousj">here</UnderlineLink>.
            At UMD, I'm a member of the Mighty Sound of Maryland and the Maryland Pep Band where I play trumpet.
          </p>      
          <br />
        </EaseInSection>
        <EaseInSection delay={0.2}>
          <SectionHeader name="Stuff" />  
        </EaseInSection>
        <Project
          title="Valorant Data Analysis"
          description="My final project for CMSC320: An analysis of professional Valorant players' stats using python, pandas, numpy, and other tools."
          tags={["Python"]}
          link="/valorant_analysis"
          year="2022"
          delay={0.3}
        />
        <Project
          title="Portfolio"
          description="This website."
          tags={["TypeScript", "Next.js", "React"]}
          link="https://github.com/gregtjack/portfolio"
          year="2022"
          delay={0.3}
        />
        <Project
          title="RYBot"
          description="A Discord bot created for the Maryland Marching Band trumpet section that uses Discord.js. Currently, it can be used to create polls, events, and more."
          tags={["TypeScript", "Node.js"]}
          link="https://github.com/gregtjack/rybot"
          year="2021"
          delay={0.3}
        />
        <Project
          title="loft129.org"
          description="Website designed for a live music venue in Cumberland, MD."
          link="https://loft129.org"
          year="2021"
          delay={0.3}
        />
      </div>
    </Layout>
  )
}

export default Home
