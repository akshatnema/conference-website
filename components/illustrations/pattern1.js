export default function Pattern1({width, height, className}) {
  return (
    <svg
    //   width={width ? width : "360"}
    //       height={height ? height : "504"}
          className={className}
      viewBox="0 0 360 504"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="72" width="72" height="72" fill="#1B0255" />
      <mask
        id="mask0"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="72"
        y="0"
        width="72"
        height="72"
      >
        <rect x="72" width="72" height="72" fill="#1B0255" />
      </mask>
      <g mask="url(#mask0)">
        <circle cx="72" cy="72" r="72" fill="#4700C9" />
      </g>
      <rect x="288" y="216" width="72" height="72" fill="#1B0255" />
      <mask
        id="mask1"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="288"
        y="216"
        width="72"
        height="72"
      >
        <rect x="288" y="216" width="72" height="72" fill="#1B0255" />
      </mask>
      <g mask="url(#mask1)">
        <circle cx="288" cy="288" r="72" fill="#4700C9" />
      </g>
      <rect x="144" y="288" width="72" height="72" fill="#150241" />
      <path d="M216 288V360H144L216 288Z" fill="#1E035B" />
      <rect width="72" height="72" fill="#150241" />
      <path d="M72 0V72H0L72 0Z" fill="#1E035B" />
      <rect x="144" y="360" width="72" height="72" fill="#150241" />
      <path d="M216 360V432H144L216 360Z" fill="#1E035B" />
      <rect x="288" y="360" width="72" height="72" fill="#150241" />
      <path d="M360 360V432H288L360 360Z" fill="#1E035B" />
      <rect x="216" y="432" width="72" height="72" fill="#150241" />
      <path d="M288 432V504H216L288 432Z" fill="#1E035B" />
      <rect x="144" width="72" height="72" fill="#1B0255" />
      <path d="M216 0V72H144L216 0Z" fill="#4700C9" />
      <rect
        x="360"
        y="216"
        width="72"
        height="72"
        transform="rotate(-180 360 216)"
        fill="#1B0255"
      />
      <path d="M288 216V144H360L288 216Z" fill="#4700C9" />
      <rect x="216" width="72" height="72" fill="#886DFF" />
      <rect x="288" width="72" height="72" fill="#4700C9" />
      <rect x="288" y="72" width="72" height="72" fill="#886DFF" />
      <rect x="216" y="72" width="72" height="72" fill="#4700C9" />
      <rect x="144" y="72" width="72" height="72" fill="#150241" />
      <rect x="216" y="216" width="72" height="72" fill="#150241" />
      <rect x="288" y="288" width="72" height="72" fill="#150241" />
    </svg>
  );
}
