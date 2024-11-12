import { useCallback, useEffect, useRef } from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

export default function () {
  const { width, height } = useWindowSize();
  return (
    <Confetti
      width={width}
      height={height}
      className="overflow-x-hidden w-full"
    />
  );
}
