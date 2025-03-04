import Link from "next/link";
import { ReactNode } from "react";
import { VerticalLine, HorizontalLine } from "@/app/_components/Line";
import Image from "next/image";
import MobileFamilyDropdown from "./MobileFamilyDropdown";
import { Item, MenuData, MenuItem } from "@/lib/types/menu";

interface MobileMenuHeaderProps {
  closeButton: ReactNode;
}

function MobileMenuHeader({ closeButton }: MobileMenuHeaderProps) {
  return (
    <header className="mx-4 mt-5 flex items-center justify-between">
      <ul className="flex items-center gap-3 text-[12px] font-normal text-white">
        <li>
          <button className="border-b-2 border-blue-400">KO</button>
        </li>
        <VerticalLine />
        <li>
          <button>EN</button>
        </li>
        <VerticalLine />
        <li>
          <button>CH</button>
        </li>
        <VerticalLine />
        <li>
          <button>JP</button>
        </li>
        <VerticalLine />
        <li>
          <button>ES</button>
        </li>
      </ul>
      {closeButton}
    </header>
  );
}

function MobileMenuFooter() {
  return (
    <footer className="h-[166px] bg-[#242426] px-[15px] pb-[30px] pt-[14px]">
      <ul className="flex items-center justify-center gap-5">
        <li className="bg-menuBg flex h-[32px] w-[32px] items-center justify-center rounded-full">
          <Image
            src="/sns/youtube-icon.svg"
            alt="youtube"
            width={18}
            height={18}
            className="opacity-50"
          />
        </li>
        <li className="bg-menuBg flex h-[32px] w-[32px] items-center justify-center rounded-full">
          <Image
            src="/sns/instagram-icon.svg"
            alt="instagram"
            width={16}
            height={16}
            className="opacity-50"
          />
        </li>
        <li className="bg-menuBg flex h-[32px] w-[32px] items-center justify-center rounded-full">
          <Image
            src="/sns/twitter-icon.svg"
            alt="x"
            width={15}
            height={15}
            className="opacity-50"
          />
        </li>
        <li className="bg-menuBg flex h-[32px] w-[32px] items-center justify-center rounded-full">
          <Image
            src="/sns/facebook-icon.svg"
            alt="facebook"
            width={16}
            height={16}
            className="opacity-50"
          />
        </li>
      </ul>
      <div className="my-5 flex items-center justify-center">
        <MobileFamilyDropdown />
      </div>
      <div className="text-footerText gap-6 text-center text-[11px]">
        <Link href="#" className="underline">
          개인정보처리방침
        </Link>
        <span className="ml-[15px]">@ JYP ENTERTAINMENT Corp.</span>
      </div>
    </footer>
  );
}

interface MenuGroupProps {
  titleItem: Item;
  menuItems: MenuItem[];
}

function MenuGroup({ titleItem, menuItems }: MenuGroupProps) {
  return (
    <div className="mb-6">
      <h3 className="mb-3 flex items-center gap-[24px]">
        <Link
          className="text-[18px] font-bold text-white"
          href={titleItem.href}
        >
          {titleItem.label}
        </Link>
        <HorizontalLine />
      </h3>
      <ul className="text-menuText flex flex-col gap-3 text-[14px] font-normal">
        {menuItems.map((item) => (
          <li key={item.label}>
            <Link href={item.href}>{item.label}</Link>
            {item.subItems && <SubMenu subItems={item.subItems} />}
          </li>
        ))}
      </ul>
    </div>
  );
}

interface SubMenuProps {
  subItems: Item[];
}

function SubMenu({ subItems }: SubMenuProps) {
  return (
    <ul className="text-submenuText mt-2 flex flex-col gap-1.5 pl-1 text-[14px] text-opacity-80">
      {subItems.map((subItem) => (
        <li key={subItem.label}>
          <span>- </span>
          <Link href={subItem.href}>{subItem.label}</Link>
        </li>
      ))}
    </ul>
  );
}

interface MobileMenuProps extends MobileMenuHeaderProps {
  menuDataList: MenuData[];
}

export default function MobileMenu({
  closeButton,
  menuDataList,
}: MobileMenuProps) {
  return (
    <menu className="bg-menuBg fixed inset-0 z-10 block overflow-y-auto lg:hidden">
      <MobileMenuHeader closeButton={closeButton} />
      <section className="pb-[54px] pl-[15px] pt-[70px]">
        {menuDataList.map((menuData) => (
          <MenuGroup
            key={menuData.titleItem.label}
            titleItem={menuData.titleItem}
            menuItems={menuData.menuItems}
          />
        ))}
        <div className="mt-[56px] text-[18px] font-bold text-white">
          <div className="flex items-center">
            <Link className="w-[150px] flex-shrink-0" href="#">
              AUDITION
            </Link>
            <HorizontalLine />
          </div>
          <div className="mt-5 flex items-center">
            <Link className="w-[150px] flex-shrink-0" href="#">
              RECRUIT
            </Link>
            <HorizontalLine />
          </div>
        </div>
      </section>
      <MobileMenuFooter />
    </menu>
  );
}
