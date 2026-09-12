export type Resource = {
  title: string;
  source: string;
  summary: string;
  href: string;
};

/** Genuine external research and guidance only — no invented Bright Path articles. */
export const RESOURCES: Resource[] = [
  {
    title: "Small group tuition",
    source: "Education Endowment Foundation",
    summary:
      "The EEF Teaching and Learning Toolkit reviews evidence on small group tuition (typically one tutor working with a small number of pupils). It reports a positive average impact when tuition is well delivered, and notes that approaches work best when teaching is carefully targeted to pupils’ needs.",
    href: "https://educationendowmentfoundation.org.uk/education-evidence/teaching-learning-toolkit/small-group-tuition",
  },
  {
    title: "One-to-one tuition",
    source: "Education Endowment Foundation",
    summary:
      "The EEF toolkit entry on one-to-one tuition summarises evidence that intensive individual support can be an effective way to help pupils who need targeted help in a particular area, especially when tuition is linked to classroom teaching and carefully monitored.",
    href: "https://educationendowmentfoundation.org.uk/education-evidence/teaching-learning-toolkit/one-to-one-tuition",
  },
  {
    title: "Improving Mathematics in Key Stages 2 and 3",
    source: "Education Endowment Foundation",
    summary:
      "This EEF guidance report focuses on teaching mathematics to pupils in Key Stages 2 and 3. It offers evidence-informed recommendations for school leaders and teachers on improving the quality of Maths teaching, including how pupils learn mathematics and how teaching can better support that learning.",
    href: "https://educationendowmentfoundation.org.uk/education-evidence/guidance-reports/maths-ks-2-3",
  },
  {
    title: "Working with Parents to Support Children's Learning",
    source: "Education Endowment Foundation",
    summary:
      "This EEF guidance report reviews evidence on how schools and tutors can work with parents and carers to improve children's learning. It notes that effective parental engagement is linked to better academic outcomes (around +3 months on average in the EEF toolkit) and offers four practical recommendations, including practical strategies for learning at home and clearer, more positive communication with families.",
    href: "https://educationendowmentfoundation.org.uk/education-evidence/guidance-reports/supporting-parents",
  },
  {
    title: "Homework",
    source: "Education Endowment Foundation",
    summary:
      "The EEF Teaching and Learning Toolkit entry on homework reports a positive average impact (about +5 months overall, stronger in secondary than primary). It stresses that quality beats quantity: homework works best when it is tightly linked to classroom learning, the purpose is clear to pupils, and students get high-quality feedback — and that schools should watch for barriers such as a quiet space or device access.",
    href: "https://educationendowmentfoundation.org.uk/education-evidence/teaching-learning-toolkit/homework",
  },
];
