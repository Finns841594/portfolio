'use client'

import { Gallery } from './components/Gallery'
import { MyHeader } from './components/MyHeader'
import { Intro } from './components/Intro'
import { NextUIProvider } from '@nextui-org/react'
import { Footer } from './components/Footer'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import ClientProjectsGallery from './components/ClientProjectsGallery'

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <NextUIProvider>
        <NextThemesProvider>
          <MyHeader />
          <Intro />
          <Gallery />
          <ClientProjectsGallery />
          <Footer />
        </NextThemesProvider>
      </NextUIProvider>
    </main>
  )
}
