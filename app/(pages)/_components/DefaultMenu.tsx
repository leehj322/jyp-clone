import Link from "next/link";
import { ReactNode } from "react";
import { HorizontalLine as Line } from "@/app/_components/Line";
import { Item, MenuData, MenuItem } from "@/lib/types/menu";

interface MenuContainerProps {
  children: ReactNode;
}

function MenuContainer({ children }: MenuContainerProps) {
  return (
    <div className="relative mx-auto flex h-[482px] w-full gap-[26px] text-white lg:w-[900px] xl:w-[1046px] 2xl:w-[1280px]">
      {children}
    </div>
  );
}

interface MenuGroupProps {
  titleItem: Item;
  menuItems: MenuItem[];
  lastGroup?: boolean;
}

function MenuGroup({
  titleItem,
  menuItems,
  lastGroup = false,
}: MenuGroupProps) {
  return (
    <div className={lastGroup ? "pr-[26px]" : "grow"}>
      <h3 className="flex items-center gap-[26px]">
        <Link className="text-[22px] font-bold" href={titleItem.href}>
          {titleItem.label}
        </Link>
        {!lastGroup && <Line />}
      </h3>
      <ul className="mt-5 flex flex-col gap-3 text-[14px] font-normal text-opacity-80">
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
    <ul className="text-submenuText mt-2 flex flex-col gap-1 pl-1 text-[14px]">
      {subItems.map((subItem) => (
        <li key={subItem.label}>
          <span>- </span>
          <Link href={subItem.href}>{subItem.label}</Link>
        </li>
      ))}
    </ul>
  );
}

function MenuFooter() {
  return (
    <footer className="absolute bottom-0 flex w-full items-center">
      <div className="text-[22px] font-bold">AUDITION</div>
      <Line className="mx-[26px] px-[26px] lg:w-[570px] xl:w-[700px] 2xl:w-[950px]" />
      <div className="text-[22px] font-bold">RECRUIT</div>
    </footer>
  );
}

function MenuLabel() {
  return (
    <>
      <div className="text-submenuText absolute right-[48px] rotate-90 text-[14px] text-opacity-50">
        MENU
      </div>
      <div className="text-submenuText absolute left-[48px] -rotate-90 text-[14px] text-opacity-50">
        MENU
      </div>
    </>
  );
}

interface DefaultMenuProps {
  menuDataList: MenuData[];
}

export default function DefaultMenu({ menuDataList }: DefaultMenuProps) {
  return (
    <menu className="bg-menuBg fixed inset-0 -z-10 hidden place-items-center overflow-y-auto py-24 lg:grid">
      <MenuContainer>
        {menuDataList.map((menuData, index) => (
          <MenuGroup
            key={menuData.titleItem.label}
            titleItem={menuData.titleItem}
            menuItems={menuData.menuItems}
            lastGroup={index === menuDataList.length - 1}
          />
        ))}
        <MenuFooter />
      </MenuContainer>
      <MenuLabel />
    </menu>
  );
}
