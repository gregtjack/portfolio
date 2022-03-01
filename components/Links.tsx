import { FunctionComponent } from "react"

interface Link {
  href: string
}

const Mark: FunctionComponent = ({ children }) => {
  return <span className="text-accent">{children}</span>
}

const UnderlineLink: FunctionComponent<Link> = ({ href, children }) => {
  return <a href={href} className="underline hover:text-accent transition-all">{children}</a>
}

const Button: FunctionComponent<Link> = ({href, children}) => {
  return (
    <a href={href} target="_blank" className="hover:drop-shadow-lg inline-flex items-center h-10 mr-2 mb-2 px-3 transition-all text-white text-xl bg-accent rounded-lg">
      {children}
    </a>
  )
}

export { Mark, UnderlineLink, Button }