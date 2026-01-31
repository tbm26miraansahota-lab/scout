import { Mic, Mail, CreditCard, TrendingUp, Eye } from 'lucide-react';
import { KPICard } from '../ui/KPICard';
import { SectionHeading } from '../ui/SectionHeading';
import { SectionReveal } from '../ui/SectionReveal';

const kpis = [
  { value: '75+', label: 'Coach Interviews', icon: <Mic className="w-5 h-5" /> },
  { value: '450+', label: 'Email Signups', icon: <Mail className="w-5 h-5" /> },
  { value: '12', label: 'Paid Pilot Commits', icon: <CreditCard className="w-5 h-5" /> },
  { value: '87%', label: 'Willingness to Pay', icon: <TrendingUp className="w-5 h-5" /> },
  { value: '3', label: 'ISL Scout Interest', icon: <Eye className="w-5 h-5" /> },
];

export function KPIStrip() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <SectionHeading
            badge="Traction"
            title={
              <>
                Built with coaches, not in a{' '}
                <span className="gradient-text">vacuum</span>
              </>
            }
            subtitle="Every feature decision comes from real conversations with coaches, scouts, and parents across India."
          />
        </SectionReveal>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {kpis.map((kpi, i) => (
            <KPICard key={kpi.label} {...kpi} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
