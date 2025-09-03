import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const ParallaxMotion = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
    const logoY = useTransform(scrollYProgress, [0, 1], ["0%", "0%"])
    const parallax1 = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
    const parallax2 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
    const parallax3 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
    const parallaxDiv = useTransform(scrollYProgress, [0, 1], ["0%", "0%"])

    return (
        <div ref={ref} className='w-100 vh-100 overflow-hidden position-relative d-grid'>

            <motion.div className="pt-5 mt-5 logo-parallax d-flex align-content-center justify-content-center" style={{ y: logoY }}>
                <img src="https://res.cloudinary.com/dhpjybus4/image/upload/v1753995335/logo_wphfcr.png" className="img-fluid" alt="#" />
            </motion.div>
            <motion.div style={{ y: backgroundY }} className="parallax-bg"></motion.div>
            <motion.div style={{ y: parallax1 }} className="parallax-1"></motion.div>
            <motion.div style={{ y: parallax2 }} className="parallax-2"></motion.div>
            <motion.div style={{ y: parallax3 }} className="parallax-3"></motion.div>
            <motion.div style={{ y: parallaxDiv}} className="parallax-divider">
                <img src="https://res.cloudinary.com/dhpjybus4/image/upload/v1754583621/parallaxdiv_clq25e.png" className='img-fluid pb-5' alt="" />
            </motion.div>
        </div>
    )
}

export default ParallaxMotion
