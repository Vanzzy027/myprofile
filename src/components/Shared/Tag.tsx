interface TagProps { label: string; size?: "sm" | "md"; }

export default function Tag({ label, size = "sm" }: TagProps) {
  return (
    <span className={`badge badge-outline font-mono border-brand-ocean/40 text-brand-ocean
      ${size === "md" ? "badge-md" : "badge-sm"}`}>
      {label}
    </span>
  );
}