import Image from "next/image";
import { Inter } from "next/font/google";
import { BsFillMoonStarsFill } from "react-icons/bs";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-white px-10">
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl">developedbygeorge</h1>
          <ul className="flex items-center">
            <li>
              <BsFillMoonStarsFill className="cursor-pointer text-xl" />
            </li>
            <li>
              <a className="bg-cyan-500 text-white px-4 py-2 rounded" href="#">
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </main>
  );
}
