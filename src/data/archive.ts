import harvestMoon from "@/assets/story-harvest-moon.jpg";
import goldenFields from "@/assets/story-golden-fields.jpg";
import courtyard from "@/assets/story-courtyard.jpg";
import river from "@/assets/story-river.jpg";
import festivals from "@/assets/cat-festivals.jpg";
import knowledge from "@/assets/cat-knowledge.jpg";
import oral from "@/assets/cat-oral.jpg";
import languages from "@/assets/cat-languages.jpg";

export const images = { harvestMoon, goldenFields, courtyard, river, festivals, knowledge, oral, languages };

export type Story = {
  slug: string;
  title: string;
  region: string;
  language: string;
  category: string;
  description: string;
  summary: string;
  image: string;
  duration: string;
  match?: number;
  tags: string[];
  verified: boolean;
  contributor: string;
};

export const stories: Story[] = [
  {
    slug: "harvest-moon",
    title: "The Harvest Moon",
    region: "Rajasthan",
    language: "Marwari",
    category: "Folk Tale",
    description:
      "A desert village waits for the moon that decides whether the grain will sing or sleep.",
    summary:
      "In this demo folk tale, a Marwari village believes the first full moon after sowing decides the fate of the harvest. A young girl, refusing to sleep through the night, keeps a lamp burning for the moon. When the rains finally arrive, the village credits her patience, and the tale becomes a lesson about waiting together rather than alone. The story is retold each year before the threshing begins.",
    image: harvestMoon,
    duration: "6:42",
    match: 94,
    tags: ["Harvest", "Family", "Community", "Nature"],
    verified: true,
    contributor: "Demo Contributor · Village Archive Circle",
  },
  {
    slug: "song-of-the-golden-fields",
    title: "Song of the Golden Fields",
    region: "Punjab",
    language: "Punjabi",
    category: "Folk Song",
    description:
      "A harvest song sung in call and response as the mustard fields turn gold.",
    summary:
      "A demo harvest song performed in call-and-response by workers moving through the fields. Verses name the wind, the plough and the first sheaf.",
    image: goldenFields,
    duration: "4:18",
    match: 91,
    tags: ["Harvest", "Work Song", "Celebration"],
    verified: true,
    contributor: "Demo Contributor · Folk Ensemble",
  },
  {
    slug: "grandmothers-courtyard",
    title: "Grandmother's Courtyard",
    region: "Bihar",
    language: "Bhojpuri",
    category: "Oral Story",
    description:
      "Evening stories told in a mud courtyard, where memory is passed like a lamp.",
    summary:
      "A demo oral story recalling evenings in a Bhojpuri courtyard where harvest tales were told to children before the grain was stored.",
    image: courtyard,
    duration: "8:05",
    match: 88,
    tags: ["Family", "Memory", "Harvest"],
    verified: false,
    contributor: "Demo Contributor · Community Recording",
  },
  {
    slug: "the-river-remembers",
    title: "The River Remembers",
    region: "Assam",
    language: "Assamese",
    category: "Oral History",
    description:
      "A boatman recounts how the river has changed the shape of his village.",
    summary:
      "A demo oral history in which a boatman describes seasons of flood and return along the river, and the songs sung while waiting for the water to fall.",
    image: river,
    duration: "11:27",
    match: 82,
    tags: ["River", "Memory", "Livelihood"],
    verified: true,
    contributor: "Demo Contributor · River Voices Project",
  },
  {
    slug: "the-first-grain",
    title: "The First Grain",
    region: "Maharashtra",
    language: "Marathi",
    category: "Ritual Account",
    description:
      "The offering of the first grain, described by a village elder before the festival.",
    summary:
      "A demo account of the first-grain offering that opens the harvest season, including the sequence of songs sung at the threshing floor.",
    image: festivals,
    duration: "5:36",
    match: 86,
    tags: ["Harvest", "Ritual", "Community"],
    verified: true,
    contributor: "Demo Contributor · Heritage Volunteers",
  },
  {
    slug: "the-loom-that-counts-seasons",
    title: "The Loom That Counts Seasons",
    region: "West Bengal",
    language: "Bengali",
    category: "Traditional Knowledge",
    description:
      "A weaver explains how patterns record the months, the rains and the fairs.",
    summary:
      "A demo record of weaving knowledge in which motifs and borders are described as a calendar of seasons and village fairs.",
    image: knowledge,
    duration: "9:12",
    match: 74,
    tags: ["Craft", "Knowledge", "Seasons"],
    verified: false,
    contributor: "Demo Contributor · Craft Documentation Group",
  },
  {
    slug: "lamps-on-the-backwater",
    title: "Lamps on the Backwater",
    region: "Kerala",
    language: "Malayalam",
    category: "Festival & Ritual",
    description:
      "Preparations for a lamp festival, told by those who arrange the boats.",
    summary:
      "A demo description of a lamp-lighting evening on the backwaters, including the order of processions and the songs that accompany them.",
    image: festivals,
    duration: "7:03",
    match: 71,
    tags: ["Festival", "Water", "Community"],
    verified: true,
    contributor: "Demo Contributor · Coastal Memory Group",
  },
  {
    slug: "words-my-grandfather-kept",
    title: "Words My Grandfather Kept",
    region: "Tamil Nadu",
    language: "Tamil",
    category: "Languages & Dialects",
    description:
      "A speaker lists words for rain, soil and harvest no longer used in the town.",
    summary:
      "A demo language record of vocabulary tied to farming and weather, compared with the words used by younger speakers today.",
    image: languages,
    duration: "3:54",
    match: 68,
    tags: ["Language", "Vocabulary", "Change"],
    verified: false,
    contributor: "Demo Contributor · Dialect Survey",
  },
  {
    slug: "the-shepherds-almanac",
    title: "The Shepherd's Almanac",
    region: "Himachal Pradesh",
    language: "Pahari",
    category: "Traditional Knowledge",
    description:
      "Reading the weather from birds, snow lines and the behaviour of the flock.",
    summary:
      "A demo account of pastoral weather knowledge used to decide when to move a flock up or down the valley.",
    image: oral,
    duration: "10:41",
    match: 64,
    tags: ["Knowledge", "Nature", "Livelihood"],
    verified: true,
    contributor: "Demo Contributor · Mountain Voices",
  },
];

