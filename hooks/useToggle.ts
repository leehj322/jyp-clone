import { useState, SetStateAction } from "react";

/**
 * boolean state를 toggle 하는 함수를 포함한 값을 리턴하는 커스텀 훅
 * @return [state, toggleState, setState];
 */
export default function useToggle(
  initialValue = false,
): [boolean, () => void, React.Dispatch<SetStateAction<boolean>>] {
  const [state, setState] = useState(initialValue);

  const toggleState = () => setState((prevState) => !prevState);

  return [state, toggleState, setState];
}
