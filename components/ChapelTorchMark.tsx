// Signature mark: the Duke Chapel spire fused with the NSBE torch flame.
// Used sparingly: hero watermark and section dividers only.
export default function ChapelTorchMark({
  className = "",
  opacity = 1,
}: {
  className?: string;
  opacity?: number;
}) {
  return (
    <svg
      viewBox="0 0 260 420"
      fill="none"
      className={className}
      style={{ opacity }}
      aria-hidden="true"
    >
      {/* flame */}
      <path
        d="M130 18c14 20 20 34 20 48 0 15-9 24-20 24s-20-9-20-24c0-14 6-28 20-48Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M130 40c6 10 9 17 9 24 0 7-4 12-9 12s-9-5-9-12c0-7 3-14 9-24Z"
        stroke="currentColor"
        strokeWidth="1"
      />
      {/* crossed bolts at the base of the flame, echoing the NSBE mark */}
      <path d="M96 96 148 118 92 132 152 152" stroke="currentColor" strokeWidth="1" />
      <path d="M164 96 112 118 168 132 108 152" stroke="currentColor" strokeWidth="1" />
      {/* spire shaft */}
      <path d="M130 100 L130 330" stroke="currentColor" strokeWidth="1.5" />
      <path d="M108 160 L152 160" stroke="currentColor" strokeWidth="1" />
      <path d="M100 210 L160 210" stroke="currentColor" strokeWidth="1" />
      <path d="M92 260 L168 260" stroke="currentColor" strokeWidth="1" />
      {/* gothic tapering outline, echoing the Chapel tower */}
      <path
        d="M130 100
           C 118 130, 108 165, 100 210
           C 93 248, 86 290, 78 330
           L 182 330
           C 174 290, 167 248, 160 210
           C 152 165, 142 130, 130 100 Z"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      {/* flanking pinnacles */}
      <path
        d="M60 330 C 62 300, 68 270, 74 250 C 80 270, 86 300, 88 330 Z"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        d="M172 330 C 174 300, 180 270, 186 250 C 192 270, 198 300, 200 330 Z"
        stroke="currentColor"
        strokeWidth="1"
      />
      {/* base line */}
      <path d="M40 330 L220 330" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
