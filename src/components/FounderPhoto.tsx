"use client";

import { useState } from "react";

export default function FounderPhoto() {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full bg-navy ring-4 ring-gold/40 sm:h-32 sm:w-32">
      {!failed && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src="/images/founder.jpg"
          alt="Erhan Gulsen, founder of Bright Path Tuition"
          className="absolute inset-0 h-full w-full object-cover"
          onError={() => setFailed(true)}
        />
      )}
      {failed && (
        <span
          className="flex h-full w-full items-center justify-center text-2xl font-bold tracking-wider text-gold sm:text-3xl"
          aria-hidden
        >
          EG
        </span>
      )}
    </div>
  );
}
