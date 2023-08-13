import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '@/styles/anotherstyle.css'
import { SessionProvider } from 'next-auth/react'
import React, { useState } from 'react';


import type { Session } from "next-auth"
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}