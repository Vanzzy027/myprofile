import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft, Calendar } from "lucide-react";
import blogsData from "../data/blogs.json";
import Tag from "../components/Shared/Tag";
import type { BlogPost } from "../types";

const blogs = blogsData as BlogPost[];

export default function BlogPostPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogs.find((b) => b.id === id);
  const [markdown, setMarkdown] = useState("");
  const [loading, setLoading]   = useState(true);

  useEffect(() => {
    if (!post) return;
    fetch(post.file)
      .then((r) => r.text())
      .then((text) => {
        // Strip frontmatter
        const content = text.replace(/^---[\s\S]*?---\n/, "");
        setMarkdown(content);
      })
      .finally(() => setLoading(false));
  }, [post]);

  if (!post) return (
    <div className="section-padding container-max text-center py-32">
      <p className="text-2xl font-bold text-base-content/40">Post not found</p>
      <Link to="/blogs" className="btn btn-primary mt-6 gap-2"><ArrowLeft size={15} /> Back to Blog</Link>
    </div>
  );

  return (
    <div className="section-padding">
      <div className="container-max max-w-3xl">
        <button onClick={() => navigate(-1)} className="btn btn-ghost btn-sm gap-2 mb-6">
          <ArrowLeft size={15} /> Back
        </button>

        {post.coverImage && (
          <div className="rounded-2xl overflow-hidden mb-8 max-h-72 border border-base-300">
            <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((t) => <Tag key={t} label={t} size="md" />)}
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold mb-3">{post.title}</h1>
        <p className="flex items-center gap-2 text-sm text-base-content/40 mb-10">
          <Calendar size={13} /> {post.date}
        </p>

        {loading ? (
          <div className="flex justify-center py-20"><span className="loading loading-spinner loading-lg text-brand-coral" /></div>
        ) : (
          <article className="prose prose-lg max-w-none dark:prose-invert
            prose-headings:text-base-content prose-a:text-brand-coral
            prose-code:text-brand-coral prose-code:bg-base-200 prose-code:rounded prose-code:px-1">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
          </article>
        )}
      </div>
    </div>
  );
}