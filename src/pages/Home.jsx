import ParallaxMotion from '../components/ParallaxMotion'
import { useEffect } from 'react'
import Lenis from 'lenis'
import Reveal from '../components/Reveal'
import ParallaxSlogan from '../components/ParallaxSlogan'
import Features from '../components/Features'
import GameInBeta from '../components/GameInBeta'

const Home = () => {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, [])

  return (
    <div className=''>
      <ParallaxMotion />
      <section className='background-color padding-top padding-bottom'>
        <div className="container text-black text-center">
          <Reveal duration={1} delay={0.5}>
            <h1 className="ro-runner-title">Welcome to RoRunner</h1>
          </Reveal>
          <div className="row">
            <Reveal duration={1} delay={1}>
              <p className='roboto-font text-white fw-bolder py-4 fs-4'>Step into RoRunner, a next-generation Roblox parkour game where speed meets strategy. Blaze through immersive worlds in Story Mode, unlock secrets, defeat powerful bosses, and uncover the mystery behind it all. Compete with friends in high-speed Race Mode across stunning obstacle-filled circuits, and stand out with fully customizable outfits, emotes, and effects. Built from the ground up with a completely unique movement system, RoRunner redefines what it means to run. Are you fast enough to become a legend?</p>
            </Reveal>
          </div>
        </div>
        <div>
        </div>
      </section>

      <ParallaxSlogan/>
      <Features/>
      <GameInBeta/>
    </div>
  )
}

export default Home
