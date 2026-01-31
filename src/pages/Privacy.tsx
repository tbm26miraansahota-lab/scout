export default function Privacy() {
  return (
    <div className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white mb-2">Privacy Policy</h1>
        <p className="text-charcoal-500 mb-10">Last updated: January 2025</p>

        <div className="prose prose-invert max-w-none space-y-8 text-charcoal-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Introduction</h2>
            <p>
              ScoutX ("we", "our", "us") is committed to protecting the privacy of all users, especially
              minors. This Privacy Policy explains how we collect, use, and safeguard information when
              you use our platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Information We Collect</h2>
            <p>We collect the following types of information:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>Account information: name, email, phone number, role (coach/player/parent/scout)</li>
              <li>Player profile data: age, school, position, physical attributes, performance metrics</li>
              <li>Match footage uploaded by coaches for AI analysis</li>
              <li>Usage data: pages visited, features used, device information</li>
              <li>Communication data: messages sent through our contact form</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>To provide and improve our scouting platform services</li>
              <li>To create and maintain player profiles with verified metrics</li>
              <li>To enable scout discovery and talent matching</li>
              <li>To communicate updates, features, and support</li>
              <li>To ensure platform security and prevent misuse</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Protection of Minors</h2>
            <p>
              Given that our platform serves youth players aged 13-18, we take additional measures
              to protect minors' data. Player profiles for minors require parental or coach consent.
              We do not sell or share minor data with third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Data Sharing</h2>
            <p>
              We do not sell personal data. Player profiles are visible to registered scouts only
              with appropriate access. Coach data is private to their school account. We may share
              anonymized, aggregated data for research purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Data Security</h2>
            <p>
              We implement industry-standard security measures including encryption in transit and
              at rest, secure authentication, and regular security audits. Match footage is processed
              securely and stored with access controls.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal data. You can request
              data export or account deletion by contacting us at hello@scoutx.in.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Contact</h2>
            <p>
              For privacy-related questions, contact us at hello@scoutx.in.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
