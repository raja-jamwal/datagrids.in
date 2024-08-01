import { useLayoutEffect, useState } from "react";

export const useMinDimension = () => {
  const [minDimension, setMinDimension] = useState<number>(0);

  useLayoutEffect(() => {
    const updateMinDimension = () => {
      const maxDim = Math.min(window.innerWidth, window.innerHeight);
      setMinDimension(maxDim);
    };

    updateMinDimension();
    window.addEventListener("resize", updateMinDimension);

    return () => window.removeEventListener("resize", updateMinDimension);
  }, []);

  return minDimension;
};
