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
}: {
  children: any;
  text: string | undefined;
  title: string;/*  */
  styles?: string;
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className={`w-16  h-16`}>
      <Button
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
        <ModalContent className="pb-5">
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
