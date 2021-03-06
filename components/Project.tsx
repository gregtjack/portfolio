import { FunctionComponent } from "react"
import EaseInSection from "./EaseInSection"

interface ProjectType {
    title: string
    description: string
    link: string
    imgsrc?: string
    year: string
    tags?: string[]
    delay?: number
}

const Project: FunctionComponent<ProjectType> = ({title, tags, link, description, year, imgsrc, children, delay=0}) => {
    return (
      <EaseInSection delay={delay}>
        <div className="flex flex-col">
          <div className="pt-3 pb-2">
            <div className="mb-2">
                <a href={link} className="inline-flex items-center text-xl hover:text-accent transition-all">
                  <div className="mr-2">{title}</div>
                  <div className="flex">
                    {
                      tags && tags.map((e, i) => {
                        return <div key={i} className="bg-gray-300 dark:bg-gray-600 dark:text-gray-200 drop-shadow-sm rounded-full px-2 py-1 text-xs text-gray-700 mr-2">{e}</div>
                      })
                    }
                  </div>
                </a>
              <div className="font-extralight text-xs text-gray-700 dark:text-gray-300">{year}</div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-md">
              {description}
            </p>
          </div>
        </div>
          {imgsrc ? 
          <div className="px-4 py-2 overflow-hidden">
            <img src={imgsrc} className="rounded-lg" />
          </div> : <></>}
        {children}
      </EaseInSection>
    )
}

export { Project }