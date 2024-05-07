import { Items } from "./items";
import { SwitchMode } from "./modeButton";
import Link from "next/link";

export const Header = () => {
  return (
    <header
      id="home"
      className="w-screen fixed fullhd:px-20 backdrop-blur-lg z-50 font-bold border-b dark:border-stone-700 h-auto fullhd:py-6 mobile:py-4 mobile:px-3 py-3 px-2"
    >
      <nav className="w-full h-full">
        <ol className="flex w-full items-center gap-2 justify-center h-auto">
          <Link href={`./#project`}>
            <Items name="Projetos" />
          </Link>
          <Link href={`./#home2`}>
            <Items name="Início" />
          </Link>
          <Link href={`./#about`}>
            <Items name="Sobre" />
          </Link>
          <SwitchMode />
        </ol>
      </nav>
    </header>
  );
};
