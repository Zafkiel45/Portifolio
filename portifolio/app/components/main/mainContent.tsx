import { Button } from "@nextui-org/button";
import { noto_sans } from "@/config/fonts";
import Link from "next/link";

export const MainContent = () => {
  return (
    <main
      id="home2"
      className="px-2 desktop:px-14 fullhd:gap-10 fullhd:justify-center fullhd:px-20 tablet:px-8 mobile:px-4 w-full h-screen flex flex-col gap-7 items-center justify-center"
    >
      <div className="text-center text-3xl fullhd:text-8xl desktop:text-6xl tablet:text-5xl mobile:text-4xl ">
        <h1 className={noto_sans.className}>
          Desenvolvedor
          <br />
          Front-end
        </h1>
      </div>
      <div className="text-center desktop:text-xl fullhd:text-3xl mobile:text-lg">
        Construindo páginas modernas para
        <br />
        você, meu estimado cliente.
      </div>
      <div>
        <Link href={`./#contact`}>
          <Button
            aria-label="botão para fazer orçamento"
            size="sm"
            className="bg-[#9651AE] fullhd:text-2xl desktop:px-5 desktop:py-2 fullhd:p-7 text-base text-white desktop:text-lg font-semibold active:relative active:-bottom-1 hover:scale-105 transition-all"
          >
            Contato
          </Button>
        </Link>
      </div>
    </main>
  );
};
