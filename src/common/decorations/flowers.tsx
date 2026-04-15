const Flowers = ({ left = 0, right = 0, top = 0, bottom = 0 }) => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 md:z-10">
      {/* Left Side */}
      <svg
        className="absolute"
        style={{
          width: "110px",
          height: "100%",
          left: `${left}px`,
          top: `${top}px`,
          bottom: `${bottom}px`,
        }}
        viewBox="0 0 110 800"
        preserveAspectRatio="xMidYMax meet"
        fill="none"
      >
        {/* Stem 1 */}
        <path
          d="M 55 800 C 55 680 50 620 53 560 C 55 520 62 495 58 455"
          stroke="black"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Leaf 1 - Green */}
        <g transform="translate(-3, 0)">
          <path
            d="M 56 660 Q 22 645 18 620 Q 38 632 56 648 Z"
            fill="#4ade80"
            stroke="black"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </g>

        {/* Stem 2 (Tall) */}
        <path
          d="M 18 800 C 20 660 16 590 20 510 C 22 472 28 440 24 375 C 22 335 16 295 20 240"
          stroke="black"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Lower Leaf - Green */}
        <g transform="translate(3, 0)">
          <path
            d="M 21 450 Q 52 432 56 410 Q 36 422 21 438Z"
            fill="#4ade80"
            stroke="black"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </g>

        {/* Upper Leaf - Green */}
        <path
          d="M 22 340 Q 0 322 -2 298 Q 16 312 22 328Z"
          fill="#4ade80"
          stroke="black"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />

        {/* Stem 3 */}
        <path
          d="M 78 800 C 76 730 78 685 74 648 C 71 622 68 604 70 578"
          stroke="black"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Flower 1 */}
        <g transform="translate(58,445)">
          <ellipse
            cx="0"
            cy="-18"
            rx="7"
            ry="10"
            fill="#FFE000"
            stroke="black"
            strokeWidth="1.8"
          />
          <ellipse
            cx="0"
            cy="18"
            rx="7"
            ry="10"
            fill="#FFE000"
            stroke="black"
            strokeWidth="1.8"
          />
          <ellipse
            cx="-18"
            cy="0"
            rx="10"
            ry="7"
            fill="#FFE000"
            stroke="black"
            strokeWidth="1.8"
          />
          <ellipse
            cx="18"
            cy="0"
            rx="10"
            ry="7"
            fill="#FFE000"
            stroke="black"
            strokeWidth="1.8"
          />
          <ellipse
            cx="-13"
            cy="-13"
            rx="7"
            ry="10"
            fill="#FFE000"
            stroke="black"
            strokeWidth="1.8"
            transform="rotate(-45,-13,-13)"
          />
          <ellipse
            cx="13"
            cy="-13"
            rx="7"
            ry="10"
            fill="#FFE000"
            stroke="black"
            strokeWidth="1.8"
            transform="rotate(45,13,-13)"
          />
          <ellipse
            cx="-13"
            cy="13"
            rx="7"
            ry="10"
            fill="#FFE000"
            stroke="black"
            strokeWidth="1.8"
            transform="rotate(45,-13,13)"
          />
          <ellipse
            cx="13"
            cy="13"
            rx="7"
            ry="10"
            fill="#FFE000"
            stroke="black"
            strokeWidth="1.8"
            transform="rotate(-45,13,13)"
          />
          <circle
            cx="0"
            cy="0"
            r="7"
            fill="#FFC200"
            stroke="black"
            strokeWidth="1.8"
          />
        </g>

        {/* Flower 2 - Tall Center */}
        <g transform="translate(20,235)">
          <ellipse
            cx="0"
            cy="-15"
            rx="5.5"
            ry="8"
            fill="#FFE000"
            stroke="black"
            strokeWidth="1.8"
          />
          <ellipse
            cx="0"
            cy="15"
            rx="5.5"
            ry="8"
            fill="#FFE000"
            stroke="black"
            strokeWidth="1.8"
          />
          <ellipse
            cx="-15"
            cy="0"
            rx="8"
            ry="5.5"
            fill="#FFE000"
            stroke="black"
            strokeWidth="1.8"
          />
          <ellipse
            cx="15"
            cy="0"
            rx="8"
            ry="5.5"
            fill="#FFE000"
            stroke="black"
            strokeWidth="1.8"
          />
          <ellipse
            cx="-11"
            cy="-11"
            rx="5.5"
            ry="8"
            fill="#FFE000"
            stroke="black"
            strokeWidth="1.8"
            transform="rotate(-45,-11,-11)"
          />
          <ellipse
            cx="11"
            cy="-11"
            rx="5.5"
            ry="8"
            fill="#FFE000"
            stroke="black"
            strokeWidth="1.8"
            transform="rotate(45,11,-11)"
          />
          <ellipse
            cx="-11"
            cy="11"
            rx="5.5"
            ry="8"
            fill="#FFE000"
            stroke="black"
            strokeWidth="1.8"
            transform="rotate(45,-11,11)"
          />
          <ellipse
            cx="11"
            cy="11"
            rx="5.5"
            ry="8"
            fill="#FFE000"
            stroke="black"
            strokeWidth="1.8"
            transform="rotate(-45,11,11)"
          />
          <circle
            cx="0"
            cy="0"
            r="5.5"
            fill="#FFC200"
            stroke="black"
            strokeWidth="1.8"
          />
        </g>

        {/* Flower 3 - Tiny */}
        <g transform="translate(70,570)">
          <ellipse
            cx="0"
            cy="-12"
            rx="4.5"
            ry="7"
            fill="#FFE000"
            stroke="black"
            strokeWidth="1.8"
          />
          <ellipse
            cx="0"
            cy="12"
            rx="4.5"
            ry="7"
            fill="#FFE000"
            stroke="black"
            strokeWidth="1.8"
          />
          <ellipse
            cx="-12"
            cy="0"
            rx="7"
            ry="4.5"
            fill="#FFE000"
            stroke="black"
            strokeWidth="1.8"
          />
          <ellipse
            cx="12"
            cy="0"
            rx="7"
            ry="4.5"
            fill="#FFE000"
            stroke="black"
            strokeWidth="1.8"
          />
          <ellipse
            cx="-9"
            cy="-9"
            rx="4.5"
            ry="7"
            fill="#FFE000"
            stroke="black"
            strokeWidth="1.8"
            transform="rotate(-45,-9,-9)"
          />
          <ellipse
            cx="9"
            cy="-9"
            rx="4.5"
            ry="7"
            fill="#FFE000"
            stroke="black"
            strokeWidth="1.8"
            transform="rotate(45,9,-9)"
          />
          <ellipse
            cx="-9"
            cy="9"
            rx="4.5"
            ry="7"
            fill="#FFE000"
            stroke="black"
            strokeWidth="1.8"
            transform="rotate(45,-9,9)"
          />
          <ellipse
            cx="9"
            cy="9"
            rx="4.5"
            ry="7"
            fill="#FFE000"
            stroke="black"
            strokeWidth="1.8"
            transform="rotate(-45,9,9)"
          />
          <circle
            cx="0"
            cy="0"
            r="4.5"
            fill="#FFC200"
            stroke="black"
            strokeWidth="1.8"
          />
        </g>
      </svg>

      {/* Right Side - Mirrored */}
      <svg
        className="absolute"
        style={{
          width: "110px",
          height: "100%",
          right: `${right}px`,
          top: `${top}px`,
          bottom: `${bottom}px`,
        }}
        viewBox="0 0 110 800"
        preserveAspectRatio="xMidYMax meet"
        fill="none"
      >
        {/* Stem 1 */}
        <path
          d="M 55 800 C 55 680 60 620 57 560 C 55 520 48 495 52 455"
          stroke="black"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Leaf 1 - Green */}
        <g transform="translate(3, 0)">
          <path
            d="M 54 660 Q 88 645 92 620 Q 72 632 54 648Z"
            fill="#4ade80"
            stroke="black"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </g>

        {/* Stem 2 (Tall) */}
        <path
          d="M 92 800 C 90 660 94 590 90 510 C 88 472 82 440 86 375 C 88 335 94 295 90 240"
          stroke="black"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Lower Leaf - Green */}
        <g transform="translate(-3, 0)">
          <path
            d="M 89 450 Q 58 432 54 410 Q 74 422 89 438Z"
            fill="#4ade80"
            stroke="black"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </g>

        {/* Upper Leaf - Green */}
        <path
          d="M 88 340 Q 110 322 112 298 Q 94 312 88 328Z"
          fill="#4ade80"
          stroke="black"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />

        {/* Stem 3 */}
        <path
          d="M 32 800 C 34 730 32 685 36 648 C 39 622 42 604 40 578"
          stroke="black"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Flower 1 */}
        <g transform="translate(52,445)">
          <ellipse
            cx="0"
            cy="-18"
            rx="7"
            ry="10"
            fill="#FFE000"
            stroke="black"
            strokeWidth="1.8"
          />
          <ellipse
            cx="0"
            cy="18"
            rx="7"
            ry="10"
            fill="#FFE000"
            stroke="black"
            strokeWidth="1.8"
          />
          <ellipse
            cx="-18"
            cy="0"
            rx="10"
            ry="7"
            fill="#FFE000"
            stroke="black"
            strokeWidth="1.8"
          />
          <ellipse
            cx="18"
            cy="0"
            rx="10"
            ry="7"
            fill="#FFE000"
            stroke="black"
            strokeWidth="1.8"
          />
          <ellipse
            cx="-13"
            cy="-13"
            rx="7"
            ry="10"
            fill="#FFE000"
            stroke="black"
            strokeWidth="1.8"
            transform="rotate(-45,-13,-13)"
          />
          <ellipse
            cx="13"
            cy="-13"
            rx="7"
            ry="10"
            fill="#FFE000"
            stroke="black"
            strokeWidth="1.8"
            transform="rotate(45,13,-13)"
          />
          <ellipse
            cx="-13"
            cy="13"
            rx="7"
            ry="10"
            fill="#FFE000"
            stroke="black"
            strokeWidth="1.8"
            transform="rotate(45,-13,13)"
          />
          <ellipse
            cx="13"
            cy="13"
            rx="7"
            ry="10"
            fill="#FFE000"
            stroke="black"
            strokeWidth="1.8"
            transform="rotate(-45,13,13)"
          />
          <circle
            cx="0"
            cy="0"
            r="7"
            fill="#FFC200"
            stroke="black"
            strokeWidth="1.8"
          />
        </g>

        {/* Flower 2 - Tall Center */}
        <g transform="translate(90,235)">
          <ellipse
            cx="0"
            cy="-15"
            rx="5.5"
            ry="8"
            fill="#FFE000"
            stroke="black"
            strokeWidth="1.8"
          />
          <ellipse
            cx="0"
            cy="15"
            rx="5.5"
            ry="8"
            fill="#FFE000"
            stroke="black"
            strokeWidth="1.8"
          />
          <ellipse
            cx="-15"
            cy="0"
            rx="8"
            ry="5.5"
            fill="#FFE000"
            stroke="black"
            strokeWidth="1.8"
          />
          <ellipse
            cx="15"
            cy="0"
            rx="8"
            ry="5.5"
            fill="#FFE000"
            stroke="black"
            strokeWidth="1.8"
          />
          <ellipse
            cx="-11"
            cy="-11"
            rx="5.5"
            ry="8"
            fill="#FFE000"
            stroke="black"
            strokeWidth="1.8"
            transform="rotate(-45,-11,-11)"
          />
          <ellipse
            cx="11"
            cy="-11"
            rx="5.5"
            ry="8"
            fill="#FFE000"
            stroke="black"
            strokeWidth="1.8"
            transform="rotate(45,11,-11)"
          />
          <ellipse
            cx="-11"
            cy="11"
            rx="5.5"
            ry="8"
            fill="#FFE000"
            stroke="black"
            strokeWidth="1.8"
            transform="rotate(45,-11,11)"
          />
          <ellipse
            cx="11"
            cy="11"
            rx="5.5"
            ry="8"
            fill="#FFE000"
            stroke="black"
            strokeWidth="1.8"
            transform="rotate(-45,11,11)"
          />
          <circle
            cx="0"
            cy="0"
            r="5.5"
            fill="#FFC200"
            stroke="black"
            strokeWidth="1.8"
          />
        </g>

        {/* Flower 3 - Tiny */}
        <g transform="translate(40,570)">
          <ellipse
            cx="0"
            cy="-12"
            rx="4.5"
            ry="7"
            fill="#FFE000"
            stroke="black"
            strokeWidth="1.8"
          />
          <ellipse
            cx="0"
            cy="12"
            rx="4.5"
            ry="7"
            fill="#FFE000"
            stroke="black"
            strokeWidth="1.8"
          />
          <ellipse
            cx="-12"
            cy="0"
            rx="7"
            ry="4.5"
            fill="#FFE000"
            stroke="black"
            strokeWidth="1.8"
          />
          <ellipse
            cx="12"
            cy="0"
            rx="7"
            ry="4.5"
            fill="#FFE000"
            stroke="black"
            strokeWidth="1.8"
          />
          <ellipse
            cx="-9"
            cy="-9"
            rx="4.5"
            ry="7"
            fill="#FFE000"
            stroke="black"
            strokeWidth="1.8"
            transform="rotate(-45,-9,-9)"
          />
          <ellipse
            cx="9"
            cy="-9"
            rx="4.5"
            ry="7"
            fill="#FFE000"
            stroke="black"
            strokeWidth="1.8"
            transform="rotate(45,9,-9)"
          />
          <ellipse
            cx="-9"
            cy="9"
            rx="4.5"
            ry="7"
            fill="#FFE000"
            stroke="black"
            strokeWidth="1.8"
            transform="rotate(45,-9,9)"
          />
          <ellipse
            cx="9"
            cy="9"
            rx="4.5"
            ry="7"
            fill="#FFE000"
            stroke="black"
            strokeWidth="1.8"
            transform="rotate(-45,9,9)"
          />
          <circle
            cx="0"
            cy="0"
            r="4.5"
            fill="#FFC200"
            stroke="black"
            strokeWidth="1.8"
          />
        </g>
      </svg>
    </div>
  );
};

export default Flowers;
