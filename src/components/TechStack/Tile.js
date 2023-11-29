import React from 'react';
import styles from './tech-stack.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useIsDesktop } from '@/hooks';
import Image from 'next/image';

export const Tile = ({ title, icon, iconWidth = 30, imgSrc, altText }) => {
    const isDesktop = useIsDesktop();

    return (
        <div className={styles.skillset__block}>
            <div className={styles.skillset__tile}>
                {
                    icon ? <FontAwesomeIcon icon={icon} color={'#ffffff'} fixedWidth={true} width={iconWidth} />
                        :
                        <Image src={imgSrc} alt={altText} width={iconWidth} height={iconWidth} />
                }
            </div>
            <p className={`bold no--margin white ${isDesktop ? 'fs--14' : 'fs--12'}`}>{title}</p>
        </div>
    )
}
