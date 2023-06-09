import React from 'react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react' // import from 'keen-slider/react.es' for to get an ES module
import { ProjectList } from './ProjectList'
import { Slide } from './Slide'

export const ProjectsSlider = () => {
    const [sliderRef, instanceRef] = useKeenSlider({
        breakpoints: {
            "(min-width: 768px)": {
                slides: { perView: 2.5, spacing: 16 },
            }
        },
        slides: {
            perView: 1,
            spacing: 0,
        },

    })

    return (
        <div ref={sliderRef} className="keen-slider">
            {ProjectList.map((project, idx) => (
                <Slide key={idx} slideSrc={project.image} />
            ))}
        </div>
    )
}