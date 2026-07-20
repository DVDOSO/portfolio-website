import styles from "./Experience.module.css";
import Reveal from "./Reveal";

const ROLES = [
    {
        company: "API Group Inc. (Habtech)",
        role: "Full Stack Software Developer Intern",
        period: "Jan 2026 — Apr 2026",
        location: "Mississauga, ON",
        bullets: [
            "Designed and built an end-to-end quotation system across Next.js and .NET Core, replacing a third-party platform and saving ~$2M in licensing costs.",
            "Architected a configurable workflow engine with role-based state transitions and step-level permission enforcement, enabling non-technical users to define multi-step workflows without code changes.",
            "Implemented a multi-tenant RBAC system with tenant-scoped user management and endpoint-level authorization guards on a shared platform.",
            "Engineered a smart-diff algorithm for bulk imports that issues only necessary CRUD operations, eliminating redundant writes and avoiding an Azure tier upgrade.",
        ],
        stack: ["Next.js", ".NET Core", "Azure", "Docker", "PostgreSQL"],
    },
    {
        company: "StackAdapt",
        role: "Software Engineering Intern",
        period: "May 2025 — Aug 2025",
        location: "Toronto, ON",
        bullets: [
            "Replaced an underperforming third-party ad-vetting service with an auto-approval system built on standardized ad categorization and feature-flagged rollout, restoring SLA compliance.",
            "Modernized a legacy Ruby on Rails internal tool by rebuilding the frontend in React, replacing raw HTML views with a component-driven UI.",
            "Designed an RTK Query data layer for ad campaign creation, including React hooks, endpoints, and pagination / sorting logic.",
            "Reclaimed 90%+ of database storage by automating cleanup of stale records across a database of 100k+ entries; cut Sentry error volume 40%+ with retry-with-delay logic for transient post-deletion DB sync failures.",
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
