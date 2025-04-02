import { SVGProps } from 'react';

export default function ReportBugIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M12 4C15.3137 4 18 6.68629 18 10C18 11.6595 17.3309 13.1607 16.25 14.25L19 17C19.5523 17.5523 19.5523 18.4477 19 19C18.4477 19.5523 17.5523 19.5523 17 19L14.25 16.25C13.1607 17.3309 11.6595 18 10 18C6.68629 18 4 15.3137 4 12C4 8.68629 6.68629 6 10 6C11.6595 6 13.1607 6.66907 14.25 7.75"
        stroke="#56616B"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M10 10V14"
        stroke="#56616B"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M10 8H10.01"
        stroke="#56616B"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
    </svg>
  );
}
