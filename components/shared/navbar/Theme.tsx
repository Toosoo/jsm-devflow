"use client";
import React from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { useTheme } from "@/context/ThemeProvider";
import Image from "next/image";
import { themes } from "@/constants";
import { cn } from "@/lib/utils";
const Theme = () => {
  const { mode, setMode } = useTheme();
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>
          {mode === "light" ? (
            <Image
              src="/assets/icons/sun.svg"
              width={20}
              height={20}
              alt="light"
              className="active-theme"
            />
          ) : (
            <Image
              src="/assets/icons/moon.svg"
              width={20}
              height={20}
              alt="light"
              className="active-theme"
            />
          )}
        </MenubarTrigger>
        <MenubarContent className="absolute -right-12 mt-3 min-w-[120px] rounded border bg-white py-2 dark:border-dark-400 dark:bg-dark-300">
          {themes.map((theme) => (
            <MenubarItem
              key={theme.value}
              onClick={() => {
                setMode(theme.value);
                if (theme.value !== "system") {
                  localStorage.theme = theme.value;
                } else {
                  localStorage.removeItem("theme");
                }
              }}
              className="flex gap-5 "
            >
              <Image
                src={theme.icon}
                width={20}
                height={20}
                alt={theme.label}
                className={cn(mode === theme.value && "active-theme")}
              />
              <p
                className={cn(
                  "body-semibold text-light-500",
                  mode === theme.value ? "text-primary-500" : "text-dark100-light900"
                )}
              >
                {theme.label}
              </p>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default Theme;
