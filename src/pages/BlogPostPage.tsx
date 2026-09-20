import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Calendar } from "lucide-react";
import { blogs } from "../data/site";
import Tag from "../components/Shared/Tag";
import Breadcrumbs from "../components/Shared/Breadcrumbs";
import NotFound from "./NotFound";

// Bundled at build time so post content is in the prerendered HTML.
const sources = import.meta.glob<string>("../content/blogs/*.md", { query: "?raw", import: "default", eager: true });

// Strip frontmatter and the leading "# Title" (the page already renders the title as its h1).
const bodyOf = (id: string) =>
  (sources[`../content/blogs/${id}.md`] ?? "").replace(/^---[\s\S]*?---\s*/, "").replace(/^#\s.*\n+/, "");

export default function BlogPostPage() {
  const { id } = useParams();
  const post = blogs.find((b) => b.id === id);

  if (!post) return <NotFound />;

  return (
    <div className="section-padding">
      <article className="container-max max-w-3xl">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blogs" },
            { name: post.title, path: `/blogs/${post.id}` },
          ]}
        />

        {post.coverImage && (
          <div className="rounded-2xl overflow-hidden mb-8 aspect-video border border-base-300">
            <img src={post.coverImage} alt={post.coverAlt ?? post.title} width={1280} height={720} className="w-full h-full object-cover" />
          </div>
        )}

        <ul className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((t) => <li key={t}><Tag label={t} size="md" /></li>)}
        </ul>

        <h1 className="text-3xl md:text-4xl font-extrabold mb-3">{post.title}</h1>
        <p className="flex items-center gap-2 text-sm text-base-content/70 mb-10">
          <Calendar size={13} /> <time dateTime={post.date}>{post.date}</time>
        </p>

        <div className="prose prose-lg max-w-none dark:prose-invert
          prose-headings:text-base-content prose-a:text-brand-coral
          prose-code:text-brand-coral prose-code:bg-base-200 prose-code:rounded prose-code:px-1">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{bodyOf(post.id)}</ReactMarkdown>
        </div>
      </article>
    </div>
  );
}
