const HeroBackground = () => {
  return (
    <svg
      data-hereo-background
      viewBox="0 0 960 540"
     className="w-full h-full object-cover opacity-50"
      xmlns="http://www.w3.org/2000/svg"
      // xmlns:xlink="http://www.w3.org/1999/xlink"
      version="1.1"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <filter id="blur1" x="-10%" y="-10%" width="120%" height="120%">
          <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
          <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur"></feGaussianBlur>
        </filter>
      </defs>
      <rect width="960" height="540" fill="#ffffff"></rect>
      <g filter="url(#blur1)">
        <circle cx="907" cy="218" fill="#f68fa8" r="363"></circle>
        <circle cx="532" cy="401" fill="#ffffff" r="363"></circle>
        <circle cx="421" cy="57" fill="#f68fa8" r="363"></circle>
        <circle cx="49" cy="222" fill="#f68fa8" r="363"></circle>
        <circle cx="635" cy="9" fill="#ffffff" r="363"></circle>
        <circle cx="0" cy="450" fill="#ffffff" r="200"></circle>
        <circle cx="923" cy="520" fill="#f68fa8" r="363"></circle>
      </g>
    </svg>
  );
};

export default HeroBackground;
