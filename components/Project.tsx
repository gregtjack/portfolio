import { motion } from "framer-motion"
import { FunctionComponent } from "react"
import { IoArrowForward } from "react-icons/io5"

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
      <motion.div 
        className="flex items-center w-full mb-4"
        initial={{y: 10, opacity: 0}} 
        animate={{y: 0, opacity: 1}} 
        transition={{duration: 0.3, delay}}
      >
        <div className="flex flex-col">
          <div className="px-4 pt-3 pb-2">
            <div className="mb-2">
              <a href={link} className="font-bold text-xl hover:text-accent transition-all mr-3">
                <div className="mr-2 inline-block">{title}</div>
                <IoArrowForward className="inline-block" />
              </a>
              <div className="font-extralight text-sm text-gray-700 dark:text-gray-300">{year}</div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-md">
              {description}
            </p>
          </div>
          <div className="px-4">
            {
              tags && tags.map((e, i) => {
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
    </motion.div>
    )
}

export { Project }