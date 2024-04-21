"use client";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Button, buttonVariants } from "@/components/ui/button";

import Link from "next/link";
import Image from "next/image";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";
import SideMenu from "@/components/SideMenu";

const components = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
];

function Navbar() {
  return (
    <>
      {/* First Navbar */}
      <header className="bg-orange-400/20 ">
        <div className="flex justify-between max-w-screen-xl mx-6 md:mx-auto lg:mx-auto">
          <div className="image my-auto">
            <Image
              src={"/logo.png"}
              height={100}
              width={120}
              alt="Picture of the author"
            />
          </div>
          <div className="center"></div>
          <div className="social-media flex text-2xl gap-2 text-orange-700 py-4">
            <Link
              href={"/"}
              className="rounded-full bg-orange-200 px-2 py-2 hover:scale-110 duration-300"
            >
              <FaXTwitter />
            </Link>
            <Link
              href={"/"}
              className="rounded-full bg-orange-200 px-2 py-2 hover:scale-110 duration-300"
            >
              <FaFacebookSquare />
            </Link>
            <Link
              href={"/"}
              className="rounded-full bg-orange-200 px-2 py-2 hover:scale-110 duration-300"
            >
              <FaLinkedin />
            </Link>
            <Link
              href={"/"}
              className="rounded-full bg-orange-200 px-2 py-2 hover:scale-110 duration-300"
            >
              <FaInstagram />
            </Link>
          </div>
        </div>
      </header>

      {/* Second Navbar */}
      <header className="bg-orange-600/70 py-4 cursor-pointer sticky top-0 w-full z-40 backdrop-blur-md">
        <div className="flex justify-between mx-auto max-w-screen-xl">
          <SideMenu />
          <NavigationMenu className="hidden md:block">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="">HOME</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          {/* <Icons.logo className="h-6 w-6" /> */}
                          <div className="mb-2 mt-4 text-lg font-medium">
                            GTA VI
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Coming soon be ready.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/" title="Introduction">
                      An open world game with interactive NP.
                    </ListItem>
                    <ListItem href="/docs/installation" title="Installation">
                      How to install dependencies and structure your app.
                    </ListItem>
                    <ListItem
                      href="/docs/primitives/typography"
                      title="Typography"
                    >
                      Styles for headings, paragraphs, lists...etc
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className=" ">
                  ABOUT
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[300px]  md:grid-cols-1 lg:w-[200px]">
                    <li>
                      <Link
                        href={"/about"}
                        className={cn(
                          "font-bold",
                          buttonVariants({ variant: "ghost" })
                        )}
                      >
                        About this Page
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={"/founder"}
                        className={buttonVariants({ variant: "ghost" })}
                      >
                        About the founder
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="">
                  MEDIA COVERAGE
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[400px] ">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={"/media"}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className=" ">
                  GALLERY
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={"/gallery"}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/events" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn("font-bold", navigationMenuTriggerStyle())}
                  >
                    EVENTS
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn("font-bold", navigationMenuTriggerStyle())}
                  >
                    CONTACT US
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          {/* <div className="center"></div> */}
          <div className="social-media flex items-center text-2xl gap-4">
            <Button
              variant="ghost"
              className="  text-black  font-bold py-4 px-4 sm:mx-4 rounded transition duration-300 "
            >
              DONATE
            </Button>
          </div>
        </div>
      </header>
    </>
  );
}

const ListItem = forwardRef(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Navbar;
