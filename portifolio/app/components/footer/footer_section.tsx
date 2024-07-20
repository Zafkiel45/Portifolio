import Link from "next/link";

import { FooterItems } from "./footer_items";

export const Footer = () => {
  return (
    <footer className="w-screen h-fit desktop:px-14 fullhd:px-20 flex flex-col text-[#f1f1f1] gap-4 tablet:px-8 mobile:px-4 mobile:pt-8 px-2 py-5 bg-[#121212] dark:bg-[#252435]">
      <div className="w-full flex mobile:justify-center tablet:justify-around gap-2">
        <FooterItems title="Social">
            <li className="text-sm  fullhd:text-2xl tablet:text-base">
              <Link href="https://api.whatsapp.com/send?phone=5583996364857&text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20or%C3%A7amento.">
                Whatsapp
              </Link>
            </li>
            <li className="text-sm  fullhd:text-2xl tablet:text-base">
              <Link href="https://twitter.com/Ishigami4571">
                  Twitter
              </Link>
            </li>
            <li className="text-sm  fullhd:text-2xl tablet:text-base">
              <Link href="https://www.instagram.com/murilo__silva_dev/">
                  Instagram
              </Link>
            </li>
        </FooterItems>
        <FooterItems title="Outros">
            <li className="text-sm  fullhd:text-2xl tablet:text-base">
              <Link href="https://github.com/Zafkiel45">
                  Github
              </Link>
            </li>
            <li className="text-sm fullhd:text-2xl  tablet:text-base">
              <Link href="https://www.tabnews.com.br/AraujoFrontEndDeveloper">
                  Tabnews
              </Link>
            </li>
        </FooterItems>
        <FooterItems title="Navegação">
            <li className="text-sm fullhd:text-2xl  tablet:text-base">
              <Link href="./#home">
                  Inicio
              </Link>
            </li>
            <li className="text-sm fullhd:text-2xl  tablet:text-base">
              <Link href="./#about">
                  Sobre
              </Link>
            </li>
            <li className="text-sm  fullhd:text-2xl tablet:text-base">
              <Link href="./#tech">
                  Tecnologias
              </Link>
            </li>
            <li className="text-sm  fullhd:text-2xl tablet:text-base">
              <Link href="./#project">
                  Projetos
              </Link>
            </li>
            <li className="text-sm  fullhd:text-2xl tablet:text-base">
              <Link href="./#contact">
                  Contatos
              </Link>
            </li>
        </FooterItems>
      </div>
      <div className="w-full fullhd:text-xl italic text-sm border-t border-slate-500 text-center p-2">
        Todos os Direitos reservados - 2024
      </div>
    </footer>
  );
};
