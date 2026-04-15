import { useEffect } from "react";

const lines = [
  {
    x1: 40,
    y1: 120,
    x2: 210,
    y2: 30,
    stroke: "#FFD700",
    width: 14,
    opacity: 0.9,
    delay: 0,
  },
  {
    x1: 130,
    y1: 320,
    x2: 280,
    y2: 230,
    stroke: "#FACC15",
    width: 7,
    opacity: 0.65,
    delay: 0.4,
  },
  {
    x1: 80,
    y1: 560,
    x2: 260,
    y2: 470,
    stroke: "#FFB800",
    width: 18,
    opacity: 0.8,
    delay: 0.9,
  },
  {
    x1: 200,
    y1: 750,
    x2: 420,
    y2: 640,
    stroke: "#FDE047",
    width: 9,
    opacity: 0.7,
    delay: 1.3,
  },
  {
    x1: 20,
    y1: 820,
    x2: 140,
    y2: 760,
    stroke: "#FFD700",
    width: 5,
    opacity: 0.55,
    delay: 0.2,
  },
  {
    x1: 380,
    y1: 60,
    x2: 580,
    y2: 0,
    stroke: "#FBBF24",
    width: 10,
    opacity: 0.75,
    delay: 0.7,
  },
  {
    x1: 460,
    y1: 280,
    x2: 640,
    y2: 190,
    stroke: "#FFD700",
    width: 6,
    opacity: 0.6,
    delay: 1.1,
  },
  {
    x1: 320,
    y1: 480,
    x2: 530,
    y2: 390,
    stroke: "#FDE047",
    width: 20,
    opacity: 0.85,
    delay: 0.3,
  },
  {
    x1: 500,
    y1: 670,
    x2: 720,
    y2: 575,
    stroke: "#FACC15",
    width: 8,
    opacity: 0.7,
    delay: 1.5,
  },
  {
    x1: 270,
    y1: 860,
    x2: 450,
    y2: 790,
    stroke: "#FFB800",
    width: 11,
    opacity: 0.65,
    delay: 0.6,
  },
  {
    x1: 700,
    y1: 80,
    x2: 920,
    y2: 0,
    stroke: "#FFD700",
    width: 7,
    opacity: 0.7,
    delay: 0.8,
  },
  {
    x1: 760,
    y1: 330,
    x2: 980,
    y2: 230,
    stroke: "#FACC15",
    width: 16,
    opacity: 0.8,
    delay: 0.1,
  },
  {
    x1: 640,
    y1: 540,
    x2: 840,
    y2: 450,
    stroke: "#FDE047",
    width: 6,
    opacity: 0.6,
    delay: 1.2,
  },
  {
    x1: 820,
    y1: 730,
    x2: 1040,
    y2: 635,
    stroke: "#FFB800",
    width: 12,
    opacity: 0.75,
    delay: 0.5,
  },
  {
    x1: 1020,
    y1: 50,
    x2: 1240,
    y2: 0,
    stroke: "#FACC15",
    width: 8,
    opacity: 0.65,
    delay: 1.0,
  },
  {
    x1: 1100,
    y1: 270,
    x2: 1310,
    y2: 175,
    stroke: "#FFD700",
    width: 18,
    opacity: 0.85,
    delay: 0.35,
  },
  {
    x1: 950,
    y1: 490,
    x2: 1150,
    y2: 400,
    stroke: "#FDE047",
    width: 6,
    opacity: 0.6,
    delay: 0.75,
  },
  {
    x1: 1150,
    y1: 680,
    x2: 1380,
    y2: 585,
    stroke: "#FFB800",
    width: 10,
    opacity: 0.7,
    delay: 1.4,
  },
  {
    x1: 1260,
    y1: 160,
    x2: 1440,
    y2: 80,
    stroke: "#FACC15",
    width: 7,
    opacity: 0.65,
    delay: 0.55,
  },
  {
    x1: 1300,
    y1: 800,
    x2: 1440,
    y2: 730,
    stroke: "#FFD700",
    width: 13,
    opacity: 0.75,
    delay: 1.6,
  },
  {
    x1: 580,
    y1: 860,
    x2: 780,
    y2: 790,
    stroke: "#FDE047",
    width: 7,
    opacity: 0.55,
    delay: 0.9,
  },
  {
    x1: 900,
    y1: 870,
    x2: 1100,
    y2: 800,
    stroke: "#FACC15",
    width: 9,
    opacity: 0.6,
    delay: 0.45,
  },
];

const dots = [
  { cx: 1420, cy: 140, r: 16, fill: "#FFD700", opacity: 0.85, delay: 0.2 },
  { cx: 30, cy: 400, r: 10, fill: "#FACC15", opacity: 0.7, delay: 0.7 },
  { cx: 720, cy: 900, r: 13, fill: "#FFB800", opacity: 0.65, delay: 1.1 },
  { cx: 1200, cy: 500, r: 8, fill: "#FDE047", opacity: 0.6, delay: 0.4 },
  { cx: 400, cy: 20, r: 11, fill: "#FFD700", opacity: 0.75, delay: 0.9 },
];

const driftKeyframes = `
@keyframes drift {
  0%   { transform: translate(0px, 0px); opacity: 1; }
  50%  { transform: translate(6px, -4px); opacity: 0.7; }
  100% { transform: translate(0px, 0px); opacity: 1; }
}
@keyframes driftB {
  0%   { transform: translate(0px, 0px); opacity: 0.8; }
  50%  { transform: translate(-5px, 6px); opacity: 0.5; }
  100% { transform: translate(0px, 0px); opacity: 0.8; }
}
@keyframes driftC {
  0%   { transform: translate(0px, 0px); opacity: 0.9; }
  50%  { transform: translate(8px, 3px); opacity: 0.6; }
  100% { transform: translate(0px, 0px); opacity: 0.9; }
}
`;

function getAnim(index: number) {
  const anims = ["drift", "driftB", "driftC"];
  const durations = [
    5.2, 6.8, 4.5, 7.1, 5.7, 6.2, 4.9, 7.5, 5.4, 6.0, 4.3, 7.8,
  ];
  return `${anims[index % 3]} ${durations[index % durations.length]}s ease-in-out infinite`;
}

const SlopedLines = () => {
  useEffect(() => {
    if (!document.getElementById("yellow-drift-kf")) {
      const style = document.createElement("style");
      style.id = "yellow-drift-kf";
      style.textContent = driftKeyframes;
      document.head.appendChild(style);
    }
    return () => {
      const el = document.getElementById("yellow-drift-kf");
      if (el) el.remove();
    };
  }, []);

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      {lines.map((l, i) => (
        <line
          key={i}
          x1={l.x1}
          y1={l.y1}
          x2={l.x2}
          y2={l.y2}
          stroke={l.stroke}
          strokeWidth={l.width}
          strokeLinecap="round"
          opacity={l.opacity}
          style={{
            animation: getAnim(i),
            animationDelay: `${l.delay}s`,
          }}
        />
      ))}
      {dots.map((d, i) => (
        <circle
          key={i}
          cx={d.cx}
          cy={d.cy}
          r={d.r}
          fill={d.fill}
          opacity={d.opacity}
          style={{
            animation: getAnim(i + 5),
            animationDelay: `${d.delay}s`,
          }}
        />
      ))}
    </svg>
  );
};

export default SlopedLines;
