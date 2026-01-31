import { Target, Heart, Lightbulb, Globe } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';

const values = [
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Talent is everywhere. Opportunity is not.',
    description: 'India has 30+ million youth footballers. Most of them will never be seen by a scout. ScoutX exists to change that equation.',
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Built for coaches first',
    description: 'We started with 75+ coach interviews. Every feature we build starts with a real problem a coach, scout, parent, or player told us about.',
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: 'Technology as infrastructure',
    description: 'We are not building a social media platform. We are building the data infrastructure that Indian grassroots football has never had.',
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Pan-India, from day one',
    description: 'From Shillong to Chennai, Goa to Kolkata. Great talent exists in every state. The scouting infrastructure should too.',
  },
];

export default function About() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="About ScoutX"
          title={
            <>
              Making grassroots football talent{' '}
              <span className="gradient-text">visible and verified</span>
            </>
          }
        />

        <div className="max-w-3xl mx-auto mb-20">
          <div className="glass-card p-8 lg:p-10">
            <h3 className="text-xl font-bold text-white mb-4">The story</h3>
            <div className="space-y-4 text-charcoal-300 leading-relaxed">
              <p>
                Indian football is experiencing unprecedented growth. ISL viewership is rising, grassroots
                participation is expanding, and the national team is improving. But the infrastructure
                connecting young talent to professional opportunity remains fundamentally broken.
              </p>
              <p>
                Coaches manage their entire talent pipeline through WhatsApp groups and Excel sheets.
                Scouts travel 200+ days a year, relying on word-of-mouth to find players. Parents have
                no credible way to prove their child's ability. And players outside major metros are
                essentially invisible to the professional ecosystem.
              </p>
              <p>
                ScoutX was born from 75+ interviews with coaches, scouts, parents, and players across India.
                The pattern was clear: everyone wants better infrastructure, and everyone is willing to pay for it.
              </p>
              <p>
                We're building the scouting platform that Indian grassroots football deserves — AI-powered
                video analysis, verified player profiles, coach dashboards, and a scout discovery network.
                One platform that replaces the entire broken stack.
              </p>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-20">
          {values.map(value => (
            <div key={value.title} className="glass-card p-7 group hover:border-lime-400/20 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-lime-400/10 text-lime-400 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                {value.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
              <p className="text-sm text-charcoal-400 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="primary" size="lg" to="/contact">
            Get in Touch
          </Button>
        </div>
      </div>
    </div>
  );
}
