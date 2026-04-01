import React from "react"
import { graphql, Link } from "gatsby"
import Clamp from "../components/clamp"
import Layout from "../components/layout"
import NewsList from "../components/news-list.jsx"
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
    summary: "Give games a built-in way to store progress, profiles, and player options.",
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
    unlocks: "Richer visuals, more atmosphere, and a more complete built-in effects toolset.",
  },
  {
    label: "Crown 1.0",
    dates: "January 1-March 31, 2027",
    title: "Advanced Animation",
    labelVariant: "milestone",
    accent: "rose",
    summary: "Round out the animation stack with blending, layering, and masking.",
    unlocks:
      "Smoother transitions, more natural motion, and the ability to combine movement and actions cleanly, marking the final step toward Crown 1.0.",
  },
]

const roadToOneItems = [
  {
    question: "Why these four, why now",
    answer:
      "These milestones focus on the core systems needed to build real projects in Crown: gameplay state, content workflow, visual polish, and animation.",
  },
  {
    question: "What Crown 1.0 means",
    answer:
      "Crown 1.0 is aimed at being ready for production on a smaller-scope commercial game, especially single-player and local multiplayer projects.",
  },
  {
    question: "Not planned before 1.0",
    answer:
      "Crown 1.0 stays focused on features that directly support building and shipping games. Features outside that scope may be postponed until after 1.0.",
  },
  {
    question: "Acceptance criteria",
    answer:
      "A milestone is complete when it is implemented, documented, and usable in a real project.",
  },
]

const goldBadgeClass =
  "inline-flex w-fit items-center whitespace-nowrap rounded-full bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 font-black uppercase text-amber-950 shadow-[0_0_24px_rgba(251,191,36,0.45)] ring-1 ring-amber-100/60"
const milestoneClass = `${goldBadgeClass} px-4 py-2 text-sm tracking-[0.18em] sm:ml-auto`
const timelineMilestoneClass = `${goldBadgeClass} px-5 py-3 text-2xl tracking-[0.12em]`
const timelineLabelClass =
  "inline-flex items-center text-5xl font-black uppercase tracking-[0.18em]"
const timelineDotClass = "z-10 h-4 w-4 rounded-full border-4 border-gray-950"
const articleClass =
  "relative overflow-hidden rounded-3xl border border-white/10 bg-gray-950/70 p-6 shadow-2xl backdrop-blur sm:p-8"
const contentSectionClass = "mx-auto mt-24 max-w-5xl border-t border-white/10 pt-16"
const contentCardClass = `${articleClass} h-full border-white/10 bg-gray-950/60`
const sectionHeadingClass = "text-3xl font-semibold tracking-tight text-white sm:text-4xl"
const sectionDescriptionClass = "mt-4 text-lg leading-8 text-gray-300"
const cardHeadingClass = "text-2xl font-semibold tracking-tight text-white"
const roadToOneBodyClass = "mt-4 text-base leading-7 text-gray-300"
const progressBodyClass = "mt-5 text-base leading-7 text-gray-300"
const newsLinkClass =
  "text-sm font-semibold uppercase tracking-[0.18em] text-amber-200 transition hover:text-amber-100"

const recentProgressItems = [
  {
    title: "2025 was the most productive year in Crown's history.",
    body: (
      <p className={progressBodyClass}>
        Crown shipped <span className="font-semibold text-white">14 releases</span> in 2025, from
        Crown 0.54 in January to Crown 0.60 in December. Major additions included a new PBR
        pipeline, support for FBX scenes, local and cascaded shadows, OGG streaming, a dedicated
        kinematic character controller, improved prefab workflows, and many new resource editors.
      </p>
    ),
  },
  {
    title: "Commit Velocity",
    body: (
      <p className={progressBodyClass}>
        In the 12 months ending February 2026, the project recorded{" "}
        <span className="font-semibold text-white">1,047 commits</span>, up{" "}
        <span className="font-semibold text-white">83% year over year</span>.
      </p>
    ),
  },
  {
    title: "2026 Momentum",
    body: (
      <p className={progressBodyClass}>
        The year began with the release of Crown 0.61, followed by three bugfix releases ending with
        Crown 0.61.3. Work is now underway on Crown 0.62.
      </p>
    ),
  },
]

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

function ContentSection({ title, description, children }) {
  return (
    <section className={contentSectionClass}>
      <div>
        <h2 className={sectionHeadingClass}>{title}</h2>
        <p className={sectionDescriptionClass}>{description}</p>
      </div>
      {children}
    </section>
  )
}

function ContentCard({ title, children }) {
  return (
    <article className={contentCardClass}>
      <h3 className={cardHeadingClass}>{title}</h3>
      {children}
    </article>
  )
}

function LatestNews({ edges }) {
  return (
    <div className="mt-16">
      <div className="flex items-center justify-between gap-4">
        <h3 className={cardHeadingClass}>Latest News</h3>
        <Link to="/news" className={newsLinkClass}>
          View All News
        </Link>
      </div>

      <div className="mt-8">
        <NewsList
          edges={edges}
          limit={3}
          listClassName="grid gap-6 lg:grid-cols-3"
          itemClassName=""
        />
      </div>
    </div>
  )
}

export default function Roadmap({ data }) {
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

            <ContentSection
              title="Road to 1.0"
              description="The roadmap focuses on building the systems Crown needs to be fully production-ready for the demands of developing smaller-scope games."
            >
              <div className="mt-10 grid gap-6 md:grid-cols-2">
                {roadToOneItems.map(({ question, answer }) => (
                  <ContentCard key={question} title={question}>
                    <p className={roadToOneBodyClass}>{answer}</p>
                  </ContentCard>
                ))}
              </div>
            </ContentSection>

            <ContentSection
              title="Recent Progress"
              description="Crown has accelerated sharply over the last year, with a higher release pace, broader engine capabilities, and continued momentum into 2026."
            >
              <div className="mt-10 space-y-6">
                {recentProgressItems.map(({ title, body }) => (
                  <ContentCard key={title} title={title}>
                    {body}
                  </ContentCard>
                ))}
              </div>
              <LatestNews edges={data.allMdx.edges} />
            </ContentSection>
          </section>
        </Clamp>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }, limit: 3) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            image {
              childImageSharp {
                gatsbyImageData(width: 1280, placeholder: DOMINANT_COLOR)
              }
            }
          }
          excerpt(pruneLength: 120)
        }
      }
    }
  }
`

export const Head = () => (
  <Seo
    title="Crown 2026 Roadmap"
    description="Upcoming Crown Engine milestones from Q2 2026 through Q1 2027."
  />
)
