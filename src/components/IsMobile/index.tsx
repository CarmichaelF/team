// make a react component that only renders when it's on mobile
// use const isMobile = useMediaQuery({
//     query: "(max-width: 768px)",
//   });
import { useMediaQuery } from "react-responsive";
import { ReactElement, PropsWithChildren, useEffect, useState } from "react";

interface IsMobileProps {
  mobile: ReactElement;
  desktop: ReactElement;
}

export default function IsMobile({ mobile, desktop }: IsMobileProps) {
  //only render the component after window is defined
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return isMounted && isMobile ? mobile : desktop;
}
