import { SVGProps } from 'react';

export default function SwitchAccountIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M12 4C14.2091 4 16 5.79086 16 8C16 10.2091 14.2091 12 12 12C9.79086 12 8 10.2091 8 8C8 5.79086 9.79086 4 12 4Z"
        stroke="#56616B"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M12 14C15.3137 14 18 16.6863 18 20H6C6 16.6863 8.68629 14 12 14Z"
        stroke="#56616B"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M18 8H20"
        stroke="#56616B"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M6 8H4"
        stroke="#56616B"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
    </svg>
  );
}
