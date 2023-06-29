import React from 'react';
import styles from './about.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Tile = ({ title, icon, imgSrc, altText }) => {
    return (
        <div className={styles.skillset__block}>
            <div className={styles.skillset__tile}>
                {
                    icon ? <FontAwesomeIcon icon={icon} color={'white'} size={'lg'} fixedWidth={true} width={30} />
                        :
                        <img src={imgSrc} alt={altText} />
                }
            </div>
            <p class='no--margin centered body--xs'>{title}</p>
        </div>
    )
}
