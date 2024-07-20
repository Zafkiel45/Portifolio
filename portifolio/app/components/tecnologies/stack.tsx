"use client";
import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@nextui-org/modal";

export const StackElemento = ({
  children,
  text,
  title,
  styles,
  label,
}: {
  children: any;
  text: string | undefined;
  title: string;
  label: string;
  styles?: string;
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className={`w-16 fullhd:text-lg tablet:h-20 tablet:w-20  fullhd:w-32 fullhd:h-32  h-16 `}>
      <Button
        aria-label={label}
        onPress={onOpen}
        variant="flat"
        size="sm"
        className={`bg-[#313131] ${styles} group transition-transform hover:scale-105 w-full h-full rounded-md shadow-md p-2`}
      >
        {children}
      </Button>
      <Modal
        backdrop="blur"
        placement="center"
        className="dark:bg-[#2B292F]"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent className="pb-5 mobile:h-fit mobile:w-4/5">
          {(onClose) => (
            <>
              <ModalHeader className="flex gap-3 items-center">
                <div className="h-10- w-10">{children}</div>
                <div>{title}</div>
              </ModalHeader>
              <ModalBody>
                <p>{text}</p>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};
