import { LotiesProps } from "../types";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';  

export const MyLotties = ({ src, width, height }: LotiesProps) => (

  <DotLottieReact
      width={width} height={height}
      src= {`/lotties/${src}`}
      loop
      autoplay
    />
);
