import { Button } from "@nextui-org/button"

export const Items = ({name}:{name:string}) => {
    return (
        <li>
            <Button radius="full" variant="light" size="sm" className="dark:hover:bg-[#9651AE] font-semibold">
                {name}
            </Button>
        </li>
    )
}