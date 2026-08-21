import type { ArticleSection } from "./content";

export default function ArticleSectionBlock({ heading, paragraphs }: ArticleSection) {
  return (
    <section className="mt-[50px]">
      <h2 className="section-heading-custom">{heading}</h2>
      <div className="mt-4 space-y-4">
        {paragraphs.map((p, i) => (
          <p key={i} className="text-body text-(--color-ink-soft)">
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}
