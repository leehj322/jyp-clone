import { cloneElement, isValidElement, ReactElement, ReactNode } from "react";

interface SlotProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

/**
 * Slot 내부의 유일한 children react element에 Slot의 props를 전달하여
 * 하나의 react element로 보이도록 하는 컴포넌트
 */
export default function Slot({ children, ...props }: SlotProps) {
  if (isValidElement(children)) {
    const childProps = (children as ReactElement).props || {};

    return cloneElement(children, {
      ...props,
      ...childProps,
    });
  }

  console.warn(
    "Slot은 children으로 오직 하나의 react element를 가져야 합니다.",
  );

  return null;
}
