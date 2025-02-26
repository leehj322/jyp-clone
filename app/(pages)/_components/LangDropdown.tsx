"use client";

import Image from "next/image";
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
} from "@/app/_components/Dropdown";

export default function LangDropdown() {
  return (
    <Dropdown>
      <DropdownTrigger className="flex items-center gap-2 text-[14px] font-medium text-white">
        KO
        <span>
          <Image
            src="/icons/fi-sr-caret-down.svg"
            alt="dropdown arrow"
            width={12}
            height={12}
          />
        </span>
      </DropdownTrigger>
      <DropdownContent className="flex flex-col gap-2 pt-2 text-[14px] font-medium text-white">
        <DropdownItem>EN</DropdownItem>
        <DropdownItem>CH</DropdownItem>
        <DropdownItem>JP</DropdownItem>
        <DropdownItem>ES</DropdownItem>
      </DropdownContent>
    </Dropdown>
  );
}
