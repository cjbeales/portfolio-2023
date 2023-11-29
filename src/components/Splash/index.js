import React from 'react';
import styles from './splash.module.scss';
import { Container, TechStack } from '@/components';

export const Splash = () => {
    return (
        <section id='skillset' className={styles.splash}>
            <Container variant='standard' className={styles.splash__container}>
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
                    I&apos;m a Frontend Engineer who specializes in elegant <span className="teal">performance-driven</span> code and <span className="teal">clean designs</span>.
                </p>
                <TechStack />
            </Container>
        </section>
    )
}
