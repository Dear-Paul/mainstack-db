import { SVGProps } from 'react';

export default function SignOutIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M15 4H5C4.44772 4 4 4.44772 4 5V19C4 19.5523 4.44772 20 5 20H15"
        stroke="#56616B"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M12 12H20M20 12L17 9M20 12L17 15"
        stroke="#56616B"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
