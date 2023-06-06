import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Splash } from '@/components';
import Layout from '@/components/Layout';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <Splash backgroundImg='hong-kong-bg.jpeg' />
      <h1>Homepage</h1>
    </Layout>
  )
}
