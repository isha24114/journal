// Centralised content for the "Temples Around Gir" journal page.
// Kept as data so the duplicated blocks visible in the reference design
// (the repeated "Heritage lives in the grand..." section, the four identical
// Recent Posts entries, and the two identical "3-Day Gir Itinerary" guide
// cards) are trivial to trim or replace with real copy later.

export const article = {
  eyebrow: "GIR VISTA JOURNAL",
  title: "Temples Around Gir: A Journey Through Faith, History & Landscape",
  author: "Prakash Mehta",
  readTime: "6 Min Read",
  publishedDate: "Published 15 August 2026",
  heroImage: "/images/hero-somnath-day.png",
  heroAlt: "Somnath Temple by the Arabian Sea in daylight",
  intro: [
    "A journey through Gir is often planned around the lion. But beyond the safari gates, the wider Saurashtra region opens into another kind of landscape: temple towns, old pilgrimage routes, village shrines and a coast shaped by the Arabian Sea.",
    "Here, heritage is not held at a distance. It is part of the everyday rhythm—bells at dawn, a roadside offering, families pausing on a long drive, and stone structures that have gathered stories over centuries. This is a guide to approaching that living heritage with curiosity and care.",
    "Travel slowly enough, and the road from Gir to the coast begins to feel like a journey through many layers of Gujarat.",
  ],
};

export type ArticleSection = {
  heading: string;
  paragraphs: string[];
};

export const landscapeSection: ArticleSection = {
  heading: "Follow the landscape, not just the landmarks.",
  paragraphs: [
    "The most rewarding temple journeys around Gir are not a checklist. They unfold through the changing terrain: scrub forest giving way to fields, villages, weathered stone and finally the open coast.",
    "Somnath is the best-known anchor, but its meaning deepens when it is approached as part of a wider route. Leave time for a small shrine, a local meal, a quiet viewpoint and the unplanned pauses that give a journey its texture.",
  ],
};

export const heritageSection: ArticleSection = {
  heading: "Heritage lives in the grand, the local and the in-between.",
  paragraphs: [
    "Give each setting its own pace. The goal is not to see more, but to understand a little more of what a place means to the people around it.",
    "The coastal temple At Somnath, architecture and ocean meet. Visit with time for the precinct, the shore and the gentler hours around sunrise or evening.",
    "The village shrine Small shrines often reveal the most immediate connection between worship, work, season and community. Observe quietly and ask before photographing.",
    "The historic detour Historic towns such as Junagadh add another perspective, with sacred sites, old stonework and stories that stretch well beyond one destination.",
  ],
};

export const detailsSection = {
  heading: "The details that hold a place together.",
  paragraph:
    "A carved edge, an offering, a courtyard in midday shade, the sea beyond a wall: the visual language of heritage is often found in its smallest moments.",
  images: [
    { src: "/images/somnath-sunset-1.png", alt: "Somnath Temple lit at dusk, aerial view" },
    { src: "/images/somnath-sunset-2.png", alt: "Somnath Temple lit at dusk, aerial view" },
  ],
};

// The reference design repeats the "Heritage lives..." block a second time
// after the paired sunset photos — reproduced here as `repeatHeritageSection`.
export const repeatHeritageSection = heritageSection;

export const recentPosts = Array.from({ length: 4 }).map(() => ({
  title: "What to eat around gir",
  date: "18 Aug, 2026",
  image: "/images/thali-1.jpg",
}));

export const relatedGuides = [
  {
    tag: "Planning",
    title: "Best Time to Visit Gir: A Month-by-Month Guide",
    description:
      "When lions are most active, how the forest changes across seasons, and how to plan your safari window.",
    readTime: "6 Min read",
    image: "/images/safari-jeep.jpg",
  },
  {
    tag: "Food",
    title: "What to Eat Around Gir: Kathiyawadi Food Trail",
    description:
      "From rustic Kathiyawadi thalis to farm-fresh mangoes, a guide to eating well near the forest.",
    readTime: "6 Min read",
    image: "/images/thali-2.png",
  },
  {
    tag: "Itinerary",
    title: "3-Day Gir Itinerary: Safari, Devalia & Slow Mornings",
    description:
      "A relaxed plan balancing official safari time, the Devalia enclosure and unhurried resort mornings.",
    readTime: "6 Min read",
    image: "/images/lion-thumb.png",
  },
  {
    tag: "Itinerary",
    title: "3-Day Gir Itinerary: Safari, Devalia & Slow Mornings",
    description:
      "A relaxed plan balancing official safari time, the Devalia enclosure and unhurried resort mornings.",
    readTime: "6 Min read",
    image: "/images/lion-thumb.png",
  },
];
