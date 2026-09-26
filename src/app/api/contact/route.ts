import { NextResponse } from "next/server";

export const runtime = "nodejs";

interface ContactPayload {
  name: string;
  company: string;
  email: string;
  phone?: string;
  companyType?: string;
  projectType?: string;
  budget?: string;
  timeline?: string;
  message: string;
}

const MAX_LEN = 2000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown, max = MAX_LEN): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  if (typeof body !== "object" || body === null) {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const raw = body as Record<string, unknown>;
  const payload: ContactPayload = {
    name: clean(raw.name, 200),
    company: clean(raw.company, 200),
    email: clean(raw.email, 320),
    phone: clean(raw.phone, 80),
    companyType: clean(raw.companyType, 80),
    projectType: clean(raw.projectType, 80),
    budget: clean(raw.budget, 80),
    timeline: clean(raw.timeline, 80),
    message: clean(raw.message, MAX_LEN),
  };

  if (!payload.name || !payload.company || !payload.email || !payload.message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  if (!EMAIL_RE.test(payload.email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  // No email/CRM provider is configured yet (see .env.example, CONTENT-GAPS.md).
  // Log server-side so nothing is silently dropped during development; wire a
  // real provider (Resend, etc.) here once RESEND_API_KEY is set.
  if (process.env.RESEND_API_KEY) {
    // Intentionally left for the real integration — do not fabricate a
    // delivery success before a provider is actually wired up.
  }

  console.log("[contact] new enquiry", {
    ...payload,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
