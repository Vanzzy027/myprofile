import type { Handler } from "@netlify/functions";

export const handler: Handler = async (event) => {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  // Safe JSON parsing
  let data;
  try {
    data = JSON.parse(event.body || "{}");
  } catch (err) {
    console.error("Invalid JSON:", err);
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Invalid JSON body" }),
    };
  }

  const { name, email, subject, message } = data;

  // Validate inputs
  if (!name || !email || !subject || !message) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Missing required fields" }),
    };
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "mathengevan@gmail.com";

  if (!RESEND_API_KEY) {
    console.error("❌ RESEND_API_KEY is missing");
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Server misconfigured" }),
    };
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Portfolio <onboarding@resend.dev>",
        to: [CONTACT_EMAIL],
        reply_to: email,
        subject: `[Portfolio] ${subject}`,
        html: `
          <h2>New Portfolio Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr />
          <p>${message.replace(/\n/g, "<br/>")}</p>
        `,
      }),
    });

    const text = await response.text();
    console.log("📨 Resend response:", text);

    if (!response.ok) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: text }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (err) {
    console.error("🔥 Unexpected error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal server error" }),
    };
  }
};
