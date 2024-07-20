import { Items } from "./items";
import { SwitchMode } from "./modeButton";

export const Header = () => {
  return (
    <header
      id="home"
      className="w-screen fixed fullhd:px-20 backdrop-blur-lg z-50 font-bold border-b dark:border-stone-700 border-gray-400 h-auto fullhd:py-6 mobile:py-4 mobile:px-3 py-3 px-2"
    >
      <nav className="w-full h-full">
        <ol className="flex w-full items-center gap-2 justify-center h-auto">
          <Items name="Projetos" link="./#project" />
          <Items name="Início" link="./#home2"/>
          <Items name="Sobre" link="./#about" />
          <SwitchMode />
        </ol>
      </nav>
    </header>
  );
};
