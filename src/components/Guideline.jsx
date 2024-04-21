import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Custom Style-Object for image
const imageStyle = {
  border: "1px solid #fff",
  width: "100%",
};

function Contact() {
  return (
    <div className="max-w-screen-xl mt-6 mx-auto my-4">
      {/* TODO: Add Scrollbar Customization */}
      {/* lg:overflow-auto scrollbar:!w-1.5 scrollbar:!h-1.5 scrollbar:bg-transparent scrollbar-track:!bg-slate-100 scrollbar-thumb:!rounded scrollbar-thumb:!bg-slate-300 scrollbar-track:!rounded dark:scrollbar-track:!bg-slate-500/[0.16] dark:scrollbar-thumb:!bg-slate-500/50 max-h-96 lg:supports-scrollbars:pr-2 lg:max-h-96 */}

      <div className="border flex flex-col md:flex-row md:flex-wrap gitjustify-center max-w-screen-xl md:mx-auto my-4  ">
        <div className="lg:w-[45%] border   m-4">
          <Image
            src={"/guideline.jpg"}
            width={840}
            height={400}
            alt="Picture of the author"
            style={imageStyle}
          ></Image>
        </div>

        <div className="lg:w-[45%] border p-4 m-4 ">
          <h3 className="py-2 text-md font-bold">
            Donate & Support Gulmohar Maitris Mission
          </h3>
          <h2 className="text-4xl font-bold underline">DONATION GUIDELINES</h2>
          <Accordion
            type="single"
            collapsible
            className="
                            w-full 
                            mt-4 
                            lg:overflow-y-scroll 
                            lg:h-[450px] 
                            lg:scrollbar-thin
                            no-scrollbar
                        "
          >
            Testimonials
            <AccordionItem value="item-1" className="mr-2">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="mr-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="mr-2">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you Dummy ipsum dolor, sit amet consectetur adipisicing elit.
                Repellat placeat eaque repellendus molestiae sint inventore
                voluptatem animi at ducimus quae laboriosam harum accusamus
                quidem mollitia, ipsum adipisci? Modi voluptates quos maiores
                molestias iusto nihil perspiciatis blanditiis soluta sunt, earum
                nostrum numquam, nisi rem voluptatum vitae eius, facilis
                distinctio illum voluptate quidem totam repellendus. Ipsam quae
                corrupti necessitatibus harum beatae quisquam non earum totam
                unde perferendis reprehenderit ea, error modi temporibus qui
                nemo omnis eos nihil accusamus quia at. Repudiandae vero
                possimus minima mollitia provident ducimus eos cum maiores
                sapiente expedita obcaecati voluptatum tempora, corporis,
                commodi quibusdam quos quia, pariatur cumque! Amet porro tenetur
                in totam voluptatem praesentium dicta, deserunt voluptatibus
                illum atque deleniti rem temporibus velit distinctio repudiandae
                perspiciatis explicabo ex molestias itaque? prefer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="mr-2">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="mr-2">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default Contact;
