import React from 'react';
import styles from './bubble.module.scss';
import { useIsTablet, useIsDesktop } from '@/hooks';
import Image from 'next/image';

export const Bubble = ({
    content,
    isBlue = false,
    clientName,
    clientImg
}) => {
    const isTablet = useIsTablet();
    const isDesktop = useIsDesktop();
    const fontSizeSelector = isDesktop ? 'fs--18' : isTablet ? 'fs--16' : 'fs--14';

    return (
        <div
            className={isBlue ? styles.wrapper__reversed : styles.wrapper}
            data-aos={isBlue ? "fade-left" : "fade-right"}
            data-aos-duration="1000"
            data-aos-delay="500"
        >
            <div className={isBlue ? styles.name__reversed : styles.name}>
                <p className={`no--margin ${fontSizeSelector}`}>{clientName}</p>
            </div>
            <div className={isBlue ? styles.bubbleAndPic__reversed : styles.bubbleAndPic}>
                <div className={isBlue ? styles.profileImage : styles.image}>
                    <Image src={clientImg} alt={clientName} width={36} height={36} />
                </div>
                <div className={`${styles.bubble} ${isBlue ? styles.blue : ''}`}>
                    <p className={`no--margin lh--large ${fontSizeSelector} ${isBlue ? 'white' : 'col--secondary'}`}>{content}</p>
                </div>
            </div>
        </div>
    )
}
