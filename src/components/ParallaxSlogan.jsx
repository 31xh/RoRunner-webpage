import React, { useRef } from 'react'
import SideReveal from './SideReveal'
import { motion } from 'framer-motion'
import Reveal from './Reveal'

const ParallaxSlogan = () => {

    const ref = useRef(null)

    return (
        <>
            <motion.section
                ref={ref}
                className='position-relative background-color d-grid w-100 vh-100 overflow-hidden'>
                <div className="slogan-div-1 z-3">
                    <img src="https://res.cloudinary.com/dhpjybus4/image/upload/v1755203445/slogan-div-1_kin1kh.svg" className='img-fluid' alt="#" />
                </div>
                <motion.div
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.9, ease: "easeInOut" }}
                    className="container-fluid vh-100 bg-slogan pt-5 mt-5">
                    <div className="row mt-5 pt-5">
                        <div className="me-5 col-lg-6">
                            <SideReveal duration={1} delay={0.30}>
                                <h2 className='slogan-title-1 p-0 m-0'>Race With Friends…</h2>
                            </SideReveal>
                            <SideReveal duration={1} delay={1.50}>
                                <h3 className='slogan-title-2 p-0 m-0'>or Leave Them Behind!</h3>
                            </SideReveal>
                        </div>
                    </div>
                </motion.div>
                <div className="slogan-div-2 z-3">
                    <Reveal duration={1} delay={0.20}>
                        <img src="https://res.cloudinary.com/dhpjybus4/image/upload/v1755203445/slogan-div-2_fbdtqo.svg" className='img-fluid' alt="#" />
                    </Reveal>
                </div>
            </motion.section>
        </>
    )
}

export default ParallaxSlogan
