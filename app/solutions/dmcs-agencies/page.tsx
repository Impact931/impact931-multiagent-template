import Link from "next/link";
import { Metadata } from "next";
import {
  ArrowRight,
  CheckCircle,
  Shield,
  Clock,
  FileCheck,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "For DMCs & Agencies | Reliable Event Photography Partner",
  description:
    "JHR Photography partners with DMCs and agencies managing corporate events in Nashville. Consistent execution, professional protocols, and reliable delivery.",
  openGraph: {
    title: "For DMCs & Agencies | JHR Photography",
    description:
      "Reliable event photography partner for DMCs and agencies in Nashville.",
  },
};

const painPoints = [
  {
    icon: Shield,
    title: "You Can't Afford Surprises",
    description:
      "Your reputation rides on every vendor you recommend. A photographer who shows up late, misses shots, or delivers inconsistent quality reflects directly on you.",
  },
  {
    icon: Clock,
    title: "Tight Timelines Are Normal",
    description:
      "You're often brought in late or dealing with shifting requirements. You need vendors who can adapt without drama.",
  },
  {
    icon: FileCheck,
    title: "Paperwork Matters",
    description:
      "EAC forms, insurance certificates, venue requirements—administrative compliance isn't optional, it's table stakes.",
  },
  {
    icon: Users,
    title: "Your Client Is Watching",
    description:
      "Every interaction with your vendors reflects on your professionalism. You need partners who represent you well.",
  },
];

const benefits = [
  "Consistent, repeatable execution across events",
  "Professional appearance and conduct at all times",
  "Complete paperwork compliance without reminders",
  "Flexible response to changing requirements",
  "Clear communication before, during, and after events",
  "Delivery timelines you can count on",
];

const faqs = [
  {
    question: "How do you handle EAC requirements?",
    answer:
      "We're experienced with Nashville's major venues and understand EAC (Exhibitor Appointed Contractor) processes completely. We handle our own paperwork, carry appropriate insurance, and coordinate directly with venue contacts as needed.",
  },
  {
    question: "Can you work on tight timelines?",
    answer:
      "Yes. We understand that DMCs often receive final requirements close to event dates. We can typically accommodate last-minute additions or changes as long as we have clear communication about priorities.",
  },
  {
    question: "Do you have experience with high-profile corporate clients?",
    answer:
      "Yes. We've worked with DMCs supporting Fortune 500 companies, national associations, and high-stakes corporate events. We understand discretion, professionalism, and the stakes involved.",
  },
  {
    question: "How do you handle communication during events?",
    answer:
      "We establish clear communication protocols before the event. You'll have direct contact with our lead photographer, and we provide updates as needed throughout the event without requiring constant oversight.",
  },
];

// ICP Page Schema
const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Event Photography for DMCs & Agencies",
  description:
    "JHR Photography partners with DMCs and agencies managing corporate events in Nashville.",
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

