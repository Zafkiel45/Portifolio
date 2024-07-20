import { Button } from "@nextui-org/button"
import Link from "next/link"

export const Items = ({name, link}:{name:string, link:string}) => {
    return (
        <li>
            <Link href={link}>   
                <Button radius="full" variant="light" size="sm" className="dark:hover:bg-[#9651AE] mobile:text-base desktop:text-lg fullhd:text-2xl">
                    {name}
                </Button>
            </Link>
        </li>
    )
}