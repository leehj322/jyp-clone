import Link from "next/link";
import FamilyDropdown from "./FamilyDropdown";

export default function Footer() {
  return (
    <footer className="absolute bottom-0 left-0 right-0 hidden items-center justify-between px-[62px] py-6 text-[12px] text-white lg:flex">
      <Link href="/" className="flex gap-4">
        <span className="font-bold">IRDATA</span>
        <span className="font-light">2024.11.15</span>
        <span className="font-medium">24년 3분기 실적발표 노트</span>
      </Link>
      <div className="flex items-center gap-6">
        <Link href="/" className="font-light">
          개인정보처리방침
        </Link>
        <FamilyDropdown />
        <div className="font-normal">@ JYP ENTERTAINMENT Corp.</div>
      </div>
    </footer>
  );
}
