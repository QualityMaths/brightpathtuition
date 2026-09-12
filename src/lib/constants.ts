export const SITE = {
  name: "Bright Path Tuition",
  tagline: "Online British-curriculum Maths tuition — KS2 to A-level, worldwide",
  domain: "brightpathtuition.london",
  url: "https://brightpathtuition.london",
  email: "hello@brightpathtuition.london",
  phone: "07951 647 672",
  phoneHref: "tel:+447951647672",
  whatsapp: "https://wa.me/447951647672",
  address: "Live online — British curriculum students worldwide",
  addressNote: "UK teaching expertise, available to students worldwide",
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
  { href: "/resources/", label: "Resources" },
  { href: "/contact/", label: "Contact" },
] as const;

export const PROGRAMMES = [
  {
    slug: "ks2",
    title: "KS2 Tuition",
    subtitle: "Years 3–6",
    description:
      "Secure primary Maths foundations — number fluency, reasoning and problem solving — ready for secondary school.",
    image: "/images/ks2.jpg",
  },
  {
    slug: "ks3",
    title: "KS3 Tuition",
    subtitle: "Years 7–9",
    description:
      "Build rock-solid Maths foundations for the British curriculum — wherever you are in the world.",
    image: "/images/ks3.jpg",
  },
  {
    slug: "gcse",
    title: "GCSE Tuition",
    subtitle: "Years 10–11",
    description:
      "Live online, exam-board focused teaching for AQA, Edexcel and OCR. Past papers, mark schemes and confidence that sticks.",
    image: "/images/gcse.jpg",
  },
  {
    slug: "a-level",
    title: "A-level Tuition",
    subtitle: "Years 12–13",
    description:
      "Build the depth, problem-solving skills and exam technique needed for A-Level success and university progression.",
    image: "/images/alevel.jpg",
  },
] as const;

export const SUBJECTS = [
  {
    name: "Mathematics",
    status: "available" as const,
    badge: "Available now",
    blurb:
      "From the full KS2 and KS3 curriculum through GCSE Foundation & Higher and A-Level Pure, Statistics and Mechanics.",
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
    text: "Focused live online group lessons (max 8), with targeted homework and feedback.",
  },
  {
    step: "04",
    title: "Progress reviews",
    text: "Regular parent updates and progress checkpoints keep everyone on the same page.",
  },
] as const;

export const TRUST_STRIP = [
  { value: "13+", label: "Years tutoring experience" },
  { value: "Max 8", label: "Students per group" },
  { value: "UK Curriculum", label: "Specialist tuition" },
  { value: "AQA · Edexcel · OCR", label: "Exam boards" },
] as const;

export const PRICING = [
  {
    name: "KS2 Maths",
    years: "Years 3–6",
    price: "£110",
    unit: "every 4 weeks",
    perLesson: "£27.50 per lesson",
    badge: "",
    features: [
      "4 × 1-hour live online lessons",
      "Maximum 8 students",
      "British curriculum",
      "SATs support where appropriate",
      "Targeted homework & feedback",
    ],
    highlight: false,
  },
  {
    name: "KS3 Maths",
    years: "Years 7–9",
    price: "£120",
    unit: "every 4 weeks",
    perLesson: "£30 per lesson",
    badge: "",
    features: [
      "4 × 1-hour live online lessons",
      "Maximum 8 students",
      "British curriculum",
      "GCSE preparation",
      "Targeted homework & feedback",
    ],
    highlight: false,
  },
  {
    name: "GCSE Maths",
    years: "Years 10–11",
    price: "£140",
    unit: "every 4 weeks",
    perLesson: "£35 per lesson",
    badge: "Foundation & Higher",
    features: [
      "4 × 1-hour live online lessons",
      "Maximum 8 students",
      "Foundation & Higher pathways",
      "AQA / Edexcel / OCR",
      "Exam technique & past papers",
    ],
    highlight: true,
  },
  {
    name: "A-Level Maths",
    years: "Years 12–13",
    price: "£160",
    unit: "every 4 weeks",
    perLesson: "£40 per lesson",
    badge: "",
    features: [
      "4 × 1-hour live online lessons",
      "Maximum 8 students",
      "Pure / Statistics / Mechanics",
      "Exam-board focused support",
      "Past-paper preparation",
    ],
    highlight: false,
  },
] as const;
