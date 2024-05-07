import { ProjectDescription } from "./project_description";
import { noto_sans } from "@/config/fonts";

export const Project = () => {
  const contents = [
    {
      todoList: `
                Projeto To-do List que consiste me adicionar tarefas para que 
                o usuário possa elaborar melhor as atividades do dia. Nessa 
                aplicação eu utilizo IndexedDB, que é um banco de dados para 
                armazenar suas tarefas localmente! Além disso é utilizado React.js,
                Next.js, Tailwindcss, HTML, CSS, TypeScript e JavaScript. 
            `,
    },
    {
      clinic: `
                Esse projeto consiste em uma landing page voltado para a área da 
                Saúde. Sendo um dos meus primeiros projetos, onde usei principalmente 
                como objeto de estudos e testes. Nele eu utilizei React.js, 
                Next.js, Tailwindcss, HTML, CSS, e JavaScript. 
            `,
    },
    {
      ecommerce: `
                Esse site consiste em simular um ecommerce real. Nele eu criei 
                um layout com produtos fictícios em vendas. Totalmente responsivo e
                otimizado. Nele eu utilizei React.js, FakeStoreApi,
                Next.js, Tailwindcss, HTML, CSS, TypeScript e JavaScript. 
            `,
    },
    {
      calc: `
                Uma calculadora para realizar calcúlos simples. Nela é possível 
                realizar até mesmo expressões mais complexas. Nele eu utilizei 
                React.js, Next.js,  HTML, CSS, e JavaScript. 
            `,
    },
  ];

  return (
    <section
      id="project"
      className="w-screen py-5 h-auto px-2 flex flex-col gap-8"
    >
      <div className="text-center text-xl font-bold w-full">
        <h1 className={noto_sans.className}>Principais Projetos</h1>
      </div>
      <ProjectDescription
        content={contents[0].todoList}
        title="To-do List"
        link="https://next-todo-list-336m.vercel.app/"
      />
      <ProjectDescription
        content={contents[1].clinic}
        title="Clínica"
        link="https://clinic-website-tau.vercel.app/"
      />
      <ProjectDescription
        content={contents[2].ecommerce}
        title="Ecommerce"
        link="https://e-commerce-zafkiel45.vercel.app/"
      />
      <ProjectDescription
        content={contents[3].calc}
        title="Calculadora"
        link="https://calculate-next.vercel.app/"
      />
    </section>
  );
};
