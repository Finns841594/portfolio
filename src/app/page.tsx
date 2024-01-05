'use client'

import {
  Gallery,
  MyHeader,
  Intro,
  Footer,
  ClientProjectsGallery,
  AboutMe,
} from './components'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { NextUIProvider } from '@nextui-org/react'

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <NextUIProvider>
        <NextThemesProvider>
          <MyHeader />
          <Intro />
          <Gallery />
          <ClientProjectsGallery />
          {/* <AboutMe /> */}
          <Footer />
        </NextThemesProvider>
      </NextUIProvider>
    </main>
  )
}
