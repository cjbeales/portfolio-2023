import React from 'react';
import Head from 'next/head';
import { Header } from '@/components';

export const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Connor Beales | Web Portfolio</title>
                <meta name="description" content="Connor Beales web portfolio 2023" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            </Head>

            <main>
                <Header />
                {children}
            </main>
        </>
    )
}
