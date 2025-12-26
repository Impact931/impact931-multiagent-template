"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Users,
  Database,
  Share2,
} from "lucide-react";
import { ROICalculator } from "@/components/ui/ROICalculator";
import { FadeUp } from "@/components/ui/ScrollAnimation";

const challenges = [
  {
    icon: Users,
    title: "Empty Booth Syndrome",
    description:
      "You invested thousands in booth space and setup. Now you're watching attendees walk by while your team stands waiting.",
  },
  {
    icon: Database,
    title: "Badge Scans Aren't Leads",
    description:
      "A badge scan tells you someone stopped. It doesn't tell you they're interested, qualified, or likely to respond.",
  },
  {
    icon: TrendingUp,
    title: "Proving Event ROI",
    description:
      "Leadership wants metrics. You need more than foot traffic—you need data that connects to pipeline.",
  },
  {
    icon: Share2,
    title: "Content That Disappears",
    description:
      "Generic giveaways end up in trash cans. Your brand investment leaves no lasting impression.",
  },
];

const outcomes = [
  "Consistent booth traffic throughout the event",
  "Qualified leads with captured contact data",
  "Instant delivery that delights attendees",
  "Shareable content that extends brand reach",
  "Real-time data feed to your sales team",
  "A booth experience people talk about",
];

const faqs = [
  {
    question: "How does this drive booth traffic?",
    answer:
      "Professional headshots are universally valuable—everyone needs one for LinkedIn, company profiles, or speaking submissions. Attendees actively seek out booths offering headshots because they want what you're giving, not just a chance to spin a wheel.",
  },
  {
    question: "What data do we get from attendees?",
    answer:
      "At check-in, we capture name, email, phone, and company. Fields are customizable—you can add job title, specific interests, or qualification questions. Data flows to you in real-time during the event.",
  },
  {
    question: "How quickly do attendees receive their photos?",
    answer:
      "Within minutes. Attendees receive their AI-retouched, branded headshot via text or email before they leave your booth. This instant gratification creates a memorable positive experience associated with your brand.",
  },
  {
    question: "Can the photos be branded with our company?",
    answer:
      "Absolutely. We apply your logo, brand colors, and messaging to every image. When attendees share their new headshot on LinkedIn, your brand travels with it.",
  },
  {
    question: "How many people can you photograph in a day?",
    answer:
      "Our standard setup handles 300+ attendees per day. For high-traffic trade shows, we can scale to 500+ with premium configuration and additional staff.",
  },
];

// ICP Page Schema
const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Headshot Activation for Exhibitors & Sponsors",
  description:
    "Professional headshot activation service for trade show exhibitors and sponsors. Drive booth traffic and capture qualified leads.",
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

