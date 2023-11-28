import React, { useState, useEffect } from 'react';
import styles from './header.module.scss';
import Link from "next/link";
import { Container, Button } from "@/components";
import { useIsMobile } from "@/hooks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
        <div className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
            <Container variant={'large'} className={styles.container}>
                <div className={scrolled ? styles.headerLogoScrolled : styles.headerLogo}>
                    <Link href={'#skillset'}>
                        <img src="/logo.svg" alt={'logo'} />
                    </Link>
                </div>
                <nav>
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
            </Container>
        </div>
    );
};