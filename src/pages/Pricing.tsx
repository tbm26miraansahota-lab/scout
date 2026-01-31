import { Check, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';

const plans = [
  {
    name: 'School / Academy',
    description: 'For competitive school coaches and football academies',
    price: '₹10,000',
    period: '/year',
    anchor: 'Less than one tournament registration fee',
    highlight: true,
    features: [
      'Full coach dashboard',
      'Up to 60 player profiles',
      'AI video analysis (up to 30 matches/year)',
      'Team analytics & growth tracking',
      'Player comparison tools',
      'Verified badges for all players',
      'Priority support',
    ],
    cta: 'Join Waitlist',
    ctaLink: '/contact',
  },
  {
    name: 'Player Premium',
    description: 'For individual players and parents',
    price: '₹1,000',
    period: '/year',
    anchor: 'Less than one pair of football boots',
    highlight: false,
    features: [
      'Verified player profile',
      'Shareable one-link profile',
      'Match highlights upload',
      'Performance metrics display',
      'Sports quota documentation',
      'Visible to scouts on network',
    ],
    cta: 'Join Waitlist',
    ctaLink: '/contact',
  },
  {
    name: 'Scout License',
    description: 'For ISL clubs, AIFF, and professional scouting operations',
    price: 'Custom',
    period: '',
    anchor: 'Annual license — contact for pricing',
    highlight: false,
    features: [
      'Full scout search & filter',
      'Compare up to 10 players',
      'Advanced analytics & reports',
      'Shortlist management',
      'Priority talent alerts',
      'API access (coming soon)',
      'Dedicated account manager',
    ],
    cta: 'Request Pricing',
    ctaLink: '/contact',
  },
];

export default function Pricing() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Pricing"
          title={
            <>
              Transparent pricing for{' '}
              <span className="gradient-text">every stakeholder</span>
            </>
          }
          subtitle="Priced for schools, accessible for players, scalable for scouts. All plans include core platform access."
        />

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map(plan => (
            <div
              key={plan.name}
              className={`glass-card p-8 flex flex-col ${
                plan.highlight ? 'border-lime-400/30 ring-1 ring-lime-400/10' : ''
              }`}
            >
              {plan.highlight && (
                <div className="text-xs font-semibold text-lime-400 uppercase tracking-wider mb-4">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
              <p className="text-sm text-charcoal-400 mb-6">{plan.description}</p>

              <div className="mb-2">
                <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                {plan.period && <span className="text-charcoal-400 ml-1">{plan.period}</span>}
              </div>
              <p className="text-xs text-charcoal-500 mb-8">{plan.anchor}</p>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map(feature => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-charcoal-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.highlight ? 'primary' : 'outline'}
                to={plan.ctaLink}
                icon={<ArrowRight className="w-4 h-4" />}
                className="w-full"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-charcoal-500 text-sm">
            All prices exclude GST. Early adopters get founding member pricing locked for 3 years.
          </p>
        </div>
      </div>
    </div>
  );
}
