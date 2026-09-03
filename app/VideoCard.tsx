"use client";

import { useEffect, useRef, useState } from "react";
import { IconMuted, IconVolume } from "./Icons";
import type { MotionProject } from "./content";

/**
 * A reel card that autoplays muted while it is in view, and pauses when it
 * scrolls out — no press-to-load step, and no native controls, so there is no
 * fullscreen affordance. The only visible control is the mute toggle.
 *
 * The frame itself is a second, silent way to start playback: clicking it
 * toggles play/pause. That exists for one reason — under a
 * `prefers-reduced-motion` preference the video never autoplays on its own, and
 * without this the piece would be unreachable rather than merely quiet. The mute
 * button stops its own click from also toggling play, and both controls are
 * reachable and operable by keyboard.
 */
export default function VideoCard({ project, index }: { project: MotionProject; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play().catch(() => {
            /* Autoplay can still be refused by the browser; the frame stays clickable. */
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  function toggleMute(event: React.MouseEvent) {
    event.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  }

  function togglePlay() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) void video.play().catch(() => {});
    else video.pause();
  }

  function onFrameKeyDown(event: React.KeyboardEvent) {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    togglePlay();
  }

  return (
    <article className={`motion-card motion-card-${index + 1} ${project.featured ? "motion-card-featured" : ""}`}>
      <div
        className="motion-frame"
        role="button"
        tabIndex={0}
        aria-label={`${playing ? "Pause" : "Play"} ${project.title} preview`}
        onClick={togglePlay}
        onKeyDown={onFrameKeyDown}
      >
        {/* Muted by default; the mute button lets a visitor bring sound up. */}
        <video
          ref={videoRef}
          className="work-video"
          src={project.video}
          poster={project.poster}
          muted
          loop
          playsInline
          preload="metadata"
          disablePictureInPicture
          controlsList="nofullscreen noremoteplayback nodownload"
          aria-hidden="true"
          tabIndex={-1}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        />
        <button
          type="button"
          className="mute-toggle"
          onClick={toggleMute}
          aria-pressed={!muted}
          aria-label={muted ? `Unmute ${project.title}` : `Mute ${project.title}`}
        >
          {muted ? <IconMuted /> : <IconVolume />}
        </button>
        <div className="frame-timecode" aria-hidden="true">
          <span>SC {String(index + 1).padStart(2, "0")}</span>
          <span>{project.duration}</span>
        </div>
      </div>
      <div className="motion-copy">
        <div className="card-kicker"><span>{project.category}</span><span>{project.year}</span></div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul className="craft-list" aria-label="Craft focus">
          {project.craft.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </div>
    </article>
  );
}
