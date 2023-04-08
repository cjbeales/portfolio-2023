import React from 'react';
import styles from './navbar.module.scss';
import { Container } from '../Container';

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <Container variant='large'>
                <p>In the container</p>
            </Container>
        </div>
    )
}
