import { twMerge } from "tailwind-merge";

interface HorizontalLineProps {
  className?: string;
}

export function HorizontalLine({ className }: HorizontalLineProps) {
  return (
    <span
      className={twMerge("h-[1px] w-full bg-white opacity-50", className)}
    />
  );
}

export function VerticalLine() {
  return <span className="h-[10px] w-[1px] bg-white opacity-50" />;
}
