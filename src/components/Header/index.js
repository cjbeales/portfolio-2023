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

    useEffect(() => {
        window.onscroll = function () {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
    }, []);

    return (
        <div className={`${styles.header} ${scrolled ? styles.scrolled : ''} ${isMobile ? styles.mobile : ''}`}>
            <Container variant={'large'} className={styles.container}>
                <div className={scrolled ? styles.headerLogoScrolled : styles.headerLogo}>
                    <Link href={'/'}>
                        <img src="/logo.svg" alt={'logo'} />
                    </Link>
                </div>
                <nav>
                    {isMenuOpen && isMenuOpen === true &&
                        <div
                            className={styles.close}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <FontAwesomeIcon icon={faXmark} size={'lg'} color={'white'} />
                        </div>
                    }
                    <ul className={`${styles.nav} ${isMenuOpen ? styles.navActive : ''}`}>
                        {headerMenuItems.map((item, index) => (
                            <li key={index} className='fs--18'>
                                <Link href={item.href}>{item.title}</Link>
                            </li>

                        ))}
                        <Button label={'Get in touch'} href={'#contact'} />
                    </ul>
                    {isMobile && isMenuOpen === false &&
                        <div onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <FontAwesomeIcon icon={faBars} color={'white'} />
                        </div>
                    }

                </nav>
            </Container>
        </div>
    );
};