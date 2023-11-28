import React, { useState, useEffect } from 'react';
import styles from './header.module.scss';
import Link from "next/link";
import { Container, Button } from "@/components";
import { useIsMobile } from "@/hooks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { headerMenuItems } from "./MenuItems";

export const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isMobile = useIsMobile();
    const dynamicScrollValue = isMobile ? 24 : 50;

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScrolled(window.scrollY >= dynamicScrollValue);
        });
    }, []);

    return (
        <div className={`${styles.header} ${scrolled ? styles.scrolled : ''}`} data-aos="fade" data-aos-duration="1000">
            <Container variant={'large'} className={styles.container}>
                <div className={scrolled ? styles.headerLogoScrolled : styles.headerLogo}>
                    <Link href={'/'}>
                        <img src="/logo.svg" alt={'logo'} />
                    </Link>
                </div>
                <nav>
                    {isMobile && isMenuOpen === true &&
                        <div
                            className={styles.close}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <FontAwesomeIcon icon={faXmark} size={'lg'} color={'white'} />
                        </div>
                    }
                    <ul className={`${styles.nav} ${isMenuOpen ? styles.navActive : ''}`}>
                        {headerMenuItems.map((item, index) => (
                            <li
                                key={index}
                                className={`${styles.link} ${isMobile ? 'fs--14' : 'fs--18'} ${scrolled ? 'col--secondary' : ''}`
                                }>
                                <Link href={item.href}>{item.title}</Link>
                            </li>
                        ))}
                        {!isMobile
                            ?
                            <Button label={'Get in touch'} href={'#contact'} />
                            :
                            <span className={`${styles.link} ${isMobile ? 'fs--14' : 'fs--18'}`}>
                                <a href='#contact'>Contact</a>
                            </span>
                        }
                    </ul>
                </nav>
                {/* {isMobile && isMenuOpen === false && */}
                {/* <div onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <FontAwesomeIcon icon={faBars} color={'white'} fixedWidth={true} width={20} height={20} />
                </div> */}
                {/* } */}
            </Container>
        </div>
    );
};