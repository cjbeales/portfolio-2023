import React, { useState } from 'react';
import styles from './projects.module.scss';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { ProjectList } from './ProjectList';
import { Container } from '../Container';
import { ProjectOverview } from './ProjectOverview';
import { useIsMobile } from "@/hooks";

export const Projects = () => {
    const [overviewActive, setOverviewActive] = useState(false);
    const [currentProject, setCurrentProject] = useState('biscuit');
    const isMobile = useIsMobile;

    const handleClick = (e) => {
        setCurrentProject(ProjectList[e.target.id])
        console.log(currentProject)
    }

    return (
        <section id="projects" className={styles.myProjects}>

            <Container variant='standard'>
                <h2 className='white margin--8'>Projects<span className='teal'>.</span></h2>
                <p className='margin--64'>A mixture of commercial, freelance and passion projects.</p>
                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                >
                    <Masonry gutter={!isMobile ? "32px" : "16px"}>
                        {ProjectList.map(({ image, title, description, halfSize, tech, id }) => (
                            <a
                                // href={'#'}
                                onClick={(e) => handleClick(e)}
                                className={styles.project}
                                key={title}
                                id={id}
                            >
                                <img
                                    src={image}
                                    className={`${styles.project__thumbnail} ${halfSize ? styles.halfSize : ''}`}
                                />
                                <div className={styles.contentBox}>
                                    <h4 className={`white ${!isMobile ? 'margin--8' : 'no--margin'}`}>{title}</h4>
                                    <p className={'body--sm white margin--16'}>{description}</p>
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

                <ProjectOverview overviewActive={overviewActive} />

            </Container>
        </section>

    )
}