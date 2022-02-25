import React, { FunctionComponent, ReactElement } from "react"
import { Navbar } from "./Navbar"
import Head from "next/head"
import { useRouter } from "next/router"
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
            <main className="w-full">
                <Navbar />
                <div className="items-center mx-auto max-w-6xl px-4">
                    {children}
                </div>
                <Footer />
            </main>
        </div>
    )
}

export { Layout }