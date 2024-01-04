import { Image } from '@nextui-org/react'
import TypingEffect from './TypingEffect'

export const Intro = () => {
  return (
    <div className="grid md:grid-cols-3 items-center gap-10 max-w-[1100px] mx-auto my-10 md:my-40 p-2">
      <div className="col-span-1 w-48 md:w-full grid mx-auto">
        <Image
          isBlurred
          alt="my profile"
          src="myProfile.jpeg"
          radius={'full'}
        />
      </div>
      <div className="md:col-span-2 flex flex-col px-4">
        <h4 className="text-3xl font-semibold">Hi! It&apos;s Feng here </h4>
        <h3 className="text-5xl font-bold h-36 sm:h-auto">
          I am{' '}
          <TypingEffect
            words={[
              'Full Stack Developer',
              'Former Architect',
              'Former Real Estate Developer',
              'Gamer',
              'Reader',
              'Graphic Designer',
            ]}
            speed={50}
          />
        </h3>
        <p className="mt-4">
          Full stack JavaScript/TypeScript developer, former architect and real
          estate developer. Passionate in programming, gaming, reading and arts.
          Have good eyes and minds for design. Prepared to embrace challenges.
        </p>
      </div>
    </div>
  )
}
