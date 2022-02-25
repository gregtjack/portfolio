import { FunctionComponent } from "react"

interface NiceLinkType {
  href: string
}

const Mark: FunctionComponent = ({ children }) => {
  return <span className="text-accent-dark">{children}</span>
}

const NiceLink: FunctionComponent<NiceLinkType> = ({ href, children }) => {
  return <a href={href} className="underline dark:text-gray-300 text-gray-700">{children}</a>
}

export { Mark, NiceLink }