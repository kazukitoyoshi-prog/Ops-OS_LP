import { validateContact, type ContactInput } from "@/lib/contact";

/**
 * Receives contact form submissions.
 * Set CONTACT_WEBHOOK_URL (e.g. a Slack Incoming Webhook) to forward inquiries.
 * Without it, submissions are logged in development and rejected in production
 * so that inquiries are never silently dropped.
 */
export async function POST(request: Request) {
  let body: Partial<ContactInput & { website: string }>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ message: "リクエストの形式が正しくありません。" }, { status: 400 });
  }

  // Honeypot: pretend success for bots
  if (body.website) return Response.json({ ok: true });

  const input: ContactInput = {
    company: String(body.company ?? ""),
    name: String(body.name ?? ""),
    department: String(body.department ?? ""),
    email: String(body.email ?? ""),
    message: String(body.message ?? ""),
  };

  const errors = validateContact(input);
  if (Object.keys(errors).length > 0) {
    return Response.json({ message: "入力内容をご確認ください。", errors }, { status: 422 });
  }

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  const text = [
    "【Ops OS Flow】お問い合わせ",
    `会社名: ${input.company}`,
    `氏名: ${input.name}`,
    `部署: ${input.department || "-"}`,
    `メール: ${input.email}`,
    "相談内容:",
    input.message,
  ].join("\n");

  if (webhook) {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
    if (!res.ok) {
      return Response.json({ message: "送信に失敗しました。時間をおいて再度お試しください。" }, { status: 502 });
    }
    return Response.json({ ok: true });
  }

  if (process.env.NODE_ENV !== "production") {
    console.info(`[contact] CONTACT_WEBHOOK_URL is not set; logging inquiry instead.\n${text}`);
    return Response.json({ ok: true });
  }

  return Response.json(
    { message: "現在フォームを準備中です。恐れ入りますが、時間をおいて再度お試しください。" },
    { status: 503 },
  );
}
