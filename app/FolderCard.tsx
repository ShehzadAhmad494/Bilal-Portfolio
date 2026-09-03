/* eslint-disable @next/next/no-img-element -- Media is pre-sized and optimized locally. */

import Link from "next/link";
import { DisciplineIcon, IconArrow } from "./Icons";
import type { Discipline } from "./content";

/**
 * A folder holding a real peek at the work inside: one to three actual
 * thumbnails from the discipline it opens, fanned out above a folder shape.
 * Never padded with a fourth or fifth image that does not exist — the AI
 * folder has only one real asset, and the layout is built to look right with
 * one, two or three.
 */
export default function FolderCard({ discipline }: { discipline: Discipline }) {
  return (
    <Link
      className={`folder-card folder-card-${discipline.id} folder-count-${discipline.peek.length}`}
      href={discipline.href}
    >
      <span className="folder-peek" aria-hidden="true">
        {discipline.peek.map((item) => (
          <span className="peek-item" key={item.src}>
            <img src={item.src} alt="" width={240} height={320} loading="lazy" decoding="async" />
          </span>
        ))}
      </span>
      <span className="folder-body">
        <span className="folder-tab" aria-hidden="true" />
        <span className="folder-row">
          <DisciplineIcon id={discipline.id} className="folder-icon" />
          <span className="folder-num" aria-hidden="true">{discipline.number}</span>
        </span>
        <span className="folder-title">{discipline.title}</span>
        <span className="folder-line">
          <span className="folder-tagline">{discipline.tagline}</span>
          <IconArrow className="folder-cue icon-turn" />
        </span>
      </span>
    </Link>
  );
}
