import Link from 'next/link';
import { FaFacebookF } from 'react-icons/fa';
import { RiTwitterXLine } from 'react-icons/ri';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaRunning } from 'react-icons/fa';
export default function Page() {
  return (
    <div>
      <nav className="  h-12 bg-stone-300 space-x-5 pl-3 flex-col-auto gap-3 items-center justify-center ">
        <div className=" flex items-center justify-center gap-3 hover:bg-orange-300">
          <FaRunning />
          garybuckle
        </div>
        <Link href="/seite1" className=" hover:bg-orange-300">
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
        <Link href="/option" className=" hover:bg-orange-300">
          Option
        </Link>
      </nav>
    </div>
  );
}
