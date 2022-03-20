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



export { Mark, UnderlineLink }