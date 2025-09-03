import SideReveal from "./SideReveal"
import { useFeatureStore } from "./Store"
import classNames from "classnames"

export const CardHome = ({ img, id }) => {

    const inViewFeature = useFeatureStore((state) => state.inViewFeature)

    return (
        <>
            <SideReveal duration={1} delay={0.80}>
                <div className={classNames("position-absolute inset-0", 
                    inViewFeature === id ? "opacity-full transition-opacity" : "opacity-none transition-opacity"
                )}>
                    <img src={img} className="img-fluid" alt="" />
                </div>
            </SideReveal>
        </>
    )
}

export const StoryMode = ({ id }) => {
    return (
        <>
            <CardHome id={id} img={"https://res.cloudinary.com/dhpjybus4/image/upload/v1755812964/StoryMode_fdsq23.png"}/>
        </>
    )
}

export const Bosses = ({ id }) => {
    return (
        <>
            <CardHome id={id} img={"https://res.cloudinary.com/dhpjybus4/image/upload/v1755812963/FightBosses_qv2z7i.png"}/>
        </>
    )
}

export const RaceFriends = ({ id }) => {
    return (
        <>
            <CardHome id={id} img={"https://res.cloudinary.com/dhpjybus4/image/upload/v1755812965/RaceWithFriends_nkjfxx.png"}/>
        </>
    )
}

export const Explore = ({ id }) => {
    return (
        <>
            <CardHome id={id} img={"https://res.cloudinary.com/dhpjybus4/image/upload/v1755812963/Explore_fwlcrb.png"}/>
        </>
    )
}

export default CardHome;