import Image from "next/image";
import React, { useState, useEffect } from "react";
import loremIcom from '../../public/svg/loremIcon.svg';
import mainLogo from '../../public/svg/mainLogo.svg';
import hamBurger from '../../public/svg/hamBurger.svg';
import styles from '../styles/Header.module.css';  // Import the CSS module

const Header = () => {
    const [isMobile, setIsMobile] = useState(false);  // State to track mobile view

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 900);  // Update state based on window size
        };

        window.addEventListener('resize', handleResize);
        handleResize();  // Initial check

        return () => window.removeEventListener('resize', handleResize);  // Cleanup
    }, []);

    return (
        <header style={{ borderBottom: "1px solid #ddd", backgroundColor: "#fff", color: "#000" }}>
            {/* Section 1: Repeating Text */}
            <div className={styles.headerSection1} style={{ justifyContent: isMobile ? 'center' : 'space-between',textAlign: 'center' }}>
                {isMobile ? (  // Conditional rendering based on screen size
                    <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center', fontSize: '10px' }}>
                        <Image style={{ marginRight: '10px' }} src={loremIcom} alt="Icon" />
                        <span>Lorem ipsum dolor</span>
                    </div>
                ) : (
                    <>
                        <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center', fontSize: '10px' }}>
                            <Image style={{ marginRight: '10px' }} src={loremIcom} alt="Icon" />
                            <span>Lorem ipsum dolor</span>
                        </div>
                        <div className={styles.desktopOnly} style={{ justifyContent: 'center', textAlign: 'center', fontSize: '10px' }}>
                            <Image style={{ marginRight: '10px' }} src={loremIcom} alt="Icon" />
                            <span>Lorem ipsum dolor</span>
                        </div>
                        <div className={styles.desktopOnly} style={{ justifyContent: 'center', textAlign: 'center', fontSize: '10px' }}>
                            <Image style={{ marginRight: '10px' }} src={loremIcom} alt="Icon" />
                            <span>Lorem ipsum dolor</span>
                        </div>
                    </>
                )}
            </div>

            {/* Section 2: Logo and Icons */}
            <div className={styles.headerSection2}>
                <div className={styles.logo}>
                    <Image className={styles.hamBurger} src={hamBurger} alt="Hamburger-Menu" />
                    <Image className={styles.logoImage} src={mainLogo} alt="Logo"/>
                </div>
                <div className={styles.logoText}>
                    <span className={styles.logoTextSpan}>
                        LOGO
                    </span>
                </div>

                {/* Icons */}
                <div
                className={styles.headerIcons}
                 style={{
                    display: "flex",
                    gap: "15px",
                    alignItems: "center",
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000000"><path d="M765-144 526-383q-30 22-65.79 34.5-35.79 12.5-76.18 12.5Q284-336 214-406t-70-170q0-100 70-170t170-70q100 0 170 70t70 170.03q0 40.39-12.5 76.18Q599-464 577-434l239 239-51 51ZM384-408q70 0 119-49t49-119q0-70-49-119t-119-49q-70 0-119 49t-49 119q0 70 49 119t119 49Z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000000"><path d="m480-144-50-45q-100-89-165-152.5t-102.5-113Q125-504 110.5-545T96-629q0-89 61-150t150-61q49 0 95 21t78 59q32-38 78-59t95-21q89 0 150 61t61 150q0 43-14 83t-51.5 89q-37.5 49-103 113.5T528-187l-48 43Zm0-97q93-83 153-141.5t95.5-102Q764-528 778-562t14-67q0-59-40-99t-99-40q-35 0-65.5 14.5T535-713l-35 41h-40l-35-41q-22-26-53.5-40.5T307-768q-59 0-99 40t-40 99q0 33 13 65.5t47.5 75.5q34.5 43 95 102T480-241Zm0-264Z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000000"><path d="M263.72-96Q234-96 213-117.15T192-168v-480q0-51.2 30.5-89.6 30.5-38.4 77.36-50.72V-864H408v72h144v-72h108v75.68q47 12.32 77.5 50.72T768-648v480q0 29.7-21.16 50.85Q725.68-96 695.96-96H263.72Zm.28-72h432v-480q0-29.7-21.17-50.85Q653.67-720 623.94-720H335.72Q306-720 285-698.85T264-648v480Zm312-168h72v-144H312v72h264v72Zm-96-108Z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000000"><path d="M480-480q-60 0-102-42t-42-102q0-60 42-102t102-42q60 0 102 42t42 102q0 60-42 102t-102 42ZM192-192v-96q0-23 12.5-43.5T239-366q55-32 116.29-49 61.29-17 124.5-17t124.71 17Q666-398 721-366q22 13 34.5 34t12.5 44v96H192Zm72-72h432v-24q0-5.18-3.03-9.41-3.02-4.24-7.97-6.59-46-28-98-42t-107-14q-55 0-107 14t-98 42q-5 4-8 7.72-3 3.73-3 8.28v24Zm216.21-288Q510-552 531-573.21t21-51Q552-654 530.79-675t-51-21Q450-696 429-674.79t-21 51Q408-594 429.21-573t51 21Zm-.21-72Zm0 360Z"/></svg>
                    <div className={styles.languageDropdown}>
                        <select
                            style={{
                                padding: "5px",
                                backgroundColor: "#fff",
                                cursor: "pointer",
                                fontSize: "14px",
                                border:'none'
                            }}
                        >
                            <option value="en">EN</option>
                            <option value="es">ES</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Section 3: Navbar Tabs */}
            <nav className={styles.navbar}>
                <a href="#" className={styles.navbarLink}>SHOP</a>
                <a href="#" className={styles.navbarLink}>SKILLS</a>
                <a href="#" className={styles.navbarLink}>STORIES</a>
                <a href="#" className={styles.navbarLink}>ABOUT</a>
                <a href="#" className={styles.navbarLink}>CONTACT US</a>
            </nav>
        </header>
    );
};

export default Header;
