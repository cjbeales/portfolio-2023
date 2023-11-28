import styles from './tech-stack.module.scss';
import { Tile } from './Tile';
import { techStackData } from './tileData';
import { useIsMobile } from '@/hooks';

export const TechStack = () => {
    const isMobile = useIsMobile();

    return (
        <div className={styles.skillset__wrapper} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1500">
            <p className={`no--margin bold ${isMobile ? 'fs--16' : 'fs--18'}`}>Tech stack</p>
            <div className={styles.skillset__column}>
                {techStackData.map(({ title, icon, iconWidth, imgSrc }) => (
                    <Tile key={title} title={title} icon={icon} iconWidth={iconWidth} imgSrc={imgSrc} />
                ))}
            </div>
        </div>
    )
}