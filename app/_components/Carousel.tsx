import getElementsFromChildren from "@/utils/getElementsFromChildren";
import { ReactNode } from "react";
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
  const ItemElements = getElementsFromChildren({
    children,
    targetElement: <CarouselItem />,
  });

  return (
    <section
      className={twMerge(
        "absolute h-[100vh] w-[100vw] overflow-hidden",
        className,
      )}
    >
      <div className="absolute flex h-full">{ItemElements}</div>
    </section>
  );
}
