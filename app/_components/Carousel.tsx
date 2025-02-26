import getElementsFromChildren from "@/utils/getElementsFromChildren";
import padZero from "@/utils/padZero";
import Image from "next/image";
import { ReactNode, useState, MouseEvent, TouchEvent } from "react";
import { twJoin, twMerge } from "tailwind-merge";

interface CarouselBackgroundProps {
  children: ReactNode;
  className?: string;
}

export function CarouselBackground({
  children,
  className,
}: CarouselBackgroundProps) {
  return (
    <div className={twMerge("h-[100vh] w-full", className)}>{children}</div>
  );
}

interface CarouselTitleProps {
  children?: ReactNode;
  className?: string;
}

export function CarouselTitle({ children, className }: CarouselTitleProps) {
  return (
    <h2
      className={twMerge(
        "text-center text-[20px] font-bold text-white lg:text-[24px]",
        className,
      )}
    >
      {children}
    </h2>
  );
}

interface CarouselDescriptionProps {
  children?: ReactNode;
  className?: string;
}

export function CarouselDescription({
  children,
  className,
}: CarouselDescriptionProps) {
  return (
    <p
      className={twMerge(
        "text-center text-[26px] font-extrabold text-white lg:text-[28px]",
        className,
      )}
    >
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
  const [currentSlideIdx, setCurrentSlideIdx] = useState(1);
  const [currentSlideNum, setCurrentSlideNum] = useState(1);

  const [isAnimating, setIsAnimating] = useState(false);

  const [mouseStartX, setMouseStartX] = useState(0);
  const [touchLocationX, setTouchLocationX] = useState(0);

  const ItemElements = getElementsFromChildren({
    children,
    targetElement: <CarouselItem />,
  });

  const slidesCount = ItemElements.length;

  const goPrevSlide = () => {
    setIsAnimating(true);

    if (currentSlideIdx === 1) {
      setCurrentSlideNum(slidesCount);
      setCurrentSlideIdx((prev) => prev - 1); // fake slide

      // Replace with actual slide
      setTimeout(() => {
        setIsAnimating(false);
        setCurrentSlideIdx(slidesCount);
      }, 300);
    } else {
      setCurrentSlideNum((prev) => prev - 1);
      setCurrentSlideIdx((prev) => prev - 1);
    }
  };

  const goNextSlide = () => {
    setIsAnimating(true);

    if (currentSlideIdx === slidesCount) {
      setCurrentSlideNum(1);
      setCurrentSlideIdx((prev) => prev + 1); // fake slide

      // Replace with actual slide
      setTimeout(() => {
        setIsAnimating(false);
        setCurrentSlideIdx(1);
      }, 300);
    } else {
      setCurrentSlideNum((prev) => prev + 1);
      setCurrentSlideIdx((prev) => prev + 1);
    }
  };

  // on touch or swipe event, check threshold and go to next or prev slide
  const checkAndMoveSlide = (distanceX: number) => {
    const SLIDE_THRESHOLD_RATIO = 0.2;

    if (distanceX >= window.innerWidth * SLIDE_THRESHOLD_RATIO) {
      goNextSlide();
    } else if (distanceX <= -window.innerWidth * SLIDE_THRESHOLD_RATIO) {
      goPrevSlide();
    }
  };

  const handlePrevButtonClick = (e: MouseEvent) => {
    e.preventDefault();
    goPrevSlide();
  };

  const handleNextButtonClick = (e: MouseEvent) => {
    e.preventDefault();
    goNextSlide();
  };

  const handleMouseDown = (e: MouseEvent) => {
    setMouseStartX(e.pageX);
  };

  const handleMouseUp = (e: MouseEvent) => {
    const distanceX = mouseStartX - e.pageX;
    checkAndMoveSlide(distanceX);
  };

  const handleTouchStart = (e: TouchEvent) => {
    setTouchLocationX(e.changedTouches[0].pageX);
  };

  const handleTouchEnd = (e: TouchEvent) => {
    const distanceX = touchLocationX - e.changedTouches[0].pageX;
    checkAndMoveSlide(distanceX);
  };

  return (
    <section
      className={twMerge(
        "absolute h-[100vh] w-[100vw] overflow-hidden",
        className,
      )}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className={twJoin(
          "absolute flex h-full",
          isAnimating && "transition-transform duration-200 ease-in-out",
        )}
        style={{ transform: `translateX(-${currentSlideIdx * 100}vw)` }}
      >
        {ItemElements[slidesCount - 1]}
        {ItemElements}
        {ItemElements[0]}
      </div>
      <CarouselNavigation
        currentSlide={currentSlideNum}
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
