"use client";
import { Button } from "@nextui-org/button";
import { useEffect, useState } from "react";
import { Sun } from "@/public/svgs/sun";

export const MoonSvg = () => {
  return (
    <svg
      className="h-3 w-3 fullhd:w-6 fullhd:h-6 desktop:w-4 desktop:h-4 group-hover:fill-white dark:fill-white fill-[#212121]"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9 0.41687C9.14605 0.594974 9.23551 0.812677 9.25689 1.04201C9.27828 1.27135 9.2306 1.50183 9.12 1.70387C8.25231 3.29589 7.79939 5.08075 7.803 6.89387C7.803 12.9254 12.72 17.8094 18.78 17.8094C19.572 17.8084 20.3385 17.7284 21.0795 17.5694C21.3062 17.5209 21.5421 17.5399 21.7581 17.6242C21.974 17.7084 22.1605 17.8542 22.2945 18.0434C22.4362 18.2403 22.5086 18.4786 22.5001 18.7211C22.4917 18.9635 22.403 19.1963 22.248 19.3829C21.0715 20.8279 19.5873 21.9923 17.9037 22.791C16.2201 23.5897 14.3795 24.0027 12.516 23.9999C5.601 23.9999 0 18.4289 0 11.5649C0 6.39887 3.171 1.96787 7.686 0.0898695C7.91083 -0.0056804 8.16065 -0.0254523 8.39771 0.0335418C8.63477 0.0925358 8.84618 0.22709 9 0.41687Z" />
    </svg>
  );
};

export const SwitchMode = () => {
  const [currentState, setCurrentState] = useState("");

  useEffect(() => {
    try {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.classList.remove("light");
        localStorage.ThemeStorage = "dark";
        setCurrentState("dark");
        document.documentElement.classList.add(localStorage.ThemeStorage);
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.ThemeStorage = "light";
        setCurrentState("light");
        document.documentElement.classList.add(localStorage.ThemeStorage);
      }
    } catch (menssage) {
      console.log(`Erro ao definir tema: ${menssage}`);
    }
  }, []);

  const toggleTheme = () => {
    try {
      const newCurrentMode =
        localStorage.ThemeStorage === "dark" ? "light" : "dark";
      localStorage.ThemeStorage = newCurrentMode;

      if (newCurrentMode === "dark") {
        document.documentElement.classList.remove("light");
        setCurrentState("dark");
        document.documentElement.classList.add(localStorage.ThemeStorage);
      } else {
        document.documentElement.classList.remove("dark");
        setCurrentState("light");
        document.documentElement.classList.add(localStorage.ThemeStorage);
      }
    } catch (menssage) {
      console.log(`Erro ao trocar o tema: ${menssage}`);
    }
  };

  return (
    <li>
      <Button
        onPress={toggleTheme}
        variant="bordered"
        size="sm"
        className="dark:border-white border-[#121212] fullhd:w-14 fullhd:h-14 mobile:w-8 mobile:h-8 group hover:bg-[#9651AE] hover:border-none transition-colors"
        isIconOnly
        aria-label="alternar entre modo claro e escuro"
      >
        {currentState === "light" ? <MoonSvg /> : <Sun className="h-3 w-3 desktop:w-4 fullhd:h-6 fullhd:w-6 desktop:h-4" />}
      </Button>
    </li>
  );
};
