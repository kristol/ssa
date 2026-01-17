import { z } from "zod";

const bodySchema = z.object({
  email: z.string().email(),
});

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const { email } = bodySchema.parse(json);

    // TODO: Persist email to your database or mailing list provider.
    // For now, just log it.
    console.log("Subscribe:", email);

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
