import { SVGProps } from 'react';

interface InvoicingIconProps extends SVGProps<SVGSVGElement> {
  isColored?: boolean;
}

export default function InvoicingIcon({
  isColored = false,
  ...props
}: InvoicingIconProps) {
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
        d="M19.0001 22.0599H4.98009C4.63009 22.0599 4.34009 21.7799 4.34009 21.4199V7.39995C4.34009 7.04995 4.62009 6.75995 4.98009 6.75995H19.0001C19.3501 6.75995 19.6401 7.03995 19.6401 7.39995V21.4199C19.6401 21.7699 19.3501 22.0599 19.0001 22.0599Z"
        fill={isColored ? 'url(#paint0_linear_12253_602)' : '#D3D3D3'}
      />
      <path
        d="M20.4599 15.72L7.58993 5.22003C7.12993 4.84003 7.38993 4.09003 7.98993 4.09003H20.8599C21.2099 4.09003 21.4999 4.37003 21.4999 4.73003V15.24C21.4999 15.77 20.8799 16.06 20.4599 15.72Z"
        fill={isColored ? 'url(#paint1_linear_12253_602)' : '#D3D3D3'}
      />
      <path
        d="M3.54 13.58L16.41 3.07C16.87 2.69 16.61 1.94 16.01 1.94H3.14C2.79 1.94 2.5 2.22 2.5 2.58V13.09C2.5 13.62 3.12 13.92 3.54 13.58Z"
        fill={isColored ? 'url(#paint2_linear_12253_602)' : '#D3D3D3'}
      />
      {isColored && (
        <defs>
          <linearGradient
            id="paint0_linear_12253_602"
            x1="4.34207"
            y1="14.4112"
            x2="19.6378"
            y2="14.4112"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF9868" />
            <stop offset="1" stopColor="#FF5403" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_12253_602"
            x1="7.3527"
            y1="9.97921"
            x2="21.4999"
            y2="9.97921"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#03FFE5" />
            <stop offset="1" stopColor="#14B348" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_12253_602"
            x1="2.5"
            y1="7.8319"
            x2="16.6472"
            y2="7.8319"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FCFF1C" />
            <stop offset="1" stopColor="#FF9D0A" />
          </linearGradient>
        </defs>
      )}
    </svg>
  );
}
