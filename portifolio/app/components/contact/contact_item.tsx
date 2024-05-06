import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { noto_sans } from "@/config/fonts";

export const ContactItem = ({
  content,
  link,
  title,
}: {
  content: string | undefined;
  link: string;
  title: string;
}) => {
  return (
    <div className="w-full flex flex-col gap-5 px-2  h-fit py-4">
      <div className="text-lg font-semibold">
        <h2 className={noto_sans.className}>{title}</h2>
      </div>
      <div className="w-full h-fit">
        <p>{content}</p>
      </div>
      <div className="w-full h-fit">
        <Button
          href={link}
          size="md"
          as={Link}
          isExternal={true}
          showAnchorIcon={true}
          className="bg-[#9651AE] font-semibold text-[#f1f1f1]"
        >
          Entrar em contato
        </Button>
      </div>
    </div>
  );
};
