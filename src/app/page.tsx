import Image from 'next/image'
import { Gallery } from './components/Gallery'
import { ArtHeader } from './components/ArtHeader'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ArtHeader />
      <Gallery />

    </main>
  )
}
