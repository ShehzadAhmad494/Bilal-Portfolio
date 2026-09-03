"use client";

import { useCallback, useRef, useState } from "react";
import { skillGroups, skills } from "./content";

type Position = { x: number; y: number };

const HOME: Record<string, Position> = Object.fromEntries(
  skills.map((skill) => [skill.id, { x: skill.x, y: skill.y }]),
);

/**
 * The skills board: every tool Muhammad Bilal works in, laid out as chips the
 * visitor can pick up and rearrange anywhere inside the frame.
 *
 * Dragging is an enhancement, never the only way to read the board. The chips are
 * a real list in the server-rendered HTML with their labels visible, so a visitor
 * with no pointer, no JavaScript, or a screen reader gets the same information —
 * they simply do not get to move them. Keyboard users can move a focused chip with
 * the arrow keys, which is also what makes the interaction operable without a mouse.
 *
 * Positions are percentages of the board, so the arrangement survives a resize.
 */
export default function SkillBoard() {
  const boardRef = useRef<HTMLUListElement>(null);
  const [positions, setPositions] = useState<Record<string, Position>>(HOME);
  const [dragging, setDragging] = useState<string | null>(null);
  const [moved, setMoved] = useState(false);

  /** Clamp to the board so a chip can never be dragged out of reach. */
  const clamp = (value: number) => Math.min(96, Math.max(0, value));

  const place = useCallback((id: string, next: Position) => {
    setPositions((current) => ({ ...current, [id]: { x: clamp(next.x), y: clamp(next.y) } }));
    setMoved(true);
  }, []);

  function startDrag(event: React.PointerEvent<HTMLButtonElement>, id: string) {
    const board = boardRef.current;
    if (!board) return;

    const chip = event.currentTarget;
    const bounds = board.getBoundingClientRect();
    const chipBounds = chip.getBoundingClientRect();
    // Grab offset, so the chip does not jump its own top-left corner to the cursor.
    const grabX = event.clientX - chipBounds.left;
    const grabY = event.clientY - chipBounds.top;

    chip.setPointerCapture(event.pointerId);
    setDragging(id);

    const onMove = (moveEvent: PointerEvent) => {
      place(id, {
        x: ((moveEvent.clientX - grabX - bounds.left) / bounds.width) * 100,
        y: ((moveEvent.clientY - grabY - bounds.top) / bounds.height) * 100,
      });
    };

    const onEnd = () => {
      setDragging(null);
      chip.removeEventListener("pointermove", onMove);
      chip.removeEventListener("pointerup", onEnd);
      chip.removeEventListener("pointercancel", onEnd);
    };

    chip.addEventListener("pointermove", onMove);
    chip.addEventListener("pointerup", onEnd);
    chip.addEventListener("pointercancel", onEnd);
  }

  function nudge(event: React.KeyboardEvent<HTMLButtonElement>, id: string) {
    const step = event.shiftKey ? 8 : 2;
    const current = positions[id];
    const moves: Record<string, Position> = {
      ArrowUp: { x: current.x, y: current.y - step },
      ArrowDown: { x: current.x, y: current.y + step },
      ArrowLeft: { x: current.x - step, y: current.y },
      ArrowRight: { x: current.x + step, y: current.y },
    };

    const next = moves[event.key];
    if (!next) return;
    event.preventDefault();
    place(id, next);
  }

  return (
    <div className="skill-board-wrap">
      <div className="skill-board-head">
        <p className="skill-board-label">The toolkit</p>
        <ul className="skill-key" aria-hidden="true">
          {skillGroups.map((group) => (
            <li key={group.id} className={`skill-key-${group.id}`}>{group.label}</li>
          ))}
        </ul>
        <button
          className="skill-reset"
          type="button"
          onClick={() => {
            setPositions(HOME);
            setMoved(false);
          }}
          disabled={!moved}
        >
          <span aria-hidden="true">&#8635;</span> Reset layout
        </button>
      </div>

      <ul
        className={`skill-board${dragging ? " is-dragging" : ""}`}
        ref={boardRef}
        aria-label="Tools Muhammad Bilal works in. Drag a tool, or focus one and use the arrow keys, to rearrange the board."
      >
        {skills.map((skill) => {
          const position = positions[skill.id];
          return (
            <li
              key={skill.id}
              className="skill-slot"
              style={{ left: `${position.x}%`, top: `${position.y}%` }}
            >
              <button
                type="button"
                className={`skill-chip skill-chip-${skill.group}${dragging === skill.id ? " is-held" : ""}`}
                style={{
                  // The tile colour is the tool's own recognised colour; the tilt is
                  // its resting angle, dropped as soon as the chip is picked up.
                  "--tint": skill.tint,
                  "--tilt": dragging === skill.id ? "0deg" : `${skill.tilt}deg`,
                } as React.CSSProperties}
                aria-describedby="skill-board-note"
                onPointerDown={(event) => startDrag(event, skill.id)}
                onKeyDown={(event) => nudge(event, skill.id)}
              >
                <span className="chip-mark" aria-hidden="true">{skill.mark}</span>
                <span className="chip-label">{skill.label}</span>
              </button>
            </li>
          );
        })}
      </ul>

      <p className="skill-board-note" id="skill-board-note">
        Drag a tool anywhere in the frame, or focus one and move it with the arrow keys.
        No proficiency levels are claimed — these are the tools the work is made in.
      </p>
    </div>
  );
}
