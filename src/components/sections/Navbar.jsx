'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const Navbar = () => {
    const pathname = usePathname();
    const isAboutPage = pathname === '/about';

    const navLinkStyles = {
        fontSize: '0.95rem',
        fontWeight: 500,
        color: '#ccc',
        textDecoration: 'none',
        transition: 'color 0.3s',
        display: 'inline-block'
    };

    const activeLinkStyles = {
        ...navLinkStyles,
        fontWeight: 700,
        color: 'white'
    };

    const linkVariants = {
        initial: { y: 0, color: '#ccc' },
        hover: { y: -2, color: '#F68D20' }
    };


    return (
        <nav style={{
            width: '100%',
            position: 'sticky',
            top: 0,
            zIndex: 100,
            background: 'rgba(5, 5, 5, 0.8)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
        }}>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0 20px',
                height: '80px'
            }}>
                <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', color: 'inherit' }}>
                    <Image
                        src="/discret-logo-colored.png"
                        alt="Discret Digital"
                        width={40}
                        height={40}
                        style={{ height: '40px', width: 'auto' }}
                        priority
                    />
                    <span style={{ fontWeight: 700, fontSize: '1.2rem', letterSpacing: '-0.5px' }}>Discret</span>
                </Link>

                <div style={{ display: 'flex', gap: 'clamp(12px, 3vw, 32px)', alignItems: 'center' }}>
                    {isAboutPage ? (
                        <>
                            <motion.div initial="initial" whileHover="hover" className="desktop-only">
                                <Link href="/" style={navLinkStyles}>
                                    <motion.span variants={linkVariants}>HOME</motion.span>
                                </Link>
                            </motion.div>
                            <motion.div initial="initial" whileHover="hover" className="desktop-only">
                                <Link href="/about" style={activeLinkStyles}>
                                    <motion.span variants={{ ...linkVariants, initial: { ...linkVariants.initial, color: 'white' } }}>ABOUT</motion.span>
                                </Link>
                            </motion.div>
                        </>
                    ) : (
                        <>
                            <motion.div initial="initial" whileHover="hover" className="desktop-only">
                                <a href="#work" style={navLinkStyles}>
                                    <motion.span variants={linkVariants}>WORK</motion.span>
                                </a>
                            </motion.div>
                            <motion.div initial="initial" whileHover="hover" className="desktop-only">
                                <a href="#services" style={navLinkStyles}>
                                    <motion.span variants={linkVariants}>SERVICES</motion.span>
                                </a>
                            </motion.div>
                            <motion.div initial="initial" whileHover="hover" className="desktop-only">
                                <a href="#process" style={navLinkStyles}>
                                    <motion.span variants={linkVariants}>PROCESS</motion.span>
                                </a>
                            </motion.div>
                            <motion.div initial="initial" whileHover="hover" className="desktop-only">
                                <Link href="/about" style={navLinkStyles}>
                                    <motion.span variants={linkVariants}>ABOUT</motion.span>
                                </Link>
                            </motion.div>
                        </>
                    )}

                    <a
                        href="https://wa.me/923400568710"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                        style={{
                            padding: '10px 20px',
                            fontSize: '0.85rem',
                            flexShrink: 0,
                            borderRadius: '100px'
                        }}
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
