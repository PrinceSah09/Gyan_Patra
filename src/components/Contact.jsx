import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";

/**
 * Contact component
 */

function Contact() {
  return (
    <div className="max-w-screen-xl mt-6 mx-auto my-4">
      <h2 className="lg:text-6xl  text-4xl font-bold text-center">
        Contact Us
      </h2>
      {/* <hr className=" border-gray-800  dark:border-gray-700" /> */}
      <div className="holder flex flex-col md:flex-row md:flex-wrap justify-center max-w-screen-xl md:mx-auto my-4 border">
        <div className="flex flex-col justify-center lg:w-[30%]  h-[250px] items-center gap-4 text-xl font-bold">
          <div className="text-8xl text-orange-500">
            <MdEmail />
          </div>
          <h2>youremail@gmail.com</h2>
          <div>Mail Us</div>
        </div>
        <div className="flex flex-col justify-center lg:w-[30%]  h-[250px] items-center gap-4 text-xl font-bold">
          <div className="text-8xl text-orange-500">
            <FaPhoneSquareAlt />
          </div>
          <h2>+910000000000</h2>
          <div>Phone Number</div>
        </div>
        <div className="flex flex-col justify-center lg:w-[30%]  h-[250px] items-center gap-4 text-xl font-bold">
          <div className="text-8xl text-orange-500">
            <FaLocationDot />
          </div>
          <h2>coordinates</h2>
          <div>Location</div>
        </div>
      </div>

      <div className="border flex flex-col md:flex-row md:flex-wrap justify-center max-w-screen-xl md:mx-auto my-4  ">
        <div className="lg:w-[45%] border p-4 m-4">
          <p>
            sss, ipsum dolor sit amet consectetur adipisicing elit. Fuga eum
            doDummy praesentium quas sunt ab aperiam recusandae ipsa, explicabo
            rerum eius earum dolores, omnis maiores culpa at autem porro
            mollitia inventore. Voluptatum tempora accusamus dolor quibusdam
            eveniet, doDummy consectetur quae tempore culpa iste ipsam delectus
            saepe facilis earum beatae quis cupiditate nam, hic deserunt!
            Asperiores sunt rerum iure ipsum dolor animi eligendi. Delectus sint
            soluta pariatur impedit doDummyque explicabo? Accusantium quibusdam
            nemo quasi sequi corrupti rem ad consectetur repellendus, quos
            deserunt ut officia. Magnam, at consequatur, dolore ipsum tenetur
            suscipit repudiandae atque laborum aliquam error nulla fugit? Fuga a
            minus asperiores illum unde. Exercitationem doDummy dignissimos ipsa
            consectetur maiores. Sed, voluptas, a quos perferendis facilis eius
            ipsam delectus, id pariatur doloribus ex expedita. Dummy ipsum dolor
            sit amet consectetur adipisicing elit. Possimus cumque inventore
            totam deserunt soluta debitis nemo dolor earum? Corrupti.
          </p>
          <Button className="mt-2">Submit</Button>
        </div>
        <div className="lg:w-[45%] border p-4 m-4">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115132.86724539669!2d85.06064227977905!3d25.608169161056825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f29937c52d4f05%3A0x831a0e05f607b270!2sPatna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1713288397844!5m2!1sen!2sin"
            className="w-[100%] h-[430px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
