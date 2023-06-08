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
                <h1 className='margin--8 white'>Homepage</h1>
                <p className='margin--32 white'>This is the homepage.</p>
                <Button label={'View more'} variant='primary' href='/' />
            </Container>
        </div>
    )
}