export const storyBySlug = (slug: string) => stories.find((s) => s.slug === slug);

export const categories = [
  { title: "Folk Stories", desc: "Stories carried across generations.", image: harvestMoon, accent: "primary" },
  { title: "Folk Songs", desc: "Songs of celebration, work and memory.", image: goldenFields, accent: "accent" },
  { title: "Oral Histories", desc: "First-hand community memories.", image: oral, accent: "indigo" },
  { title: "Traditional Knowledge", desc: "Knowledge of nature, craft and everyday life.", image: knowledge, accent: "sage" },
  { title: "Festivals & Rituals", desc: "Living cultural practices.", image: festivals, accent: "primary" },
  { title: "Languages & Dialects", desc: "India's diverse regional voices.", image: languages, accent: "accent" },
];

export type Region = {
  name: string;
  x: number;
  y: number;
  languages: string;
  stories: number;
  note: string;
};

export const regions: Region[] = [
  { name: "Rajasthan", x: 24, y: 33, languages: "Marwari · Mewari", stories: 184, note: "Desert storytelling, harvest tales and ballads." },
  { name: "Punjab", x: 27, y: 17, languages: "Punjabi", stories: 142, note: "Harvest songs and call-and-response field music." },
  { name: "Himachal Pradesh", x: 33, y: 11, languages: "Pahari", stories: 76, note: "Pastoral knowledge and mountain fair songs." },
  { name: "Bihar", x: 62, y: 36, languages: "Bhojpuri · Maithili", stories: 131, note: "Courtyard stories and seasonal ritual songs." },
  { name: "West Bengal", x: 74, y: 43, languages: "Bengali", stories: 158, note: "Boat songs, weaving knowledge and folk theatre." },
  { name: "Assam", x: 86, y: 33, languages: "Assamese", stories: 98, note: "River histories and Bihu season traditions." },
  { name: "Maharashtra", x: 33, y: 58, languages: "Marathi", stories: 149, note: "Threshing-floor accounts and Warli visual storytelling." },
  { name: "Kerala", x: 34, y: 87, languages: "Malayalam", stories: 112, note: "Backwater festivals and ritual performance." },
  { name: "Tamil Nadu", x: 43, y: 86, languages: "Tamil", stories: 128, note: "Village deity narratives and dialect records." },
];

export const transcripts = {
  Original: `Chaand jab uga, to gaon soya nahin. Har aangan mein ek diya rakha gaya... aur choti chhori boli, "Main jaagoongi, jab tak chaand dekh na le."`,
  हिंदी: `जब चाँद निकला, गाँव सोया नहीं। हर आँगन में एक दीया रखा गया... और छोटी लड़की बोली, "मैं जागूँगी, जब तक चाँद देख न ले।"`,
  English: `When the moon rose, the village did not sleep. A lamp was placed in every courtyard... and the small girl said, "I will stay awake until the moon has seen us."`,
};
