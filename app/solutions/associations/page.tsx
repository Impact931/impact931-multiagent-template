import Link from "next/link";
import { Metadata } from "next";
import {
  ArrowRight,
  CheckCircle,
  Heart,
  Calendar,
  Award,
  Camera,
} from "lucide-react";

export const metadata: Metadata = {
  title: "For Associations & Conferences | Member-Centric Event Photography",
  description:
    "JHR Photography partners with associations to document conferences, provide member headshots, and create content that demonstrates value to stakeholders.",
  openGraph: {
    title: "For Associations & Conferences | JHR Photography",
    description:
      "Event photography and headshot services for association conferences.",
  },
};

const memberBenefits = [
  {
    icon: Camera,
    title: "Professional Headshots as Member Benefit",
    description:
      "Offer attendees complimentary professional headshots. A tangible benefit that members appreciate and use long after the conference ends.",
  },
  {
    icon: Award,
    title: "Awards & Recognition Coverage",
    description:
      "Document award ceremonies, honors, and member achievements. These moments matter to recipients and demonstrate association value.",
  },
  {
    icon: Heart,
    title: "Community Documentation",
    description:
      "Capture the networking, learning, and fellowship that make your conference valuable. Photos that tell the story of your community.",
  },
  {
    icon: Calendar,
    title: "Multi-Day Consistency",
    description:
      "Same team, same quality, every day. We maintain energy and consistency across 3-5 day conferences.",
  },
];

const outcomes = [
  "Tangible member benefit that drives attendance",
  "Professional documentation of speakers and sessions",
  "Awards ceremony coverage members treasure",
  "Social media content throughout the event",
  "Marketing assets for next year's promotion",
  "Stakeholder reporting visuals",
];

const faqs = [
  {
    question: "How do headshots work as a member benefit?",
    answer:
      "We set up a Headshot Activation station at your conference where members can receive a complimentary professional headshot. It's branded to your association, delivered instantly, and creates a memorable experience that members talk about.",
  },
  {
    question: "Can you handle multi-day conferences?",
    answer:
      "Multi-day events are our specialty. We maintain the same team throughout, establish consistent workflows, and deliver rolling galleries so you have content each day. Our stamina across 3-5 day conferences is what association planners appreciate most.",
  },
  {
    question: "How do you handle awards ceremonies?",
    answer:
      "We understand these moments matter to recipients. We coordinate shot lists in advance, position for optimal angles, and deliver images quickly so winners can share their recognition while the excitement is fresh.",
  },
  {
    question: "What about speaker documentation?",
    answer:
      "We capture keynotes, breakouts, and panel discussions. Images are delivered quickly for social media use during the conference and post-event marketing.",
  },
  {
    question: "How can photos support stakeholder reporting?",
    answer:
      "A well-curated gallery demonstrates conference value better than any spreadsheet. We provide images that show engaged attendees, packed sessions, and meaningful interactions—visual proof of a successful event.",
  },
];

