import Image from 'next/image'
import { Gallery } from './components/Gallery'
import { ArtHeader } from './components/ArtHeader'

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <ArtHeader />
      <Gallery />

    </main>
  )
}