export default function DMCsAgenciesPage() {
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
              For DMCs & Agencies
            </p>
            <h1 className="text-display-lg font-display font-bold text-jhr-white mb-6">
              Your Reputation Depends on Your Vendors
            </h1>
            <p className="text-body-lg text-jhr-white-muted mb-8">
              You've built trust over years. One unreliable vendor can damage
              that in a day. JHR Photography operates as an extension of your
              team—professional, prepared, and consistent every time.
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

      {/* We Understand */}
      <section className="section-padding bg-jhr-black">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-display-sm font-display font-bold text-jhr-white mb-4">
              We Understand Your Reality
            </h2>
            <p className="text-body-lg text-jhr-white-muted max-w-2xl mx-auto">
              Managing corporate events means managing countless details and
              stakeholders. Every vendor choice is a risk calculation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {painPoints.map((point) => (
              <div key={point.title} className="card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-jhr-gold/10 flex items-center justify-center flex-shrink-0">
                    <point.icon className="w-6 h-6 text-jhr-gold" />
                  </div>
                  <div>
                    <h3 className="text-heading-md font-semibold text-jhr-white mb-2">
                      {point.title}
                    </h3>
                    <p className="text-body-md text-jhr-white-dim">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="section-padding bg-jhr-black-light">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-display-sm font-display font-bold text-jhr-white mb-6">
                A Partner, Not Just a Vendor
              </h2>
              <p className="text-body-lg text-jhr-white-muted mb-6">
                JHR Photography was built by someone who understands operational
                pressure. Jayson's background in military logistics translates
                directly to event execution—meticulous planning, redundant
                systems, and calm under pressure.
              </p>
              <p className="text-body-md text-jhr-white-dim mb-8">
                When you recommend JHR to your clients, you're recommending a
                team that will represent you well. We show up in uniform, on
                time, prepared for anything. We communicate clearly and deliver
                on our promises.
              </p>
              <Link href="/about" className="text-jhr-gold hover:text-jhr-gold-light transition-colors font-medium flex items-center gap-2">
                Learn more about our approach
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div>
              <div className="bg-jhr-black border border-jhr-black-lighter rounded-xl p-8">
                <h3 className="text-heading-lg font-semibold text-jhr-gold mb-6">
                  What You Get
                </h3>
                <ul className="space-y-4">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-jhr-gold mt-0.5 flex-shrink-0" />
                      <span className="text-body-md text-jhr-white">
                        {benefit}
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
              Services for Your Clients
            </h2>
            <p className="text-body-lg text-jhr-white-muted max-w-2xl mx-auto">
              Outcome-based media systems that deliver measurable results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Link
              href="/services/corporate-event-coverage"
              className="card group"
            >
              <h3 className="text-heading-lg font-semibold text-jhr-white group-hover:text-jhr-gold transition-colors mb-2">
                Corporate Event Coverage
              </h3>
              <p className="text-body-md text-jhr-white-dim mb-4">
                Comprehensive documentation of conferences, trade shows, and
                corporate events. Same-day highlights available.
              </p>
              <span className="text-jhr-gold flex items-center gap-2 text-body-sm font-medium">
                Learn more <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link href="/services/headshot-activation" className="card group">
              <h3 className="text-heading-lg font-semibold text-jhr-white group-hover:text-jhr-gold transition-colors mb-2">
                Headshot Activation
              </h3>
              <p className="text-body-md text-jhr-white-dim mb-4">
                High-volume professional headshots with instant delivery. Drive
                booth traffic and capture leads for your clients.
              </p>
              <span className="text-jhr-gold flex items-center gap-2 text-body-sm font-medium">
                Learn more <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link href="/services/event-video-systems" className="card group">
              <h3 className="text-heading-lg font-semibold text-jhr-white group-hover:text-jhr-gold transition-colors mb-2">
                Event Video Systems
              </h3>
              <p className="text-body-md text-jhr-white-dim mb-4">
                Keynote capture, highlight reels, and testimonials that extend
                event ROI long after the venue clears.
              </p>
              <span className="text-jhr-gold flex items-center gap-2 text-body-sm font-medium">
                Learn more <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link href="/venues" className="card group">
              <h3 className="text-heading-lg font-semibold text-jhr-white group-hover:text-jhr-gold transition-colors mb-2">
                Nashville Venue Expertise
              </h3>
              <p className="text-body-md text-jhr-white-dim mb-4">
                We know Music City Center, Gaylord Opryland, and every major
                venue. Our local knowledge reduces your logistics burden.
              </p>
              <span className="text-jhr-gold flex items-center gap-2 text-body-sm font-medium">
                View venues <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-jhr-black-light">
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
            Let's Discuss Your Upcoming Events
          </h2>
          <p className="text-body-lg text-jhr-white-muted max-w-2xl mx-auto mb-8">
            Schedule a call and we'll talk through your client's needs. No
            pressure—just a conversation to see if we're a good fit for your
            preferred vendor list.
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
