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
    slug: "online-vs-in-person-tuition",
    title: "Online vs in-person tuition: what London families should know",
    excerpt:
      "Convenience, focus and results — an honest comparison so you can choose the format that suits your household.",
    date: "2026-01-18",
    readTime: "4 min read",
    category: "Parents",
    image:
      "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&w=1200&q=80",
    content: [
      "Since 2020, online tuition has become mainstream — and for many London families it is now the default. Travel time disappears, scheduling is easier, and digital whiteboards make Maths and Science surprisingly visual.",
      "In-person lessons still shine when a student needs closer behavioural support, prefers handwriting on paper, or when siblings share a venue. Some learners simply concentrate better face to face.",
      "Results depend far more on tutor quality, lesson structure and consistency than on the medium. We offer both formats at Bright Path so families can switch as exams approach.",
      "Not sure which to choose? Book a free consultation and we will recommend a format based on your child’s learning style and your logistics.",
      "[This is sample blog content for Bright Path Tuition — replace with your own advice.]",
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
