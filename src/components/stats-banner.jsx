import React, { useEffect, useState, useRef } from "react";
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

const StatsBanner = () => {
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

  const [counters, setCounters] = useState(stats.map(() => 0));
  const floatsRef = useRef(stats.map(() => 0));

  useEffect(() => {
    const duration = 1000;
    const intervalMs = 33;

    // Per-tick increment so all finish in exactly 'duration'.
    const increments = stats.map(s => (s.value * intervalMs) / duration);

    const interval = setInterval(() => {
      let allDone = true;

      const next = stats.map((s, i) => {
        floatsRef.current[i] += increments[i];
        if (floatsRef.current[i] < s.value) {
          allDone = false;
          return Math.floor(floatsRef.current[i]);
        } else {
          return s.value;
        }
      });

      setCounters(next);

      if (allDone) clearInterval(interval);
    }, intervalMs);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="my-2">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        {stats.map((item, i) => {
          const is_external = !item.link.startsWith("/")

          return (
            <div key={item.label}>
              <div className="text-6xl font-extrabold leading-tight">
                {counters[i].toLocaleString()}
                {item.suffix || ""}
              </div>
              {is_external ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block uppercase tracking-wide text-base font-bold text-gray-400 hover:text-gray-200"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  className="mt-2 block uppercase tracking-wide text-base font-bold text-gray-400 hover:text-gray-200"
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
  );
};

export default StatsBanner;
