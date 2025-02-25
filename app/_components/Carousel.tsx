import getElementsFromChildren from "@/utils/getElementsFromChildren";
import padZero from "@/utils/padZero";
import Image from "next/image";
import { ReactNode, useState, MouseEvent } from "react";
import { twMerge } from "tailwind-merge";

interface CarouselBackgroundProps {
  children: ReactNode;
  className?: string;
}

export function CarouselBackground({
  children,
  className,
}: CarouselBackgroundProps) {
  return (
    <div className={twMerge("absolute h-[100vh] w-full", className)}>
      {children}
    </div>
  );
}

interface CarouselTitleProps {
  children?: ReactNode;
  className?: string;
}

export function CarouselTitle({ children }: CarouselTitleProps) {
  return (
    <h2 className="text-center text-[20px] font-bold text-white lg:text-[24px]">
      {children}
    </h2>
  );
}

interface CarouselDescriptionProps {
  children?: ReactNode;
  className?: string;
}

export function CarouselDescription({ children }: CarouselDescriptionProps) {
  return (
    <p className="text-center text-[26px] font-extrabold text-white lg:text-[28px]">
      {children}
    </p>
  );
}

interface CarouselCaptionProps {
  children?: ReactNode;
  className?: string;
}

export function CarouselCaption({ children, className }: CarouselCaptionProps) {
  return (
    <>
      <figcaption
        className={twMerge(
          "carousel-caption absolute bottom-0 left-1/2 mb-20 -translate-x-1/2",
          className,
        )}
      >
        {children}
      </figcaption>
      <div className="absolute bottom-0 left-1/2 h-16 w-[2px] -translate-x-1/2 bg-white" />
    </>
  );
}

interface CarouselItemProps {
  children?: ReactNode;
}

export function CarouselItem({ children }: CarouselItemProps) {
  return (
    <article className="carousel-item relative h-full w-[100vw] flex-shrink-0">
      {children}
    </article>
  );
}

interface CarouselProps {
  children: ReactNode;
  className?: string;
}

export function Carousel({ children, className }: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(1);

  const ItemElements = getElementsFromChildren({
    children,
    targetElement: <CarouselItem />,
  });

  const slidesCount = ItemElements.length;

  const handlePrevButtonClick = (e: MouseEvent) => {
    e.preventDefault();
    if (currentSlide === 1) return;
    setCurrentSlide((prev) => prev - 1);
  };

  const handleNextButtonClick = (e: MouseEvent) => {
    e.preventDefault();
    if (currentSlide === slidesCount) return;
    setCurrentSlide((prev) => prev + 1);
  };

  return (
    <section
      className={twMerge(
        "absolute h-[100vh] w-[100vw] overflow-hidden",
        className,
      )}
    >
      <div
        className="absolute flex h-full"
        style={{ transform: `translateX(-${(currentSlide - 1) * 100}vw)` }}
      >
        {ItemElements}
      </div>
      <CarouselNavigation
        currentSlide={currentSlide}
        slidesCount={slidesCount}
        onPrevButtonClick={handlePrevButtonClick}
        onNextButtonClick={handleNextButtonClick}
      />
    </section>
  );
}

interface CarouselNavigationProps {
  currentSlide: number;
  slidesCount: number;
  onPrevButtonClick: (e: MouseEvent) => void;
  onNextButtonClick: (e: MouseEvent) => void;
}

function CarouselNavigation({
  currentSlide,
  slidesCount,
  onPrevButtonClick,
  onNextButtonClick,
}: CarouselNavigationProps) {
  const paddedCurrentSlideNumber = padZero(currentSlide, 2);
  const paddedSlidesCount = padZero(slidesCount, 2);

  return (
    <>
      <div className="wrapper absolute h-full w-full">
        <button
          className="carousel-button-prev absolute bottom-0 left-0 top-0 hidden w-[20%] lg:block"
          onClick={onPrevButtonClick}
        >
          <div className="carousel-pagination absolute left-10 top-[45%] hidden gap-2 text-white lg:flex">
            <Image
              src="/icons/fi-sr-caret-left.svg"
              alt="carousel prev arrow"
              width={16}
              height={16}
            />
            <div className="text-[33px]">
              {paddedCurrentSlideNumber}
              <span className="mx-1">/</span>
              <span className="text-[21px]">{paddedSlidesCount}</span>
            </div>
          </div>
        </button>
        <button
          className="carousel-button-next absolute bottom-0 right-0 top-0 hidden w-[20%] lg:block"
          onClick={onNextButtonClick}
        >
          <div className="carousel-navigation absolute right-10 top-[45%] hidden gap-2 text-white lg:flex">
            <div className="text-[14px] font-normal text-white">NEXT</div>
            <Image
              src="/icons/fi-sr-caret-right.svg"
              alt="carousel next arrow"
              width={16}
              height={16}
            />
          </div>
        </button>
        <div className="carousel-mobile-pagination px-auto absolute bottom-0 flex h-16 w-full items-center justify-center gap-8 text-[18px] font-light text-white lg:hidden">
          <span>{paddedCurrentSlideNumber}</span>
          <span>{paddedSlidesCount}</span>
        </div>
      </div>
    </>
  );
}
