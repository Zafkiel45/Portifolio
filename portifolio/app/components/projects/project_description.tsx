import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import { noto_sans } from "@/config/fonts";

export const ProjectDescription = ({
  title,
  content,
  link,
}: {
  title: string;
  content: string | undefined;
  link: string;
}) => {
  return (
    <div className="bg-[#2B292F] w-full rounded-lg flex flex-col gap-4 shadow-md p-5 text-center">
      <div className="w-full text-lg font-bold">
        <h1 className={noto_sans.className}>{title}</h1>
      </div>
      <div className="w-full">
        <p className="px-2">
            {content}
        </p>
      </div>
      <div className="w-full h-auto">
        <Button showAnchorIcon={true} isExternal={true} href={link} as={Link} size="md" className="bg-[#9651AE] font-semibold">
            Ver projeto
        </Button>
      </div>
    </div>
  );
};
