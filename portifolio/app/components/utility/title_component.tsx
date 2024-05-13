import { noto_sans } from "@/config/fonts"

export const Title = ({title}:{title:string}) => {
    return (
        <div className="text-center text-xl fullhd:text-5xl mobile:text-2xl tablet:text-3xl font-bold w-full">
            <h1 className={noto_sans.className}>{title}</h1>
        </div>
    )
}