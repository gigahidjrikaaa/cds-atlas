/* Minimal stroke icon set — no icon library, consistent 1.5px strokes. */

type IconProps = { className?: string; size?: number };

export function PlayIcon({ className = "", size = 9 }: IconProps) {
  return (
    <svg
      viewBox="0 0 12 12"
      width={size}
      height={size}
      aria-hidden
      className={className}
      fill="currentColor"
    >
      <path d="M2.5 1.5 10.5 6 2.5 10.5Z" />
    </svg>
  );
}

export function ArrowRightIcon({ className = "", size = 14 }: IconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      aria-hidden
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M1 8h13M9.5 3.5 14 8l-4.5 4.5" />
    </svg>
  );
}

export function ArrowLeftIcon({ className = "", size = 14 }: IconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      aria-hidden
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M15 8H2M6.5 3.5 2 8l4.5 4.5" />
    </svg>
  );
}

export function ExpandIcon({ className = "", size = 11 }: IconProps) {
  return (
    <svg
      viewBox="0 0 12 12"
      width={size}
      height={size}
      aria-hidden
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
    >
      <path d="M7.5 1h3.5v3.5M4.5 11H1V7.5M11 1 7 5M1 11l4-4" />
    </svg>
  );
}

export function CloseIcon({ className = "", size = 10 }: IconProps) {
  return (
    <svg
      viewBox="0 0 10 10"
      width={size}
      height={size}
      aria-hidden
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
    >
      <path d="m1 1 8 8M9 1 1 9" />
    </svg>
  );
}
