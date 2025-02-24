import useToggle from "@/hooks/useToggle";
import getElementsFromChildren from "@/utils/getElementsFromChildren";
import { ReactNode, useEffect, useRef, useState } from "react";
import Slot from "./Slot";
import { twJoin, twMerge } from "tailwind-merge";

interface DropdownTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
}

export function DropdownTrigger({
  children,
  className,
  ...props
}: DropdownTriggerProps) {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}

interface DropdownContentProps {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
  "data-state"?: "open" | "closed";
  position?: "upper" | "under";
}

export function DropdownContent({
  children,
  className,
  onClick,
  "data-state": dataState,
  position = "under",
}: DropdownContentProps) {
  const DropdownItemElements = getElementsFromChildren({
    children,
    targetElement: <DropdownItem />,
  });

  return (
    <div
      className={twJoin(
        "absolute overflow-hidden",
        position === "under" && "top-[100%]",
        position === "upper" && "bottom-[100%]",
      )}
    >
      <ul
        className={twMerge(
          position === "under" &&
            "data-[state=closed]:animate-slide-up-out data-[state=open]:animate-slide-down-in",
          position === "upper" &&
            "data-[state=closed]:animate-slide-down-out data-[state=open]:animate-slide-up-in",
          className,
        )}
        onClick={onClick}
        data-state={dataState}
      >
        {DropdownItemElements}
      </ul>
    </div>
  );
}

interface DropdownItemProps {
  children?: ReactNode;
  className?: string;
}

export function DropdownItem({ children, className }: DropdownItemProps) {
  return <li className={className}>{children}</li>;
}

interface DropdownProps {
  children: ReactNode;
}

export function Dropdown({ children }: DropdownProps) {
  const [isOpen, toggleIsOpen, setIsOpen] = useToggle(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const TriggerElement = getElementsFromChildren({
    children,
    targetElement: <DropdownTrigger />,
  })[0];

  const ContentElement = getElementsFromChildren({
    children,
    targetElement: <DropdownContent />,
  })[0];

  const closeDropdown = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!dropdownRef?.current) return;

      if (!dropdownRef?.current.contains(e.target as HTMLElement)) {
        closeDropdown();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // close animation을 위한 타이머 설정
  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      return;
    }

    const timer = setTimeout(() => setIsAnimating(false), 150);
    return () => {
      clearTimeout(timer);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <Slot onClick={toggleIsOpen}>{TriggerElement}</Slot>
      {(isOpen || (!isOpen && isAnimating)) && (
        <Slot
          className="cursor-pointer"
          onClick={closeDropdown}
          data-state={isOpen ? "open" : "closed"}
        >
          {ContentElement}
        </Slot>
      )}
    </div>
  );
}
