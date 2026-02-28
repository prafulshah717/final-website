import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [mobileDropdown, setMobileDropdown] = useState(null)
  const [activeSerialId, setActiveSerialId] = useState('CAT-01')
  const caseStudySectionRef = useRef(null)
  const caseStudyCardsRef = useRef([])
  const reportSectionRef = useRef(null)
  const reportTrackRef = useRef(null)
  const reportTweenRef = useRef(null)
  const gallerySectionRef = useRef(null)
  const galleryTilesRef = useRef([])
  const capabilitiesSectionRef = useRef(null)
  const capabilityCardsRef = useRef([])
  const industriesSectionRef = useRef(null)
  const industryCardsRef = useRef([])
  const newsSectionRef = useRef(null)
  const newsCardsRef = useRef([])
  const cat08SectionRef = useRef(null)
  const cat08NewsCardsRef = useRef([])
  const careersSectionRef = useRef(null)
  const careerCardsRef = useRef([])

  const categories = [
    {
      serialId: 'CAT-01',
      title: 'Company Overview',
      description: 'High-level summary of mission, positioning, and target audience.'
    },
    {
      serialId: 'CAT-02',
      title: 'Services',
      description: 'Core service offerings and how each solution helps customers.'
    },
    {
      serialId: 'CAT-03',
      title: 'Products',
      description: 'Product lineup with concise details about use cases and value.'
    },
    {
      serialId: 'CAT-04',
      title: 'Case Studies',
      description: 'Selected outcomes, measurable impact, and customer success stories.'
    },
    {
      serialId: 'CAT-05',
      title: 'Testimonials',
      description: 'Client feedback and trust signals that support credibility.'
    },
    {
      serialId: 'CAT-06',
      title: 'Industries We Serve',
      description: 'Sector-focused solutions built for complex operations and scalable transformation.'
    },
    {
      serialId: 'CAT-07',
      title: 'Resources',
      description: 'Guides, articles, and downloadable assets for self-serve learning.'
    },
    {
      serialId: 'CAT-08',
      title: 'FAQ',
      description: 'Common questions around onboarding, support, and implementation.'
    },
    {
      serialId: 'CAT-09',
      title: 'Careers',
      description: 'Join our AI-native marketing and IT teams to build high-impact products and client solutions.'
    }
  ]
  const caseStudies = [
    { id: 'CS-01', title: 'Retail Conversion Lift', summary: 'Redesigned checkout flow and increased conversion rate by 21%.' },
    { id: 'CS-02', title: 'SaaS Onboarding Revamp', summary: 'Reduced first-week churn through guided onboarding and contextual tips.' },
    { id: 'CS-03', title: 'Healthcare Portal UX', summary: 'Improved appointment booking completion with a simpler multi-step form.' },
    { id: 'CS-04', title: 'Fintech Dashboard Clarity', summary: 'Refactored data hierarchy to reduce support tickets on reporting metrics.' },
    { id: 'CS-05', title: 'Education Platform Scale', summary: 'Optimized content delivery for high-traffic course launches.' },
    { id: 'CS-06', title: 'B2B Lead Funnel', summary: 'Implemented segmented landing pages for higher qualified lead volume.' },
    { id: 'CS-07', title: 'Mobile App Retention', summary: 'Added engagement loops that increased returning users month over month.' },
    { id: 'CS-08', title: 'Operations Automation', summary: 'Streamlined internal workflows and reduced manual processing time.' }
  ]
  const researchReports = [
    { id: 'RR-01', label: 'Market Trends 2026', href: '#' },
    { id: 'RR-02', label: 'Consumer Behavior Index', href: '#' },
    { id: 'RR-03', label: 'Digital Adoption Study', href: '#' },
    { id: 'RR-04', label: 'Industry Benchmark Report', href: '#' },
    { id: 'RR-05', label: 'Growth Opportunities Brief', href: '#' }
  ]
  const galleryPlaceholders = Array.from({ length: 11 }, (_, index) => ({
    id: `IMG-${String(index + 1).padStart(2, '0')}`
  }))
  const capabilities = [
    {
      id: 'CAP-01',
      title: 'AI Strategy & Consulting',
      detail: 'Define practical AI roadmaps aligned to growth, operations, and measurable business outcomes.'
    },
    {
      id: 'CAP-02',
      title: 'Performance Marketing Automation',
      detail: 'Use AI-assisted campaign orchestration, audience modeling, and budget optimization across channels.'
    },
    {
      id: 'CAP-03',
      title: 'Content Intelligence',
      detail: 'Generate and optimize multi-format content with workflow automation and quality governance.'
    },
    {
      id: 'CAP-04',
      title: 'CRM & Funnel Engineering',
      detail: 'Build intelligent lead scoring, nurture journeys, and conversion systems integrated with CRM platforms.'
    },
    {
      id: 'CAP-05',
      title: 'Custom AI Product Development',
      detail: 'Design and ship internal tools, copilots, and client-facing AI products with secure architecture.'
    },
    {
      id: 'CAP-06',
      title: 'Cloud, Data & MLOps',
      detail: 'Operationalize AI with scalable data pipelines, model lifecycle management, and observability.'
    }
  ]
  const industries = [
    { id: 'IND-01', name: 'Banking & Financial Services', focus: 'Intelligent risk systems, digital onboarding, and fraud analytics.' },
    { id: 'IND-02', name: 'Healthcare & Life Sciences', focus: 'Patient experience modernization, workflow automation, and compliant data platforms.' },
    { id: 'IND-03', name: 'Retail & Consumer Goods', focus: 'Demand forecasting, personalization engines, and omnichannel growth.' },
    { id: 'IND-04', name: 'Telecom & Media', focus: 'Customer lifecycle intelligence, churn reduction, and content operations.' },
    { id: 'IND-05', name: 'Manufacturing', focus: 'Smart operations, predictive maintenance, and AI-enabled quality management.' },
    { id: 'IND-06', name: 'Energy & Utilities', focus: 'Asset optimization, field service transformation, and resilience planning.' },
    { id: 'IND-07', name: 'Public Sector', focus: 'Citizen-centric services, digital governance, and secure modernization.' },
    { id: 'IND-08', name: 'Technology & SaaS', focus: 'Product-led growth systems, cloud scaling, and platform engineering.' }
  ]
  const corporateNews = [
    {
      id: 'NEWS-01',
      date: 'February 12, 2026',
      title: 'Company Launches AI Transformation Studio',
      summary: 'A dedicated cross-functional unit focused on rapid deployment of AI marketing and IT programs.'
    },
    {
      id: 'NEWS-02',
      date: 'January 28, 2026',
      title: 'Strategic Partnership Announced with Cloud Provider',
      summary: 'The alliance expands enterprise delivery capacity for data modernization and scalable AI operations.'
    },
    {
      id: 'NEWS-03',
      date: 'January 10, 2026',
      title: 'New Global Delivery Center Opens',
      summary: 'The new center strengthens support for clients across product engineering, analytics, and automation.'
    },
    {
      id: 'NEWS-04',
      date: 'December 19, 2025',
      title: 'Recognized for Innovation in Intelligent Marketing',
      summary: 'Industry recognition awarded for measurable impact in personalization and performance growth.'
    },
    {
      id: 'NEWS-05',
      date: 'December 05, 2025',
      title: 'Executive Leadership Team Expansion',
      summary: 'Senior appointments reinforce sector expertise in BFSI, healthcare, and consumer industries.'
    }
  ]
  const cat08News = [
    {
      id: 'C08-NEWS-01',
      title: 'AI Growth Lab Expansion',
      summary: 'We expanded our AI growth lab to support faster prototyping for marketing and IT automation programs.'
    },
    {
      id: 'C08-NEWS-02',
      title: 'Enterprise Data Alliance',
      summary: 'A new strategic alliance now accelerates secure data integration and model deployment at scale.'
    },
    {
      id: 'C08-NEWS-03',
      title: 'Global Delivery Milestone',
      summary: 'Cross-functional teams delivered multi-region transformation programs with measurable business impact.'
    }
  ]
  const openRoles = [
    { id: 'JOB-01', title: 'AI Solutions Architect', location: 'Bengaluru | Hybrid', type: 'Full-time' },
    { id: 'JOB-02', title: 'Performance Marketing Lead', location: 'Mumbai | Hybrid', type: 'Full-time' },
    { id: 'JOB-03', title: 'MLOps Engineer', location: 'Remote', type: 'Full-time' },
    { id: 'JOB-04', title: 'Full Stack Developer', location: 'Pune | Hybrid', type: 'Full-time' },
    { id: 'JOB-05', title: 'Data Analyst - Marketing Intelligence', location: 'Remote', type: 'Full-time' }
  ]

  const navItems = [
    { label: 'Home', href: '#' },
    {
      label: 'Services',
      href: '#',
      dropdown: ['Consulting', 'Design', 'Development']
    },
    {
      label: 'Products',
      href: '#',
      dropdown: ['Starter Kit', 'Pro Suite', 'Enterprise']
    },
    {
      label: 'Resources',
      href: '#',
      dropdown: ['Docs', 'Blog', 'Guides']
    },
    { label: 'Contact', href: '#' }
  ]

  useEffect(() => {
    document.body.classList.toggle('menu-open', isMenuOpen)
    return () => document.body.classList.remove('menu-open')
  }, [isMenuOpen])

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('[data-serial-id]'))
    if (!sections.length) return undefined

    let rafId = null
    const updateActiveSection = () => {
      const viewportFocus = window.innerHeight * 0.42
      let closestSection = null
      let smallestDistance = Number.POSITIVE_INFINITY

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        const sectionCenter = rect.top + rect.height / 2
        const distance = Math.abs(sectionCenter - viewportFocus)

        if (distance < smallestDistance) {
          smallestDistance = distance
          closestSection = section
        }
      })

      const serialId = closestSection?.getAttribute('data-serial-id')
      if (serialId) setActiveSerialId(serialId)
      rafId = null
    }

    const onScrollOrResize = () => {
      if (rafId !== null) return
      rafId = window.requestAnimationFrame(updateActiveSection)
    }

    updateActiveSection()
    window.addEventListener('scroll', onScrollOrResize, { passive: true })
    window.addEventListener('resize', onScrollOrResize)

    return () => {
      window.removeEventListener('scroll', onScrollOrResize)
      window.removeEventListener('resize', onScrollOrResize)
      if (rafId !== null) window.cancelAnimationFrame(rafId)
    }
  }, [])

  useEffect(() => {
    const section = caseStudySectionRef.current
    const cards = caseStudyCardsRef.current.filter(Boolean)
    if (!section || !cards.length) return undefined

    let hasAnimated = false
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry.isIntersecting || hasAnimated) return

        hasAnimated = true
        gsap.fromTo(
          cards,
          {
            opacity: 0,
            y: -220,
            x: (i) => Math.cos(i * 0.9) * 130,
            rotation: (i) => -170 + i * 28,
            scale: 0.68,
            transformOrigin: '50% 50%'
          },
          {
            opacity: 1,
            y: 0,
            x: 0,
            rotation: 0,
            scale: 1,
            duration: 1.05,
            stagger: 0.12,
            ease: 'power3.out'
          }
        )
        observer.disconnect()
      },
      { threshold: 0.35 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const section = reportSectionRef.current
    const track = reportTrackRef.current
    if (!section || !track) return undefined

    reportTweenRef.current = gsap.to(track, {
      xPercent: -50,
      duration: 14,
      ease: 'none',
      repeat: -1,
      paused: true
    })

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!reportTweenRef.current) return
        if (entry.isIntersecting) {
          reportTweenRef.current.play()
        } else {
          reportTweenRef.current.pause()
        }
      },
      { threshold: 0.35 }
    )

    observer.observe(section)
    return () => {
      observer.disconnect()
      reportTweenRef.current?.kill()
      reportTweenRef.current = null
    }
  }, [])

  useEffect(() => {
    const section = gallerySectionRef.current
    const tiles = galleryTilesRef.current.filter(Boolean)
    if (!section || !tiles.length) return undefined

    let hasAnimated = false
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry.isIntersecting || hasAnimated) return

        hasAnimated = true
        gsap.fromTo(
          tiles,
          {
            opacity: 0,
            y: 320,
            scale: 0.82,
            skewY: 5
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            skewY: 0,
            duration: 0.9,
            stagger: 0.08,
            ease: 'back.out(1.35)'
          }
        )
        observer.disconnect()
      },
      { threshold: 0.28 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const section = capabilitiesSectionRef.current
    const cards = capabilityCardsRef.current.filter(Boolean)
    if (!section || !cards.length) return undefined

    let hasAnimated = false
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry.isIntersecting || hasAnimated) return

        hasAnimated = true
        gsap.fromTo(
          cards,
          {
            opacity: 0,
            y: -260,
            x: (i) => (i % 2 === 0 ? -28 : 28),
            rotation: (i) => (i % 2 === 0 ? -8 : 8),
            scale: 0.9
          },
          {
            opacity: 1,
            y: 0,
            x: 0,
            rotation: 0,
            scale: 1,
            duration: 1.15,
            stagger: {
              each: 0.1,
              from: 'random'
            },
            ease: 'power2.out'
          }
        )
        observer.disconnect()
      },
      { threshold: 0.3 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const section = industriesSectionRef.current
    const cards = industryCardsRef.current.filter(Boolean)
    if (!section || !cards.length) return undefined

    let hasAnimated = false
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry.isIntersecting || hasAnimated) return

        hasAnimated = true
        gsap.fromTo(
          cards,
          {
            opacity: 0,
            y: 260,
            x: (i) => (i % 2 === 0 ? -34 : 34),
            scale: 0.82,
            rotation: (i) => (i % 2 === 0 ? -6 : 6)
          },
          {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            rotation: 0,
            duration: 1,
            stagger: 0.09,
            ease: 'power3.out'
          }
        )
        observer.disconnect()
      },
      { threshold: 0.3 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const section = newsSectionRef.current
    const cards = newsCardsRef.current.filter(Boolean)
    if (!section || !cards.length) return undefined

    let hasAnimated = false
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry.isIntersecting || hasAnimated) return

        hasAnimated = true
        gsap.fromTo(
          cards,
          {
            opacity: 0,
            x: -320,
            y: (i) => (i % 2 === 0 ? -24 : 24),
            rotation: (i) => (i % 2 === 0 ? -14 : 14),
            scale: 0.88
          },
          {
            opacity: 1,
            x: 0,
            y: 0,
            rotation: 0,
            scale: 1,
            duration: 1.05,
            stagger: 0.12,
            ease: 'power3.out'
          }
        )
        observer.disconnect()
      },
      { threshold: 0.3 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const section = careersSectionRef.current
    const cards = careerCardsRef.current.filter(Boolean)
    if (!section || !cards.length) return undefined

    let hasAnimated = false
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry.isIntersecting || hasAnimated) return

        hasAnimated = true
        gsap.fromTo(
          cards,
          {
            opacity: 0,
            y: -300,
            x: (i) => (i % 2 === 0 ? -18 : 18),
            rotation: (i) => (i % 2 === 0 ? -7 : 7),
            scale: 0.88
          },
          {
            opacity: 1,
            y: 0,
            x: 0,
            rotation: 0,
            scale: 1,
            duration: 1,
            stagger: 0.1,
            ease: 'power2.out'
          }
        )
        observer.disconnect()
      },
      { threshold: 0.3 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const section = cat08SectionRef.current
    const cards = cat08NewsCardsRef.current.filter(Boolean)
    if (!section || !cards.length) return undefined

    let hasAnimated = false
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry.isIntersecting || hasAnimated) return

        hasAnimated = true
        gsap.fromTo(
          cards,
          {
            opacity: 0,
            x: (i) => (1 - i) * 180,
            y: 220,
            scale: 0.2,
            rotation: (i) => (i === 1 ? 0 : i === 0 ? -12 : 12)
          },
          {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            rotation: 0,
            duration: 1.2,
            stagger: 0.06,
            ease: 'power3.out'
          }
        )
        observer.disconnect()
      },
      { threshold: 0.3 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  const toggleDesktopDropdown = (label) => {
    setOpenDropdown((prev) => (prev === label ? null : label))
  }

  const toggleMobileDropdown = (label) => {
    setMobileDropdown((prev) => (prev === label ? null : label))
  }

  return (
    <>
      <Head>
        <title>My Next.js Site</title>
        <meta name="description" content="A minimal Next.js scaffold" />
      </Head>

      <header className="site-header">
        <div className="header-logo-wrap">
          <a href="#" className="header-logo" aria-label="Homepage">
            Logo
          </a>
        </div>

        <nav className="header-nav" aria-label="Primary">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.label} className="nav-item">
                {item.dropdown ? (
                  <>
                    <button
                      className="nav-link nav-button"
                      onClick={() => toggleDesktopDropdown(item.label)}
                      aria-expanded={openDropdown === item.label}
                      aria-haspopup="true"
                    >
                      {item.label}
                    </button>
                    <ul
                      className={`dropdown-menu ${openDropdown === item.label ? 'is-open' : ''}`}
                    >
                      {item.dropdown.map((subItem) => (
                        <li key={subItem}>
                          <a href="#" className="dropdown-link">
                            {subItem}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <a href={item.href} className="nav-link">
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <button
          className={`burger ${isMenuOpen ? 'is-open' : ''}`}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-overlay-menu"
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <div
        id="mobile-overlay-menu"
        className={`menu-overlay ${isMenuOpen ? 'is-open' : ''}`}
        aria-hidden={!isMenuOpen}
      >
        <nav className="overlay-nav" aria-label="Mobile">
          <ul className="overlay-list">
            {navItems.map((item) => (
              <li key={`mobile-${item.label}`} className="overlay-item">
                {item.dropdown ? (
                  <>
                    <button
                      className="overlay-link overlay-button"
                      onClick={() => toggleMobileDropdown(item.label)}
                      aria-expanded={mobileDropdown === item.label}
                    >
                      {item.label}
                    </button>
                    <ul className={`overlay-dropdown ${mobileDropdown === item.label ? 'is-open' : ''}`}>
                      {item.dropdown.map((subItem) => (
                        <li key={`mobile-${item.label}-${subItem}`}>
                          <a href="#" className="overlay-sublink">
                            {subItem}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <a href={item.href} className="overlay-link">
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <aside className="section-rail" aria-label="Current section indicator">
        <ul className="section-rail-list">
          {categories.map((category) => (
            <li
              key={`rail-${category.serialId}`}
              className={`rail-item ${activeSerialId === category.serialId ? 'is-active' : ''}`}
            >
              <a href={`#section-${category.serialId.toLowerCase()}`} className="rail-link">
                <span className="rail-dot" aria-hidden="true" />
                <span className="rail-title">{category.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </aside>

      <main className="hero-page">
        {/* <header className="hero-intro">
          <h1>My Next.js Site</h1>
          <p className="lead">Nine information categories with serial IDs for easy future editing.</p>
        </header> */}

        {categories.map((category, index) => (
          <section
            key={category.serialId}
            id={`section-${category.serialId.toLowerCase()}`}
            data-serial-id={category.serialId}
            className={`hero-section hero-tone-${(index % 3) + 1}`}
            ref={(el) => {
              if (category.serialId === 'CAT-02') caseStudySectionRef.current = el
              if (category.serialId === 'CAT-04') gallerySectionRef.current = el
              if (category.serialId === 'CAT-05') capabilitiesSectionRef.current = el
              if (category.serialId === 'CAT-06') industriesSectionRef.current = el
              if (category.serialId === 'CAT-07') newsSectionRef.current = el
              if (category.serialId === 'CAT-08') cat08SectionRef.current = el
              if (category.serialId === 'CAT-09') careersSectionRef.current = el
            }}
          >
            <div className="hero-inner">
              <p className="serial-id">{category.serialId}</p>
              <h2>{category.title}</h2>
              {category.serialId === 'CAT-01' ? (
                <div className="media-placeholder" role="img" aria-label="Video or infographic placeholder">
                  <span>Video / Infographic Placeholder</span>
                </div>
              ) : category.serialId === 'CAT-02' ? (
                <div className="case-studies-grid">
                  {caseStudies.map((study, studyIndex) => (
                    <article
                      key={study.id}
                      className="case-study-card"
                      data-case-id={study.id}
                      ref={(el) => {
                        caseStudyCardsRef.current[studyIndex] = el
                      }}
                    >
                      <p className="case-id">{study.id}</p>
                      <h3>{study.title}</h3>
                      <p>{study.summary}</p>
                    </article>
                  ))}
                </div>
              ) : category.serialId === 'CAT-03' ? (
                <div
                  className="report-links-row"
                  role="list"
                  aria-label="Research reports"
                  ref={reportSectionRef}
                >
                  <div className="report-links-track" ref={reportTrackRef}>
                    {[...researchReports, ...researchReports].map((report, reportIndex) => (
                      <a
                        key={`${report.id}-${reportIndex}`}
                        href={report.href}
                        className="report-link"
                        data-report-id={report.id}
                        role="listitem"
                      >
                        <span className="report-id">{report.id}</span>
                        <span>{report.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              ) : category.serialId === 'CAT-04' ? (
                <div className="pinterest-gallery" aria-label="Image placeholder gallery">
                  {galleryPlaceholders.map((image, imageIndex) => (
                    <div
                      key={image.id}
                      className={`gallery-tile tile-height-${(imageIndex % 4) + 1}`}
                      data-image-id={image.id}
                      ref={(el) => {
                        galleryTilesRef.current[imageIndex] = el
                      }}
                    >
                      <span>{image.id}</span>
                    </div>
                  ))}
                </div>
              ) : category.serialId === 'CAT-05' ? (
                <div className="capabilities-wrap">
                  <p className="capabilities-intro">
                    We are an AI-native marketing and IT company delivering integrated growth systems, modern
                    software, and automation-first operations.
                  </p>
                  <div className="capabilities-grid">
                    {capabilities.map((capability, capabilityIndex) => (
                      <article
                        key={capability.id}
                        className="capability-card"
                        data-capability-id={capability.id}
                        ref={(el) => {
                          capabilityCardsRef.current[capabilityIndex] = el
                        }}
                      >
                        <p className="capability-id">{capability.id}</p>
                        <h3>{capability.title}</h3>
                        <p>{capability.detail}</p>
                      </article>
                    ))}
                  </div>
                </div>
              ) : category.serialId === 'CAT-06' ? (
                <div className="industries-wrap">
                  <p className="industries-intro">
                    We bring cross-industry execution depth with domain-aware teams, delivering transformation
                    programs that combine AI, marketing, and core technology.
                  </p>
                  <div className="industries-grid">
                    {industries.map((industry, industryIndex) => (
                      <article
                        key={industry.id}
                        className="industry-card"
                        data-industry-id={industry.id}
                        ref={(el) => {
                          industryCardsRef.current[industryIndex] = el
                        }}
                      >
                        <p className="industry-id">{industry.id}</p>
                        <h3>{industry.name}</h3>
                        <p>{industry.focus}</p>
                      </article>
                    ))}
                  </div>
                </div>
              ) : category.serialId === 'CAT-07' ? (
                <div className="news-wrap">
                  <p className="news-intro">
                    Latest corporate updates from our leadership, partnerships, delivery footprint, and innovation
                    initiatives.
                  </p>
                  <div className="news-list">
                    {corporateNews.map((item, newsIndex) => (
                      <article
                        key={item.id}
                        className="news-card"
                        data-news-id={item.id}
                        ref={(el) => {
                          newsCardsRef.current[newsIndex] = el
                        }}
                      >
                        <p className="news-meta">{item.id} | {item.date}</p>
                        <h3>{item.title}</h3>
                        <p>{item.summary}</p>
                      </article>
                    ))}
                  </div>
                </div>
              ) : category.serialId === 'CAT-08' ? (
                <div className="cat08-news-wrap">
                  <p className="cat08-news-intro">
                    Highlights from our strategic initiatives, partnerships, and delivery momentum.
                  </p>
                  <div className="cat08-fountain-stage">
                    {cat08News.map((item, itemIndex) => (
                      <article
                        key={item.id}
                        className="cat08-news-card"
                        data-cat08-news-id={item.id}
                        ref={(el) => {
                          cat08NewsCardsRef.current[itemIndex] = el
                        }}
                      >
                        <p className="cat08-news-id">{item.id}</p>
                        <h3>{item.title}</h3>
                        <p>{item.summary}</p>
                      </article>
                    ))}
                  </div>
                </div>
              ) : category.serialId === 'CAT-09' ? (
                <div className="careers-wrap">
                  <p className="careers-intro">
                    Build with teams solving real business challenges through AI, growth marketing, and modern
                    engineering. We hire builders who like ownership and measurable outcomes.
                  </p>
                  <div className="careers-grid">
                    {openRoles.map((role, roleIndex) => (
                      <article
                        key={role.id}
                        className="career-card"
                        data-role-id={role.id}
                        ref={(el) => {
                          careerCardsRef.current[roleIndex] = el
                        }}
                      >
                        <p className="career-id">{role.id}</p>
                        <h3>{role.title}</h3>
                        <p>{role.location}</p>
                        <p>{role.type}</p>
                      </article>
                    ))}
                  </div>
                </div>
              ) : (
                <p>{category.description}</p>
              )}
            </div>
          </section>
        ))}
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <p>© 2026 My Next.js Site. All rights reserved.</p>
          <nav aria-label="Footer">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Support</a>
          </nav>
        </div>
      </footer>

      <style jsx>{`
        .hero-page {
          width: 100%;
          margin: 0;
          background: #ffffff;
        }
        .section-rail {
          position: fixed;
          left: 0.75rem;
          top: 50%;
          transform: translateY(-50%);
          z-index: 49;
          width: 220px;
        }
        .section-rail-list {
          margin: 0;
          padding: 0;
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.48rem;
        }
        .rail-item {
          position: relative;
        }
        .rail-link {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          text-decoration: none;
          border-radius: 999px;
          padding: 0.26rem 0.45rem 0.26rem 1.35rem;
          transition: background 0.25s ease;
        }
        .rail-dot {
          position: absolute;
          left: 2px;
          top: 50%;
          transform: translateY(-50%);
          width: 12px;
          height: 12px;
          border-radius: 999px;
          border: 1px solid #b8b8b8;
          background: #fff;
        }
        .rail-title {
          max-width: 0;
          opacity: 0;
          overflow: hidden;
          white-space: nowrap;
          color: #4b5563;
          font-size: 0.82rem;
          font-weight: 600;
          transition: max-width 0.25s ease, opacity 0.25s ease;
        }
        .rail-item.is-active .rail-link {
          background: rgba(255, 255, 255, 0.92);
          box-shadow: 0 6px 18px rgba(15, 23, 42, 0.12);
          padding-right: 0.65rem;
        }
        .rail-item.is-active .rail-dot {
          background: #d4af37;
          border-color: #d4af37;
        }
        .rail-item.is-active .rail-title {
          max-width: 170px;
          opacity: 1;
        }
        .hero-intro {
          max-width: 1100px;
          margin: 0 auto;
          padding: 2.5rem 1.25rem 1.5rem;
        }
        .lead { color: #555; }
        .hero-section {
          min-height: 70vh;
          width: 100%;
          display: flex;
          align-items: center;
          border-top: 1px solid #d6d6d6;
          border-bottom: 1px solid #d6d6d6;
        }
        .hero-inner {
          width: min(1100px, 100%);
          margin: 0 auto;
          padding: clamp(2rem, 6vw, 5rem) 1.25rem;
        }
        .serial-id {
          margin: 0 0 0.4rem;
          font-size: 0.78rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #6b7280;
          font-weight: 600;
        }
        .hero-section h2 {
          margin: 0 0 0.35rem;
          font-size: clamp(1.8rem, 4vw, 3rem);
        }
        .hero-section p {
          margin: 0;
          line-height: 1.6;
          max-width: 72ch;
          font-size: clamp(1rem, 1.8vw, 1.2rem);
        }
        .media-placeholder {
          margin-top: 0.5rem;
          width: min(860px, 100%);
          min-height: clamp(220px, 38vw, 420px);
          border: 2px dashed #7c8aa0;
          border-radius: 14px;
          display: grid;
          place-items: center;
          background: rgba(255, 255, 255, 0.55);
        }
        .media-placeholder span {
          color: #475569;
          font-weight: 600;
          letter-spacing: 0.03em;
          text-align: center;
          padding: 0 1rem;
        }
        .case-studies-grid {
          margin-top: 0.8rem;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.85rem;
        }
        .case-study-card {
          background: rgba(255, 255, 255, 0.92);
          border: 1px solid #c0c0c0;
          border-radius: 12px;
          padding: 0.9rem;
        }
        .case-id {
          margin: 0 0 0.2rem;
          font-size: 0.75rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #6b7280;
          font-weight: 700;
        }
        .case-study-card h3 {
          margin: 0 0 0.35rem;
          font-size: 1.05rem;
        }
        .case-study-card p {
          margin: 0;
          font-size: 0.96rem;
          line-height: 1.5;
        }
        .report-links-row {
          margin-top: 0.8rem;
          overflow: hidden;
          padding: 0.2rem 0 0.35rem;
        }
        .report-links-track {
          display: flex;
          gap: 0.75rem;
          width: max-content;
          will-change: transform;
        }
        .report-link {
          min-width: 210px;
          flex: 0 0 auto;
          border: 1px solid #c0c0c0;
          border-radius: 10px;
          padding: 0.75rem 0.8rem;
          text-decoration: none;
          color: #1f2937;
          background: rgba(255, 255, 255, 0.94);
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .report-id {
          font-size: 0.72rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #6b7280;
          font-weight: 700;
        }
        .pinterest-gallery {
          margin-top: 0.9rem;
          column-count: 4;
          column-gap: 0.85rem;
        }
        .gallery-tile {
          break-inside: avoid;
          border-radius: 12px;
          border: 1px dashed #c0c0c0;
          background: rgba(255, 255, 255, 0.72);
          display: grid;
          place-items: center;
          margin-bottom: 0.85rem;
          color: #475569;
          font-weight: 600;
          font-size: 0.88rem;
          letter-spacing: 0.04em;
          will-change: transform, opacity;
        }
        .tile-height-1 {
          min-height: 140px;
        }
        .tile-height-2 {
          min-height: 200px;
        }
        .tile-height-3 {
          min-height: 170px;
        }
        .tile-height-4 {
          min-height: 240px;
        }
        .capabilities-wrap {
          margin-top: 0.85rem;
        }
        .capabilities-intro {
          margin: 0 0 0.9rem;
          max-width: 74ch;
          font-size: 1rem;
        }
        .capabilities-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0.85rem;
        }
        .capability-card {
          border: 1px solid #c0c0c0;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.94);
          padding: 0.9rem;
          will-change: transform, opacity;
        }
        .capability-id {
          margin: 0 0 0.2rem;
          font-size: 0.72rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #6b7280;
          font-weight: 700;
        }
        .capability-card h3 {
          margin: 0 0 0.35rem;
          font-size: 1.04rem;
        }
        .capability-card p {
          margin: 0;
          font-size: 0.95rem;
          line-height: 1.5;
        }
        .industries-wrap {
          margin-top: 0.85rem;
        }
        .industries-intro {
          margin: 0 0 1rem;
          max-width: 76ch;
          font-size: 1rem;
        }
        .industries-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 0.85rem;
        }
        .industry-card {
          border: 1px solid #c0c0c0;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.94);
          padding: 0.9rem;
          will-change: transform, opacity;
        }
        .industry-id {
          margin: 0 0 0.2rem;
          font-size: 0.72rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #6b7280;
          font-weight: 700;
        }
        .industry-card h3 {
          margin: 0 0 0.35rem;
          font-size: 1rem;
        }
        .industry-card p {
          margin: 0;
          font-size: 0.92rem;
          line-height: 1.45;
        }
        .news-wrap {
          margin-top: 0.85rem;
        }
        .news-intro {
          margin: 0 0 1rem;
          max-width: 76ch;
          font-size: 1rem;
        }
        .news-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.85rem;
        }
        .news-card {
          border: 1px solid #c0c0c0;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.94);
          padding: 0.95rem;
          will-change: transform, opacity;
        }
        .news-meta {
          margin: 0 0 0.25rem;
          font-size: 0.74rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #6b7280;
          font-weight: 700;
        }
        .news-card h3 {
          margin: 0 0 0.35rem;
          font-size: 1.03rem;
        }
        .news-card p {
          margin: 0;
          font-size: 0.95rem;
          line-height: 1.5;
        }
        .cat08-news-wrap {
          margin-top: 0.85rem;
        }
        .cat08-news-intro {
          margin: 0 0 0.85rem;
          max-width: 74ch;
          font-size: 1rem;
        }
        .cat08-fountain-stage {
          min-height: 470px;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          align-items: end;
          gap: 1rem;
          overflow: hidden;
          padding-bottom: 0.5rem;
        }
        .cat08-news-card {
          width: min(220px, 100%);
          justify-self: center;
          min-height: 330px;
          border: 1px solid #c0c0c0;
          border-radius: 26px;
          background: rgba(255, 255, 255, 0.96);
          padding: 1rem 0.9rem;
          will-change: transform, opacity;
          box-shadow: 0 10px 24px rgba(20, 33, 61, 0.12);
        }
        .cat08-news-id {
          margin: 0 0 0.3rem;
          font-size: 0.72rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #64748b;
          font-weight: 700;
        }
        .cat08-news-card h3 {
          margin: 0 0 0.4rem;
          font-size: 1.02rem;
          line-height: 1.35;
        }
        .cat08-news-card p {
          margin: 0;
          font-size: 0.94rem;
          line-height: 1.45;
        }
        .careers-wrap {
          margin-top: 0.85rem;
        }
        .careers-intro {
          margin: 0 0 1rem;
          max-width: 76ch;
          font-size: 1rem;
        }
        .careers-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.85rem;
        }
        .career-card {
          border: 1px solid #c0c0c0;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.94);
          padding: 0.95rem;
          will-change: transform, opacity;
        }
        .career-id {
          margin: 0 0 0.2rem;
          font-size: 0.74rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #6b7280;
          font-weight: 700;
        }
        .career-card h3 {
          margin: 0 0 0.4rem;
          font-size: 1.02rem;
        }
        .career-card p {
          margin: 0;
          font-size: 0.94rem;
          line-height: 1.45;
        }
        .hero-tone-1 {
          background: linear-gradient(120deg, #ffffff 0%, #f8f8f8 52%, #f6e9c7 100%);
        }
        .hero-tone-2 {
          background: linear-gradient(120deg, #ffffff 0%, #f2f2f2 58%, #f4e6bf 100%);
        }
        .hero-tone-3 {
          background: linear-gradient(120deg, #ffffff 0%, #fafafa 58%, #efe1b8 100%);
        }
        .site-footer {
          border-top: 1px solid #d4af37;
          background: #f3f4f6;
          color: #1f2937;
        }
        .footer-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 1.2rem 1.25rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .footer-inner p {
          margin: 0;
          font-size: 0.92rem;
        }
        .footer-inner nav {
          display: flex;
          gap: 1rem;
        }
        .footer-inner a {
          color: #374151;
          text-decoration: none;
          font-size: 0.92rem;
        }
        .case-study-card,
        .report-link,
        .gallery-tile,
        .capability-card,
        .industry-card,
        .news-card,
        .cat08-news-card,
        .career-card {
          transition: border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease;
        }
        .case-study-card:hover,
        .report-link:hover,
        .gallery-tile:hover,
        .capability-card:hover,
        .industry-card:hover,
        .news-card:hover,
        .cat08-news-card:hover,
        .career-card:hover {
          border-color: #16a34a;
          box-shadow: 0 10px 20px rgba(22, 163, 74, 0.2);
          transform: translateY(-2px);
        }
        .nav-link:hover,
        .dropdown-link:hover,
        .overlay-link:hover,
        .overlay-sublink:hover,
        .report-link:hover,
        .footer-inner a:hover,
        .rail-link:hover .rail-title {
          text-decoration: underline;
          text-decoration-color: #7e22ce;
          text-underline-offset: 3px;
        }
        @media (max-width: 768px) {
          .section-rail {
            display: none;
          }
          .hero-section {
            min-height: 55vh;
          }
          .case-studies-grid {
            grid-template-columns: 1fr;
          }
          .pinterest-gallery {
            column-count: 2;
          }
          .capabilities-grid {
            grid-template-columns: 1fr;
          }
          .industries-grid {
            grid-template-columns: 1fr;
          }
          .news-list {
            grid-template-columns: 1fr;
          }
          .cat08-fountain-stage {
            min-height: 420px;
            grid-template-columns: 1fr;
            align-items: stretch;
          }
          .cat08-news-card {
            width: 180px;
            min-height: 280px;
            border-radius: 22px;
          }
          .careers-grid {
            grid-template-columns: 1fr;
          }
          .footer-inner {
            justify-content: center;
          }
        }
      `}</style>
    </>
  )
}
