export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  content: string[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "gcse-maths-revision-plan",
    title: "How to build a GCSE Maths revision plan that actually works",
    excerpt:
      "A practical eight-week framework for Year 11 students covering topic audits, spaced practice and past-paper strategy.",
    date: "2026-03-12",
    readTime: "6 min read",
    category: "GCSE Maths",
    image:
      "https://images.unsplash.com/photo-1456513080800-b6d7ddb7b8a4?auto=format&fit=crop&w=1200&q=80",
    content: [
      "Revision without a plan often becomes rereading notes and hoping for the best. A structured approach — topic audit, targeted practice, then timed papers — consistently outperforms last-minute cramming.",
      "Start by listing every GCSE Maths topic for your exam board (AQA, Edexcel or OCR). Rate each red / amber / green honestly. Spend most of your time on amber topics that appear frequently on papers.",
      "Use spaced practice: short daily sessions beat marathon weekends. Mix calculator and non-calculator skills, and always mark with the official mark scheme so you learn how examiners award method marks.",
      "In the final fortnight, switch to full past papers under timed conditions. Review every mistake the same day — understanding why you lost marks is where the real gains happen.",
      "[This is sample blog content for Bright Path Tuition — replace with your own advice.]",
    ],
  },
  {
    slug: "choosing-a-level-maths",
    title: "Is A-level Maths right for your child?",
    excerpt:
      "What KS4 results, study habits and university plans really tell you about whether A-level Maths is a wise next step.",
    date: "2026-02-04",
    readTime: "5 min read",
    category: "A-level",
    image:
      "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=1200&q=80",
    content: [
      "A-level Maths opens doors — from engineering and economics to computer science and medicine. But it is a significant step up from GCSE, and not every strong GCSE student thrives without support.",
      "As a rule of thumb, a high grade 7 (ideally 8 or 9) and comfort with algebra are the strongest predictors of A-level success. Students who rely heavily on memorising methods often struggle when Pure Maths demands deeper reasoning.",
      "Talk through university and career interests early. Further Maths is valuable for competitive STEM courses, but it doubles the workload — tutoring can make that load sustainable.",
      "If your child is unsure, a short diagnostic and trial lessons over half-term can clarify whether the course is a good fit before UCAS deadlines loom.",
      "[This is sample blog content for Bright Path Tuition — replace with your own advice.]",
    ],
  },
  {
    slug: "online-maths-for-british-curriculum-abroad",
    title: "Why live online Maths works for British-curriculum families abroad",
    excerpt:
      "Following the British curriculum from the Middle East or Far East? Live online group classes keep your child aligned with UK exam boards — without relocating.",
    date: "2026-01-18",
    readTime: "4 min read",
    category: "Parents",
    image:
      "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&w=1200&q=80",
    content: [
      "Many families overseas want their children to sit UK GCSEs and A-levels — or simply stay aligned with the British curriculum. Live online Maths tuition removes the geography problem while keeping teaching tied to AQA, Edexcel and OCR.",
      "Weekday daytime lessons (UK time) often suit students in the Middle East and Far East better than evening slots, and group classes of up to eight keep learning social without losing focus.",
      "Digital whiteboards, shared past papers and recorded homework feedback mean progress is as visible online as in a classroom — sometimes more so.",
      "If you are abroad and following the British curriculum, book a free consultation and we will match a live online Maths group to your child’s stage and timezone.",
      "[This is sample blog content for Bright Path Tuition — replace with your own advice.]",
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
