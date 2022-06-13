import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Subheader from '../components/Subheader'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

export default function Pearls() {
  return (
    <div>
      <Head>
        <title>Boudreaux </title>
        <meta name="description" content="Pearls, 14k Gold, Sterling Silver Jewelry" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Subheader />
      <Header />
      <main className="bg-black text-white h-screen w-screen">
        <Hero />
      </main>
      <Footer />
    </div>
  )
}
