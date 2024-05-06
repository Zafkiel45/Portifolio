import { Link } from "@nextui-org/link"
import { FooterItems } from "./footer_items"

// estudar o que é o atributo rel e como ele funciona em links

export const Footer = () => {
    return (
        <footer className="w-screen h-fit flex flex-col gap-4 px-2 py-5 dark:bg-[#2F2E41]">
            <FooterItems title="Social">
                <Link isExternal showAnchorIcon isBlock  color="foreground" href=""><li className="text-sm">Whatsapp</li></Link>
                <Link isExternal showAnchorIcon isBlock  color="foreground" href=""><li className="text-sm">Twitter</li></Link>
                <Link isExternal showAnchorIcon isBlock  color="foreground" href=""><li className="text-sm">Instagram</li></Link>
            </FooterItems>
            <FooterItems title="Outros">
                <Link isExternal showAnchorIcon isBlock  color="foreground" href=""><li className="text-sm">Github</li></Link>
                <Link isExternal showAnchorIcon isBlock  color="foreground" href=""><li className="text-sm">Tabnews</li></Link>
            </FooterItems>
            <FooterItems title="Navegação">
                <Link isBlock  color="foreground" href=""><li className="text-sm">Inicio</li></Link>
                <Link isBlock  color="foreground" href=""><li className="text-sm">Sobre</li></Link>
                <Link isBlock  color="foreground" href=""><li className="text-sm">Tecnologias</li></Link>
                <Link isBlock  color="foreground" href=""><li className="text-sm">Projetos</li></Link>
                <Link isBlock  color="foreground" href=""><li className="text-sm">Contatos</li></Link>
            </FooterItems>
            <div className="w-full italic text-sm border-t border-slate-500 text-center p-2">
                Todos os Direitos reservados - 2024
            </div>
        </footer>
    )
}