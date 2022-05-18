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
        <div className="flex justify-center mx-auto">
            <Head>
                <title>{meta.title}</title>
                <meta content={meta.description} name="description" />
            </Head>
            <main className="flex flex-col h-screen w-full min-w-0">
                <div className="sticky top-0 z-50">
                <Navbar />
                </div>
                <div className="flex items-center justify-center">
                    <div className="max-w-3xl px-4 mb-auto sm:px-6 lg:px-8">
                        {children}
                    <Footer />
                    </div>
                </div>
            </main>
        </div>
    )
}