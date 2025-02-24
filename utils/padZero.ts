/**
 * length에 맞추어 number 앞에 숫자 0을 붙힌 string을 리턴하는 함수
 */
export default function padZero(number: number, length: number) {
  return String(number).padStart(length, "0");
}
