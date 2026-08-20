import Image from "next/image";
import { recentPosts } from "./content";

export default function Sidebar() {
  return (
    <aside className="w-full space-y-5 sm:space-y-6">
      <div className="rounded-xl sm:rounded-2xl border border-(--color-hairline) bg-(--color-card) p-4 sm:p-6">
        <h3 className="text-display text-(--color-ink) mb-4 sm:mb-5">Recent Posts</h3>

        <ul className="space-y-3 sm:space-y-4">
          {recentPosts.map((post, i) => (
            <li key={i} className="flex items-center gap-3">
              <div className="relative h-12 w-12 sm:h-14 sm:w-14 shrink-0 overflow-hidden rounded-lg">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-(--color-ink)">
                  {post.title}
                </p>
                <p className="mt-0.5 sm:mt-1 text-xs text-(--color-muted)">{post.date}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-xl sm:rounded-2xl bg-[#F3EEE2] p-4 sm:p-6">
        <p className="text-heading !text-[18px] sm:!text-[20px] text-(--color-ink)">
          Ready to explore?
        </p>
        <p className="text-body !text-[14px] sm:!text-[15px] !leading-6 mt-2 text-(--color-ink-soft)">
          Book a private safari with our expert naturalists.
        </p>
        <button
          type="button"
          className="mt-4 sm:mt-5 w-full rounded-full bg-(--color-cta) px-5 py-3 text-xs font-semibold tracking-[0.12em] text-white uppercase transition-colors hover:bg-(--color-cta-hover) cursor-pointer"
        >
          Enquire Now
        </button>
      </div>
    </aside>
  );
}
