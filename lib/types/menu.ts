export type Item = {
  label: string;
  href: string;
};

export interface MenuItem extends Item {
  subItems?: Item[];
}

export interface MenuData {
  titleItem: Item;
  menuItems: MenuItem[];
}
