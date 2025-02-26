"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
} from "@/app/_components/Dropdown";

export default function FamilyDropdown() {
  return (
    <Dropdown>
      <DropdownTrigger className="flex items-center gap-2 text-white">
        FAMILY
        <span>
          <Image
            src="/icons/fi-sr-caret-down.svg"
            alt="dropdown arrow"
            width={12}
            height={12}
          />
        </span>
      </DropdownTrigger>
      <DropdownContent
        position="upper"
        className="flex w-[130px] flex-col gap-2 pb-2"
      >
        <DropdownItem>
          <Link href="/">JYP AUDITION</Link>
        </DropdownItem>
        <DropdownItem>
          <Link href="/">JYP RECRUIT</Link>
        </DropdownItem>
        <DropdownItem>
          <Link href="/">JYP FANS</Link>
        </DropdownItem>
        <DropdownItem>
          <Link href="/">JYP EDM</Link>
        </DropdownItem>
        <DropdownItem>
          <Link href="/">JYP PUBLISHING</Link>
        </DropdownItem>
        <DropdownItem>
          <Link href="/">JYP SHOP</Link>
        </DropdownItem>
        <DropdownItem>
          <Link href="/">JYP THREE SIXTY</Link>
        </DropdownItem>
        <DropdownItem>
          <Link href="/">JYP PARTNERS</Link>
        </DropdownItem>
      </DropdownContent>
    </Dropdown>
  );
}
