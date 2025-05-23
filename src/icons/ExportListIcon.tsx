import { SVGProps } from 'react';

export default function ExportListIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <mask
        id="mask0_1_1419"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="20"
        height="20"
      >
        <rect width="20" height="20" fill="#C4C4C4" />
      </mask>
      <g mask="url(#mask0_1_1419)">
        <path
          d="M10.0001 12.6875L7.04175 9.75L7.64591 9.14583L9.58341 11.0833V3.875H10.4167V11.0833L12.3542 9.14583L12.9584 9.75L10.0001 12.6875ZM5.52091 15.8333C5.13203 15.8333 4.80925 15.705 4.55258 15.4483C4.29536 15.1911 4.16675 14.8681 4.16675 14.4792V12.5H5.00008V14.4792C5.00008 14.6181 5.0523 14.7394 5.15675 14.8433C5.26064 14.9478 5.38203 15 5.52091 15H14.4792C14.6181 15 14.7395 14.9478 14.8434 14.8433C14.9479 14.7394 15.0001 14.6181 15.0001 14.4792V12.5H15.8334V14.4792C15.8334 14.8681 15.7051 15.1911 15.4484 15.4483C15.1912 15.705 14.8681 15.8333 14.4792 15.8333H5.52091Z"
          fill="#131316"
        />
      </g>
    </svg>
  );
}
