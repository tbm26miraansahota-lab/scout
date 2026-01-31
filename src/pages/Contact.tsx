import { Mail, MapPin, MessageSquare } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';

export default function Contact() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Contact"
          title={
            <>
              Let's talk about{' '}
              <span className="gradient-text">grassroots football</span>
            </>
          }
          subtitle="Whether you're a coach, scout, parent, or player — we'd love to hear from you."
        />

        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          <div className="lg:col-span-3">
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              className="glass-card p-8 space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don't fill this out: <input name="bot-field" />
                </label>
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-charcoal-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-charcoal-800 border border-charcoal-700 text-white placeholder-charcoal-500 focus:border-lime-400/50 focus:ring-1 focus:ring-lime-400/20 focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-charcoal-800 border border-charcoal-700 text-white placeholder-charcoal-500 focus:border-lime-400/50 focus:ring-1 focus:ring-lime-400/20 focus:outline-none transition-colors"
                    placeholder="you@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="role" className="block text-sm font-medium text-charcoal-300 mb-2">
                  I am a...
                </label>
                <select
                  id="role"
                  name="role"
                  className="w-full px-4 py-3 rounded-xl bg-charcoal-800 border border-charcoal-700 text-white focus:border-lime-400/50 focus:ring-1 focus:ring-lime-400/20 focus:outline-none transition-colors appearance-none cursor-pointer"
                >
                  <option value="coach">School/Academy Coach</option>
                  <option value="player">Player / Parent</option>
                  <option value="scout">Professional Scout</option>
                  <option value="school-admin">School Administrator</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-charcoal-300 mb-2">
                  Interested in
                </label>
                <select
                  id="interest"
                  name="interest"
                  className="w-full px-4 py-3 rounded-xl bg-charcoal-800 border border-charcoal-700 text-white focus:border-lime-400/50 focus:ring-1 focus:ring-lime-400/20 focus:outline-none transition-colors appearance-none cursor-pointer"
                >
                  <option value="waitlist">Joining the Waitlist</option>
                  <option value="demo">Requesting a Demo</option>
                  <option value="pilot">Joining the Pilot Program</option>
                  <option value="scout-license">Scout License Pricing</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Something Else</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-charcoal-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-charcoal-800 border border-charcoal-700 text-white placeholder-charcoal-500 focus:border-lime-400/50 focus:ring-1 focus:ring-lime-400/20 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your school, team, or how you'd like to use ScoutX..."
                />
              </div>

              <Button type="submit" variant="primary" className="w-full">
                Send Message
              </Button>
            </form>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Get in touch</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-lime-400 mt-0.5" />
                  <div>
                    <div className="text-sm text-charcoal-300">Email</div>
                    <div className="text-white">hello@scoutx.in</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-lime-400 mt-0.5" />
                  <div>
                    <div className="text-sm text-charcoal-300">Location</div>
                    <div className="text-white">India</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MessageSquare className="w-5 h-5 text-lime-400 mt-0.5" />
                  <div>
                    <div className="text-sm text-charcoal-300">Response time</div>
                    <div className="text-white">Within 24 hours</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Quick links</h3>
              <div className="space-y-2">
                <Button variant="ghost" to="/demo/scout-search" className="w-full justify-start">
                  Try the Demo
                </Button>
                <Button variant="ghost" to="/demo/player/arjun-singh" className="w-full justify-start">
                  View Sample Player Profile
                </Button>
                <Button variant="ghost" to="/pricing" className="w-full justify-start">
                  View Pricing
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
