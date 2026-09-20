import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import SectionHeader from "../components/Shared/SectionHeader";
import Tag from "../components/Shared/Tag";
import { blogs } from "../data/site";

export default function Blogs() {
  return (
    <div className="section-padding">
      <div className="container-max">
        <SectionHeader as="h1" title="Blog" subtitle="Practical notes on IoT, React and building real systems." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogs.map((post) => (
            <Link key={post.id} to={`/blogs/${post.id}`} className="card bg-base-200 border border-base-300 card-hover overflow-hidden group">
              {post.coverImage && (
                <figure className="h-44 overflow-hidden bg-base-300">
                  <img src={post.coverImage} alt={post.coverAlt ?? post.title} width={1280} height={720} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" decoding="async" />
                </figure>
              )}
              <div className="card-body p-5">
                <div className="flex flex-wrap gap-1 mb-2">
                  {post.tags.slice(0, 3).map((t) => <Tag key={t} label={t} />)}
                </div>
                <h2 className="card-title text-lg leading-snug group-hover:text-brand-coral transition-colors">{post.title}</h2>
                <p className="text-sm text-base-content/70 line-clamp-2">{post.excerpt}</p>
                <div className="flex justify-between items-center mt-4 text-xs text-base-content/70">
                  <span className="flex items-center gap-1"><Calendar size={12} /> <time dateTime={post.date}>{post.date}</time></span>
                  <span className="flex items-center gap-1 text-brand-coral">Read more <ArrowRight size={12} /></span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}