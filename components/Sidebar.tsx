import Image from "next/image";
import { recentPosts } from "./content";

export default function Sidebar() {
  return (
    <aside className="w-full lg:h-[531px] lg:w-[320px] rounded-xl sm:rounded-2xl border border-(--color-hairline) bg-(--color-card) p-4 sm:p-6 lg:p-7">
      <div>
        <h3 className="text-display !text-[24px] text-(--color-heading) mb-4 sm:mb-5">Recent Posts</h3>

        <ul className="space-y-3 sm:space-y-4 lg:space-y-3">
          {recentPosts.map((post, i) => (
            <li key={i} className="flex items-center gap-3">
              <div className="relative h-12 w-12 sm:h-14 sm:w-14 lg:h-11 lg:w-11 shrink-0 overflow-hidden rounded-lg">
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

      <div className="mt-5 sm:mt-6 lg:mt-6 lg:h-[163px] lg:w-[264px] rounded-xl sm:rounded-2xl bg-[#F3EEE2] p-4">
        <p className="text-heading !text-[18px] sm:!text-[20px] text-(--color-heading)">
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
