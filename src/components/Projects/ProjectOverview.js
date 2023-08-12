import React from 'react';
import styles from './project-overview.module.scss';

export const ProjectOverview = ({overviewActive}) => {
    return (
        <div className={`${styles.projectOverview} ${overviewActive ? styles.visible : ''}`}>
            <h2>Project overview panel</h2>
        </div>
    )
}