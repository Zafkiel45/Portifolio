import { Button } from "@nextui-org/button"

export const Items = ({name}:{name:string}) => {
    return (
        <li>
            <Button radius="full" variant="light" size="sm" className="dark:hover:bg-[#9651AE] mobile:text-base fullhd:text-2xl font-semibold">
                {name}
            </Button>
        </li>
    )
}