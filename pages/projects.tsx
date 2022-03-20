import type { NextPage } from 'next'
import EaseInSection from '../components/EaseInSection'
import { Layout } from '../components/Layout'
import { Project } from "../components/Project"
import SectionHeader from '../components/SectionHeader'


const Projects: NextPage = () => {
  return (
    <Layout meta={{
      title: "Greg Jackson // Projects"
    }}>
      <EaseInSection delay={0}>
        <SectionHeader name='Projects' />  
      </EaseInSection>
      <Project
        title="Portfolio Website"
        description="This website."
        tags={["TypeScript", "Next.js", "React"]}
        link="https://github.com/gregtjack/portfolio"
        year="2022"
        delay={0}
      />
      <Project
        title="Discord Bot"
        description="A Discord bot created for the Maryland Marching Band trumpet section that uses Discord.js. Currently, it can be used to create polls, events, and more."
        tags={["TypeScript", "Node.js"]}
        link="https://github.com/gregtjack/rybot"
        year="2021"
        delay={0.1}
      />
      <Project
        title="loft129.org"
        description="Website and logo designed for a live music venue in Cumberland, MD."
        link="https://loft129.org"
        year="2021"
        delay={0.2}
      />
    </Layout>
  )
}

export default Projects