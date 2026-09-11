export const SITE = {
  name: "Bright Path Tuition",
  tagline: "Online British-curriculum Maths tuition — KS3, GCSE & A-level, worldwide",
  domain: "brightpathtuition.london",
  url: "https://brightpathtuition.london",
  email: "gulsenerhan@gmail.com",
  phone: "07951 647 672",
  phoneHref: "tel:+447951647672",
  whatsapp: "https://wa.me/447951647672",
  address: "Live online — British curriculum students worldwide",
  addressNote: "Especially welcoming families in the Middle East & Far East",
  hours: "Weekday daytime slots available · evenings by arrangement",
  social: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
    tiktok: "https://tiktok.com/",
  },
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/subjects/", label: "Subjects" },
  { href: "/about/", label: "About" },
  { href: "/pricing/", label: "Pricing" },
  { href: "/blog/", label: "Blog" },
  { href: "/contact/", label: "Contact" },
] as const;

export const PROGRAMMES = [
  {
    slug: "ks3",
    title: "KS3 Tuition",
    subtitle: "Years 7–9",
    description:
      "Build rock-solid Maths foundations for the British curriculum — wherever you are in the world.",
    image:
      "/images/ks3.jpg",
  },
  {
    slug: "gcse",
    title: "GCSE Tuition",
    subtitle: "Years 10–11",
    description:
      "Live online, exam-board focused teaching for AQA, Edexcel and OCR. Past papers, mark schemes and confidence that sticks.",
    image:
      "/images/gcse.jpg",
  },
  {
    slug: "a-level",
    title: "A-level Tuition",
    subtitle: "Years 12–13",
    description:
      "Deep Maths mastery for university pathways — including Further Maths where needed.",
    image:
      "/images/alevel.jpg",
  },
] as const;

export const SUBJECTS = [
  {
    name: "Mathematics",
    status: "available" as const,
    badge: "Available now",
    blurb:
      "Our focus today — from KS3 number skills through GCSE Foundation & Higher to A-level Pure, Statistics and Mechanics (and Further Maths where needed).",
    boards: ["AQA", "Edexcel", "OCR"],
    icon: "maths",
  },
  {
    name: "Science",
    status: "coming_soon" as const,
    badge: "Next up",
    blurb:
      "Coming next. Combined and Triple Science at GCSE, then Biology, Chemistry and Physics at A-level — same exam-board care as our Maths.",
    boards: ["AQA", "Edexcel", "OCR"],
    icon: "science",
  },
  {
    name: "English",
    status: "coming_soon" as const,
    badge: "Coming later",
    blurb:
      "On the roadmap after Science. Language and Literature support that sharpens analysis, writing craft and exam technique.",
    boards: ["AQA", "Edexcel", "OCR"],
    icon: "english",
  },
] as const;

export const STEPS = [
  {
    step: "01",
    title: "Free consultation",
    text: "Tell us about goals, school reports and exam boards. We listen carefully.",
  },
  {
    step: "02",
    title: "Diagnostic & plan",
    text: "A short diagnostic maps strengths and gaps, then we agree a clear learning plan.",
  },
  {
    step: "03",
    title: "Weekly tuition",
    text: "Focused live online group lessons (max 8), with homework that matters.",
  },
  {
    step: "04",
    title: "Progress reviews",
    text: "Regular parent updates and mock-exam checkpoints keep everyone on the same page.",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "My daughter went from a grade 4 to a solid 7 in GCSE Maths. The tutors explain things in a way school never quite managed.",
    name: "Sarah M.",
    role: "Parent, Year 11",
    note: "[EXAMPLE TESTIMONIAL]",
  },
  {
    quote:
      "Bright Path made A-level Maths click. Past-paper practice every week meant I walked into the exam feeling prepared.",
    name: "James K.",
    role: "Student, Year 13",
    note: "[EXAMPLE TESTIMONIAL]",
  },
  {
    quote:
      "Professional, punctual and genuinely caring. We finally feel our son is catching up — and enjoying Maths again.",
    name: "Priya & Raj D.",
    role: "Parents, Year 8",
    note: "[EXAMPLE TESTIMONIAL]",
  },
] as const;

export const EXAMPLE_STATS = [
  { value: "98%", label: "Students improve by ≥1 grade", note: "Example figure" },
  { value: "12+", label: "Years tutoring experience", note: "Example figure" },
  { value: "250+", label: "Families supported worldwide", note: "Example figure" },
  { value: "1:8", label: "Max group size", note: "Example figure" },
] as const;

export const PRICING = [
  {
    name: "Online group — KS3 Maths",
    price: "TBC",
    unit: "per lesson",
    features: [
      "Live online classes",
      "Maximum 8 students",
      "British curriculum · KS3",
      "Weekday daytime slots available",
    ],
    highlight: false,
  },
  {
    name: "Online group — GCSE Maths",
    price: "TBC",
    unit: "per lesson",
    features: [
      "Live online classes",
      "Maximum 8 students",
      "AQA / Edexcel / OCR",
      "Foundation & Higher pathways",
    ],
    highlight: true,
  },
  {
    name: "Online group — A-level Maths",
    price: "TBC",
    unit: "per lesson",
    features: [
      "Live online classes",
      "Maximum 8 students",
      "Pure / Statistics / Mechanics",
      "Further Maths groups by demand",
    ],
    highlight: false,
  },
] as const;
