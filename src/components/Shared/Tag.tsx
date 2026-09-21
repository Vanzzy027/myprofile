interface TagProps { label: string; size?: "sm" | "md"; }

export default function Tag({ label, size = "sm" }: TagProps) {
  return (
    <span className={`badge badge-outline font-mono border-brand-ocean/40 text-brand-ocean dark:text-sky-300 dark:border-sky-300/40
      ${size === "md" ? "badge-md" : "badge-sm"}`}>
      {label}
    </span>
  );
}
