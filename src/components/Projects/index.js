import React from 'react';
import styles from './projects.module.scss';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { ProjectList } from './ProjectList';
import { Container } from '../Container';

export const Projects = () => {
    return (
        <section id="projects">
            <Container variant='large'>


                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                >
                    <Masonry gutter={"32px"}>
                        {ProjectList.map(({ image, i, title, halfSize }) => (
                            <a href={'/'} className={styles.projct}>
                                <img
                                    key={i}
                                    src={image}
                                    className={`${styles.project__thumbnail} ${halfSize ? styles.halfSize : ''}`}
                                />
                            </a>
                        ))}
                    </Masonry>
                </ResponsiveMasonry>

            </Container>
        </section>

    )
}