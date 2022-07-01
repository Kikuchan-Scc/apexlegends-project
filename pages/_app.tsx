import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import 'tailwindcss/tailwind.css';

export const queryClient = new QueryClient()

export default function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}