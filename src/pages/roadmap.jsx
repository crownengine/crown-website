import React from "react"
import Clamp from "../components/clamp"
import Layout from "../components/layout"
import Seo from "../components/seo"

const accentClasses = {
  emerald: {
    text: "text-emerald-200",
    dot: "bg-emerald-300",
  },
  sky: {
    text: "text-sky-200",
    dot: "bg-sky-300",
  },
  amber: {
    text: "text-amber-200",
    dot: "bg-amber-300",
  },
  rose: {
    text: "text-rose-200",
    dot: "bg-rose-300",
  },
}

const roadmapItems = [
  {
    label: "Q2",
    dates: "April 1-June 30, 2026",
    title: "Saves & Settings",
    accent: "emerald",
    summary:
      "Give games a built-in way to store progress, profiles, and player options.",
    unlocks:
      "Reliable saves, graphics settings, and user preferences without custom engine plumbing.",
  },
  {
    label: "Q3",
    dates: "July 1-September 30, 2026",
    title: "Asset Workflow",
    accent: "sky",
    summary:
      "Make it easy to rename and move assets in the editor, inspect dependencies, and reorganize projects efficiently.",
    unlocks:
      "Teams can clean up and scale projects without breaking references or doing the work by hand.",
  },
  {
    label: "Q4",
    dates: "October 1-December 31, 2026",
    title: "Visual Effects",
    accent: "amber",
    summary:
      "Add a particle system and expand the rendering stack with missing effects like SSAO, color grading, and other post effects.",
    unlocks:
      "Richer visuals, more atmosphere, and a more complete built-in effects toolset.",
  },
  {
    label: "Crown 1.0",
    dates: "January 1-March 31, 2027",
    title: "Advanced Animation",
    labelVariant: "milestone",
    accent: "rose",
    summary:
      "Round out the animation stack with blending, layering, and masking.",
    unlocks:
      "Smoother transitions, more natural motion, and the ability to combine movement and actions cleanly, marking the final step toward Crown 1.0.",
  },
]

const goldBadgeClass =
  "inline-flex w-fit items-center whitespace-nowrap rounded-full bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 font-black uppercase text-amber-950 shadow-[0_0_24px_rgba(251,191,36,0.45)] ring-1 ring-amber-100/60"
const milestoneClass = `${goldBadgeClass} px-4 py-2 text-sm tracking-[0.18em] sm:ml-auto`
const timelineMilestoneClass = `${goldBadgeClass} px-5 py-3 text-2xl tracking-[0.12em]`
const timelineLabelClass = "inline-flex items-center text-5xl font-black uppercase tracking-[0.18em]"
const timelineDotClass = "z-10 h-4 w-4 rounded-full border-4 border-gray-950"
const articleClass =
  "relative overflow-hidden rounded-3xl border border-white/10 bg-gray-950/70 p-6 shadow-2xl backdrop-blur sm:p-8"

function RoadmapEntry({ item }) {
  const { label, dates, title, summary, unlocks, milestone, labelVariant, accent } = item
  const { text: textClass, dot: dotClass } = accentClasses[accent]
  const isMilestoneLabel = labelVariant === "milestone"

  return (
    <div className="relative sm:grid sm:grid-cols-[13rem_4rem_minmax(0,1fr)] sm:items-start">
      <div className="relative z-10 mb-4 sm:mb-0 sm:flex sm:justify-end sm:pr-4 sm:pt-3">
        {isMilestoneLabel ? (
          <span className={timelineMilestoneClass}>{label}</span>
        ) : (
          <span className={`${timelineLabelClass} ${textClass}`}>{label}</span>
        )}
      </div>

      <div className="hidden sm:flex sm:justify-center sm:pt-10">
        <span className={`${timelineDotClass} ${dotClass}`}></span>
      </div>

      <div
        className={`absolute left-[-2rem] top-9 ${timelineDotClass} sm:hidden ${dotClass}`}
      ></div>

      <article className={articleClass}>
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-400">{dates}</p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-3xl font-semibold tracking-tight text-white">{title}</h2>
            {milestone && <span className={milestoneClass}>{milestone}</span>}
          </div>
          <p className="mt-4 text-lg leading-8 text-gray-300">{summary}</p>
        </div>

        <p className="mt-6 text-base leading-7 text-gray-200">
          <span className={`font-semibold ${textClass}`}>What it unlocks:</span> {unlocks}
        </p>
      </article>
    </div>
  )
}

export default function Roadmap() {
  return (
    <Layout>
      <div className="bg-[url('../images/index/luna-background.svg')] bg-left-top bg-cover">
        <Clamp>
          <section className="px-4 py-24 text-gray-300">
            <div>
              <h1 className="mb-6 text-5xl font-bold tracking-tight text-white sm:text-6xl">
                Crown 2026 Roadmap
              </h1>
              <p className="mb-24 text-2xl text-gray-300">
                A timeline of the next major milestones on the road to Crown 1.0.
              </p>
            </div>

            <div className="relative mx-auto max-w-5xl pl-10 sm:pl-0 sm:pr-28 lg:pr-48">
              <div className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-emerald-300 via-sky-300 via-55% to-rose-300 sm:left-[15rem]"></div>

              <div className="space-y-8">
                {roadmapItems.map(item => (
                  <RoadmapEntry key={item.title} item={item} />
                ))}
              </div>
            </div>
          </section>
        </Clamp>
      </div>
    </Layout>
  )
}

export const Head = () => (
  <Seo
    title="Crown 2026 Roadmap"
    description="Upcoming Crown Engine milestones from Q2 2026 through Q1 2027."
  />
)
