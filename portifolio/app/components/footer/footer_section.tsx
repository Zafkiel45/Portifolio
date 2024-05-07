import Link from "next/link";

import { FooterItems } from "./footer_items";

// estudar o que é o atributo rel e como ele funciona em links

export const Footer = () => {
  return (
    <footer className="w-screen h-fit flex flex-col text-[#f1f1f1] gap-4 px-2 py-5 bg-[#121212] dark:bg-[#252435]">
      <div className="w-full flex gap-2">
        <FooterItems title="Social">
          <Link href="https://api.whatsapp.com/send?phone=5583996364857&text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20or%C3%A7amento.">
            <li className="text-sm">Whatsapp</li>
          </Link>
          <Link href="https://twitter.com/Ishigami4571">
            <li className="text-sm">Twitter</li>
          </Link>
          <Link href="https://www.instagram.com/murilo__silva_dev/">
            <li className="text-sm">Instagram</li>
          </Link>
        </FooterItems>
        <FooterItems title="Outros">
          <Link href="https://github.com/Zafkiel45">
            <li className="text-sm">Github</li>
          </Link>
          <Link href="https://www.tabnews.com.br/AraujoFrontEndDeveloper">
            <li className="text-sm">Tabnews</li>
          </Link>
        </FooterItems>
        <FooterItems title="Navegação">
          <Link href="./#home">
            <li className="text-sm">Inicio</li>
          </Link>
          <Link href="./#about">
            <li className="text-sm">Sobre</li>
          </Link>
          <Link href="./#tech">
            <li className="text-sm">Tecnologias</li>
          </Link>
          <Link href="./#project">
            <li className="text-sm">Projetos</li>
          </Link>
          <Link href="./#contact">
            <li className="text-sm">Contatos</li>
          </Link>
        </FooterItems>
      </div>
      <div className="w-full italic text-sm border-t border-slate-500 text-center p-2">
        Todos os Direitos reservados - 2024
      </div>
    </footer>
  );
};
