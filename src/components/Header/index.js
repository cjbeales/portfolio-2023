import React, {useState} from 'react';
import styles from './header.module.scss';
import Image from "next/image";
import Link from "next/link";
import {Container} from "../Container";
import {useIsMobile} from "../../hooks";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faXmark} from "@fortawesome/free-solid-svg-icons";
import {headerMenuItems} from "./MenuItems";


export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isMobile = useIsMobile();

    return (
        <div className={`${styles.header} ${isMobile ? styles.mobile : ''}`}>
            <Container variant={'large'} className={styles.container}>
                <div className={styles.headerLogo}>
                    <Link href={'/'}>
                        <img src="/vercel.svg" alt={'logo'} />
                    </Link>
                </div>
                <nav>
                    {isMenuOpen && isMenuOpen === true &&
                        <div className={styles.close}
                             onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <FontAwesomeIcon icon={faXmark} size={'lg'} color={'black'}/>
                        </div>
                    }
                    <ul className={`${styles.nav} ${isMenuOpen ? styles.navActive : ''}`}>
                        {headerMenuItems.map((item, index) => (
                            <li key={index}>
                                <Link href={item.href}>{item.title}</Link>
                            </li>

                        ))}
                    </ul>
                    {isMobile && isMenuOpen === false &&
                        <div onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <FontAwesomeIcon icon={faBars}/>
                        </div>
                    }
                </nav>
            </Container>
        </div>
    );
};