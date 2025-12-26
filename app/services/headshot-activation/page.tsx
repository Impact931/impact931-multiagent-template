"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Smartphone,
  Database,
  Sparkles,
} from "lucide-react";
import { PageHero } from "@/components/ui/HeroBanner";
import {
  FadeUp,
  FadeIn,
  SlideInLeft,
  SlideInRight,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/ScrollAnimation";
import { ROICalculator } from "@/components/ui/ROICalculator";
import { TrustBadgesInline } from "@/components/ui/TrustBadges";

const features = [
  {
    icon: Users,
    title: "300+ Attendees Per Day",
    description:
      "Our streamlined process handles high-volume events with ease. Each attendee spends approximately 5 minutes from check-in to delivery.",
  },
  {
    icon: Smartphone,
    title: "Instant Delivery",
    description:
      "AI-retouched, branded images delivered directly to attendees' phones within minutes. No waiting, no follow-up required.",
  },
  {
    icon: Database,
    title: "Real-Time Lead Capture",
    description:
      "Capture name, email, phone, and company at check-in. Your sales team gets warm leads during the event, not days later.",
  },
  {
    icon: Sparkles,
    title: "AI-Enhanced Retouching",
    description:
      "Professional-grade retouching applied automatically. Every attendee leaves with a polished, usable headshot.",
  },
];

const outcomes = [
  "Drive consistent booth traffic throughout the event",
  "Generate qualified leads with captured contact data",
  "Create shareable content that promotes your brand",
  "Provide immediate value to attendees",
  "Stand out from generic promotional giveaways",
];

const faqs = [
  {
    question: "How many headshots can you do in a day?",
    answer:
      "Our standard setup handles 300+ attendees per day. For high-volume events, we can scale to 500+ with additional equipment and staff. We'll discuss your expected traffic and plan accordingly.",
  },
  {
    question: "How quickly do attendees receive their photos?",
    answer:
      "Within minutes. Attendees receive their AI-retouched, branded images via text or email before they leave your booth. This instant gratification is key to the activation's success.",
  },
  {
    question: "What data do you capture for lead generation?",
    answer:
      "At check-in, we capture name, email, phone number, and company (fields are customizable). This data is delivered to you in real-time via your preferred method—spreadsheet, webhook, or direct CRM integration.",
  },
  {
    question: "Can you add our branding to the photos?",
    answer:
      "Absolutely. We apply your logo, brand colors, and any required messaging to every image. Attendees share branded content, extending your reach beyond the event.",
  },
  {
    question: "What equipment do you bring?",
    answer:
      "We bring everything: professional lighting, backdrop system, camera equipment, processing workstation, and all cables and backup gear. We operate self-sufficiently—you just provide the space.",
  },
];

export default function HeadshotActivationPage() {
  return (
    <div>
      {/* Hero Banner */}
      <PageHero
        title="Turn Your Booth Into the Must-Visit Destination"
        subtitle="Headshot Activation™"
        description="Professional headshots delivered in minutes. Drive traffic, capture leads, and give every attendee an instant professional asset they'll actually use. No gimmicks—just genuine value that keeps your booth packed."
        image="/images/generated/service-headshot-activation.jpg"
        imageAlt="Professional headshot activation at trade show"
        backLink={{ text: "Back to Services", href: "/services" }}
      />

      {/* Problem / Solution */}
      <section className="section-padding bg-jhr-black">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <SlideInLeft>
              <div>
                <h2 className="text-display-sm font-display font-bold text-jhr-white mb-6">
                  The Problem with Trade Show Giveaways
                </h2>
                <p className="text-body-lg text-jhr-white-muted mb-6">
                  Stress balls end up in trash cans. Branded pens disappear.
                  Prize wheels attract the wrong crowd. You spend thousands on
                  booth space and walk away with a stack of badge scans from
                  people who just wanted free stuff.
                </p>
                <p className="text-body-md text-jhr-white-dim">
                  A professional headshot is different. It's immediately valuable.
                  People actually need one—for LinkedIn, company profiles, speaker
                  submissions. They'll wait in line for it, share it on social
                  media, and remember who gave it to them.
                </p>
              </div>
            </SlideInLeft>
            <SlideInRight>
              <div className="bg-jhr-black-light border border-jhr-black-lighter rounded-xl p-8">
                <h3 className="text-heading-lg font-semibold text-jhr-gold mb-6">
                  What You Get
                </h3>
                <ul className="space-y-4">
                  {outcomes.map((outcome, index) => (
                    <li key={outcome} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-jhr-gold mt-0.5 flex-shrink-0" />
                      <span className="text-body-md text-jhr-white">
                        {outcome}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-jhr-black-light relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/generated/event-trade-show.jpg"
            alt="Trade show floor"
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="section-container relative z-10">
          <FadeUp>
            <div className="text-center mb-12">
              <h2 className="text-display-sm font-display font-bold text-jhr-white mb-4">
                How It Works
              </h2>
              <p className="text-body-lg text-jhr-white-muted max-w-2xl mx-auto">
                A streamlined process that keeps lines moving and attendees happy.
              </p>
            </div>
          </FadeUp>

          <StaggerContainer className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Check-In",
                description:
                  "Attendee provides contact info at your branded station. Data flows to your CRM in real-time.",
              },
              {
                step: "02",
                title: "Photography",
                description:
                  "Quick, professional session with our photographer. Multiple poses captured in under 2 minutes.",
              },
              {
                step: "03",
                title: "Selection",
                description:
                  "Attendee chooses their favorite image from the options on screen.",
              },
              {
                step: "04",
                title: "Delivery",
                description:
                  "AI-retouched, branded image delivered to their phone within minutes.",
              },
            ].map((item) => (
              <StaggerItem key={item.step}>
                <div className="bg-jhr-black border border-jhr-black-lighter rounded-lg p-6 h-full">
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
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-jhr-black">
        <div className="section-container">
          <FadeUp>
            <div className="text-center mb-12">
              <h2 className="text-display-sm font-display font-bold text-jhr-white mb-4">
                Built for High-Volume Events
              </h2>
              <p className="text-body-lg text-jhr-white-muted max-w-2xl mx-auto">
                Every detail engineered for speed, quality, and reliability.
              </p>
            </div>
          </FadeUp>

          <StaggerContainer className="grid md:grid-cols-2 gap-6">
            {features.map((feature) => (
              <StaggerItem key={feature.title}>
                <div className="card h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-jhr-gold/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-jhr-gold" />
                    </div>
                    <div>
                      <h3 className="text-heading-md font-semibold text-jhr-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-body-md text-jhr-white-dim">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Sample Gallery */}
      <section className="section-padding bg-jhr-black-light">
        <div className="section-container">
          <FadeUp>
            <div className="text-center mb-12">
              <h2 className="text-display-sm font-display font-bold text-jhr-white mb-4">
                Professional Results
              </h2>
              <p className="text-body-lg text-jhr-white-muted max-w-2xl mx-auto">
                Every attendee leaves with a polished, LinkedIn-ready headshot.
              </p>
            </div>
          </FadeUp>

          <StaggerContainer className="grid grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              "/images/generated/gallery-headshot-1.jpg",
              "/images/generated/gallery-headshot-2.jpg",
              "/images/generated/gallery-headshot-3.jpg",
            ].map((src, index) => (
              <StaggerItem key={index}>
                <div className="aspect-[3/4] relative rounded-lg overflow-hidden">
                  <Image
                    src={src}
                    alt={`Professional headshot example ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ROI Calculator - Light Section for Visual Break */}
      <section className="section-padding section-light">
        <div className="section-container">
          <FadeUp>
            <div className="text-center mb-12">
              <p className="text-jhr-gold-dark font-medium text-body-lg mb-2">Calculate Your Value</p>
              <h2 className="text-display-sm font-display font-bold text-jhr-black mb-4">
                See What Your Activation Could Deliver
              </h2>
            </div>
          </FadeUp>
          <ROICalculator variant="light" />
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-jhr-black">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <FadeUp>
              <h2 className="text-display-sm font-display font-bold text-jhr-white mb-8 text-center">
                Frequently Asked Questions
              </h2>
            </FadeUp>
            <StaggerContainer className="space-y-6">
              {faqs.map((faq, index) => (
                <StaggerItem key={index}>
                  <div className="card">
                    <h3 className="text-heading-md font-semibold text-jhr-white mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-body-md text-jhr-white-dim">{faq.answer}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/generated/event-keynote.jpg"
            alt="Corporate keynote event"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="section-container text-center relative z-10">
          <FadeUp>
            <h2 className="text-display-sm font-display font-bold text-jhr-white mb-6">
              Ready to Transform Your Next Event?
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-body-lg text-jhr-white-muted max-w-2xl mx-auto mb-6">
              Let's discuss your event, venue, and goals. We'll show you exactly
              how Headshot Activation can drive traffic and generate leads for
              your brand.
            </p>
          </FadeUp>
          <FadeUp delay={0.15}>
            <TrustBadgesInline />
          </FadeUp>
          <FadeUp delay={0.2}>
            <Link href="/schedule" className="btn-primary text-lg px-10 py-4">
              Schedule a Strategy Call
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
