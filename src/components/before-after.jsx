import React, { useState } from "react"
import beforeAfterIcon from "../images/icons/before-after.svg"

export default function BeforeAfter({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  beforeLabel = "Before",
  afterLabel = "After",
  ariaLabel = "Compare before and after images",
  initialPosition = 50,
  className = "",
}) {
  const [position, setPosition] = useState(Math.min(100, Math.max(0, initialPosition)))
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div className={`relative isolate overflow-hidden rounded-widget select-none ${className}`.trim()}>
      <img
        className="block h-auto w-full"
        src={afterSrc}
        alt={afterAlt}
        draggable={false}
      />
      <span className="pointer-events-none absolute right-3 top-3 rounded-widget bg-dark/80 px-2 py-1 text-small font-semibold text-inverse">
        {afterLabel}
      </span>

      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img
          className="block h-full w-full object-cover"
          src={beforeSrc}
          alt={beforeAlt}
          draggable={false}
        />
        <span className="pointer-events-none absolute left-3 top-3 rounded-widget bg-dark/80 px-2 py-1 text-small font-semibold text-inverse">
          {beforeLabel}
        </span>
      </div>

      <input
        className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
        type="range"
        min="0"
        max="100"
        value={position}
        aria-label={ariaLabel}
        aria-valuetext={`${position}% before`}
        onChange={event => setPosition(Number(event.target.value))}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />

      <div
        className="pointer-events-none absolute inset-y-0 z-10 w-0.5 bg-inverse"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
        aria-hidden="true"
      >
        <span
          className={`absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-inverse bg-dark shadow-lg ${isFocused ? "ring-4 ring-brand" : ""}`.trim()}
        >
          <img className="h-4 w-auto" src={beforeAfterIcon} alt="" />
        </span>
      </div>
    </div>
  )
}
