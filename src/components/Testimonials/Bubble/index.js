import React from 'react';
import styles from './bubble.module.scss';

export const Bubble = ({ content, isBlue = false }) => {
    return (
        <div className={`${styles.bubble} ${isBlue ? styles.blue : ''}`}>
            {content}
        </div>
    )
}
