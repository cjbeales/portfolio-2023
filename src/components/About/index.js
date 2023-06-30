import React from 'react';
import { Container } from '@/components';
import styles from './about.module.scss';
import { Tile } from './Tile';
import { languagesFrameworkTiles, cmsTiles, toolsTiles } from './tileData';

export const About = () => {
    return (
        <section id="#aboutMe" className={styles.aboutMe}>
            <Container variant='large'>
                <div className={styles.wrapper}>
                    <div className={styles.heading}>
                        <h2 className='white margin--24'>About me</h2>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.content__intro}>
                            <h3 className='white mob-hide'>So, Who am I?</h3>
                            <p className='body--lg no--margin'>I’m a Lead Frontend Developer who specializes in clean design and elegant performance-driven code.</p>
                        </div>
                        <div className={styles.skillset}>
                            <div className={styles.skillset__header}>
                                <h4 className='white margin--32'>Skillset</h4>
                            </div>

                            <div className={styles.skillset__wrapper}>

                                <div>
                                    <p className={`body--md no--margin ${styles.columnHeading}`}>
                                        Languages & Frameworks
                                    </p>
                                    <div className={`${styles.languagesColumn}`}>
                                        {languagesFrameworkTiles.map(({ title, icon, iconWidth, imgSrc }) => (
                                            <Tile key={title} title={title} icon={icon} iconWidth={iconWidth} imgSrc={imgSrc} />
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <p className={`body--md no--margin ${styles.columnHeading}`}>
                                        CMS Tools
                                    </p>
                                    <div className={styles.skillset__column}>
                                        {cmsTiles.map(({ title, icon, iconWidth, imgSrc }) => (
                                            <Tile key={title} title={title} icon={icon} iconWidth={iconWidth} imgSrc={imgSrc} />
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <p className={`body--md no--margin ${styles.columnHeading}`}>
                                        Tools
                                    </p>
                                    <div className={styles.skillset__column}>
                                        {toolsTiles.map(({ title, icon, iconWidth, imgSrc }) => (
                                            <Tile key={title} title={title} icon={icon} iconWidth={iconWidth} imgSrc={imgSrc} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}