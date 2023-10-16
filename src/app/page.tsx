import Image from 'next/image';
import { Header } from '@/components/Header';
import { Socials } from '@/components/Socials';
export default function Home() {
  return (
    <main>
      <div className="flex  items-center justify-center">
        {' '}
        <h1 className=" hover:bg-orange-300 text-8xl mt-8">Hauptseite </h1>
      </div>
      <div className="mx-5 mt-3">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
          aperiam, voluptas non enim exercitationem, autem earum iure quam modi
          corporis beatae explicabo eveniet dolores architecto excepturi nisi.
          Eligendi, eos aperiam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          rerum consectetur voluptatibus, soluta et, non, repellat reprehenderit
          laborum dolore minima enim quos! Corrupti laudantium a, qui
          exercitationem distinctio quam iure.
        </p>
        <p>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            cum praesentium quos recusandae, doloremque ipsum nobis laudantium
            aliquam temporibus, commodi officia voluptates, quidem nemo earum
            deserunt incidunt eligendi tenetur. Reprehenderit?
          </span>
          <span>
            Non necessitatibus illum dolorum, earum praesentium eum ipsa nam
            beatae ex sapiente corrupti consectetur, quasi quam vitae autem
            saepe eos, nesciunt aliquid consequuntur ipsum ratione! Fugiat, sit
            quae! Perferendis, ipsam?
          </span>
          <span>
            Eveniet nisi quia similique aut alias unde, aspernatur molestias
            aperiam corrupti dolorum odit itaque rerum blanditiis explicabo quos
            sequi error? Rem minima nulla incidunt voluptates. Debitis impedit
            ea temporibus officia?
          </span>
          <span>
            Quas labore blanditiis aperiam totam? Laborum iste, laboriosam
            aliquam veniam commodi recusandae ad, facilis possimus quibusdam
            quasi ullam voluptatum a nulla eveniet, cum eaque nesciunt
            repudiandae sint molestias? Nihil, voluptate!
          </span>
          <span>
            Magni quo dignissimos numquam tempore, eligendi soluta fugiat nisi
            sunt eum sint officia! Expedita, molestias? Quasi sit voluptatum
            optio excepturi nam quam, placeat delectus error. Nobis hic est
            natus reprehenderit!
          </span>
          <span>
            Magni quo dignissimos numquam tempore, eligendi soluta fugiat nisi
            sunt eum sint officia! Expedita, molestias? Quasi sit voluptatum
            optio excepturi nam quam, placeat delectus error. Nobis hic est
            natus reprehenderit!
          </span>
          <span>
            Magni quo dignissimos numquam tempore, eligendi soluta fugiat nisi
            sunt eum sint officia! Expedita, molestias? Quasi sit voluptatum
            optio excepturi nam quam, placeat delectus error. Nobis hic est
            natus reprehenderit!
          </span>
        </p>
      </div>
    </main>
  );
}
