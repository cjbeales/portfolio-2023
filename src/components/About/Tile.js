import React from 'react';
import styles from './about.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Tile = ({ title, icon, iconWidth = 30, imgSrc, altText }) => {
    return (
        <div className={styles.skillset__block}>
            <div className={styles.skillset__tile}>
                {
                    icon ? <FontAwesomeIcon icon={icon} color={'#BBB8C7'} fixedWidth={true} width={iconWidth} />
                        :
                        <img src={imgSrc} alt={altText} width={`${iconWidth}px`} />
                }
            </div>
            <p class='no--margin body--xs'>{title}</p>
        </div>
    )
}
