import React, { FunctionComponent } from "react"
import { Navbar } from "./Navbar"
import Head from "next/head"
import { Footer } from "./Footer"

interface LayoutProps {
    meta: {
        title: string,
        description?: string
    }
}

const Layout: FunctionComponent<LayoutProps> = ({meta, children}) => {
    return (
        <div>
            <Head>
                <title>{meta.title}</title>
                <meta content={meta.description} name="description" />
            </Head>
            <main className="flex flex-col h-screen justify-between mx-auto max-w-4xl">
                <Navbar />
                <div className="w-full px-4 mb-auto">
                    {children}
                </div>
                <Footer />
            </main>
        </div>
    )
}

export { Layout }