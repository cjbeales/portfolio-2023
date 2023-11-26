import React from 'react';
import { Container } from '../Container';
import { Bubble } from './Bubble';
import styles from './testimonials.module.scss';
import { testimonialsData } from './TestimonialsData';

export const Testimonials = () => {
    return (
        <section id="testimonials" className={styles.testimonials}>
            <Container variant='narrow'>
                <h1>Testimonials section</h1>
                {testimonialsData.map(({ clientName, clientImg, content, isBlue }) => (
                    <Bubble clientName={clientName} clientImg={clientImg} content={content} isBlue={isBlue} />
                ))}
            </Container>
        </section>
    )
}