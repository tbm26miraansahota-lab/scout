import { Video, BarChart3, Link2, Search, Users, ShieldCheck, Smartphone, Globe } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import featureAnalysis from '../assets/Product/feature-analysis.png';
import featureProfiles from '../assets/Product/feature-profiles.png';
import featureDashboards from '../assets/Product/feature-dashboards.png';
import featureNetwork from '../assets/Product/feature-network.png';

const coreFeatures = [
  {
    icon: <Video className="w-6 h-6" />,
    img: <img src={featureAnalysis} alt="AI-Assisted Video Analysis" />,
    title: 'AI-Assisted Video Analysis',
    description: 'Upload match footage from any smartphone. Our AI extracts player metrics — speed, stamina, passing accuracy, shooting, dribbling, and defensive positioning — automatically.',
    tags: ['Computer Vision', 'Automated', 'No Hardware'],
  },
  {
    icon: <Link2 className="w-6 h-6" />,
    img: <img src={featureProfiles} alt="AI-Assisted Video Analysis" />,
    title: 'Shareable Player Profiles',
    description: 'Every player gets one verified link with their complete football identity — stats, highlights, match history, growth trajectory, and verification badges.',
    tags: ['One Link', 'Verified', 'Sports Quota Ready'],
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    img: <img src={featureDashboards} alt="AI-Assisted Video Analysis" />,
    title: 'School Coach Dashboard',
    description: 'Manage your full roster, track growth over time, compare players, and prepare for tournaments. Replace fragmented WhatsApp groups and Excel sheets.',
    tags: ['Roster Management', 'Growth Tracking', 'Analytics'],
  },
  {
    icon: <Search className="w-6 h-6" />,
    img: <img src={featureNetwork} alt="AI-Assisted Video Analysis" />,
    title: 'Scout Discovery Network',
    description: 'Search and filter players by position, age, location, metrics, and more. Compare up to 3 players side-by-side. Build shortlists. Discover talent you\'d never find otherwise.',
    tags: ['Advanced Filters', 'Compare', 'Nationwide'],
  },
];

const additionalFeatures = [
  { icon: <ShieldCheck className="w-5 h-5" />, title: 'Verified metrics with coach attestation' },
  { icon: <Smartphone className="w-5 h-5" />, title: 'Mobile-first — works on any device' },
  { icon: <Globe className="w-5 h-5" />, title: 'Pan-India coverage from day one' },
  { icon: <Users className="w-5 h-5" />, title: 'Built for coaches, scouts, players, parents' },
];

export default function Product() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Product"
          title={
            <>
              The complete scouting platform for{' '}
              <span className="gradient-text">grassroots football</span>
            </>
          }
          subtitle="Everything coaches, scouts, players, and parents need — in one place."
        />

        <div className="space-y-8 mb-20">
          {coreFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className={`glass-card p-8 lg:p-10 flex flex-col lg:flex-row gap-8 items-start ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="flex-1">
                <div className="w-14 h-14 rounded-2xl bg-lime-400/10 text-lime-400 flex items-center justify-center mb-5">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-charcoal-300 leading-relaxed mb-5">{feature.description}</p>
                <div className="flex flex-wrap gap-2">
                  {feature.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-charcoal-800 text-charcoal-300 border border-charcoal-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="w-full lg:w-96 h-48 rounded-xl bg-charcoal-800 border border-charcoal-700 flex items-center justify-center text-charcoal-600 shrink-0">
                <div className="text-center">
                  <div className="text-4xl mb-2">{feature.img}</div>
                  {/* <div className="text-sm">Feature Preview</div> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="glass-card p-8 lg:p-10">
          <h3 className="text-xl font-bold text-white mb-8 text-center">Also included</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map(f => (
              <div key={f.title} className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-lime-400/10 text-lime-400 flex items-center justify-center shrink-0">
                  {f.icon}
                </div>
                <span className="text-sm text-charcoal-300 pt-2">{f.title}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Button variant="primary" size="lg" to="/pricing">
            View Pricing
          </Button>
        </div>
      </div>
    </div>
  );
}
