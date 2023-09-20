import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, NavbarMenuToggle, Link } from "@nextui-org/react"
import GithubIcon from "../icons/GithubIcon";
import LinkedinIcon from "../icons/LinkedinIcon";

export const MyHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    // <div className="w-screen h-20 px-6 py-4 bg-gradient-to-r from-rose-quartz to-serenity text-neutral-50 flex flex-row justify-between items-end">
    //   <h1 className="text-3xl">Feng&#39;s Portfolio</h1>
    //   <div className="flex flex-row items-center">
    //     <div className="h-7 w-7 mx-2 bg-white rounded-full"></div>
    //     <h3> LinkedIn </h3>
    //     <h3> Github </h3>
    //   </div>
    // </div>
    <Navbar>
      <NavbarBrand>
        {/* <AcmeLogo /> */}
        <p className="font-bold text-inherit">Feng&#39;s Portfolio</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="flex">
          <LinkedinIcon fill="blue"/>
          <Link isBlock href="#">Linkedin</Link>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <GithubIcon fill="primary"/>
          <Link isBlock href="#">Github</Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}