import React from 'react';
import styles from './splash.module.scss';
import { Container, TechStack } from '@/components';
import Image from 'next/image';

export const Splash = ({ backgroundImg = '' }) => {
    return (
        <section id='skillset' className={`${styles.splash} ${backgroundImg ? styles.overlay : ''}`}>
            {backgroundImg &&
                <Image src={backgroundImg} fill={true} />
            }
            <Container variant='large'>
                <h1
                    className='margin--16 white'
                    data-aos="fade-up"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                >
                    Hi, I'm Connor<span className="teal">.</span>
                </h1>
                <p
                    data-aos="fade-up"
                    data-aos-delay="1000"
                    data-aos-duration="1000"
                >
                    I&apos;m a front end engineer who specializes in modern <span className="teal">clean design</span> and elegant <span className="teal">performance-driven</span> code.
                </p>
                <TechStack />
            </Container>
        </section>
    )
}
