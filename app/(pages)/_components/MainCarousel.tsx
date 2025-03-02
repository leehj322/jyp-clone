"use client";

import {
  Carousel,
  CarouselItem,
  CarouselCaption,
  CarouselDescription,
  CarouselTitle,
  CarouselBackground,
} from "@/app/_components/Carousel";

declare global {
  interface Window {
    YT: {
      Player: new (id: string, options: object) => null;
    };
    onYouTubeIframeAPIReady: { (): void } | null;
  }
}

const CAROUSEL_ITEM_LIST = [
  {
    title: "KickFlip",
    description: "Mama Said (뭐가 되려고?)",
    videoId: "JY0UTOgh8M8",
  },
  { title: "30", description: "Check Pattern", videoId: "3qcX_kz84bo" },
  { title: "ITZY", description: "Imaginary Friend", videoId: "NrUlydECU-8" },
  { title: "ITZY", description: "GOLD", videoId: "eMk_0svqsnI" },
  {
    title: "LIVE and FALL",
    description: "Night before the end",
    videoId: "B93haFHobpg",
  },
  { title: "TZUYU", description: "Run Away", videoId: "IIrCrGAX03Y" },
  { title: "DAY6", description: "녹아내려요", videoId: "yss4rIrHl6o" },
  { title: "JUN. K", description: "Paint this love", videoId: "tT0dZs_IGtM" },
  { title: "NMIXX", description: "별별별 (See that?)", videoId: "_Q8Jskeps9w" },
  { title: "Stray Kids", description: "Chk Chk Boom", videoId: "T17AR8cVmto" },
];

interface YouTubePlayerProps {
  videoId: string;
}

function YouTubePlayer({ videoId }: YouTubePlayerProps) {
  // max-h-none, min-w-none : 부모 size 무시
  // min-h-[101vh], min-w-[180vh] : 16:9는 유지 + 높이 모자라지 않게
  // h-[57vw], w-[101vw] : 16:9 유지 + 너비 모자라지 않게 (101vw => 조금 크게)
  return (
    <div className="relative h-full w-full overflow-hidden">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&playlist=${videoId}&loop=1&disablekb=1&controls=0&showinfo=0&rel=0`}
        title="YouTube video player"
        loading="lazy"
        className="absolute left-1/2 top-1/2 h-[57vw] max-h-none min-h-[101vh] w-[101vw] min-w-[180vh] max-w-none -translate-x-1/2 -translate-y-1/2 scale-125 border-none"
      />
    </div>
  );
}

export default function MainCarousel() {
  return (
    <Carousel>
      {CAROUSEL_ITEM_LIST.map((item) => (
        <CarouselItem key={item.videoId}>
          <CarouselBackground className="bg-black">
            <YouTubePlayer videoId={item.videoId} />
          </CarouselBackground>
          <CarouselCaption>
            <CarouselTitle>{item.title}</CarouselTitle>
            <CarouselDescription>{item.description}</CarouselDescription>
          </CarouselCaption>
        </CarouselItem>
      ))}
    </Carousel>
  );
}
