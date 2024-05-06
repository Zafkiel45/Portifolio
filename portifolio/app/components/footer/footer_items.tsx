import { ReactNode } from "react"
import { noto_sans } from "@/config/fonts"

export const FooterItems = ({
    title,
    children
}:{title:string, children: ReactNode}) => {
    return (
        <ol className="w-full px-3 list-disc h-fit justify-center flex flex-col gap-2">
            <li className={`${noto_sans.className} list-none text-lg font-semibold`}>{title}</li>
            {children}
        </ol>
    )
}