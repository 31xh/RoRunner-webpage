import { useInView } from 'motion/react'
import { useEffect, useRef } from 'react'
import { useFeatureStore } from './Store'

const FeaturesAnim = ({ children, id }) => {

    const ref = useRef(null)
    const isInview = useInView(ref, {margin: "-50% 0px -50% 0px" })
    const setInView = useFeatureStore(state => state.setinViewFeature)

    console.log(isInview)

    useEffect(() => {
        if (isInview) setInView(id)
    }, [isInview, id, setInView])

  return (
    <p ref={ref} className='roboto-font text-white fw-bolder fs-5 py-5'>
      {children}
    </p>
  )
}

export default FeaturesAnim
