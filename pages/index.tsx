import type { NextPage } from 'next'
import { Layout } from '../components/Layout'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  const homeMeta = {
    title: "Greg Jackson - Software Engineer"
  }
  return (
    <Layout meta={homeMeta}>
      
    </Layout>
  )
}

export default Home
