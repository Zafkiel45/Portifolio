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
    <div className="bg-[#2B292F] fullhd:p-10 fullhd:gap-10 tablet:w-4/5  text-[#f1f1f1] w-full rounded-lg flex flex-col gap-4 shadow-md p-5 text-center">
      <div className="w-full tablet:text-xl fullhd:text-4xl text-lg font-bold">
        <h1 className={noto_sans.className}>{title}</h1>
      </div>
      <div className="w-full fullhd:text-3xl tablet:text-lg">
        <p className="px-2 fullhd:leading-10 ">{content}</p>
      </div>
      <div className="w-full h-auto">
        <Button
          showAnchorIcon={true}
          isExternal={true}
          href={link}
          as={Link}
          size="md"
          className="bg-[#9651AE] fullhd:p-8 fullhd:text-2xl text-[#f1f1f1] font-semibold"
        >
          Ver projeto
        </Button>
      </div>
    </div>
  );
};
