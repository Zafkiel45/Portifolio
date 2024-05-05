import { Items } from "./items"
import { SwitchMode } from "./modeButton"

export const Header = () => {
    return (
        <header className="w-screen font-bold border-b dark:border-stone-700 h-auto py-3 px-2">
            <nav className="w-full h-full">
                <ol className="flex w-full items-center gap-2 justify-center h-auto">
                    <Items name="Projetos"/>
                    <Items name="Início"/>
                    <Items name="Sobre"/>
                    <SwitchMode/>
                </ol>
            </nav>
        </header>
    )
}