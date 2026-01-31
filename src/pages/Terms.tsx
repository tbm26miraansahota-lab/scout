export default function Terms() {
  return (
    <div className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white mb-2">Terms of Service</h1>
        <p className="text-charcoal-500 mb-10">Last updated: January 2025</p>

        <div className="prose prose-invert max-w-none space-y-8 text-charcoal-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or using ScoutX ("the Platform"), you agree to be bound by these Terms
              of Service. If you do not agree, please do not use the Platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Description of Service</h2>
            <p>
              ScoutX provides a technology platform for grassroots football scouting in India,
              including AI-assisted video analysis, player profile management, school dashboards,
              and scout discovery tools. The platform is currently in pilot phase.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. User Accounts</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Users must provide accurate information during registration</li>
              <li>Accounts for minor players (under 18) require parental or coach authorization</li>
              <li>Users are responsible for maintaining account security</li>
              <li>One account per user; no sharing of credentials</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Acceptable Use</h2>
            <p>Users agree not to:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>Upload fraudulent or misleading player data</li>
              <li>Use the platform to contact minors without appropriate authorization</li>
              <li>Attempt to reverse-engineer or scrape platform data</li>
              <li>Misrepresent coaching credentials or scout affiliations</li>
              <li>Use the platform for any illegal purpose</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Content and Data</h2>
            <p>
              Users retain ownership of content they upload (match footage, player data).
              By uploading, users grant ScoutX a license to process, analyze, and display
              this content as part of platform functionality. Coaches are responsible for
              obtaining appropriate consent for player data they submit.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. AI Analysis Disclaimer</h2>
            <p>
              AI-generated metrics are approximations based on video analysis. They are
              intended to supplement, not replace, professional coaching assessment.
              ScoutX does not guarantee the accuracy of AI-generated metrics.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Payments and Refunds</h2>
            <p>
              Subscription fees are billed annually. Refunds are available within 30 days
              of purchase. Pricing is subject to change with 30 days' notice. Early adopter
              pricing is locked for the committed period.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Limitation of Liability</h2>
            <p>
              ScoutX is provided "as is" without warranties. We are not liable for scouting
              decisions made based on platform data. Maximum liability is limited to
              subscription fees paid in the last 12 months.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. Governing Law</h2>
            <p>
              These terms are governed by the laws of India. Disputes shall be resolved
              through arbitration in accordance with Indian arbitration law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">10. Contact</h2>
            <p>
              For questions about these terms, contact us at hello@scoutx.in.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
