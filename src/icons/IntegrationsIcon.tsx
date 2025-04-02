import { SVGProps } from 'react';

export default function IntegrationsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="6"
        y="6"
        width="4"
        height="4"
        stroke="#56616B"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <rect
        x="14"
        y="6"
        width="4"
        height="4"
        stroke="#56616B"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <rect
        x="6"
        y="14"
        width="4"
        height="4"
        stroke="#56616B"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <rect
        x="14"
        y="14"
        width="4"
        height="4"
        stroke="#56616B"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M10 8H14"
        stroke="#56616B"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M8 10V14"
        stroke="#56616B"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M16 10V14"
        stroke="#56616B"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M10 16H14"
        stroke="#56616B"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
    </svg>
  );
}
