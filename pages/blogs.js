import Head from 'next/head'
import Link from 'next/link'

const BLOGS_PER_PAGE = 30
const TOTAL_BLOGS = 180

const allBlogs = Array.from({ length: TOTAL_BLOGS }, (_, index) => {
  const id = index + 1
  return {
    id,
    slug: `blog-${id}`,
    title: `Blog Post ${id}`,
    excerpt: `Summary for blog post ${id}. This placeholder can be replaced with your real article preview content.`,
    date: `2026-01-${String((id % 28) + 1).padStart(2, '0')}`
  }
})

export default function BlogsPage({ blogs, currentPage, totalPages }) {
  return (
    <>
      <Head>
        <title>Blogs | My Next.js Site</title>
        <meta name="description" content="Browse all blog posts with numeric pagination." />
      </Head>

      <main className="blogs-page">
        <div className="blogs-wrap">
          <header className="blogs-header">
            <h1>Blog Library</h1>
            <p>All blogs in one place with page-number navigation.</p>
          </header>

          <section className="blog-list" aria-label="Blog posts">
            {blogs.map((blog) => (
              <article key={blog.id} className="blog-card">
                <p className="blog-meta">{blog.date}</p>
                <h2>{blog.title}</h2>
                <p>{blog.excerpt}</p>
                <Link href="#" className="read-link">Read article</Link>
              </article>
            ))}
          </section>

          <nav className="pagination" aria-label="Blog pagination">
            {Array.from({ length: totalPages }, (_, index) => {
              const pageNumber = index + 1
              const isActive = pageNumber === currentPage

              return (
                <Link
                  key={pageNumber}
                  href={`/blogs?page=${pageNumber}`}
                  className={`page-btn ${isActive ? 'is-active' : ''}`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {pageNumber}
                </Link>
              )
            })}
          </nav>
        </div>
      </main>

      <style jsx>{`
        .blogs-page {
          min-height: 100vh;
          background: #fff;
          padding: 2rem 1rem 3rem;
        }
        .blogs-wrap {
          max-width: 1100px;
          margin: 0 auto;
        }
        .blogs-header h1 {
          margin: 0;
          font-size: clamp(2rem, 4vw, 2.8rem);
        }
        .blogs-header p {
          margin: 0.45rem 0 1.5rem;
          color: #4b5563;
        }
        .blog-list {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0.9rem;
        }
        .blog-card {
          border: 1px solid #d4d4d8;
          border-radius: 12px;
          padding: 0.95rem;
          background: #fafafa;
        }
        .blog-meta {
          margin: 0 0 0.25rem;
          font-size: 0.75rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #6b7280;
        }
        .blog-card h2 {
          margin: 0 0 0.4rem;
          font-size: 1.1rem;
        }
        .blog-card p {
          margin: 0 0 0.6rem;
          line-height: 1.5;
          color: #1f2937;
        }
        .read-link {
          color: #374151;
          text-decoration: none;
          font-weight: 600;
        }
        .read-link:hover {
          text-decoration: underline;
          text-decoration-color: #7e22ce;
          text-underline-offset: 3px;
        }
        .pagination {
          margin-top: 1.3rem;
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
        }
        .page-btn {
          min-width: 36px;
          height: 36px;
          border: 1px solid #c4c4c4;
          border-radius: 8px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #111827;
          text-decoration: none;
          background: #fff;
          font-weight: 600;
        }
        .page-btn:hover {
          border-color: #16a34a;
          box-shadow: 0 0 0 2px rgba(22, 163, 74, 0.2);
        }
        .page-btn.is-active {
          background: #d4af37;
          border-color: #d4af37;
          color: #111827;
        }
        @media (max-width: 900px) {
          .blog-list {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        @media (max-width: 640px) {
          .blog-list {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  )
}

export async function getServerSideProps(context) {
  const pageParam = Number.parseInt(String(context.query.page || '1'), 10)
  const totalPages = Math.ceil(allBlogs.length / BLOGS_PER_PAGE)
  const safePage = Number.isNaN(pageParam)
    ? 1
    : Math.min(Math.max(pageParam, 1), totalPages)

  const start = (safePage - 1) * BLOGS_PER_PAGE
  const end = start + BLOGS_PER_PAGE

  return {
    props: {
      blogs: allBlogs.slice(start, end),
      currentPage: safePage,
      totalPages
    }
  }
}
