'use client'

import { Gallery } from './components/Gallery'
import { MyHeader } from './components/MyHeader'
import { Intro } from './components/Intro'
import { NextUIProvider } from '@nextui-org/react'
import { Footer } from './components/Footer'

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <NextUIProvider>
        <MyHeader />
        <Intro />
        <Gallery />
        <Footer />
      </NextUIProvider>
    </main>
  )
}
