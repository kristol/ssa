export const metadata = { title: "Privacy Policy | The SSA Project" } as const;

export default function PrivacyPage() {
  return (
    <main className="about" style={{ paddingTop: 80, paddingBottom: 80 }}>
      <h1 className="about-title">Privacy Policy</h1>
      <div className="about-content" style={{ whiteSpace: "pre-line" }}>
        {`Effective: 2026-01-24

We collect your email address when you subscribe to our newsletter so we can send updates about new drops, clothing releases, and news from The SSA Project.

How we use your email
- To send newsletters, announcements, and offers from The SSA Project
- To understand engagement (e.g., opens/clicks) if we use an email service provider

Legal basis
- Your consent. You can unsubscribe at any time via a link in our emails or by contacting us.

Retention
- We keep your email until you unsubscribe or request deletion. After you unsubscribe, we may retain minimal records to respect future opt-outs.

Sharing
- We may use trusted service providers (e.g., email delivery providers) to process and deliver emails on our behalf. We do not sell your personal data.

Your rights
- Depending on your location, you may have rights to access, correct, delete, or export your personal data. Contact us to exercise these rights.

Contact
- For privacy requests: support@thessaproject.com

Updates
- We may update this policy. Material changes will be reflected on this page.`}
      </div>
    </main>
  );
}
