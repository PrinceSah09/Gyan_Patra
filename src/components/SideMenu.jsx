import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const imageStyle = {
  border: "1px solid #fff",
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

import Link from "next/link";

function SideMenu() {
  return (
    <div className="md:hidden flex items-center justify-center">
      <div className="max-w-screen-xl lg:mx-auto ml-2 my-auto text-center">
        <Sheet className="backdrop-blur-xl bg-white/50">
          <SheetTrigger asChild>
            <Button variant="ghost">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side={"left"}>
            <SheetHeader>
              <SheetTitle className="text-xl   p-4">
                <Link href={"/"}>
                  <Image
                    src="/logo.png"
                    height={300}
                    width={300}
                    style={imageStyle}
                    alt="landscape art"
                  />
                </Link>
              </SheetTitle>
            </SheetHeader>
            <div className="my-2 flex flex-col gap-2 font-bold cursor-pointer">
              <Button variant="ghost" className="font-bold text-lg">
                <Link href={"/"}>Home</Link>
              </Button>
              <Button variant="ghost" className="font-bold text-lg">
                <Link href={"/gallery"}>Gallery</Link>
              </Button>
              <Button variant="ghost" className="font-bold text-lg">
                <Link href={"/events"}>Events</Link>
              </Button>

              <Button variant="ghost" className="font-bold text-lg">
                <Link href={"/about"}>About Us</Link>
              </Button>
              <Button variant="ghost" className="font-bold text-lg">
                <Link href={"/founder"}>About Founder</Link>
              </Button>

              <Button variant="ghost" className="font-bold text-lg">
                <Link href={"/media"}>Media Coverage</Link>
              </Button>
              <Button variant="ghost" className="font-bold text-lg">
                <Link href={"/contact"}>Contact Us</Link>
              </Button>
              <Button variant="" className="font-bold text-lg">
                <Link href={"/"}>Contribute</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

export default SideMenu;
