import styles from './tech-stack.module.scss';
import { Tile } from './Tile';
import { techStackData } from './tileData';

export const TechStack = () => {
    return (
        <div className={styles.skillset__wrapper}>
            <div className={styles.skillset__column}>
                {techStackData.map(({ title, icon, iconWidth, imgSrc }) => (
                    <Tile key={title} title={title} icon={icon} iconWidth={iconWidth} imgSrc={imgSrc} />
                ))}
            </div>
        </div>
    )
}