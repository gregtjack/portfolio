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
        description="A Discord bot created for the Maryland Marching Band trumpet section. Currently its featureset includes polls, events, and confessions."
        tags={["TypeScript", "Node.js"]}
        imgsrc="/images/rybot2.png"
        link="https://github.com/gregtjack/rybot"
        year="2021"
      />
    </Layout>
  )
}

export default Projects