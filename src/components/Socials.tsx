import { FaFacebookF } from 'react-icons/fa';
import { RiTwitterXLine } from 'react-icons/ri';
import { FaLinkedinIn } from 'react-icons/fa';
export function Socials() {
  return (
    <>
      <div className="mt-3 h-12 w-full fixed bottom-0 bg-stone-300 space-x-5 pl-3 flex gap-3 items-center justify-center  ">
        <a href="#" className=" hover:bg-orange-300">
          <FaFacebookF />
        </a>
        <a href="#" className=" hover:bg-orange-300">
          <RiTwitterXLine />
        </a>
        <a href="#" className=" hover:bg-orange-300">
          <FaLinkedinIn />
        </a>
      </div>
    </>
  );
}
