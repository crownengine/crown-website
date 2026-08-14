import React, { useEffect, useRef, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

const StatsBanner = ({ animate = false }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          stats {
            label
            value
            suffix
            link
          }
        }
      }
    }
  `)

  const stats = data.site.siteMetadata.stats
  const [counters, setCounters] = useState(() =>
    animate ? stats.map(() => 0) : stats.map(stat => stat.value),
  )
  const floatsRef = useRef(stats.map(() => 0))

  useEffect(() => {
    if (!animate) return

    const duration = 1000
    const intervalMs = 33
    const increments = stats.map(stat => (stat.value * intervalMs) / duration)

    floatsRef.current = stats.map(() => 0)
    setCounters(stats.map(() => 0))

    const interval = setInterval(() => {
      let allDone = true

      const next = stats.map((stat, index) => {
        floatsRef.current[index] += increments[index]
        if (floatsRef.current[index] < stat.value) {
          allDone = false
          return Math.floor(floatsRef.current[index])
        }

        return stat.value
      })

      setCounters(next)

      if (allDone) clearInterval(interval)
    }, intervalMs)

    return () => clearInterval(interval)
  }, [animate, stats])

  return (
    <div className="my-2">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        {stats.map((item, index) => {
          const is_external = !item.link.startsWith("/")

          return (
            <div key={item.label}>
              <div className="text-display font-bold leading-tight">
                {counters[index].toLocaleString()}
                {item.suffix || ""}
              </div>
              {is_external ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block uppercase tracking-wide text-body font-bold text-muted hover:text-inverse"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  className="mt-2 block uppercase tracking-wide text-body font-bold text-muted hover:text-inverse"
                  to={item.link}
                >
                  {item.label}
                </Link>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default StatsBanner
