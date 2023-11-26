import styles from './tech-stack.module.scss';
import { Tile } from './Tile';
import { languagesFrameworkTiles, cmsTiles, toolsTiles } from './tileData';

export const TechStack = () => {
    return (
        <div className={styles.skillset__wrapper}>
            <div className={styles.skillset__column}>
                {languagesFrameworkTiles.map(({ title, icon, iconWidth, imgSrc }) => (
                    <Tile key={title} title={title} icon={icon} iconWidth={iconWidth} imgSrc={imgSrc} />
                ))}
            </div>
            <div className={styles.skillset__column}>
                {cmsTiles.map(({ title, icon, iconWidth, imgSrc }) => (
                    <Tile key={title} title={title} icon={icon} iconWidth={iconWidth} imgSrc={imgSrc} />
                ))}
            </div>
            {/* <div className={`${styles.skillset__column}`}>
                {toolsTiles.map(({ title, icon, iconWidth, imgSrc }) => (
                    <Tile key={title} title={title} icon={icon} iconWidth={iconWidth} imgSrc={imgSrc} />
                ))}
            </div> */}
        </div>
    )
}