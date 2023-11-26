import React from 'react';
import { Container, SectionTitle } from '@/components';
import { Bubble } from './Bubble';
import { testimonialsData } from './TestimonialsData';

export const Testimonials = () => {
    return (
        <section id="testimonials">
            <Container variant='narrow'>
                <SectionTitle
                    title={'Client testimonials'}
                    subContent={`A few words from previous clients and employers.`}
                    centered={true}
                    extraSpaceBottom={true}
                />
                {testimonialsData.map(({ clientName, clientImg, content, isBlue }) => (
                    <Bubble clientName={clientName} clientImg={clientImg} content={content} isBlue={isBlue} />
                ))}
            </Container>
        </section>
    )
}