import { Image } from '@nextui-org/react'
import TypingEffect from './TypingEffect'

export const Intro = () => {
  return (
    <div className="grid md:grid-cols-3 items-center gap-10 max-w-[1100px] mx-auto my-10 md:my-40 p-2">
      <div className="col-span-1">
        <Image
          isBlurred
          alt="my profile"
          src="myProfile.jpeg"
          radius={'full'}
        />
      </div>
      <div className="md:col-span-2 flex flex-col">
        <h1>Hi, I&apos;m Feng Yang </h1>
        <h2>
          I am feeling <TypingEffect words={['happy', 'joy', 'elated']} />{' '}
          today!
        </h2>
        <h2>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          sequi laborum nemo quasi ratione sit odio excepturi quis tenetur
          accusamus! Fugiat quisquam dolor modi mollitia. Praesentium
          reprehenderit tenetur quam fuga repudiandae, ipsum tempora dolor quod
          voluptatibus perferendis pariatur amet doloribus veritatis temporibus,
          saepe, nulla inventore iusto velit. Perferendis, amet sapiente.
        </h2>
      </div>
    </div>
  )
}
