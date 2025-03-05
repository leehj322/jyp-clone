import Header from "./_components/Header";
import Footer from "./_components/Footer";
import MainCarousel from "./_components/MainCarousel";

export const metadata = {
  title: "JYP Entertainment",
  description: "JYP 엔터테인먼트 클론",
};

export default function Home() {
  return (
    <>
      <MainCarousel />
      <Header />
      <Footer />
    </>
  );
}
