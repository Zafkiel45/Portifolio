import { noto_sans } from "@/config/fonts";
import { StackElemento } from "./stack";
// svgs
import { HTML } from "@/public/svgs/html";
import { CSS } from "@/public/svgs/css";
import { Git } from "@/public/svgs/git";
import { Github } from "@/public/svgs/github";
import { JavaScript } from "@/public/svgs/js";
import { Next } from "@/public/svgs/next";
import { ReactJs } from "@/public/svgs/react";
import { Tailwindcss } from "@/public/svgs/tailwind";
import { Sass } from "@/public/svgs/Sass";

export const Tecnologie = () => {
  const descriptions = [
    {
      html: ` HTML é uma linguagem de desenvolvimento mais utilizada em toda web
      , sendo também muito simples de utilizada. Conto com um alto nível de 
      experiência utilizando HTML, tendo feito todos os meus projetos com o
       mesmo. `,
    },
    {
      css: `
        CSS é uma linguagem de desenvolvimento voltada para a estilização. 
        Sendo muito utilizada na Web, CSS gera um grande impacto em suas 
        aplicações. Conto com um alto nível de Maestria com CSS tendo feito
        vários projetos com o mesmo.
      `,
    },
    {
      JavaScript: `
        JavaScript é uma linguagem de programação muito popular no desenvolvimento
        web. JavaScript é extremamente flexível permitindo trabalhando tanto no
        Front-end, quanto no Back-end. Tenho um alto domínio com JavaScript na 
        parte do desenvolvimento Front-end, e uma base com o desenvolvimento 
        Back-end utilizando o mesmo. Aplico JavaScript em todos os sites para 
        torna-lo mais dinâmico e intuitivo.
      `,
    },
    {
      git: `Git é um sistema de controle de versão distribuído, sendo muito 
        utilizado por todos os programadores. Com git, nos é permitido gerenciar,
        controlar e fazer manutenção do código de suas aplicações, sendo fundamental
        para todas as aplicações. Eu conto com uma experiência de nível intermédiario
        em seu uso, entretanto, continuo me aprimorando no mesmo. 
      `,
    },
    {
      github: `
        O GitHub é uma plataforma de hospedagem de código-fonte e colaboração baseada em Git. 
        Github junto com Git é essencial para a comunicação entre desenvolvedores, possibilitando
        cooperações entre si. Github é essencial para o desenvolvimento das aplicações, pois 
        além de ajudar na hora do desenvolvimento, o cliente tem total transparência e acesso
        ao código do seu projeto, podendo controlar, remover, adicionar e alterar por conta 
        próprio, se for de sua sua escolha.
      `,
    },
    {
      sass: `
        Sass é um pré-processador CSS, que tem como principal objetivo aprimorar
        a eficiência do desenvolvimento em CSS, agilizando o processo. Sass é muito
        poderoso, sendo muito utilizando em diversos campos, além de ser leve, 
        versátil e fácil de manipular. Conto com uma grande gama de conceimento 
        do mesmo, tendo alguns projetos com Sass. 
      `,
    },
    {
      react: `
        React.js é uma biblioteca JavaScript, que adiciona muitas funções extras,
        e nos permite construir aplicações reativas. React, traz um novo conceito 
        de desenvolvimento Front-end. Tenho um amplo conhecimento em React, apesar 
        de ainda estar estudando ele. Fiz diversos projetos com ele, desde os mais 
        simples até os mais complexo.
      `,
    },
    {
      next: `
        Next.js é um framework baseado em React.js, onde eleva o conceito de programação 
        Front-end a outro patamar, com mais eficiência e flexibilidade. Apesar de ter 
        feito alguns projetos com ele, sigo me aprimorando a cada dia para domina-lo ainda 
        mais. 
      `,
    },
    {
      tailwindcss: `
        Tailwindcss é um framework para CSS, que está atualmente muito popular no mercado,
        além de ser um "padrão" para o Next.js. Tailwindcss oferece recusos para agilizar 
        no processo de criação dos sites, além de otimizar bem o produto final. Eu conto 
        com um vasto conhecimento utilizando Tailwindcss. 
      `,
    },
  ];

  return (
    <section id="tech" className="w-screen py-6 flex flex-col gap-5 px-2">
      <div className="text-center w-full font-bold text-xl">
        <h1 className={noto_sans.className}>Tecnologias</h1>
      </div>
      <div className="text-center">
        <p className="px-2">
          Clique em alguma tecnologia para ver mais informações sobre minha
          experiência com a tecnologia selecionada.
        </p>
      </div>
      <div className="w-full px-2 flex justify-center flex-wrap gap-2">
        <StackElemento
          title="HTML"
          text={descriptions[0].html}
          styles="hover:bg-[#653B15]"
        >
          <HTML className="w-full h-full" />
        </StackElemento>
        <StackElemento
          title="CSS"
          text={descriptions[1].css}
          styles="hover:bg-[#002037]"
        >
          <CSS className="w-full h-full" />
        </StackElemento>
        <StackElemento
          title="JavaScript"
          text={descriptions[2].JavaScript}
          styles="hover:bg-[#F9FC5C]"
        >
          <JavaScript className="fill-white dark:group-hover:fill-[#323232] group-hover:fill-[#323232] w-full h-full" />
        </StackElemento>
        <StackElemento
          title="Git"
          text={descriptions[3].git}
          styles="hover:bg-[#F05133]"
        >
          <Git className="fill-white w-full h-full" />
        </StackElemento>
        <StackElemento
          title="Github"
          text={descriptions[4].github}
          styles="hover:bg-white"
        >
          <Github className="fill-white dark:group-hover:fill-[#7B4097] group-hover:fill-[#7B4097] w-full h-full" />
        </StackElemento>
        <StackElemento
          title="Sass"
          text={descriptions[5].sass}
          styles="hover:bg-[#CD6799]"
        >
          <Sass className="fill-white w-full h-full" />
        </StackElemento>
        <StackElemento
          title="React.js"
          text={descriptions[6].react}
          styles="hover:bg-[#5599AE]"
        >
          <ReactJs className="fill-white w-full h-full" />
        </StackElemento>
        <StackElemento
          title="Next.js"
          text={descriptions[7].next}
          styles="group dark:hover:bg-white"
        >
          <Next className="fill-white w-full dark:group-hover:fill-[#111111] h-full" />
        </StackElemento>
        <StackElemento
          title="Tailwindcss"
          text={descriptions[8].tailwindcss}
          styles="hover:bg-[#002037]"
        >
          <Tailwindcss className="fill-white dark:group-hover:fill-[#23B0FF] w-full h-full" />
        </StackElemento>
      </div>
    </section>
  );
};