export default function ExhibitorsSponsorPage() {
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
              For Exhibitors & Sponsors
            </p>
            <h1 className="text-display-lg font-display font-bold text-jhr-white mb-6">
              Stop Hoping for Booth Traffic
            </h1>
            <p className="text-body-lg text-jhr-white-muted mb-8">
              You've spent thousands on booth space. You've got great products
              and a sharp team. But half the conference is walking right by.
              What if you had something everyone at the show actually wanted?
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/schedule" className="btn-primary">
                Schedule a Strategy Call
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/services/headshot-activation" className="btn-secondary">
                Learn About Headshot Activation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="section-padding bg-jhr-black">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-display-sm font-display font-bold text-jhr-white mb-4">
              The Trade Show Challenge
            </h2>
            <p className="text-body-lg text-jhr-white-muted max-w-2xl mx-auto">
              You're competing for attention with hundreds of other exhibitors.
              Most booths blend together in attendees' minds.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {challenges.map((challenge) => (
              <div key={challenge.title} className="card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-jhr-gold/10 flex items-center justify-center flex-shrink-0">
                    <challenge.icon className="w-6 h-6 text-jhr-gold" />
                  </div>
                  <div>
                    <h3 className="text-heading-md font-semibold text-jhr-white mb-2">
                      {challenge.title}
                    </h3>
                    <p className="text-body-md text-jhr-white-dim">
                      {challenge.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="section-padding bg-jhr-black-light">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-display-sm font-display font-bold text-jhr-white mb-6">
                The Headshot Advantage
              </h2>
              <p className="text-body-lg text-jhr-white-muted mb-6">
                A professional headshot is something everyone at the conference
                actually needs. Not a stress ball that ends up in a drawer—a
                real professional asset they'll use on LinkedIn, their company
                website, speaker submissions, and more.
              </p>
              <p className="text-body-md text-jhr-white-dim mb-6">
                People will wait in line for it. They'll tell colleagues about
                it. They'll remember your brand as the one that gave them
                something genuinely useful—not another piece of branded swag
                they'll throw away at the airport.
              </p>
              <Link
                href="/services/headshot-activation"
                className="text-jhr-gold hover:text-jhr-gold-light transition-colors font-medium flex items-center gap-2"
              >
                See how it works
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div>
              <div className="bg-jhr-black border border-jhr-black-lighter rounded-xl p-8">
                <h3 className="text-heading-lg font-semibold text-jhr-gold mb-6">
                  What You Get
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

      {/* How It Works */}
      <section className="section-padding bg-jhr-black">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-display-sm font-display font-bold text-jhr-white mb-4">
              How It Works
            </h2>
            <p className="text-body-lg text-jhr-white-muted max-w-2xl mx-auto">
              A streamlined process designed for high-volume trade shows.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Attendee Arrives",
                description:
                  "Attracted by signage or word of mouth, attendees approach your booth.",
              },
              {
                step: "02",
                title: "Check-In",
                description:
                  "Quick registration captures contact info. Data flows to your CRM in real-time.",
              },
              {
                step: "03",
                title: "Photo Session",
                description:
                  "Professional headshot captured in under 2 minutes. Multiple poses, their choice.",
              },
              {
                step: "04",
                title: "Instant Delivery",
                description:
                  "AI-retouched, branded image sent to their phone before they leave.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-jhr-black-light border border-jhr-black-lighter rounded-lg p-6 text-center"
              >
                <span className="text-jhr-gold font-display font-bold text-heading-lg">
                  {item.step}
                </span>
                <h3 className="text-heading-md font-semibold text-jhr-white mt-4 mb-2">
                  {item.title}
                </h3>
                <p className="text-body-sm text-jhr-white-dim">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="section-padding bg-jhr-black-light">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-display-sm font-display font-bold text-jhr-white mb-4">
              Real Results
            </h2>
            <p className="text-body-lg text-jhr-white-muted max-w-2xl mx-auto">
              What our exhibitor clients have experienced.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-jhr-black border border-jhr-black-lighter rounded-lg p-6 text-center">
              <p className="text-display-sm font-display font-bold text-jhr-gold mb-2">
                300+
              </p>
              <p className="text-body-md text-jhr-white-dim">
                Booth visits per day
              </p>
            </div>
            <div className="bg-jhr-black border border-jhr-black-lighter rounded-lg p-6 text-center">
              <p className="text-display-sm font-display font-bold text-jhr-gold mb-2">
                100%
              </p>
              <p className="text-body-md text-jhr-white-dim">
                Contact capture rate
              </p>
            </div>
            <div className="bg-jhr-black border border-jhr-black-lighter rounded-lg p-6 text-center">
              <p className="text-display-sm font-display font-bold text-jhr-gold mb-2">
                Minutes
              </p>
              <p className="text-body-md text-jhr-white-dim">
                From photo to delivery
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator - Light Section for Visual Break */}
      <section className="section-padding section-light">
        <div className="section-container">
          <FadeUp>
            <div className="text-center mb-12">
              <p className="text-jhr-gold-dark font-medium text-body-lg mb-2">Calculate Your ROI</p>
              <h2 className="text-display-sm font-display font-bold text-jhr-black mb-4">
                See the Value of Your Activation
              </h2>
              <p className="text-body-lg text-jhr-light-text-muted max-w-2xl mx-auto">
                Understand the lead generation and dwell time value a Headshot Activation brings to your booth.
              </p>
            </div>
          </FadeUp>
          <ROICalculator variant="light" />
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
            Ready to Stand Out at Your Next Event?
          </h2>
          <p className="text-body-lg text-jhr-white-muted max-w-2xl mx-auto mb-8">
            Let's discuss your trade show or sponsorship activation. We'll help
            you understand how Headshot Activation can drive traffic and generate
            leads for your brand.
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
