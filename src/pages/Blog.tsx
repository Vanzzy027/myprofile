import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import blogsData from "../data/blogs.json";
import SectionHeader from "../components/Shared/SectionHeader";
import Tag from "../components/Shared/Tag";
import type { BlogPost } from "../types";

const blogs = blogsData as BlogPost[];

export default function Blogs() {
  return (
    <div className="section-padding">
      <div className="container-max">
        <SectionHeader title="Blog" subtitle="Thoughts on engineering, IoT, and building things." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogs.map((post) => (
            <Link key={post.id} to={`/blogs/${post.id}`} className="card bg-base-200 border border-base-300 card-hover overflow-hidden group">
              {post.coverImage && (
                <figure className="h-44 overflow-hidden bg-base-300">
                  <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                </figure>
              )}
              <div className="card-body p-5">
                <div className="flex flex-wrap gap-1 mb-2">
                  {post.tags.slice(0, 3).map((t) => <Tag key={t} label={t} />)}
                </div>
                <h2 className="card-title text-lg leading-snug group-hover:text-brand-coral transition-colors">{post.title}</h2>
                <p className="text-sm text-base-content/60 line-clamp-2">{post.excerpt}</p>
                <div className="flex justify-between items-center mt-4 text-xs text-base-content/40">
                  <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
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