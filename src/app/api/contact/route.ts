import { NextResponse } from "next/server";
import { deliverEnquiry, isDeliveryConfigured } from "@/lib/deliver-enquiry";

export const runtime = "nodejs";

interface ContactPayload {
  name: string;
  company: string;
  email: string;
  phone?: string;
  location?: string;
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

const MAX_BODY_BYTES = 20_000;

export async function POST(request: Request) {
  if (Number(request.headers.get("content-length") ?? 0) > MAX_BODY_BYTES) {
    return NextResponse.json({ error: "Request too large" }, { status: 413 });
  }
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
  // Honeypot: real visitors never see or fill this field; bots that fill every input are rejected.
  if (typeof raw.website === "string" && raw.website.trim() !== "") {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }
  const payload: ContactPayload = {
    name: clean(raw.name, 200),
    company: clean(raw.company, 200),
    email: clean(raw.email, 320),
    phone: clean(raw.phone, 80),
    location: clean(raw.location, 200),
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

  // Never report success unless the enquiry was actually delivered (see src/lib/deliver-enquiry.ts).
  if (!isDeliveryConfigured()) {
    return NextResponse.json({ error: "delivery_not_configured" }, { status: 503 });
  }

  try {
    await deliverEnquiry(payload);
  } catch {
    return NextResponse.json({ error: "delivery_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
