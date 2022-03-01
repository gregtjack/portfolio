import { FunctionComponent } from "react"
import { IoArrowForward, IoOpen, IoOpenOutline } from "react-icons/io5"

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
      <div className="flex items-center w-full mb-4">
        <div className="flex flex-col">
          <div className="px-4 pt-3 pb-2">
            <div className="mb-2">
              <a href={link} className="font-bold text-2xl hover:text-accent transition-all mr-3">
                <div className="mr-2 inline-block">{title}</div>
                <IoArrowForward className="inline-block" />
              </a>
              <div className="font-extralight text-sm text-gray-700 dark:text-gray-300">{year}</div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              {description}
            </p>
          </div>
          <div className="px-4">
            {
              tags.map((e, i) => {
                return <span key={i} className="inline-block bg-gray-300 dark:bg-gray-600 dark:text-gray-200 drop-shadow-sm rounded-full px-3 py-1 text-sm font-thin text-gray-700 mr-2 mb-2">{e}</span>
              })
            }
          </div>
        </div>
          {imgsrc ? 
          <div className="px-4 py-2 overflow-hidden">
            <img src={imgsrc} className="rounded-lg" />
          </div> : <></>}
        {children}
    </div>
    )
}

export { Project }