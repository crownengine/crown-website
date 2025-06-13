import React, { useEffect, useState, useRef } from "react";

const StatsBanner = () => {
  const stats = [
    {
      label: "GitHub Stars",
      value: 2200,
      suffix: "+",
      link: "https://github.com/crownengine/crown/stargazers",
    },
    {
      label: "Releases",
      value: 21,
      link: "https://github.com/crownengine/crown/releases",
    },
    {
      label: "Discord Members",
      value: 100,
      suffix: "+",
      link: "https://discord.gg/invite/CeXVWCT",
    },
    {
      label: "Platforms Supported",
      value: 4,
      link: "https://docs.crownengine.org/html/latest/introduction.html",
    },
  ];

  const [counters, setCounters] = useState(stats.map(() => 0));
  const floatsRef = useRef(stats.map(() => 0));

  useEffect(() => {
    const duration = 1500;
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
        {stats.map((s, i) => (
          <div key={s.label}>
            <div className="text-6xl font-extrabold leading-tight">
              {counters[i].toLocaleString()}
              {s.suffix || ""}
            </div>
            <a
              href={s.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block uppercase tracking-wide text-base font-bold text-gray-400 hover:text-gray-200"
            >
              {s.label}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsBanner;
