import React from 'react';
import Head from 'next/head';
import { Header } from '@/components';

export const Layout = ({ children, navVisible = true }) => {
    const title = `Connor Beales | Frontend Engineeer | Web Portfolio`;
    const description = `Hi, I'm Connor Beales and welcome to my portfolio! I'm a Frontend Engineer based in Hampshire, UK.`;
    const ogImagePath = `/og-image.jpg`;

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`https://connorbeales.netlify.app/`} />
                <meta property="og:image" content={ogImagePath} />
                <meta property="twitter:url" content={ogImagePath} />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta property="twitter:image" content={ogImagePath} />
                <meta name="twitter:card" content="summary_large_image" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            </Head>
            <main>
                {navVisible &&
                    <Header />
                }
                {children}
            </main>
        </>
    )
}