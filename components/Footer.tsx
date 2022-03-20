import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter, IoMail } from "react-icons/io5"

const Footer = () => {
    return (
        <div>
            <footer className="mx-auto max-w-6xl px-4 py-6 md:py-16 text-gray-600 dark:text-gray-300">
                <div className="flex items-center text-3xl mb-2">
                    <a href="https://github.com/gregtjack" className="mr-2 hover:text-accent transition-colors">
                        <IoLogoGithub />
                    </a>
                    <a href="https://linkedin.com/in/gregory-t-jackson" className="mr-2 hover:text-accent transition-colors">
                        <IoLogoLinkedin />
                    </a>
                    <a href="https://twitter.com/Gregorious__" className="text-3xl mr-2 hover:text-accent transition-colors">
                        <IoLogoTwitter />
                    </a>
                    <a href="mailto:gregtj30@gmail.com" className="text-3xl mr-2 hover:text-accent transition-colors">
                        <IoMail />
                    </a>
                </div>
                <a className="text-sm" href="https://github.com/gregtjack/portfolio">© 2022 Greg Jackson. All Rights Reserved.</a>
            </footer>
        </div>
    )
}

export { Footer }