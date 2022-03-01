import type { NextPage } from 'next'
import { Layout } from '../components/Layout'
import { Project } from "../components/Project"


const Projects: NextPage = () => {
  const meta = {
    title: "Greg Jackson — Projects"
  }
  return (
    <Layout meta={meta}>
      <Project
        title="Portfolio Website"
        description="This website."
        tags={["TypeScript", "Next.js", "React", "TailwindCSS"]}
        link="https://github.com/gregtjack/portfolio"
        year="2022"
      />
      <Project
        title="Discord Bot"
        description="A Discord bot created for the Maryland Marching Band trumpet section that uses Discord.js. Currently, it can be used to create polls, events, and confessions."
        tags={["TypeScript", "Node.js"]}
        link="https://github.com/gregtjack/rybot"
        year="2021"
      />
    </Layout>
  )
}

export default Projects