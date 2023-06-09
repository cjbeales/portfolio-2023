import React from 'react'
import { ProjectList } from './ProjectList'
import { Carousel } from '@/components/Carousel'

export const ProjectsSlider = () => {
    const settings = {
        breakpoints: {
            "(min-width: 768px)": {
                slides: { perView: 2.5, spacing: 16 },
            }
        },
        slides: {
            perView: 1,
            spacing: 0,
        },
    }

    return (
        <>
            <h2>Our recent projects</h2>
            <Carousel slideSettings={settings} data={ProjectList} />
        </>
    )
}