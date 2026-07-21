import styles from "./Experience.module.css";
import Reveal from "./Reveal";

const ROLES = [
    {
        company: "API Group Inc. (Habtech)",
        role: "Full Stack Software Developer Intern",
        period: "Jan 2026 – Apr 2026",
        location: "Mississauga, ON",
        bullets: [
            "Built an in-house quotation platform (Next.js + .NET Core) serving 500+ users, cutting ~$2M/yr in SaaS licensing.",
            "Reduced bulk-import DB writes 85% (10k+ records) by diffing rows against existing state and writing changed rows.",
            "Engineered a no-code workflow engine backed by JSON-defined steps in a state table, letting non-technical staff configure multi-step approval flows and cutting 20+ eng requests/month.",
            "Developed multi-tenant RBAC on a shared app and database, isolating client data across tenants while enforcing role-based permissions per request, scoping each user to their tenant and rank without per-client deployments.",
        ],
        stack: ["Next.js", ".NET Core", "Azure", "Docker", "PostgreSQL"],
    },
    {
        company: "StackAdapt",
        role: "Software Engineering Intern",
        period: "May 2025 – Aug 2025",
        location: "Toronto, ON",
        bullets: [
            "Automated cleanup across 100k+ entries, reclaiming 90%+ of DB storage and cutting latency from 10s+ to < 1s.",
            "Built a multi-step campaign-creation wizard with centralized RTK Query caching, eliminating redundant re-fetches of large config datasets, cutting thousands of daily backend queries.",
            "Cut Sentry error volume 40%+ by filtering noise, adding retry-with-delay logic for post-deletion DB sync failures.",
            "Migrated ad-vetting to a service with auto-approval, deprecating all legacy logic and running DB migrations to clear stale data, cutting manual review ~20% for ad quality reviewers.",
        ],
        stack: ["React", "RTK Query", "Ruby on Rails", "PostgreSQL"],
    },
];

function Experience({ color }) {
    return (
        <section
            className={styles.wrapper}
            style={{ "--ACCENT_COLOR_1": color }}>
            <Reveal direction="up">
                <h2 className={styles.heading}>
                    Experience<span className={styles.accent}>.</span>
                </h2>
                <p className={styles.subhead}>Where I&apos;ve shipped code.</p>
            </Reveal>

            <div className={styles.timeline}>
                {ROLES.map((role, i) => (
                    <Reveal key={role.company} direction="up" delay={i * 80}>
                        <article className={styles.card}>
                            <header className={styles.header}>
                                <div>
                                    <h3 className={styles.role}>{role.role}</h3>
                                    <p className={styles.company}>
                                        {role.company}
                                    </p>
                                </div>
                                <div className={styles.meta}>
                                    <span className={styles.period}>
                                        {role.period}
                                    </span>
                                    <span className={styles.location}>
                                        {role.location}
                                    </span>
                                </div>
                            </header>
                            <ul className={styles.bullets}>
                                {role.bullets.map((b) => (
                                    <li key={b}>{b}</li>
                                ))}
                            </ul>
                            <div className={styles.stack}>
                                {role.stack.map((t) => (
                                    <span key={t} className={styles.chip}>
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </article>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}

export default Experience;
