import Image from "next/image";

type GuideCardProps = {
  tag: string;
  title: string;
  description: string;
  readTime: string;
  image: string;
};

export default function GuideCard({
  tag,
  title,
  description,
  readTime,
  image,
}: GuideCardProps) {
  return (
    <article className="flex flex-col h-full">
      <div className="relative aspect-[16/10] sm:aspect-auto sm:h-36 w-full overflow-hidden rounded-xl">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
        <span className="absolute left-3 top-3 rounded-full bg-(--color-tag-bg)/90 px-3 py-1 text-[11px] font-medium text-(--color-ink)">
          {tag}
        </span>
      </div>

      <h4 className="text-heading !text-[15px] sm:!text-base !leading-snug mt-3 sm:mt-4 text-(--color-ink)">
        {title}
      </h4>
      <p className="text-body !text-[13px] sm:!text-sm !leading-6 mt-2 text-(--color-muted) grow">
        {description}
      </p>

      <div className="mt-3 sm:mt-4 flex items-center justify-between text-xs text-(--color-muted)">
        <span className="inline-flex items-center gap-1.5">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3 3" />
          </svg>
          {readTime}
        </span>
        <a
          href="#"
          className="font-medium text-(--color-ink) underline-offset-4 hover:underline"
        >
          Read →
        </a>
      </div>
    </article>
  );
}
