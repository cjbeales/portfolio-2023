import React, { useState, useEffect } from 'react';
import styles from './header.module.scss';
import Link from "next/link";
import { Container } from "@/components";
import { useIsMobile, useIsDesktop } from "@/hooks";
import { headerMenuItems } from "./MenuItems";
import Image from 'next/image';

export const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const isDesktop = useIsDesktop();
    const isMobile = useIsMobile();
    const dynamicScrollValue = isMobile ? 24 : 50;

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScrolled(window.scrollY >= dynamicScrollValue);
        });
    }, []);

    return (
        <div className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
            <Container variant={'standard'} className={styles.container}>
                <div className={scrolled ? styles.headerLogoScrolled : styles.headerLogo}>
                    <Link href={'#skillset'}>
                        <Image src={"/logo.svg"} alt={'CB Logo'} width={60} height={60} />
                    </Link>
                </div>
                <nav>
                    <ul className={styles.nav}>
                        {headerMenuItems.map(({ title, href, isButton }) => (
                            <li
                                key={title}
                                className={`${isButton ? styles.linkButton : styles.link} ${isDesktop ? 'fs--18' : 'fs--14'}`}
                            >
                                <Link href={href}>{title}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </Container>
        </div>
    );
};