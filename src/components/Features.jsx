import SideReveal from '../components/SideReveal'
import Reveal from '../components/Reveal'
import FeaturesAnim from './FeaturesAnim'
import CardHome, { Bosses, Explore, RaceFriends, StoryMode } from './CardHome'

const Features = () => {
    const features = [
        {
            id: "explore",
            title: "Explore",
            desc: "RoRunner offers a vast world to explore, filled with hidden secrets and challenges. Players can traverse through beautifully designed environments, each with its own unique obstacles and surprises. The game encourages exploration, rewarding players with collectibles and achievements for discovering hidden areas and completing challenges.",
            card: Explore
        },
        {
            id: "story-mode",
            title: "Story Mode",
            desc: "In Story Mode, players embark on an epic journey through the RoRunner universe. They will encounter a rich narrative filled with intriguing characters, challenging bosses, and immersive quests. The story unfolds as players progress, revealing the mysteries of the RoRunner world and their own character's destiny. Each level presents new challenges and opportunities for character development, making the story mode a captivating experience.",
            card: StoryMode
        },
        {
            id: "fight-bosses",
            title: "Fight Bosses",
            desc: "RoRunner features a variety of formidable bosses that players must defeat to progress through the game. Each boss presents a unique challenge, requiring players to master their skills and strategies. These        battles are not only thrilling but also essential for unlocking new abilities and progressing in the story. Defeating bosses rewards players with valuable loot and enhances their character's capabilities.",
            card: Bosses
        },
        {
            id: "race-friends",
            title: "Race With Friends",
            desc: "RoRunner's multiplayer mode allows players to race eachother",
            card: RaceFriends
        }
    ]

    return (
        <>
            <section className='background-color'>
                <div className="container-fluid z-1">
                    <div className="row d-flex overflow-x-hidden">
                        <div className="col-md-9 pt-5 mt-4 text-start">
                            <SideReveal duration={1} delay={0.60}>
                                <p className='feature-desc fw-bolder roboto-font text-end'>
                                    Discover all that RoRunner has to offer with your companions by your side.
                                </p>
                            </SideReveal>
                        </div>
                        <div className="text-end col-md-3 text-white mb-5 ">
                            <Reveal duration={1} delay={0.60}>
                                <h2 className='title-features pe-5 pt-5'>Gameplay</h2>
                            </Reveal>
                            <Reveal duration={1} delay={0.70}>
                                <p className='title-features pe-5'>Features</p>
                            </Reveal>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="d-flex align-items-start">
                            <div className="col-lg-3 feature-images py-50vh">
                                <div className="w-100 h-100 position-relative rounded-5 p-5">
                                    {features.map((feature) => (
                                        <feature.card id={feature.id} key={feature.id}/>
                                    ))}
                                </div>
                            </div>
                            <div className="ps-4 ms-3 col-lg-9 py-50vh">
                                {features.map((feature) => (
                                    <div key={feature.id} className="title-features py-40vh">
                                        <div className="me-3">
                                            <Reveal duration={1} delay={0.20}>
                                                <div className="ms-5 d-flex align-items-between justify-content-center">
                                                    <h3 className='px-5 mx-5 fs-1 pt-5'>{feature.title}</h3>
                                                    <div className="px-5">
                                                        <FeaturesAnim id={feature.id}>
                                                            {feature.desc}
                                                        </FeaturesAnim>
                                                    </div>
                                                </div>
                                            </Reveal>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Features
