import { FunctionComponent } from "react"

interface CardType {
    title: string
    tags: string[]
}

const Card: FunctionComponent<CardType> = ({title, tags, children}) => {
    return (
        <div className="p-3 h-24 outline outline-1">
            <h2>{title}</h2>
            <a>
                {children}
            </a>
        </div>
    )
}

export { Card }