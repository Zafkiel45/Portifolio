import { noto_sans } from "@/config/fonts";
import { AboutSvg } from "@/public/svgs/contact";
import { ContactItem } from "./contact_item";

export const Contact = () => {
  const contents = [
    {
      whatsapp: `
            Entre em contato comigo por Whatsapp e agende um orçamento comigo agora mesmo. Clique no botão abaixo e me mande uma mensagem. Em alguns minutos, entrarei em contato. 
        `,
    },
    {
      instagram: `
            Entre em contato comigo atráves do Instagram. Quando clicar no botão abaixo, você será rederecionado para meu perfil no instagram, onde você pode me mandar uma mensagem.
        `,
    },
    {
      email: `
          Clique no botão abaixo para me mandar um email. Quando você me mandar uma email, eu manderei minhas informações de contato para que possamos agendar um orçamento.
        `,
    },
  ];

  return (
    <section
      id="contact"
      className="w-screen h-auto py-8 px-2 flex flex-col gap-8"
    >
      <div className="text-xl font-bold text-center w-full">
        <h1 className={noto_sans.className}>Contato</h1>
      </div>
      <div className="w-full h-auto">
        <AboutSvg className="h-full w-full" />
      </div>
      <ContactItem
        title="Contato por Whatsapp"
        link="https://api.whatsapp.com/send?phone=5583996364857&text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20or%C3%A7amento."
        content={contents[0].whatsapp}
      />
      <ContactItem
        title="Contato por Instagram"
        link="https://www.instagram.com/murilo__silva_dev/"
        content={contents[1].instagram}
      />
      <ContactItem
        title="Contato por Email"
        link="https://mail.google.com/mail/?view=cm&fs=1&to=murilosilvapb45@gmail.com&su=Olá, gostaria de fazer um orçamento&body=Corpo do Email"
        content={contents[2].email}
      />
    </section>
  );
};
