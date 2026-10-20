import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { buildHeadTags, getRouteMeta } from "../../seo/meta";

// Keeps <head> in sync on client-side navigation. Prerendered pages already ship
// the same tags, so this only swaps them when the route changes.
export default function HeadManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    const head = document.head;
    head.querySelectorAll("[data-seo]").forEach((el) => el.remove());

    for (const { tag, attrs, content } of buildHeadTags(getRouteMeta(pathname))) {
      const el = document.createElement(tag);
      for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
      el.setAttribute("data-seo", "");
      if (content) el.textContent = content;
      head.appendChild(el);
    }
  }, [pathname]);

  return null;
}
