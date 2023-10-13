import Link from 'next/link';
import { FaFacebookF } from 'react-icons/fa';
import { RiTwitterXLine } from 'react-icons/ri';
import { FaLinkedinIn } from 'react-icons/fa';

export function Header() {
  return (
    <>
      <div>
        <nav className="  h-12 bg-green-200 space-x-5 pl-3 flex gap-3 items-center justify-center ">
          <Link href="" className=" hover:bg-orange-300">
            Seite 1
          </Link>
          <Link href="" className=" hover:bg-orange-300">
            Seite 2
          </Link>
          <Link href="" className=" hover:bg-orange-300">
            Seite 3
          </Link>{' '}
          <Link href="" className=" hover:bg-orange-300">
            Seite 4
          </Link>{' '}
          <Link href="" className=" hover:bg-orange-300">
            Seite 5
          </Link>{' '}
          <Link href="" className=" hover:bg-orange-300">
            Seite 6
          </Link>{' '}
          <Link href="" className=" hover:bg-orange-300">
            Seite 7
          </Link>
          <Link href="" className=" hover:bg-orange-300">
            <FaFacebookF />
          </Link>
          <Link href="" className=" hover:bg-orange-300">
            <RiTwitterXLine />
          </Link>
          <Link href="" className=" hover:bg-orange-300">
            <FaLinkedinIn />
          </Link>
        </nav>
      </div>
    </>
  );
}
