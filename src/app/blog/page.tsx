import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { BLOG_POSTS } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical advice for British-curriculum parents and students on GCSE, A-level and KS3 Maths success.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Blog"
        subtitle="Tips, revision strategies and parent guides from the Bright Path team."
        image="https://images.unsplash.com/photo-1456513080800-b6d7ddb7b8a4?auto=format&fit=crop&w=1920&q=80"
      />
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Insights"
            title="Latest articles"
            subtitle="Sample posts included for launch — replace with your own writing anytime."
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}/`}
                className="card-lift group flex flex-col overflow-hidden rounded-2xl border border-navy/8 bg-soft"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.image}
                  alt=""
                  className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-2 text-xs text-muted">
                    <span className="font-semibold uppercase tracking-wider text-gold">
                      {post.category}
                    </span>
                    <span>·</span>
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </time>
                  </div>
                  <h2 className="mt-3 text-lg font-bold text-navy group-hover:text-navy-mid">
                    {post.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm text-muted leading-relaxed">
                    {post.excerpt}
                  </p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-navy">
                    {post.readTime} →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
