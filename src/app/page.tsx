'use client'

import { Gallery } from './components/Gallery'
import { MyHeader } from './components/MyHeader'
import { Intro } from './components/Intro'
import { NextUIProvider } from '@nextui-org/react';

export default function Home() {
  return (
    <main className="w-screen h-screen flex flex-col items-center">
      <NextUIProvider>
        <MyHeader />
        <div className='sm:max-w-7xl'>
          <Intro />
          <Gallery />
        </div>
      </NextUIProvider>
    </main>
  )
}
