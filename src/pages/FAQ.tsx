import { SectionHeading } from '../components/ui/SectionHeading';
import { AccordionItem } from '../components/ui/AccordionItem';
import { Button } from '../components/ui/Button';

const faqs = [
  {
    question: 'What is ScoutX?',
    answer: 'ScoutX is India\'s tech-powered grassroots football scouting platform. We provide AI-assisted video analysis, verified player profiles, school coach dashboards, and a scout discovery network — replacing the WhatsApp + Excel stack that coaches currently use.',
  },
  {
    question: 'Who is ScoutX for?',
    answer: 'ScoutX serves four key users: School/academy coaches who need to manage players and showcase talent. Youth players (13-18) and their parents who want verified profiles for sports quota and academy applications. Professional scouts (ISL, AIFF) who need to discover talent efficiently.',
  },
  {
    question: 'How does the AI video analysis work?',
    answer: 'Coaches upload match footage recorded on any smartphone. Our AI models analyze the video to extract player metrics — speed, stamina, passing accuracy, shooting, dribbling, and defensive positioning. No GPS vests or expensive hardware needed. Metrics are standardized for fair comparison across schools.',
  },
  {
    question: 'What does "verified" mean on a player profile?',
    answer: 'Verified means the player\'s metrics have been attested by their registered coach and are based on actual match footage analysis. This is not self-reported data — it\'s coach-verified, AI-analyzed performance data with timestamps.',
  },
  {
    question: 'How much does ScoutX cost?',
    answer: 'Schools/academies pay ₹10,000/year (less than one tournament registration fee). Individual players/parents pay ₹1,000/year for a premium verified profile. Scout/institutional access is custom-priced. All early adopters get founding member pricing locked for 3 years.',
  },
  {
    question: 'Is ScoutX live yet?',
    answer: 'ScoutX is currently in pilot phase with 12 committed schools. We are accepting waitlist signups for coaches, schools, and individual players. Join the waitlist to get early access when we launch.',
  },
  {
    question: 'Can I use ScoutX for girls\' football?',
    answer: 'Absolutely. ScoutX is built for all grassroots football in India — boys and girls, all age groups from 13-18. We believe the visibility gap is even larger in girls\' football, and we\'re committed to serving this community.',
  },
  {
    question: 'Do I need special equipment to use ScoutX?',
    answer: 'No. All you need is a smartphone to record matches. Our AI analysis works with standard video footage — no GPS vests, sensor equipment, or special cameras required.',
  },
  {
    question: 'How is this different from YouTube or social media?',
    answer: 'Social media is noise. ScoutX is structured, verified data. We don\'t host highlight reels — we provide standardized, coach-verified performance metrics that scouts can filter, compare, and trust. Think of it as the difference between a LinkedIn profile and a random Facebook post.',
  },
  {
    question: 'Can scouts search for players from specific states or cities?',
    answer: 'Yes. The scout discovery network allows filtering by position, age, location (city/state), and all performance metrics. Scouts can compare up to 3 players side-by-side and build shortlists.',
  },
];

export default function FAQ() {
  return (
    <div className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="FAQ"
          title={
            <>
              Frequently asked{' '}
              <span className="gradient-text">questions</span>
            </>
          }
          subtitle="Everything you need to know about ScoutX."
        />

        <div className="space-y-3 mb-16">
          {faqs.map(faq => (
            <AccordionItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <div className="glass-card p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-2">Still have questions?</h3>
          <p className="text-charcoal-400 mb-6">Get in touch and we'll get back to you within 24 hours.</p>
          <Button variant="primary" to="/contact">
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
}
