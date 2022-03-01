import { FunctionComponent } from "react"

interface ProjectType {
    title: string
    description: string
    link: string
    imgsrc: string
    tags: string[]
}

const Project: FunctionComponent<ProjectType> = ({title, tags, link, description, imgsrc, children}) => {
    return (
      <div className="flex justify-between w-full rounded-lg shadow-lg bg-gray-100 dark:bg-zinc-700 mb-4">
        <div className="flex flex-col">
          <div className="px-4 py-3">
            <div className="flex items-center">
              <a href={link} className="font-bold text-2xl hover:text-accent transition-colors mr-3">{title}</a>
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              {description}
            </p>
          </div>
          <div className="px-4">
            {
              tags.map(e => {
                return <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{e}</span>
              })
            }
          </div>
        </div>
        <div className="p-3">
          <img src={imgsrc} className="rounded-lg" />
        </div>
        {children}
    </div>
    )
}

export { Project }
// A Discord bot created for the Maryland Marching Band trumpet section. Its feature set includes polls, events, and confessions.