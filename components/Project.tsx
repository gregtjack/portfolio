import { FunctionComponent } from "react"

interface ProjectType {
    title: string
    description: string
    link: string
    imgsrc?: string
    year: string
    tags: string[]
}

const Project: FunctionComponent<ProjectType> = ({title, tags, link, description, year, imgsrc, children}) => {
    return (
      <div className="flex justify-between w-full rounded-lg mb-4">
        <div className="flex flex-col">
          <div className="px-4 py-3">
            <div className="mb-2">
              <a href={link} className="font-bold text-2xl hover:text-accent transition-colors mr-3">{title}</a>
              <div className="font-extralight text-sm text-gray-700 dark:text-gray-300">{year}</div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              {description}
            </p>
          </div>
          <div className="px-4">
            {
              tags.map(e => {
                return <span className="inline-block bg-gray-300 dark:bg-gray-600 dark:text-gray-200 rounded-full px-3 py-1 text-sm font-thin text-gray-700 mr-2 mb-2">{e}</span>
              })
            }
          </div>
        </div>
        <div className="p-3">
          {imgsrc ? <img src={imgsrc} className="rounded-lg overflow-hidden max-w-sm" /> : <></>}
        </div>
        {children}
    </div>
    )
}

export { Project }