import React from 'react';
import styles from './projects.module.scss';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { ProjectList } from './ProjectList';
import { Container } from '../Container';
import Image from 'next/image';

export const Projects = () => {
    return (
        <section id="projects" className={styles.myProjects}>
            <Container variant='large'>
                <h2 className='margin--48 white'>Projects<span className='teal'>.</span></h2>
                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                >
                    <Masonry gutter={"32px"}>
                        {ProjectList.map(({ image, title, description, halfSize, tech }) => (
                            <a href={'/'} className={styles.project} key={title}>
                                <img
                                    src={image}
                                    className={`${styles.project__thumbnail} ${halfSize ? styles.halfSize : ''}`}
                                />
                                <div className={styles.contentBox}>
                                    <h4 className={'white margin--8'}>{title}</h4>
                                    <p className='body--sm white margin--16'>{description}</p>
                                    <div className={styles.techGroup}>
                                        {tech?.map((item, i) => (
                                            <div key={i} className={`${styles.pill} no--margin body--xs weight--regular col--dark`}><span>{item}</span></div>
                                        ))}
                                    </div>
                                </div>
                            </a>
                        ))}
                    </Masonry>
                </ResponsiveMasonry>

            </Container>
        </section>

    )
}