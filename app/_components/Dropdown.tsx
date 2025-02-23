import useToggle from "@/hooks/useToggle";
import getElementsFromChildren from "@/utils/getElementsFromChildren";
import { ReactNode, useEffect, useRef } from "react";
import Slot from "./Slot";
import { twMerge } from "tailwind-merge";

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
}

export function DropdownContent({
  children,
  className,
  onClick,
}: DropdownContentProps) {
  const DropdownItemElements = getElementsFromChildren({
    children,
    targetElement: <DropdownItem />,
  });

  return (
    <ul className={twMerge("absolute top-[100%]", className)} onClick={onClick}>
      {DropdownItemElements}
    </ul>
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

  return (
    <div className="relative" ref={dropdownRef}>
      <Slot onClick={toggleIsOpen}>{TriggerElement}</Slot>
      {isOpen && (
        <Slot className="cursor-pointer" onClick={closeDropdown}>
          {ContentElement}
        </Slot>
      )}
    </div>
  );
}
