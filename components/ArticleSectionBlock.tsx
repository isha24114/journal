import type { ArticleSection } from "./content";

export default function ArticleSectionBlock({ heading, paragraphs }: ArticleSection) {
  return (
    <section className="mt-8 sm:mt-10">
      <h2 className="text-heading text-(--color-ink)">{heading}</h2>
      <div className="mt-3 sm:mt-4 space-y-3 sm:space-y-4">
        {paragraphs.map((p, i) => (
          <p key={i} className="text-body text-(--color-ink-soft)">
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}
