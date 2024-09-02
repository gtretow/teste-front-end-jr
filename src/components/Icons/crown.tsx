function Crown({ color }: { color: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill={color ? "#f71963" : "none"}
      viewBox="0 0 20 20"
    >
      <g clipPath="url(#clip0_1_1295)">
        <path
          stroke={color ? "#f71963" : "#9F9F9F"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3.526 15.314a.626.626 0 00.779.458 21.398 21.398 0 0111.386-.001.626.626 0 00.78-.458l1.99-8.462a.624.624 0 00-.862-.715l-3.951 1.757a.625.625 0 01-.8-.268l-2.302-4.142a.625.625 0 00-1.092 0L7.153 7.625a.625.625 0 01-.8.268L2.4 6.136a.625.625 0 00-.862.714l1.988 8.464z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_1_1295">
          <path fill="#fff" d="M0 0H20V20H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Crown;
