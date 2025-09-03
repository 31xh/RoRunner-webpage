import { motion, useInView, useAnimation } from "framer-motion"
import { useEffect, useRef } from "react"

const Reveal = ({children, duration, delay, hiddenY}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true} )
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView])

  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: hiddenY || 75 },
          visible: { opacity: 1, y: 0 }
        }}
        exit={{ opacity: 0 }}
        viewport={{ amount: 0.4 }}
        initial="hidden"
        animate={ mainControls }
        transition={{ duration: duration, delay: delay }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default Reveal
