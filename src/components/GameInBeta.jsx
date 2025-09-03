import Reveal from "./Reveal"

const GameInBeta = () => {
  return (
    <div className="game-beta-bg">
      <div>
        <img src="https://res.cloudinary.com/dhpjybus4/image/upload/v1755203445/slogan-div-1_kin1kh.svg" className='img-fluid' alt="#" />
      </div>

      <div className="container-fluid">
        <Reveal duration={1} delay={0.5}>
          <h1 className="game-beta-title text-center">
            ⚠️ RoRunner is currently in Beta. ⚠️
          </h1>
        </Reveal>
        <Reveal duration={1} delay={0.15}>
          <h2 className="beta-subtitle text-center py-4">
            This means that the game is still under development and may undergo significant changes before its official release.
          </h2>
        </Reveal>
        <Reveal duration={1} delay={0.15}>
          <h3 className="beta-subtitle text-center">
            Join our Discord to stay updated on the latest news and developments!
          </h3>
        </Reveal>

        <div className="d-flex justify-content-center py-4">
          <a href="https://discord.com/invite/4NcTAsc9Ds" target="_blank">
            <button className="btn btn-discord px-5 fs-4 py-2">
              Join Discord
            </button>
          </a>
        </div>

      </div>
      <img src="https://res.cloudinary.com/dhpjybus4/image/upload/v1755203445/slogan-div-2_fbdtqo.svg" className='img-fluid' alt="#" />
    </div>
  )
}

export default GameInBeta
