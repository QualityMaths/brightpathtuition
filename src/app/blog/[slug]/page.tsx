import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS, getPost } from "@/lib/blog";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Article" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article>
      <header className="relative min-h-[320px] overflow-hidden sm:min-h-[400px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={post.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="page-hero-overlay absolute inset-0" />
        <div className="relative mx-auto flex min-h-[320px] max-w-3xl flex-col justify-end px-4 py-12 sm:min-h-[400px] sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            {post.category} · {post.readTime}
          </p>
          <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            {post.title}
          </h1>
          <time
            dateTime={post.date}
            className="mt-3 text-sm text-white/75"
          >
            {new Date(post.date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
          {post.content.map((para, i) => (
            <p key={i} className={para.startsWith("[") ? "text-sm text-gold font-medium" : ""}>
              {para}
            </p>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-navy/10 pt-8">
          <Link
            href="/blog/"
            className="text-sm font-semibold text-navy hover:text-gold"
          >
            ← Back to blog
          </Link>
          <Link
            href="/contact/"
            className="btn-primary rounded-md px-5 py-2.5 text-sm font-semibold uppercase tracking-wider"
          >
            Book a free consult
          </Link>
        </div>
      </div>
    </article>
  );
}