// ICP Page Schema
const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Event Photography for Associations & Conferences",
  description:
    "JHR Photography partners with associations to document conferences and provide member-centric photography services.",
  provider: {
    "@type": "Organization",
    name: "JHR Photography",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function AssociationsPage() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="section-padding bg-gradient-dark">
        <div className="section-container">
          <div className="max-w-3xl">
            <p className="text-jhr-gold font-medium text-body-lg mb-4">
              For Associations & Conferences
            </p>
            <h1 className="text-display-lg font-display font-bold text-jhr-white mb-6">
              Give Your Members Something They'll Actually Value
            </h1>
            <p className="text-body-lg text-jhr-white-muted mb-8">
              Your conference is more than sessions and networking—it's a
              demonstration of member value. JHR helps you document the
              experience, celebrate achievements, and provide benefits members
              talk about long after they return home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/schedule" className="btn-primary">
                Schedule a Strategy Call
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/contact" className="btn-secondary">
                Request Information
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Member-Centric Approach */}
      <section className="section-padding bg-jhr-black">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-display-sm font-display font-bold text-jhr-white mb-4">
              Member-Centric Photography
            </h2>
            <p className="text-body-lg text-jhr-white-muted max-w-2xl mx-auto">
              Every photo we take should demonstrate value—to members, to
              sponsors, and to stakeholders.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {memberBenefits.map((benefit) => (
              <div key={benefit.title} className="card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-jhr-gold/10 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-jhr-gold" />
                  </div>
                  <div>
                    <h3 className="text-heading-md font-semibold text-jhr-white mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-body-md text-jhr-white-dim">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="section-padding bg-jhr-black-light">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-display-sm font-display font-bold text-jhr-white mb-6">
                What You Get
              </h2>
              <p className="text-body-lg text-jhr-white-muted mb-6">
                Photography isn't just documentation—it's proof of value.
                When the board asks about conference ROI, you'll have more than
                attendance numbers. You'll have visual evidence of engagement,
                learning, and community.
              </p>
              <p className="text-body-md text-jhr-white-dim">
                When members share their professional headshots on LinkedIn,
                they're extending your association's reach. When award recipients
                post their recognition photos, they're demonstrating what
                membership means.
              </p>
            </div>
            <div>
              <div className="bg-jhr-black border border-jhr-black-lighter rounded-xl p-8">
                <h3 className="text-heading-lg font-semibold text-jhr-gold mb-6">
                  Conference Deliverables
                </h3>
                <ul className="space-y-4">
                  {outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-jhr-gold mt-0.5 flex-shrink-0" />
                      <span className="text-body-md text-jhr-white">
                        {outcome}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-jhr-black">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-display-sm font-display font-bold text-jhr-white mb-4">
              Services for Associations
            </h2>
            <p className="text-body-lg text-jhr-white-muted max-w-2xl mx-auto">
              Comprehensive solutions for annual conferences and member events.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Link
              href="/services/corporate-event-coverage"
              className="card group"
            >
              <h3 className="text-heading-lg font-semibold text-jhr-white group-hover:text-jhr-gold transition-colors mb-2">
                Conference Coverage
              </h3>
              <p className="text-body-md text-jhr-white-dim mb-4">
                Keynotes, breakouts, networking, awards—comprehensive
                documentation of your entire event.
              </p>
              <span className="text-jhr-gold flex items-center gap-2 text-body-sm font-medium">
                Learn more <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link href="/services/headshot-activation" className="card group">
              <h3 className="text-heading-lg font-semibold text-jhr-white group-hover:text-jhr-gold transition-colors mb-2">
                Member Headshots
              </h3>
              <p className="text-body-md text-jhr-white-dim mb-4">
                Professional headshots as a member benefit. Instantly delivered
                and branded to your association.
              </p>
              <span className="text-jhr-gold flex items-center gap-2 text-body-sm font-medium">
                Learn more <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link href="/services/event-video-systems" className="card group">
              <h3 className="text-heading-lg font-semibold text-jhr-white group-hover:text-jhr-gold transition-colors mb-2">
                Event Video
              </h3>
              <p className="text-body-md text-jhr-white-dim mb-4">
                Keynote capture, highlights, and testimonials that extend
                conference value for members who couldn't attend.
              </p>
              <span className="text-jhr-gold flex items-center gap-2 text-body-sm font-medium">
                Learn more <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Nashville Expertise */}
      <section className="section-padding bg-jhr-black-light">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-display-sm font-display font-bold text-jhr-white mb-6">
                Nashville Expertise
              </h2>
              <p className="text-body-lg text-jhr-white-muted mb-6">
                If your association is meeting in Nashville, you need a partner
                who knows the terrain. We've worked extensively at Music City
                Center, Gaylord Opryland, and all major Nashville venues.
              </p>
              <p className="text-body-md text-jhr-white-dim mb-8">
                We understand the logistics, the lighting challenges, and the
                people who run these properties. This local knowledge reduces
                friction for you and ensures smooth execution.
              </p>
              <Link
                href="/venues"
                className="text-jhr-gold hover:text-jhr-gold-light transition-colors font-medium flex items-center gap-2"
              >
                View our venue experience
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Link
                href="/venues/music-city-center"
                className="bg-jhr-black border border-jhr-black-lighter rounded-lg p-4 hover:border-jhr-gold transition-colors"
              >
                <p className="text-body-md font-medium text-jhr-white">
                  Music City Center
                </p>
                <p className="text-body-sm text-jhr-white-dim">
                  Downtown Nashville
                </p>
              </Link>
              <Link
                href="/venues/gaylord-opryland"
                className="bg-jhr-black border border-jhr-black-lighter rounded-lg p-4 hover:border-jhr-gold transition-colors"
              >
                <p className="text-body-md font-medium text-jhr-white">
                  Gaylord Opryland
                </p>
                <p className="text-body-sm text-jhr-white-dim">Music Valley</p>
              </Link>
              <Link
                href="/venues/omni-hotel-nashville"
                className="bg-jhr-black border border-jhr-black-lighter rounded-lg p-4 hover:border-jhr-gold transition-colors"
              >
                <p className="text-body-md font-medium text-jhr-white">
                  Omni Hotel
                </p>
                <p className="text-body-sm text-jhr-white-dim">Downtown Nashville</p>
              </Link>
              <Link
                href="/venues/jw-marriott-nashville"
                className="bg-jhr-black border border-jhr-black-lighter rounded-lg p-4 hover:border-jhr-gold transition-colors"
              >
                <p className="text-body-md font-medium text-jhr-white">
                  JW Marriott
                </p>
                <p className="text-body-sm text-jhr-white-dim">Downtown Nashville</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-jhr-black">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-display-sm font-display font-bold text-jhr-white mb-8 text-center">
              Common Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="card">
                  <h3 className="text-heading-md font-semibold text-jhr-white mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-body-md text-jhr-white-dim">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-dark">
        <div className="section-container text-center">
          <h2 className="text-display-sm font-display font-bold text-jhr-white mb-6">
            Let's Discuss Your Annual Conference
          </h2>
          <p className="text-body-lg text-jhr-white-muted max-w-2xl mx-auto mb-8">
            Every association has different needs. Schedule a call and we'll
            discuss your conference, your members, and how we can help deliver
            value that extends beyond the event.
          </p>
          <Link href="/schedule" className="btn-primary text-lg px-10 py-4">
            Schedule a Strategy Call
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
