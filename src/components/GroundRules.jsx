import React from 'react';
import { 
  ShieldCheck, 
  Clock, 
  CreditCard, 
  Wine, 
  Sparkles, 
  UtensilsCrossed, 
  Flame, 
  Car 
} from 'lucide-react';

const rulesList = [
  {
    icon: CreditCard,
    title: 'Booking & Payment Terms',
    desc: 'A 50% non-refundable deposit is required at booking confirmation. The remaining 50% balance must be settled prior to the start of the event.'
  },
  {
    icon: Clock,
    title: '10:00 PM Sound Curfew',
    desc: 'Outdoor music, DJ audio, and loud speakers on the lawn must observe local municipal noise regulations and conclude by 10:00 PM.'
  },
  {
    icon: Wine,
    title: 'Alcohol & Bar Regulations',
    desc: 'Serving alcohol is permitted only with valid government licenses/permits. Unlicensed consumption on venue grounds is strictly prohibited.'
  },
  {
    icon: Sparkles,
    title: 'Decoration & Teardown',
    desc: 'Decorators are responsible for stage setup safety and completing complete teardown/cleanup within 3 hours after event completion.'
  },
  {
    icon: UtensilsCrossed,
    title: 'Kitchen & Catering Standards',
    desc: 'Catering teams must maintain high hygiene standards. Kitchen counter surfaces and dining areas must be left thoroughly cleaned.'
  },
  {
    icon: Flame,
    title: 'Fire Safety & Homa Rituals',
    desc: 'Traditional fire-pit rituals (Havan/Homa) must be conducted only in designated stage zones with fire safety equipment at hand.'
  },
  {
    icon: Car,
    title: 'Parking & Traffic Flow',
    desc: 'On-site parking accommodates up to 150 vehicles. 2 entrance/exit gates allow smooth drop-off and organized valet traffic.'
  },
  {
    icon: ShieldCheck,
    title: 'Venue Property Integrity',
    desc: 'Guests are expected to respect venue infrastructure. Any physical damages to walls, lighting, or lawns will be billed accordingly.'
  }
];

export default function GroundRules() {
  return (
    <section className="rules-section" id="ground-rules">
      <div className="section-container">
        
        {/* Header */}
        <div className="section-header-center">
          <span className="section-tag">GROUND RULES & POLICIES</span>
          <h2 className="section-title">
            VENUE GUIDELINES FOR A<br />
            <span className="highlight-serif">SAFE & SEAMLESS CELEBRATION</span>
          </h2>
          <div className="header-divider-center">
            <span className="divider-dot"></span>
          </div>
          <p className="section-desc-center">
            To ensure the safety, comfort, and smooth execution of all events at Mahotsav Farms, we request organizers and guests to abide by our standard operational ground rules.
          </p>
        </div>

        {/* Rules Cards Grid */}
        <div className="rules-grid">
          {rulesList.map((rule, idx) => {
            const Icon = rule.icon;
            return (
              <div key={idx} className="rule-card">
                <div className="rule-icon-box">
                  <Icon size={22} />
                </div>
                <div className="rule-content">
                  <h3 className="rule-title">{rule.title}</h3>
                  <p className="rule-desc">{rule.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
