import './gradient-bg.styles.css';

import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<unknown>;

export const AppearanceBackground = ({ children }: Props) => {
  return (
    <div id="AppearanceBackground" className="relative flex flex-col m-0 p-0 w-screen h-svh">
      <div className="gradient-bg absolute left-0 top-0 w-screen h-svh">
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div className="gradients-container">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
          <div className="g4"></div>
          <div className="g5"></div>
          <div className="interactive"></div>
        </div>
      </div>

      <div className="absolute left-0 top-0 w-screen h-svh content base-app-filter-blur">
        {children}
      </div>
    </div>
  );
};
