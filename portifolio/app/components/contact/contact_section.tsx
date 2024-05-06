import { noto_sans } from "@/config/fonts"
import { AboutSvg } from "@/public/svgs/contact"
import { ContactItem } from "./contact_item"

export const Contact = () => {

    const contents = [{
        whatsapp: `
            Clique no botão abaixo e você será redirecionado para um chat de conversa comigo no Whatsapp. Você irá descrever o seu projeto e eu farei um orçamento, dando o retorno de todos os gastos para o cliente. 
        `
    },
    {
        instagram: `
            Clique no botão abaixo e você será redirecionado para meu perfil no Instagram, basta manda uma mensagem na DM que farei um orçamento e darei um retorno de todos os custos para o cliente.
        `
    },
    {
        email: `
        Mande uma mensagem para o Email abaixo, que eu enviarei minhas informações de contato para podermos negociar com mais agilidades e precisão na hora do orçamento.
        `
    }
]

    return (
        <section className="w-screen h-auto py-8 px-2 flex flex-col gap-8">
            <div className="text-xl font-bold text-center w-full">
                <h1 className={noto_sans.className}>
                    Contato
                </h1>
            </div>
            <div className="w-full h-auto">
                <AboutSvg className="h-full w-full" />
            </div>
            <ContactItem title="Contato por Whatsapp" link="https://api.whatsapp.com/send?phone=5583996364857&text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20or%C3%A7amento." content={contents[0].whatsapp} />
            <ContactItem title="Contato por Instagram" link="https://www.instagram.com/murilo__silva_dev/" content={contents[1].instagram} />
            <ContactItem title="Contato por Email" link="https://mail.google.com/mail/?view=cm&fs=1&to=murilosilvapb45@gmail.com&su=Olá, gostaria de fazer um orçamento&body=Corpo do Email" content={contents[2].email} />
        </section>
    ) 
}