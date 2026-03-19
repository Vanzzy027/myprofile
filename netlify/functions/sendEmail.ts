import type { Handler } from "@netlify/functions";

const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const { name, email, subject, message } = JSON.parse(event.body ?? "{}");

  if (!name || !email || !subject || !message) {
    return { statusCode: 400, body: JSON.stringify({ error: "Missing fields" }) };
  }

  const RESEND_API_KEY   = process.env.RESEND_API_KEY;
  const CONTACT_EMAIL    = process.env.CONTACT_EMAIL ?? "mathengevan@gmail.com";

  if (!RESEND_API_KEY) {
    return { statusCode: 500, body: JSON.stringify({ error: "Server misconfigured" }) };
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from:    "Portfolio Contact <onboarding@resend.dev>",
      to:      [CONTACT_EMAIL],
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <h2>New message from your portfolio</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr/>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    return { statusCode: 500, body: JSON.stringify({ error: err }) };
  }

  return { statusCode: 200, body: JSON.stringify({ success: true }) };
};

export { handler };