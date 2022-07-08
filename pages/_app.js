import React from 'react'
import 'tailwindcss/tailwind.css';
import Particle from '../components/Particle';

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Particle />
      <Component {...pageProps} />
    </div>
  )
}