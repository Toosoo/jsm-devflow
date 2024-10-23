"use client";
import React, { useEffect, useState, useContext, createContext } from "react";

interface ThemeContextType {
  animation: string;
  setAnimation: (animation: string) => void;
}

const AnimationContext = createContext<ThemeContextType | undefined>(undefined);

const AnimationProvider = ({ children }: { children: React.ReactNode }) => {
  const [animation, setAnimation] = useState("");

  const handleAnimation = () => {
    console.log("animation");
  };

  useEffect(() => {
    handleAnimation();
  }, [animation]);

  return (
    <AnimationContext.Provider value={{ animation, setAnimation }}>
      <div
        id="intro"
        className="background-black fixed inset-0 !z-[10000] !h-screen !w-full !bg-black"
      ></div>
      <div className="-z-50">{children}</div>
    </AnimationContext.Provider>
  );
};

export default AnimationProvider;

export function useTheme() {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
