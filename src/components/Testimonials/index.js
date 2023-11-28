import React from 'react';
import { Container, SectionTitle } from '@/components';
import { Bubble } from './Bubble';
import { testimonialsData } from './TestimonialsData';

export const Testimonials = () => {
    return (
        <section id="testimonials">
            <Container variant='narrow'>
                <div data-aos="fade-up" data-aos-duration="1000" data-aos-offset="0">
                    <SectionTitle
                        title={'Client testimonials'}
                        subContent={`A few words from previous clients and employers.`}
                        centered={true}
                        extraSpaceBottom={true}
                    />
                </div>
                {testimonialsData.map(({ clientName, clientImg, content, isBlue }) => (
                    <Bubble key={clientName} clientName={clientName} clientImg={clientImg} content={content} isBlue={isBlue} />
                ))}
            </Container>
        </section>
    )
}