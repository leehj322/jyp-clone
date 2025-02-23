import { Children, ReactNode, ReactElement, isValidElement } from "react";

interface Props {
  children: ReactNode;
  targetElement: ReactElement;
}

/**
 * Children에서 targetElement와 같은 type의 element를 골라내어주는 함수
 * (ex. targetElement가 <DropdownTrigger />인 경우 DropdownTrigger만 골라내어 []로 return)
 */
export default function getElementsFromChildren({
  children,
  targetElement,
}: Props) {
  const childrenArray = Children.toArray(children);
  const returnElements = childrenArray.filter(
    (child) => isValidElement(child) && child.type === targetElement.type,
  );

  return returnElements;
}
