import React from 'react';
import styles from './projects.module.scss';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { ProjectList } from './ProjectList';
import { Container, SectionTitle } from '@/components';
import { useIsMobile } from "@/hooks";
import Image from 'next/image';

export const Projects = () => {
    const isMobile = useIsMobile;

    return (
        <section id="projects" className='dark'>
            <Container variant='standard'>
                <div data-aos="fade-up" data-aos-duration="1000">
                    <SectionTitle
                        title={'Projects'}
                        subContent={`A mixture of commercial, freelance and passion projects.`}
                        extraSpaceBottom={true}
                    />
                </div>
                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 350: 1, 768: 2, 1024: 3 }}
                >
                    <Masonry gutter={!isMobile ? "32px" : "24px"}>
                        {ProjectList.map(({ image, title, description, halfSize, tech, id, href }) => (
                            <a
                                href={href}
                                rel='noopener noreferer'
                                target='_blank'
                                className={styles.project}
                                key={title}
                                id={id}
                                data-aos="fade-up" data-aos-duration="1000"
                            >
                                <Image
                                    src={image}
                                    alt={title}
                                    className={`${styles.project__thumbnail} ${halfSize ? styles.halfSize : ''}`}
                                    width={523}
                                    height={halfSize ? 310 : 615}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1445px) 365px,  562px"
                                    quality={90}
                                />
                                <div className={styles.contentBox}>
                                    <h4 className={`white ${!isMobile ? 'margin--8' : 'margin--4'}`}>{title}</h4>
                                    <p className={`white margin--16 fs--16`}>{description}</p>
                                    <div className={styles.techGroup}>
                                        {tech?.map((item, i) => (
                                            <div key={i} className={`${styles.pill} no--margin fs--14 white`}><span>{item}</span></div>
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