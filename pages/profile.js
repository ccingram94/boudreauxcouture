import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Subheader from '../components/Subheader'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import { useSession, signIn, signOut } from 'next-auth/react'

export default function Profile() {
  const { data: session } = useSession()
  return (
    <div>
      <Head>
        <title>Boudreaux </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Subheader />
      <Header />
      <main className="bg-gray-900 text-white h-screen w-screen">
        <h1 className="font-cinzel text-xl md:text-3xl p-10 text-center align-center justify-center">Profile</h1>
        <div className="font-cinzel text-md md:text-xl p-10 text-center align-center justify-center">
          {session && <p>You are signed in as {session.user.email}</p>}
          {!session && <p>You are not signed in.</p>}
        </div>
      </main>
      <Footer />
    </div>
  )
}
