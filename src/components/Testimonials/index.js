import React from 'react';
import { Bubble } from './Bubble';
import styles from './testimonials.module.scss';

export const Testimonials = () => {
    return (
        <section id="testimonials" className={styles.testimonials}>
            <h1>Testimonials section</h1>
            <Bubble isBlue={true} content={`Hi all! How did you find working with me?`} />
            <Bubble content={`Great to work with, absolutely over the moon with the website and logo!`} />
            <Bubble content={`Exceeded expectation on every level with your professionalism and innovative design.`} />
            <Bubble content={`Here’s some random words that are soon going to be a great testimonial!`} />
        </section>
    )
}
