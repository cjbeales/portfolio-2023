import React from 'react';
import Image from 'next/image';
import styles from './navbar.module.scss';
import { Container } from '../Container';

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <Container variant='large'>
                <div className={styles.navbar__wrapper}>
                <Image src="/google_logo.svg" alt="me" width="127" height="43" />
                    <p>In the container</p>
                </div>
            </Container>
        </div>
    )
}
