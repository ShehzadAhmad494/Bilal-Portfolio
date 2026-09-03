/**
 * A small geometric icon set, drawn inline so it costs no extra request and
 * inherits `currentColor` in both themes. These are interface marks — play,
 * arrow, timeline, frame, spark — not illustrations, and no brand artwork is
 * reproduced anywhere in this file.
 *
 * Every icon is decorative by default: the label beside it carries the meaning,
 * so they ship `aria-hidden` and are never the only thing announcing an action.
 */
type IconProps = { className?: string };

function Svg({ children, className }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      className={className ? `icon ${className}` : "icon"}
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="square"
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

export function IconPlay({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M8 5.5 18 12 8 18.5Z" fill="currentColor" stroke="none" />
    </Svg>
  );
}

export function IconArrow({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M4 12h15" />
      <path d="M13 6l6 6-6 6" />
    </Svg>
  );
}

/** Stacked clip bars: the edit. */
export function IconTimeline({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M3 7h11" />
      <path d="M3 12h17" />
      <path d="M3 17h7" />
      <path d="M17 4v6" />
    </Svg>
  );
}

/** A frame with its safe-area corners: the design. */
export function IconFrame({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="3.5" y="4.5" width="17" height="15" />
      <path d="M7 8h4M7 12h9" />
    </Svg>
  );
}

/** A four-point spark: the AI-assisted work. */
export function IconSpark({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M12 3.5 13.7 10.3 20.5 12 13.7 13.7 12 20.5 10.3 13.7 3.5 12 10.3 10.3Z" />
    </Svg>
  );
}

/** A playhead marker, used for scroll and section cues. */
export function IconPlayhead({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M12 4v16" />
      <path d="M7 4h10l-5 5Z" fill="currentColor" stroke="none" />
    </Svg>
  );
}

/** Speaker with sound waves: unmuted state. */
export function IconVolume({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M4 9.5h3.5L12 6v12l-4.5-3.5H4Z" fill="currentColor" stroke="none" />
      <path d="M16 9.2a4 4 0 0 1 0 5.6" />
      <path d="M18.5 6.8a7.6 7.6 0 0 1 0 10.4" />
    </Svg>
  );
}

/** Speaker with a strike-through: muted state. */
export function IconMuted({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M4 9.5h3.5L12 6v12l-4.5-3.5H4Z" fill="currentColor" stroke="none" />
      <path d="M16 9.5 20.5 14M20.5 9.5 16 14" />
    </Svg>
  );
}

export function IconMail({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="3" y="5.5" width="18" height="13" />
      <path d="M3 6.5 12 13l9-6.5" />
    </Svg>
  );
}

const DISCIPLINE_ICONS: Record<string, (props: IconProps) => React.ReactElement> = {
  motion: IconTimeline,
  design: IconFrame,
  ai: IconSpark,
};

/** Resolves a discipline id to its mark, falling back to the frame. */
export function DisciplineIcon({ id, className }: { id: string; className?: string }) {
  const Mark = DISCIPLINE_ICONS[id] ?? IconFrame;
  return <Mark className={className} />;
}
