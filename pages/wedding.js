import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Subheader from '../components/Subheader'
import Hero from '../components/Curated'
import Footer from '../components/Footer'

export default function Wedding() {
  return (
    <div>
      <Head>
        <title>Boudreaux </title>
        <meta name="description" content="Engagement Rings, Wedding Bands, 14k Gold, Sterling Silver Jewelry" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Subheader />
      <Header />
      <main className="bg-black text-white h-screen w-screen">
        <div className="bg-gradient-to-t from-blue-200 to-blue-900 w-screen h-screen">
          <div className="flex flex-col flex-wrap text-center text-white font-cinzel p-6 pt-20">
              <h2 className="text-sm md:text-lg">eternal elegance</h2>
              <h1 className="text-lg md:text-3xl">☙ Heart of Texas Collection ❧</h1>
              <h2 className="text-sm md:text-md">Engagement Rings, Wedding Bands, and Bridal Jewelry</h2>
              <h2 className="text-sm md:text-md">Moissanite / Gemstone / 14k Gold / Sterling Silver</h2>
          </div>
          <div className="flex flex-row flex-wrap font-cinzel justify-center">
            <div className="bg-gray-900 m-12 p-6 rounded-md text-center">
              <div className="p-6 text-center">
                <h2 className="text-xl md:text-2xl">Product Name</h2>
                <h3 className="text-md md:text-xl">$250.00</h3>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
