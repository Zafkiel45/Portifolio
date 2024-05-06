import { Button } from "@nextui-org/button";
import { noto_sans } from "@/config/fonts";
import Link from "next/link";

export const MainContent = () => {
  return (
    <main
      id="home2"
      className="px-2 w-full h-[90vh] flex flex-col gap-5 items-center justify-center"
    >
      <div className="text-center text-3xl ">
        <h1 className={noto_sans.className}>
          Desenvolvedor
          <br />
          Front-end
        </h1>
      </div>
      <div className="text-center">
        Construindo páginas modernas para
        <br />
        você, meu estimado cliente.
      </div>
      <div>
        <Link href={`./#contact`}>
          <Button
            aria-label="botão para fazer orçamento"
            size="sm"
            className="bg-[#1E1E1E] text-white font-semibold active:relative active:-bottom-1 hover:scale-105 transition-all dark:bg-[#9651AE]"
          >
            Fazer orçamento
          </Button>
        </Link>
      </div>
    </main>
  );
};
