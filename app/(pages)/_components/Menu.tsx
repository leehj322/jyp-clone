"use client";

import useToggle from "@/hooks/useToggle";
import { twMerge, twJoin } from "tailwind-merge";

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
      <span className="absolute top-1/2 h-[2px] w-[20px] rotate-[-45deg] rounded bg-white" />
      <span className="absolute top-1/2 h-[2px] w-[20px] rotate-[45deg] rounded bg-white" />
    </button>
  );
}

export default function Menu() {
  const [isMenuOpen, toggleMenuOpen] = useToggle(false);

  const handleMenuButtonClick = () => toggleMenuOpen();

  return (
    <>
      <HamburgerButton isOpen={isMenuOpen} onClick={handleMenuButtonClick} />
      {isMenuOpen && (
        <>
          <menu className="fixed inset-0 -z-10 hidden bg-[#0f0e0e] lg:block"></menu>
          <menu className="fixed inset-0 z-10 block bg-[#0f0e0e] lg:hidden">
            <MobileMenuCloseButton onClick={handleMenuButtonClick} />
          </menu>
        </>
      )}
    </>
  );
}
