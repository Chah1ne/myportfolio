"use client";

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const AnimationLottie = ({ animationPath, width }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsClient(true);
    }
  }, []);

  if (!isClient) {
    return null; // Return null on the server side
  }

  return (
    <Lottie
      animationData={animationPath}
      loop={true}
      autoplay={true}
      style={{ width: width || '95%' }}
    />
  );
};

export default AnimationLottie;
