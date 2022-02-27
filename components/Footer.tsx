import Link from "next/link"
import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter, IoMail } from "react-icons/io5"

const Footer = () => {
    return (
        <div>
            <footer className="flex items-center mx-auto max-w-6xl px-4 py-6 md:py-16 text-gray-600 dark:text-gray-200">
                <a href="https://github.com/gregtjack" className="text-3xl mr-2 hover:text-accent">
                    <IoLogoGithub />
                </a>
                <a href="https://linkedin.com/in/gregory-t-jackson" className="text-3xl mr-2 hover:text-accent transition-colors">
                    <IoLogoLinkedin />
                </a>
                <a href="https://twitter.com/Gregorious__" className="text-3xl mr-2 hover:text-accent transition-colors">
                    <IoLogoTwitter />
                </a>
                <a href="mailto:gregtj30@gmail.com" className="text-3xl mr-2 hover:text-accent transition-colors">
                    <IoMail />
                </a>
                © 2022 gregtjack.space
            </footer>
        </div>
    )
}

export { Footer }