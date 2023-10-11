import React from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from '@nextui-org/react'
import GithubIcon from '../icons/GithubIcon'
import LinkedinIcon from '../icons/LinkedinIcon'

export const MyHeader = () => {
  return (
    <Navbar maxWidth={`2xl`}>
      <NavbarBrand>
        {/* <MyLogo /> */}
        <p className="font-bold text-inherit">Feng&#39;s Portfolio</p>
      </NavbarBrand>
      <NavbarContent
        className="hidden sm:flex gap-4"
        justify="center"
      ></NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="flex">
          <Link isBlock href="#">
            <LinkedinIcon fill="blue" className="mr-2" />
            Linkedin
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Link isBlock href="#">
            <GithubIcon fill="primary" className="mr-2" />
            Github
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
