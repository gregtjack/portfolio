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

export const Layout: FunctionComponent<LayoutProps> = ({meta, children}) => {
    return (
        <div className="flex justify-center px-4 mx-auto max-w-8xl sm:px-6 lg:px-8">
            <Head>
                <title>{meta.title}</title>
                <meta content={meta.description} name="description" />
            </Head>
            <main className="flex flex-col h-screen mx-4 max-w-3xl min-w-0">
                <Navbar />
                <div className="w-full px-4 mb-auto">
                    {children}
                </div>
                <Footer />
            </main>
        </div>
    )
}