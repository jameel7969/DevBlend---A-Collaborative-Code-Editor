import { motion } from 'framer-motion'
import { navVariants } from '../utils/motion'

const NavDown = ({ children, className }) => {
    return (
        <motion.div
            className={`${className}`}
            variants={navVariants}
            initial="hidden"
            animate="show"
        >
            {children}
        </motion.div>
    )
}

export default NavDown