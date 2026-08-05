import React, { useEffect, useRef, useState } from "react"

const distanceClasses = {
  small: {
    "from-top": "-translate-y-6",
    "from-bottom": "translate-y-6",
    "from-left": "-translate-x-6",
    "from-right": "translate-x-6",
    none: "",
  },
  medium: {
    "from-top": "-translate-y-10",
    "from-bottom": "translate-y-10",
    "from-left": "-translate-x-10",
    "from-right": "translate-x-10",
    none: "",
  },
  large: {
    "from-top": "-translate-y-12",
    "from-bottom": "translate-y-12",
    "from-left": "-translate-x-12",
    "from-right": "translate-x-12",
    none: "",
  },
  extra: {
    "from-top": "-translate-y-20",
    "from-bottom": "translate-y-20",
    "from-left": "-translate-x-20",
    "from-right": "translate-x-20",
    none: "",
  },
}

const speedClasses = {
  fast: "duration-300",
  normal: "duration-500",
  slow: "duration-700",
}

export default function FadeIn({
  children,
  className = "",
  direction = "from-bottom",
  distance = "large",
  speed = "normal",
  delay = 200,
  threshold = 0.15,
  once = true,
}) {
  const elementRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = elementRef.current

    if (!element) return

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)

        if (entry.isIntersecting && once) {
          observer.unobserve(element)
        }
      },
      { threshold }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [once, threshold])

  const directionMap =
    distanceClasses[distance] ?? distanceClasses.large

  const hiddenDirection =
    directionMap[direction] ?? directionMap["from-bottom"]

  const duration = speedClasses[speed] ?? speedClasses.normal

  return (
    <div
      ref={elementRef}
      style={{
        transitionDelay: isVisible ? `${Math.max(0, delay)}ms` : "0ms",
      }}
      className={[
        "transform-gpu transition-[opacity,transform] ease-out",
        duration,
        "motion-reduce:transform-none",
        "motion-reduce:opacity-100",
        "motion-reduce:transition-none",
        isVisible
          ? "translate-x-0 translate-y-0 opacity-100"
          : `${hiddenDirection} opacity-0`,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  )
}
