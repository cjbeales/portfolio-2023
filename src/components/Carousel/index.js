import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Carousel = ({ carouselSettings, data }) => {
    return (
        <Slider {...carouselSettings}>
            {data.map(({ title, image, href }) => (
                <a
                    key={title}
                    href={href}
                >
                    <img src={image} alt={title} />
                    <h4>{title}</h4>
                </a>
            ))}
        </Slider>
    )
}