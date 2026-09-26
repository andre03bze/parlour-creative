/**
 * LAUNCH INTEGRATION POINT — contact / Growth Diagnostic enquiries.
 *
 * Nothing is delivered until this file is implemented. Until then `/api/contact` answers 503
 * `{ error: "delivery_not_configured" }` and the form tells the visitor plainly that the enquiry was NOT
 * received (and shows the WhatsApp / email fallback). It must never report success on a log line.
 *
 * To go live:
 *  1. Implement `deliverEnquiry()` below with the chosen provider (transactional email to
 *     laura@parlourcreative.ca and/or a CRM webhook). Throw on any non-2xx so the API returns an error.
 *  2. Flip `DELIVERY_WIRED` to true (or derive it from the provider's env var, e.g. `Boolean(process.env.RESEND_API_KEY)`).
 *  3. Set `NEXT_PUBLIC_CONTACT_DELIVERY=ready` in the deployment env (removes the on-page development notice).
 *  4. Re-test: submit a real enquiry, confirm it arrives, and confirm a forced provider failure shows the error state.
 */
export interface Enquiry {
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

const DELIVERY_WIRED = false;

export function isDeliveryConfigured(): boolean {
  return DELIVERY_WIRED;
}

export async function deliverEnquiry(enquiry: Enquiry): Promise<void> {
  void enquiry;
  throw new Error("Enquiry delivery is not implemented — see src/lib/deliver-enquiry.ts");
}
