import React from 'react'
import { ProjectList } from './ProjectList'
import { Container } from '../Container';
import { Carousel } from '@/components';

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4.5,
    arrows: false
};

export const ProjectsSlider = () => {
    return (
        <section id="projects">
            <Container variant='large'>
                <Carousel carouselSettings={settings} data={ProjectList} />
            </Container>
        </section>

    )
}