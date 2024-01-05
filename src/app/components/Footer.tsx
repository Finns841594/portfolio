import { Link } from '@nextui-org/react'

export const Footer = () => {
  return (
    <div className="px-8 py-16 items-center">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl py-4">Contact Me</h1>
        {/* <p className="text-md pb-8">
          Selected consulting projects from my works.
        </p> */}
      </div>
      <span>
        Email:{' '}
        <Link href="mailto:fengy142857@gmail.com" underline="hover">
          fengy142857@gmail.com
        </Link>{' '}
      </span>
    </div>
  )
}
