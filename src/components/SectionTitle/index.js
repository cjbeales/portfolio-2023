import React from 'react';
import styles from './section-title.module.scss';

export const SectionTitle = ({ title, subContent, centered = false, extraSpaceBottom = false }) => {
    return (
        <div className={extraSpaceBottom ? styles.sectionTitle__extraSpaceBottom : styles.sectionTitle}>
            <h2 className={`${centered ? 'centered' : ''} white margin--8`}>
                {title}
            </h2>
            {subContent &&
                <p className={`${centered ? 'centered' : ''} no--margin`}>
                    {subContent}
                </p>
            }
        </div>
    )
}
