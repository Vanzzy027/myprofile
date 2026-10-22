// Contact form handler: emails each message through Resend.
// Env (Netlify UI → Site configuration → Environment variables, scope "Functions"):
//   RESEND_API_KEY  required
//   CONTACT_EMAIL   inbox that receives messages (default mathengevan@gmail.com)
//   CONTACT_FROM    sender on a Resend-verified domain (default ekariuki@britech.co.ke)

const LIMITS = { name: 100, email: 254, subject: 150, message: 5000 } as const;
type Field = keyof typeof LIMITS;

const json = (status: number, body: unknown) =>
  new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json" } });

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export default async (req: Request) => {
  if (req.method !== "POST") return json(405, { error: "Method not allowed" });

  let data: Record<string, unknown>;
  try {
    data = (await req.json()) as Record<string, unknown>;
  } catch {
    return json(400, { error: "Invalid JSON body" });
  }

  const fields = {} as Record<Field, string>;
  for (const key of Object.keys(LIMITS) as Field[]) {
    const value = typeof data[key] === "string" ? data[key].trim() : "";
    if (!value || value.length > LIMITS[key]) return json(400, { error: `Invalid ${key}` });
    fields[key] = value;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) return json(400, { error: "Invalid email" });

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is missing");
    return json(500, { error: "Server misconfigured" });
  }

  const { name, email, subject, message } = fields;
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: `Evanson Kariuki Portfolio <${process.env.CONTACT_FROM || "ekariuki@britech.co.ke"}>`,
      to: [process.env.CONTACT_EMAIL || "mathengevan@gmail.com"],
      reply_to: email,
      subject: `[Portfolio] ${subject.replace(/[\r\n]+/g, " ")}`,
      text: `From: ${name} <${email}>\nSubject: ${subject}\n\n${message}`,
      html: `
        <h2>New portfolio message</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <hr />
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
    }),
  });

  if (!res.ok) {
    console.error("Resend error", res.status, await res.text());
    return json(502, { error: "Could not send message" });
  }
  return json(200, { success: true });
};
