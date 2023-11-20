import React from 'react';
import styles from './bubble.module.scss';

export const Bubble = ({ content, isBlue = false, client, clientImg }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.image} />
            <div className={`${styles.bubble} ${isBlue ? styles.blue : ''}`}>
                {content}
            </div>
        </div>
    )
}
