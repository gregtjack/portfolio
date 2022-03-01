import { FunctionComponent } from "react"
import type { NextPage } from 'next'
import { Layout } from '../components/Layout'
import { UnderlineLink } from "../components/Links"
import { Project } from "../components/Project"


const Projects: NextPage = () => {
  const meta = {
    title: "Greg Jackson — Projects"
  }
  return (
    <Layout meta={meta}>
      <Project 
        title="Discord Bot"
        description="A Discord bot created for the Maryland Marching Band trumpet section. Its feature set includes polls, events, and confessions."
        tags={["TypeScript", "Node.js"]}
        imgsrc="/images/rybot.png"
        link="https://github.com/gregtjack/rybot"
      />
    </Layout>
  )
}

export default Projects