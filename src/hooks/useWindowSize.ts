import { useState, useEffect } from "react";

// Referenced from here: https://usehooks.com/useWindowSize/

// Define general type for useWindowSize hook, which includes width and height
interface Size {
  width: number | undefined;
  height: number | undefined;
}

// Hook
export function useWindowSize(): Size {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState<Size>({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Handler to call on screen orientation change
    function handleOrientationChange(e: Event) {
      // console.log(e);
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    window.screen.orientation.addEventListener("change", handleOrientationChange);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      window.screen.orientation.removeEventListener("change", handleOrientationChange);
    };
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}
