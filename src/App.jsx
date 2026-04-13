import { useState, useEffect } from 'react'
import { FileText, GraduationCap, Globe, BookOpen, Sun, Moon } from 'lucide-react'
import './App.css'

/* ── Brand icons (inline SVG, shared wrapper) ────── */
function BrandIcon({ path }) {
  return (
    <svg width={19} height={19} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d={path} />
    </svg>
  )
}
const XIcon = () => <BrandIcon path="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
const LinkedInIcon = () => <BrandIcon path="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
const GitHubIcon = () => <BrandIcon path="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />

/* ── Social links (CV, Scholar, LinkedIn, X, GitHub) */
const socialLinks = [
  { icon: <FileText size={19} strokeWidth={1.7} />,      label: 'CV',            href: '/CV.pdf',                                            external: true  },
  { icon: <GraduationCap size={19} strokeWidth={1.7} />, label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=_UI0VgoAAAAJ&hl=en',   external: true  },
  { icon: <LinkedInIcon />,                               label: 'LinkedIn',       href: 'https://www.linkedin.com/in/yeon-su-park-4a743831b/',            external: true  },
  { icon: <XIcon />,                                      label: 'X',              href: 'https://x.com/yeonsu_28',                                        external: true  },
  { icon: <GitHubIcon />,                                 label: 'GitHub',         href: 'https://github.com/yeonsuuuu28',                                 external: true  },
]

/* ── News ────────────────────────────────────────── */
const news = [
  { emoji: '🇪🇸', date: 'Apr 2026', text: 'Excited to present my first first-author paper at CHI 2026 in Barcelona, Spain!' },
  { emoji: '🎓', date: 'Mar 2026', text: 'Started my Ph.D. at KIXLAB, KAIST.' },
  { emoji: '🎉', date: 'Jan 2026', text: 'My first first-author paper is accepted to CHI 2026!' },
  { emoji: '🏆', date: 'Dec 2025', text: 'Successfully defended my M.S. thesis.' },
  { emoji: '🇰🇷', date: 'Sep 2025', text: 'Attended UIST 2025 in Busan, South Korea.' },
  { emoji: '🇯🇵', date: 'Apr 2025', text: 'Attended CHI 2025 in Yokohama, Japan as a Student Volunteer.' },
  { emoji: '🇨🇷', date: 'Nov 2024', text: 'Attended CSCW 2024 in San José, Costa Rica.' },
  { emoji: '📚', date: 'Mar 2024', text: 'Began M.S. at KIXLAB, KAIST.' },
]

/* ── Publications ────────────────────────────────── */
// links: { pdf: url | 'TBA' | null, website: url | null, arxiv: url | null }
const publications = [
  {
    title: 'Authorship Drift: How Self-Efficacy and Trust Evolve During LLM-Assisted Writing',
    authors: 'Yeon Su Park, Nadia Azzahra Putri Arvi, Seoyoung Kim, Juho Kim',
    venue: 'CHI 2026',
    links: { pdf: 'TBA', website: 'https://authorshipdrift.kixlab.org', arxiv: 'https://arxiv.org/abs/2602.05819' },
  },
  {
    title: "Less Talk, More Trust: Understanding Players' In-game Assessment of Communication Processes in League of Legends",
    authors: 'Juhoon Lee, Seoyoung Kim, Yeon Su Park, Juho Kim, Jeong-woo Jang, Joseph Seering',
    venue: 'CHI 2025',
    links: { pdf: 'https://dl.acm.org/doi/full/10.1145/3706598.3714226', website: null, arxiv: 'https://arxiv.org/abs/2502.17935' },
  },
  {
    title: "Is the Same Performance Really the Same?: Understanding How Listeners Perceive ASR Results Differently According to the Speaker's Accent",
    authors: 'Seoyoung Kim, Yeon Su Park*, Dakyeom Ahn*, Jin Myung Kwak, Juho Kim',
    venue: 'CSCW 2024',
    links: { pdf: 'https://dl.acm.org/doi/abs/10.1145/3641008', website: null, arxiv: null },
  },
  {
    title: 'DynamicLabels: Supporting Informed Construction of Machine Learning Label Sets with Crowd Feedback',
    authors: 'Jeongeon Park, Eun-Young Ko, Yeon Su Park, Jinyeong Yim, Juho Kim',
    venue: 'IUI 2024',
    links: { pdf: 'https://dl.acm.org/doi/abs/10.1145/3640543.3645157', website: 'http://dynamiclabels.kixlab.org/', arxiv: null },
  },
]

const workshops = [
  {
    title: 'PapersPlease: A Benchmark for Evaluating Motivational Values of Large Language Models Based on ERG Theory',
    authors: 'Junho Myung*, Yeon Su Park*, Sunwoo Kim*, Shin Yoo, Alice Oh',
    venue: 'ACL 2025 GEM² Workshop',
    links: { pdf: 'https://aclanthology.org/2025.gem-1.47', website: null, arxiv: 'https://arxiv.org/abs/2506.21961' },
  },
  {
    title: 'Using Large Language Models To Diagnose Math Problem-solving Skills At Scale',
    authors: 'Hyoungwook Jin, Yoonsu Kim, Yeon Su Park, Bekzat Tilekbay, Jinho Son, Juho Kim',
    venue: 'L@S 2024 Work-in-Progress',
    links: { pdf: 'https://dl.acm.org/doi/abs/10.1145/3657604.3664697', website: null, arxiv: null },
  },
]

const preprints = [
  {
    title: "Understanding EFL Learners' Code-Switching and Teachers' Pedagogical Approaches in LLM-Supported Speaking Practice",
    authors: 'Junyeong Park, Jieun Han, Yeon Su Park, Youngbin Lee, Suin Kim, Juho Kim, Alice Oh, So-Yeon Ahn',
    venue: 'arXiv',
    links: { pdf: null, website: null, arxiv: 'https://arxiv.org/abs/2512.23136' },
  },
]

/* ── Helpers ─────────────────────────────────────── */
function Authors({ str }) {
  const parts = str.split(', ')
  return (
    <>
      {parts.map((name, i) => {
        const isMe = name.replace(/\*/g, '').trim() === 'Yeon Su Park'
        return (
          <span key={i}>
            <span style={{ whiteSpace: 'nowrap' }}>
              {isMe ? <strong>{name}</strong> : name}
            </span>
            {i < parts.length - 1 ? ', ' : ''}
          </span>
        )
      })}
    </>
  )
}

function PubLinks({ links }) {
  return (
    <div className="pub-links">
      {links.pdf === 'TBA' ? (
        <span className="pub-chip pub-chip--tba">
          <FileText size={12} strokeWidth={1.8} />
          PDF
        </span>
      ) : links.pdf ? (
        <a href={links.pdf} className="pub-chip" target="_blank" rel="noreferrer">
          <FileText size={12} strokeWidth={1.8} />
          PDF
        </a>
      ) : null}
      {links.website === 'TBA' ? (
        <span className="pub-chip pub-chip--tba">
          <Globe size={12} strokeWidth={1.8} />
          Website
        </span>
      ) : links.website ? (
        <a href={links.website} className="pub-chip" target="_blank" rel="noreferrer">
          <Globe size={12} strokeWidth={1.8} />
          Website
        </a>
      ) : null}
      {links.arxiv && (
        <a href={links.arxiv} className="pub-chip" target="_blank" rel="noreferrer">
          <BookOpen size={12} strokeWidth={1.8} />
          arXiv
        </a>
      )}
    </div>
  )
}

function PubList({ items }) {
  return (
    <ul className="pub-list">
      {items.map((pub, i) => (
        <li key={i} className="pub-item">
          <p className="pub-title">{pub.title}</p>
          <p className="pub-authors"><Authors str={pub.authors} /></p>
          <p className="pub-venue">{pub.venue}</p>
          <PubLinks links={pub.links} />
        </li>
      ))}
    </ul>
  )
}

/* ── App ─────────────────────────────────────────── */
const NEWS_PREVIEW = 5

export default function App() {
  const [showAllNews, setShowAllNews] = useState(false)
  const visibleNews = showAllNews ? news : news.slice(0, NEWS_PREVIEW)

  const [dark, setDark] = useState(() => {
    if (typeof window === 'undefined') return false
    return localStorage.getItem('theme') === 'dark' ||
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <>
      <nav className="navbar">
        <span className="navbar-name">Yeon Su Park</span>
        <div className="navbar-links">
          <a href="#about">About</a>
          <a href="#news">News</a>
          <a href="#publications">Publications</a>
          <button className="theme-toggle" onClick={() => setDark(v => !v)} aria-label="Toggle dark mode">
            {dark ? <Sun size={16} strokeWidth={1.8} /> : <Moon size={16} strokeWidth={1.8} />}
          </button>
        </div>
      </nav>

      <div className="page">
        <aside className="sidebar">
          <img src="/yeonsu.jpeg" alt="Yeon Su Park" className="profile-photo" />
          <h1 className="name">Yeon Su Park</h1>
          <div className="sidebar-info">
            <p>Ph.D. Student</p>
            <p>KIXLAB, KAIST</p>
            <a href="mailto:yeonsupark@kaist.ac.kr" className="sidebar-email">
              yeonsupark@kaist.ac.kr
            </a>
          </div>
          <nav className="social-links" aria-label="Social links">
            {socialLinks.map(({ icon, label, href, external }) => (
              <a
                key={label}
                href={href}
                className="social-btn"
                aria-label={label}
                title={label}
                {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
              >
                {icon}
              </a>
            ))}
          </nav>
        </aside>

        <main className="content">
          <section className="section" id="about">
            <h2 className="section-title">About Me</h2>
            <p className="bio">
              👋 Hi! I am Yeon Su, a first-year Ph.D. student in the{' '}
              <a href="https://cs.kaist.ac.kr/" target="_blank" rel="noreferrer">School of Computing</a>
              {' '}at{' '}
              <a href="https://www.kaist.ac.kr/kr/" target="_blank" rel="noreferrer">KAIST</a>,
              working with Prof.{' '}
              <a href="https://juhokim.com/" target="_blank" rel="noreferrer">Juho Kim</a>
              {' '}at{' '}
              <a href="https://www.kixlab.org/" target="_blank" rel="noreferrer">KIXLAB</a>.
            </p>
            <p className="bio">
              My research mainly focuses on <b>Human–AI Interaction (HAI)</b>. I study how people engage with and rely on AI systems in complex, cognitively demanding tasks, with the goal of understanding what constitutes appropriate reliance and how to support it.
            </p>
            <p className="bio">
              Please do not hesitate to reach out if you are interested in my research or would
              like to collaborate — I am always happy to chat!
            </p>
          </section>

          <section className="section" id="news">
            <h2 className="section-title">News</h2>
            <ul className="news-list">
              {visibleNews.map((item, i) => (
                <li key={i} className="news-item">
                  <span className="news-date">{item.date}</span>
                  <span>{item.emoji} {item.text}</span>
                </li>
              ))}
            </ul>
            {news.length > NEWS_PREVIEW && (
              <button className="show-more" onClick={() => setShowAllNews(v => !v)}>
                {showAllNews ? 'Show less ↑' : `Show ${news.length - NEWS_PREVIEW} more ↓`}
              </button>
            )}
          </section>

          <section className="section" id="publications">
            <h2 className="section-title">Publications</h2>
            <PubList items={publications} />
          </section>

          <section className="section">
            <h2 className="section-title">Posters, Demos &amp; Workshop Papers</h2>
            <PubList items={workshops} />
          </section>

          <section className="section">
            <h2 className="section-title">Preprints</h2>
            <PubList items={preprints} />
          </section>
        </main>
      </div>

      <footer className="footer">
        <p>© 2026 Yeon Su Park &nbsp;·&nbsp; Last Updated: April 10, 2026</p>
      </footer>
    </>
  )
}
