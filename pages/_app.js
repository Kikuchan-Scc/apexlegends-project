import React from 'react'
import 'tailwindcss/tailwind.css';
import Nav from '../components/Nav';
import Particle from '../components/Particle';

export default function MyApp({ Component, pageProps }) {
  return (
    <div className=''>
      <Nav />
      <Particle />
      < Component {...pageProps} />
    </div>
  )
}