import Image from 'next/image'
import { Gallery } from './components/Gallery'
import { MyHeader } from './components/MyHeader'
import { Intro } from './components/Intro'

export default function Home() {
  return (
    <main className="w-screen h-screen flex flex-col items-center">
      <MyHeader />
      <Intro />
      <Gallery />

    </main>
  )
}
