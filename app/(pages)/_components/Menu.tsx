"use client";

import useToggle from "@/hooks/useToggle";
import { twMerge, twJoin } from "tailwind-merge";
import DefaultMenu from "./DefaultMenu";
import MobileMenu from "./MobileMenu";
import { MenuData } from "@/lib/types/menu";

interface HamburgerButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  isOpen: boolean;
}

function HamburgerButton({
  isOpen,
  className,
  ...props
}: HamburgerButtonProps) {
  return (
    <>
      <button
        className={twMerge(
          "relative hidden h-[25px] w-[25px] flex-col items-center justify-center gap-1 lg:flex",
          className,
        )}
        {...props}
      >
        <span
          className={twJoin(
            "h-[2px] w-[25px] rounded bg-white transition-transform duration-500",
            isOpen && "absolute top-1/2 rotate-[-45deg]",
          )}
        />
        <span
          className={twJoin(
            "h-[2px] w-[25px] rounded bg-white transition-opacity duration-300",
            isOpen && "opacity-0",
          )}
        />
        <span
          className={twJoin(
            "h-[2px] w-[25px] rounded bg-white transition-transform duration-500",
            isOpen && "absolute top-1/2 rotate-[45deg]",
          )}
        />
      </button>
      <button
        className={twMerge(
          "flex h-[20px] w-[20px] flex-col items-center justify-center gap-1 lg:hidden",
          className,
        )}
        {...props}
      >
        <span className="h-[2px] w-[20px] rounded bg-white transition-opacity" />
        <span className="h-[2px] w-[20px] rounded bg-white transition-opacity" />
        <span className="h-[2px] w-[20px] rounded bg-white transition-opacity" />
      </button>
    </>
  );
}

function MobileMenuCloseButton({
  className,
  ...props
}: React.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={twMerge("relative h-[20px] w-[20px]", className)}
      {...props}
    >
      <span className="absolute left-1/2 top-1/2 h-[2px] w-[20px] -translate-x-1/2 -translate-y-1/2 rotate-[-45deg] rounded bg-white" />
      <span className="absolute left-1/2 top-1/2 h-[2px] w-[20px] -translate-x-1/2 -translate-y-1/2 rotate-[45deg] rounded bg-white" />
    </button>
  );
}

const MENU_DATA_LIST = [
  {
    titleItem: { label: "JYP", href: "#" },
    menuItems: [
      { label: "ABOUT JYP", href: "#" },
      { label: "HISTORY", href: "#" },
      { label: "NOTICE", href: "#" },
      { label: "CONTACT", href: "#" },
    ],
  },
  {
    titleItem: { label: "ARTIST", href: "#" },
    menuItems: [
      { label: "ARTIST", href: "#" },
      { label: "ALBUM", href: "#" },
      { label: "VIDEO", href: "#" },
    ],
  },
  {
    titleItem: { label: "SUSTAINABILITY", href: "#" },
    menuItems: [
      { label: "ESG STRATEGY", href: "#" },
      {
        label: "ESG FACTBOOK",
        href: "#",
        subItems: [
          { label: "ENVIRONMENTAL", href: "#" },
          { label: "SOCIAL", href: "#" },
          { label: "GOVERNANCE", href: "#" },
        ],
      },
      { label: "ESG REPORTING", href: "#" },
    ],
  },
  {
    titleItem: { label: "IR", href: "#" },
    menuItems: [
      {
        label: "STOCK INFO.",
        href: "#",
        subItems: [
          { label: "STOCK INFORMATION", href: "#" },
          { label: "DIVIDENES STATUS", href: "#" },
        ],
      },
      { label: "FINANCIAL INFO.", href: "#" },
      { label: "PUBLIC DISCLOSURE INFO.", href: "#" },
      { label: "DATA & MATERIALS", href: "#" },
      { label: "NEWS", href: "#" },
      { label: "IR INQUIRY", href: "#" },
    ],
  },
];

export default function Menu() {
  const [isMenuOpen, toggleMenuOpen] = useToggle(false);

  const handleMenuButtonClick = () => toggleMenuOpen();

  return (
    <>
      <HamburgerButton isOpen={isMenuOpen} onClick={handleMenuButtonClick} />
      {isMenuOpen && (
        <>
          <DefaultMenu menuDataList={MENU_DATA_LIST as MenuData[]} />
          <MobileMenu
            closeButton={
              <MobileMenuCloseButton onClick={handleMenuButtonClick} />
            }
            menuDataList={MENU_DATA_LIST as MenuData[]}
          />
        </>
      )}
    </>
  );
}
