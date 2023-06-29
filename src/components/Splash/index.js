import React from 'react';
import { Container } from '@/components/Container';
import styles from './splash.module.scss';
import { Button } from '@/components';
import Image from 'next/image';

export const Splash = ({ backgroundImg = '' }) => {
    return (
        <div className={`${styles.splash} ${backgroundImg ? styles.overlay : ''}`}>
            {backgroundImg &&
                <Image src={backgroundImg} fill={true} />
            }
            <Container variant='large' className={styles.wrapper}>
                <h1 className='margin--8 white'>Hi, I'm Connor<span className="teal">.</span></h1>
                <p className='margin--64 body--xl'>I’m a front end engineer who specializes in modern <span className="teal">clean design</span> and elegant <span className="teal">performance-driven</span> code.</p>
                <Button label={'View more'} variant='outlineWhite' href='/' />
            </Container>
        </div>
    )
}
