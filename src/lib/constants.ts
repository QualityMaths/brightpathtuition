export const SITE = {
  name: "Bright Path Tuition",
  tagline: "Expert KS3, GCSE & A-level tuition across London",
  domain: "brightpathtuition.london",
  url: "https://brightpathtuition.london",
  email: "hello@brightpathtuition.london",
  phone: "020 7946 0123",
  phoneHref: "tel:+442079460123",
  whatsapp: "https://wa.me/447700900123",
  address: "North London & online across Greater London",
  addressNote: "[PLACEHOLDER — replace with your teaching venue or keep as online]",
  hours: "Monday–Saturday, 9am–8pm",
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
      "Build rock-solid foundations in Maths, English and Science so secondary school feels manageable — and enjoyable.",
    image:
      "/images/ks3.jpg",
  },
  {
    slug: "gcse",
    title: "GCSE Tuition",
    subtitle: "Years 10–11",
    description:
      "Exam-board focused teaching for AQA, Edexcel and OCR. Past papers, mark schemes and confidence that sticks.",
    image:
      "/images/gcse.jpg",
  },
  {
    slug: "a-level",
    title: "A-level Tuition",
    subtitle: "Years 12–13",
    description:
      "Deep subject mastery for university pathways — especially Maths, Further Maths, Sciences and English.",
    image:
      "/images/alevel.jpg",
  },
] as const;

export const SUBJECTS = [
  {
    name: "Mathematics",
    lead: true,
    blurb:
      "Our flagship subject — from KS3 number skills through GCSE Higher and A-level Pure, Statistics and Mechanics.",
    boards: ["AQA", "Edexcel", "OCR"],
    icon: "maths",
  },
  {
    name: "English",
    lead: false,
    blurb:
      "Language and Literature support that sharpens analysis, writing craft and exam technique.",
    boards: ["AQA", "Edexcel", "OCR"],
    icon: "english",
  },
  {
    name: "Science",
    lead: false,
    blurb:
      "Combined and Triple Science at GCSE, plus Biology, Chemistry and Physics at A-level.",
    boards: ["AQA", "Edexcel", "OCR"],
    icon: "science",
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
    text: "Focused 1:1 or small-group lessons online or in person, with homework that matters.",
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
    role: "Parent, Year 11 — Barnet",
    note: "[EXAMPLE TESTIMONIAL]",
  },
  {
    quote:
      "Bright Path made A-level Physics click. Past-paper practice every week meant I walked into the exam feeling prepared.",
    name: "James K.",
    role: "Student, Year 13 — Camden",
    note: "[EXAMPLE TESTIMONIAL]",
  },
  {
    quote:
      "Professional, punctual and genuinely caring. We finally feel our son is catching up — and enjoying Maths again.",
    name: "Priya & Raj D.",
    role: "Parents, Year 8 — Hackney",
    note: "[EXAMPLE TESTIMONIAL]",
  },
] as const;

export const EXAMPLE_STATS = [
  { value: "98%", label: "Students improve by ≥1 grade", note: "Example figure" },
  { value: "12+", label: "Years tutoring experience", note: "Example figure" },
  { value: "250+", label: "London families supported", note: "Example figure" },
  { value: "1:4", label: "Max small-group size", note: "Example figure" },
] as const;

export const PRICING = [
  {
    name: "1:1 Online",
    price: "£45",
    unit: "per hour",
    features: [
      "Live video lessons",
      "Personalised learning plan",
      "Weekly progress notes",
      "Exam-board aligned",
    ],
    highlight: false,
  },
  {
    name: "1:1 In person",
    price: "£55",
    unit: "per hour",
    features: [
      "North London venue / home visits by arrangement",
      "Personalised learning plan",
      "Printed resources included",
      "Exam-board aligned",
    ],
    highlight: true,
  },
  {
    name: "Small group",
    price: "£28",
    unit: "per hour",
    features: [
      "Max 4 students",
      "Shared topic focus",
      "Great value for siblings / peers",
      "Online or in person",
    ],
    highlight: false,
  },
] as const;
