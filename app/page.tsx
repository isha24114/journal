import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import ArticleSectionBlock from "@/components/ArticleSectionBlock";
import GuideCard from "@/components/GuideCard";
import {
  article,
  landscapeSection,
  heritageSection,
  detailsSection,
  repeatHeritageSection,
  relatedGuides,
} from "@/components/content";

export default function Page() {
  return (
    <main className="bg-(--color-page)">
      <div className="mx-auto max-w-(--container-page) px-4 py-10 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-[60px] lg:py-16 xl:px-[100px]">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-10 xl:gap-10">
          {/* ---------------------------------------------------------- */}
          {/* Article column                                             */}
          {/* ---------------------------------------------------------- */}
          <article className="min-w-0 flex-1 order-2 lg:order-1 xl:w-[880px] xl:flex-none">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] xl:aspect-[880/494] w-full overflow-hidden rounded-xl sm:rounded-2xl xl:rounded-[18px]">
              <Image
                src={article.heroImage}
                alt={article.heroAlt}
                fill
                priority
                sizes="(min-width: 1280px) 900px, (min-width: 1024px) 66vw, 100vw"
                className="object-cover"
              />
            </div>

            {/* Meta row */}
            <div className="article-meta mt-4 sm:mt-5 flex w-full max-w-[543px] flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm text-(--color-heading)">
              <span className="inline-flex items-center gap-1.5">
                <svg aria-hidden width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-icon)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21a8 8 0 0 0-16 0" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                By {article.author}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <svg aria-hidden width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-icon)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>
                {article.readTime}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <svg aria-hidden width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-icon)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="17" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
                {article.publishedDate}
              </span>
            </div>

            <p className="mt-5 sm:mt-6 text-[11px] sm:text-xs font-semibold tracking-[0.14em] text-(--color-heading) uppercase">
              {article.eyebrow}
            </p>

            <h1 className="article-title mt-2 sm:mt-3 text-(--color-heading)">
              {article.title}
            </h1>

            <div className="mt-5 sm:mt-6 space-y-3 sm:space-y-4">
              {article.intro.map((p, i) => (
                <p key={i} className="text-body text-(--color-ink-soft)">
                  {p}
                </p>
              ))}
            </div>

            <ArticleSectionBlock {...landscapeSection} />
            <ArticleSectionBlock {...heritageSection} />

            <section className="mt-8 sm:mt-10">
              <h2 className="text-heading text-(--color-heading)">
                {detailsSection.heading}
              </h2>
              <p className="text-body mt-3 sm:mt-4 text-(--color-ink-soft)">
                {detailsSection.paragraph}
              </p>

              <div className="mt-5 sm:mt-6 grid grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-2">
                {detailsSection.images.map((img, i) => (
                  <div
                    key={i}
                    className="relative aspect-[4/3] w-full overflow-hidden rounded-lg sm:rounded-xl"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </section>

            <ArticleSectionBlock {...repeatHeritageSection} />
          </article>

          {/* ---------------------------------------------------------- */}
          {/* Sidebar — full width on mobile, sticky on desktop          */}
          {/* ---------------------------------------------------------- */}
          <div className="order-1 lg:order-2 w-full max-w-[320px] mx-auto lg:mx-0 lg:w-[300px] xl:w-[320px] shrink-0">
            <div className="lg:sticky lg:top-8">
              <Sidebar />
            </div>
          </div>
        </div>

        {/* -------------------------------------------------------------- */}
        {/* Related guides                                                  */}
        {/* -------------------------------------------------------------- */}
        <section className="mt-12 sm:mt-16 md:mt-20 border-t border-(--color-hairline) pt-10 sm:pt-12 md:pt-14">
          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-end sm:justify-between gap-4">
            <div>
                <p className="text-[11px] sm:text-xs font-semibold tracking-[0.14em] text-(--color-related) uppercase">
                Related Guides
              </p>
              <h2 className="related-title mt-1.5 sm:mt-2 text-(--color-heading)">
                Keep exploring GIR
              </h2>
            </div>

            <a
              href="#"
              className="inline-flex self-start rounded-full border border-(--color-hairline) px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-medium text-(--color-ink) transition-colors hover:bg-(--color-card)"
            >
              Destination Guides →
            </a>
          </div>

          <div className="mt-8 sm:mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
            {relatedGuides.map((guide, i) => (
              <GuideCard key={i} {...guide} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
