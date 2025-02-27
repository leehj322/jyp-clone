import Image from "next/image";
import LangDropdown from "./LangDropdown";
import Menu from "./Menu";

export default function Header() {
  return (
    <header className="absolute left-0 right-0 top-0 z-10 flex items-center justify-between px-4 py-5 lg:px-[62px] lg:py-6">
      <Image
        src="/images/JYP_logotype_with_slogan_white.png"
        alt="logo"
        className="hidden lg:block"
        width={100}
        height={36}
      />
      <Image
        src="/images/JYP_logotype_with_slogan_white.png"
        alt="mobile logo"
        className="block lg:hidden"
        width={70}
        height={24}
      />
      <div className="flex items-center gap-8">
        <ul className="hidden items-center gap-8 lg:flex">
          <li>
            <Image
              src="/sns/youtube-icon.svg"
              alt="youtube"
              width={25}
              height={25}
            />
          </li>
          <li>
            <Image
              src="/sns/instagram-icon.svg"
              alt="instagram"
              width={20}
              height={20}
            />
          </li>
          <li>
            <Image src="/sns/twitter-icon.svg" alt="x" width={20} height={20} />
          </li>
          <li>
            <Image
              src="/sns/facebook-icon.svg"
              alt="facebook"
              width={20}
              height={20}
            />
          </li>
        </ul>
        <div className="dropdown-wrapper hidden lg:block">
          <LangDropdown />
        </div>
        <Menu />
      </div>
    </header>
  );
}
