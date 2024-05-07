import { ReactNode } from "react";
import { noto_sans } from "@/config/fonts";

export const FooterItems = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
      <ol className="w-full px-3 list-disc h-fit tablet:w-fit tablet:px-5 fullhd:gap-7 justify-center flex flex-col gap-2">
        <li className={`${noto_sans.className} fullhd:text-3xl tablet:text-lg list-none font-semibold`}>
          {title}
        </li>
        {children}
      </ol>
  );
};
