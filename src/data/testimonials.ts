export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  persona: 'coach' | 'parent' | 'scout' | 'player';
}

export const testimonials: Testimonial[] = [
  {
    name: 'Coach Rajesh M.',
    role: 'Head Coach, Subroto Cup School',
    quote: 'I manage 40 players across three age groups. Right now I track everything in WhatsApp groups and Excel. A platform that gives me verified stats and a shareable profile for each kid? That would change everything.',
    persona: 'coach',
  },
  {
    name: 'Sunita P.',
    role: 'Parent, Son plays U-16 district league',
    quote: 'My son is talented but no one outside our district has seen him play. If there was a verified profile with his stats and highlights, we could share it with any academy in India.',
    persona: 'parent',
  },
  {
    name: 'Anand R.',
    role: 'Youth Scout, ISL Club',
    quote: 'I travel 200+ days a year to watch players. Most of the time I rely on word-of-mouth and shaky phone videos. A searchable database with verified metrics would save us massive time and money.',
    persona: 'scout',
  },
  {
    name: 'Coach Deepa K.',
    role: 'Sports Teacher, CBSE School',
    quote: 'Parents constantly ask me for proof of their child\'s progress. I have nothing professional to show them. A dashboard with match stats and growth tracking would help me justify the program to the school board.',
    persona: 'coach',
  },
  {
    name: 'Manish T.',
    role: 'U-17 Player, State Team',
    quote: 'I want to get scouted for an ISL academy but I don\'t know anyone. If scouts could find me based on my actual stats instead of who I know, I\'d finally have a fair shot.',
    persona: 'player',
  },
  {
    name: 'Vikram S.',
    role: 'Academy Director, Private Football School',
    quote: 'We spend ₹25,000 on tournament registrations alone. If even half of that could go toward proper analytics and player profiling, we\'d produce better players and attract better scouts.',
    persona: 'coach',
  },
];
