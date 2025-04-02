import { SVGProps } from 'react';

interface MediaKitIconProps extends SVGProps<SVGSVGElement> {
  isColored?: boolean;
}

export default function MediaKitIcon({
  isColored = false,
  ...props
}: MediaKitIconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20.52 6.64998V21.05C20.52 21.63 20.05 22.1 19.47 22.1H9.28999C8.70999 22.1 8.23999 21.63 8.23999 21.05V20.16L17.34 16.72C17.7 16.58 17.94 16.24 17.94 15.85V5.59998H19.47C20.05 5.59998 20.52 6.06998 20.52 6.64998Z"
        fill={isColored ? 'url(#paint0_linear_12253_614)' : '#D3D3D3'}
      />
      <path
        d="M17.94 5.59998V15.86C17.94 16.25 17.7 16.59 17.34 16.73L8.23999 20.17V6.64998C8.23999 6.06998 8.70999 5.59998 9.28999 5.59998H17.94Z"
        fill={isColored ? 'url(#paint1_linear_12253_614)' : '#D3D3D3'}
      />
      <path
        d="M17.94 2.92999V5.59999H9.28998C8.70998 5.59999 8.23998 6.06999 8.23998 6.64999V20.17L4.73998 21.49C4.12998 21.72 3.47998 21.27 3.47998 20.62V2.91999C3.47998 2.40999 3.89998 1.98999 4.40998 1.98999H17.01C17.52 1.99999 17.94 2.41999 17.94 2.92999Z"
        fill={isColored ? 'url(#paint2_linear_12253_614)' : '#D3D3D3'}
      />
      {isColored && (
        <defs>
          <linearGradient
            id="paint0_linear_12253_614"
            x1="8.24196"
            y1="13.8522"
            x2="20.518"
            y2="13.8522"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FCFF1C" />
            <stop offset="1" stopColor="#FF9D0A" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_12253_614"
            x1="8.24196"
            y1="12.8857"
            x2="17.937"
            y2="12.8857"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFDDCD" />
            <stop offset="1" stopColor="#FF5403" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_12253_614"
            x1="3.48199"
            y1="11.7778"
            x2="17.937"
            y2="11.7778"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E7CFFF" />
            <stop offset="1" stopColor="#870FFF" />
          </linearGradient>
        </defs>
      )}
    </svg>
  );
}
