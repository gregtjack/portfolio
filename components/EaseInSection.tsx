import { motion } from "framer-motion";
import { FunctionComponent } from "react";

type EaseInSectionType = {
    delay: number
}

const EaseInSection: FunctionComponent<EaseInSectionType> = ({children, delay}) => {
    return (
        <motion.div 
          initial={{y: 10, opacity: 0}} 
          animate={{y: 0, opacity: 1}} 
          transition={{duration: 0.3, delay}}
        >
          {children}
        </motion.div>
    )
}

export default EaseInSection