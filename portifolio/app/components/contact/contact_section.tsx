import { Title } from "../utility/title_component";
import { AboutSvg } from "@/public/svgs/contact";
import { ContactItem } from "./contact_item";

export const Contact = () => {
  const contents = [
    {
      whatsapp: `
            Entre em contato comigo por Whatsapp. Clique no botão abaixo e me mande uma mensagem. Em alguns minutos, entrarei em contato. 
        `,
    },
    {
      instagram: `
            Entre em contato comigo atráves do Instagram. Quando clicar no botão abaixo, você será rederecionado para meu perfil no instagram, onde você pode me mandar uma mensagem.
        `,
    },
    {
      email: `
          Clique no botão abaixo para me mandar um email. 
        `,
    },
  ];

  return (
    <section
      id="contact"
      className="w-screen desktop:px-14 fullhd:px-20 h-auto tablet:px-8 fullhd:gap-20 mobile:px-4 py-8 px-2 flex flex-col gap-8"
    >
      <Title title="Contatos" />
      <div className="w-full tablet:flex tablet:justify-center h-auto">
        <AboutSvg className="h-full w-full tablet:h-2/4 tablet:w-2/4" />
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
        link="https://mail.google.com/mail/?view=cm&fs=1&to=murilosilvapb45@gmail.com&su=Olá, gostaria de entrar em contato&body=Corpo do Email"
        content={contents[2].email}
      />
    </section>
  );
};
