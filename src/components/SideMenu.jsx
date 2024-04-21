import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button"

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link"

function SideMenu() {
  return (
    <div className="md:hidden flex items-center justify-center">
      <div className="max-w-screen-xl lg:mx-auto ml-2 my-auto text-center">
        <Sheet className="backdrop-blur-xl bg-white/50">
          <SheetTrigger asChild>
            <Button variant="ghost"><Menu /></Button>
          </SheetTrigger>
          <SheetContent side={"left"}>
            <SheetHeader>
              <SheetTitle className="text-xl">Navigation Menu</SheetTitle>
            </SheetHeader>
            <div className="my-2 flex flex-col gap-2 font-bold cursor-pointer">
              <Button variant="ghost" className="font-bold">
                <Link href={"/"} >Home</Link>
              </Button>
              <Button variant="ghost" className="font-bold">
                <Link href={"/"} >About Us</Link>
              </Button>
              <Button variant="ghost" className="font-bold">
                <Link href={"/"} >Home</Link>
              </Button>
              <Button variant="ghost" className="font-bold">
                <Link href={"/"} >Gallery</Link>
              </Button>
              <Button variant="ghost" className="font-bold">
                <Link href={"/"} >Contact Us</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>

  )
}

export default SideMenu;