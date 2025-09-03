import { motion, useInView, useAnimation } from "framer-motion"
import { useEffect, useRef } from "react"

const SideReveal = ({ children, duration, delay }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const controlAnimation = useAnimation()

    useEffect(() => {
        if (isInView) {
            controlAnimation.start("visible")
        }
    }, [isInView])

    return (
        <div ref={ref}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, x: 75 },
                    visible: { opacity: 1, x: 0 }
                }}
                initial="hidden"
                animate={controlAnimation}
                transition={{ duration: duration, delay: delay }}
            >
                {children}
            </motion.div>
        </div>
    )
}

export default SideReveal
