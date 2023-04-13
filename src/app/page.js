import Image from "next/image";
import { Inter } from "next/font/google";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import deved from "../../public/dev-ed-wave.png";
import design from "../../public/design.png";
import code from "../../public/code.png";
import consulting from "../../public/consulting.png";
import Card from "./components/Card";
import web1 from "../../public/web1.png";
import web2 from "../../public/web2.png";
import web3 from "../../public/web3.png";
import web4 from "../../public/web4.png";
import web5 from "../../public/web5.png";
import web6 from "../../public/web6.png";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-white px-10 md:px-20 lg:px-40">
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl font-burtons">Logo</h1>
          <ul className="flex items-center gap-5">
            <li>
              <BsFillMoonStarsFill className="cursor-pointer text-xl" />
            </li>
            <li>
              <a
                className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded"
                href="#"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
        <div className="text-center p-10 ">
          <h2 className="text-5xl py-2 text-teal-600 font-medium">
            George Garcia
          </h2>
          <h3 className="text-2xl py-2">Developer and designer.</h3>
          <p className="text-md py-5 leading-8 text-gray-800">
            Freelancer providing services for programming and something needs.
            Join me down below and let's get cracking!
          </p>
        </div>
        <div className="flex gap-16 justify-center text-5xl py-3 text-gray-600">
          <AiFillTwitterCircle />
          <AiFillGithub />
          <AiFillLinkedin />
        </div>
        <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden">
          <Image src={deved} alt="" layout="fill" objectFit="cover" />
        </div>
      </section>

      <section>
        <div>
          <h3 className="text-3xl py-1">Services I offer</h3>
          <p className="text-md py-2 leading-8 text-gray-800">
            Since the beginning of my journey as a freelance developer, I've
            done remote work for companies.
          </p>
          <p className="text-md py-2 leading-8 text-gray-800">
            I offer from a wide range of services, including programming and
            teaching.
          </p>
        </div>

        <Card image={design} />
        <Card image={code} />
        <Card image={consulting} />
      </section>

      <section>
        <div>
          <h3 className="text-3xl py-1">Portfolio</h3>
          <p className="text-md py-2 leading-8 text-gray-800">
            Since the beginning of my journey as a freelance developer, I've
            done remote work for companies.
          </p>
          <p className="text-md py-2 leading-8 text-gray-800">
            I offer from a wide range of services, including programming and
            teaching.
          </p>
        </div>
        <div>
          <div>
            <Image src={web1}></Image>
          </div>
          <div>
            <Image src={web2}></Image>
          </div>
          <div>
            <Image src={web3}></Image>
          </div>
          <div>
            <Image src={web4}></Image>
          </div>
          <div>
            <Image src={web5}></Image>
          </div>
          <div>
            <Image src={web6}></Image>
          </div>
        </div>
      </section>
    </main>
  );
}
