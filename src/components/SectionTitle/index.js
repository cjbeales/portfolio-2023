import React from 'react';
import styles from './section-title.module.scss';

export const SectionTitle = ({ title, subContent, centered = false, extraSpaceBottom = false }) => {
    return (
        <div
            className={`
            ${styles.sectionTitle} 
            ${extraSpaceBottom ? styles.sectionTitle__extraSpaceBottom : ''}
            ${centered ? styles.sectionTitle__centered : ''}
            `}>
            <h2 className='white margin--8'>
                {title}<span className='teal'>.</span>
            </h2>
            {subContent &&
                <p className='no--margin'>
                    {subContent}
                </p>
            }
        </div>
    )
}
