import { useEffect, useState } from "react";
import { Platform } from 'react-native'

interface Breakpoints {
  xSmall: MediaQueryList["media"];
  small: MediaQueryList["media"];
  medium: MediaQueryList["media"];
  large: MediaQueryList["media"];
  xLarge: MediaQueryList["media"];
}

type Breakpoint = keyof Breakpoints;

const breakpoints: Breakpoints = {
  xSmall: "(min-width: 0px) and (max-width: 374px)",
  small: "(min-width: 375px) and (max-width: 767px)",
  medium: "(min-width: 768px) and (max-width: 1023px)",
  large: "(min-width: 1024px) and (max-width: 1279px)",
  xLarge: "(min-width: 1280px)"
};

export default function useBreakpoint(breakpoint: Breakpoint): boolean {
  if (Platform.OS !== 'web') return

  const mediaQuery = breakpoints[breakpoint];
  const [isMatch, setIsMatch] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(mediaQuery);
    if (media.matches !== isMatch) {
      setIsMatch(media.matches);
    }
    const listener = () => {
      setIsMatch(media.matches);
    };

    media.addListener(listener);

    return () => {
      media.removeListener(listener);
    };
  }, [isMatch, mediaQuery]);

  return isMatch;
}
