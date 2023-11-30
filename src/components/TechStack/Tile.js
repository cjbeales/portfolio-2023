import React from 'react';
import styles from './tech-stack.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useIsDesktop, useIsMobile } from '@/hooks';
import Image from 'next/image';

export const Tile = ({ title, icon, iconWidth = 30, imgSrc, altText }) => {
    const isDesktop = useIsDesktop();
    const isMobile = useIsMobile();

    return (
        <div className={styles.skillset__block}>
            <div className={styles.skillset__tile}>
                {
                    icon ? <FontAwesomeIcon icon={icon} color={'#ffffff'} fixedWidth={true} width={iconWidth} />
                        :
                        <Image src={imgSrc} alt={altText} width={iconWidth} height={isMobile ? 24 : iconWidth} />
                }
            </div>
            <p className={`bold no--margin white ${isDesktop ? 'fs--14' : 'fs--12'}`}>{title}</p>
        </div>
    )
}
