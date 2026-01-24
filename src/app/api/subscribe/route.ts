import { z } from "zod";

const bodySchema = z.object({
  email: z.string().email(),
});

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const { email } = bodySchema.parse(json);

    // Treat form submission as consent to data usage per inline notice.
    const consent = true;
    const consentAt = new Date().toISOString();
    const ip = request.headers.get("x-forwarded-for") || "";
    const ua = request.headers.get("user-agent") || "";

    // TODO: Persist to Supabase (or provider) including metadata
    // { email, consent, consentAt, ip, ua, source: "newsletter" }
    console.log("Subscribe:", { email, consent, consentAt, ip, ua, source: "newsletter" });

    return new Response(
      JSON.stringify({ ok: true, message: "Subscribed successfully." }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : "Invalid request";
    return new Response(
      JSON.stringify({ ok: false, message }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }
}
