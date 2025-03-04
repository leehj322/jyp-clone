"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
} from "@/app/_components/Dropdown";

export default function MobileFamilyDropdown() {
  return (
    <Dropdown>
      <DropdownTrigger className="bg-menuBg relative flex h-[33px] w-[188px] items-center justify-center text-[13px] font-medium text-white">
        FAMILY
        <Image
          src="/icons/fi-sr-caret-down.svg"
          alt="dropdown arrow"
          width={12}
          height={12}
          className="absolute right-[20px]"
        />
      </DropdownTrigger>
      <DropdownContent
        position="upper"
        className="bg-menuBg flex w-[188px] flex-col items-center justify-center gap-2 pb-1 text-[13px] font-light text-white"
      >
        <DropdownItem>
          <Link className="border-blue-400 pb-[2px] hover:border-b-2" href="#">
            JYP AUDITION
          </Link>
        </DropdownItem>
        <DropdownItem>
          <Link className="border-blue-400 pb-[2px] hover:border-b-2" href="#">
            JYP RECRUIT
          </Link>
        </DropdownItem>
        <DropdownItem>
          <Link className="border-blue-400 pb-[2px] hover:border-b-2" href="#">
            JYP FANS
          </Link>
        </DropdownItem>
        <DropdownItem>
          <Link className="border-blue-400 pb-[2px] hover:border-b-2" href="#">
            JYP EDM
          </Link>
        </DropdownItem>
        <DropdownItem>
          <Link className="border-blue-400 pb-[2px] hover:border-b-2" href="#">
            JYP PUBLISHING
          </Link>
        </DropdownItem>
        <DropdownItem>
          <Link className="border-blue-400 pb-[2px] hover:border-b-2" href="#">
            JYP SHOP
          </Link>
        </DropdownItem>
        <DropdownItem>
          <Link className="border-blue-400 pb-[2px] hover:border-b-2" href="#">
            JYP THREE SIXTY
          </Link>
        </DropdownItem>
        <DropdownItem>
          <Link className="border-blue-400 pb-[2px] hover:border-b-2" href="#">
            JYP PARTNERS
          </Link>
        </DropdownItem>
      </DropdownContent>
    </Dropdown>
  );
}
