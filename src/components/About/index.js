import React from 'react';
import { Container } from '@/components';
import styles from './about.module.scss';
import { Tile } from './Tile';
import { tileData } from './tileData';

export const About = () => {
    return (
        <section id="#aboutMe">
            <Container variant='large'>
                <div className={styles.wrapper}>
                    <div className={styles.heading}>
                        <h2>About me</h2>
                        <i class="fa-brands fa-html5"></i>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.content__intro}>
                            <h3>So, Who am I?</h3>
                            <p className='body--lg'>I’m a Lead Frontend Developer who specializes in clean design and elegant performance-driven code.</p>
                        </div>
                        <div className={styles.skillset}>
                            <h4 className='margin--32'>Skillset</h4>

                            <div className={styles.skillset__wrapper}>
                                <div className={styles.skillset__column}>
                                    {tileData.map(({title, icon}) => (
                                        <Tile key={title} title={title} icon={icon}/>

                                    ))}

                                    <div className={styles.skillset__tile}>Tile 2</div>
                                    <div className={styles.skillset__tile}>Tile 3</div>
                                    <div className={styles.skillset__tile}>Tile 4</div>
                                    <div className={styles.skillset__tile}>Tile 5</div>
                                    <div className={styles.skillset__tile}>Tile 6</div>
                                </div>

                                <div className={styles.skillset__column}>
                                    <div className={styles.skillset__tile}>Tile a</div>
                                    <div className={styles.skillset__tile}>Tile b</div>
                                    <div className={styles.skillset__tile}>Tile c</div>
                                    <div className={styles.skillset__tile}>Tile d</div>
                                    <div className={styles.skillset__tile}>Tile e</div>
                                    <div className={styles.skillset__tile}>Tile f</div>
                                </div>

                                <div className={styles.skillset__column}>
                                    <div className={styles.skillset__tile}>Tile up</div>
                                    <div className={styles.skillset__tile}>Tile down</div>
                                    <div className={styles.skillset__tile}>Tile left</div>
                                    <div className={styles.skillset__tile}>Tile right</div>
                                    <div className={styles.skillset__tile}>Tile back</div>
                                    <div className={styles.skillset__tile}>Tile forth</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}