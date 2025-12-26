"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle,
  Video,
  Mic,
  Film,
  Share2,
  Play,
} from "lucide-react";
import { PageHero } from "@/components/ui/HeroBanner";
import {
  FadeUp,
  SlideInLeft,
  SlideInRight,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/ScrollAnimation";

const services = [
  {
    icon: Video,
    title: "Keynote Capture",
    description:
      "Multi-camera coverage of your keynotes and general sessions. Professional audio capture ensures every word comes through clearly.",
  },
  {
    icon: Film,
    title: "Highlight Reels",
    description:
      "Condensed event stories that capture the energy and key moments. Perfect for social media, stakeholder reports, and next year's promotion.",
  },
  {
    icon: Mic,
    title: "Attendee Testimonials",
    description:
      "On-site testimonial capture with professional lighting and sound. Real voices telling real stories about your event's impact.",
  },
  {
    icon: Share2,
    title: "Social-Ready Clips",
    description:
      "Short-form content optimized for LinkedIn, Instagram, and other platforms. Delivered in formats ready for immediate posting.",
  },
];

const outcomes = [
  "Extended event ROI through lasting video content",
  "Professional keynote archives for internal use",
  "Compelling promotional material for future events",
  "Authentic testimonials for marketing campaigns",
  "Social content that drives engagement and reach",
];

const faqs = [
  {
    question: "Can you add video to our photography package?",
    answer:
      "Yes. Video can be added to any photography package or booked independently. Many clients start with event coverage photography and add video for key elements like keynotes or testimonials.",
  },
  {
    question: "How quickly can we receive the highlight reel?",
    answer:
      "Standard turnaround for highlight reels is 2-3 weeks. For events requiring faster delivery, we offer expedited editing—discuss your timeline during our strategy call.",
  },
  {
    question: "What's included in keynote capture?",
    answer:
      "Multi-camera coverage (typically 2-3 cameras), professional audio capture from the venue feed plus backup recording, and basic editing including intro/outro, lower thirds, and clean cuts.",
  },
  {
    question: "Do you bring your own audio equipment?",
    answer:
      "We connect to your venue's audio feed for the cleanest sound, but always bring backup recording equipment. For testimonials and interviews, we use professional wireless microphones.",
  },
  {
    question: "What formats do you deliver in?",
    answer:
      "Standard delivery includes high-resolution files for archival, web-optimized versions for your site, and platform-specific exports for social media (LinkedIn, Instagram, YouTube, etc.).",
  },
];

export default function EventVideoSystemsPage() {
  return (
    <div>
      {/* Hero Banner */}
      <PageHero
        title="Your Event Deserves More Than Photos"
        subtitle="Event Video Systems™"
        description="Great events end. Great video extends their impact. Capture keynotes for training libraries, testimonials for marketing, and highlights that promote next year's event before this one's even over."
        image="/images/generated/service-event-video.jpg"
        imageAlt="Professional video production at corporate event"
        backLink={{ text: "Back to Services", href: "/services" }}
      />

      {/* The Value of Video */}
      <section className="section-padding bg-jhr-black">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <SlideInLeft>
              <div>
                <h2 className="text-display-sm font-display font-bold text-jhr-white mb-6">
                  Why Event Video Matters
                </h2>
                <p className="text-body-lg text-jhr-white-muted mb-6">
                  You spend months planning an event. Attendees experience it for
                  a few days. Then it's over. Video changes that equation.
                </p>
                <p className="text-body-md text-jhr-white-dim mb-6">
                  A well-produced highlight reel becomes next year's promotional
                  tool. Keynote recordings become training content. Testimonials
                  become marketing assets. The event ends, but its value
                  continues.
                </p>
                <div className="bg-jhr-black-light border border-jhr-black-lighter rounded-lg p-6">
                  <h3 className="text-heading-md font-semibold text-jhr-gold mb-4">
                    What You Get
                  </h3>
                  <ul className="space-y-3">
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
            </SlideInLeft>
            <SlideInRight>
              <div className="aspect-video relative rounded-xl overflow-hidden">
                <Image
                  src="/images/generated/event-keynote.jpg"
                  alt="Keynote presentation being recorded"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-jhr-gold/90 flex items-center justify-center cursor-pointer hover:bg-jhr-gold transition-colors">
                    <Play className="w-8 h-8 text-jhr-black ml-1" />
                  </div>
                </div>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-jhr-black-light">
        <div className="section-container">
          <FadeUp>
            <div className="text-center mb-12">
              <h2 className="text-display-sm font-display font-bold text-jhr-white mb-4">
                Video Services
              </h2>
              <p className="text-body-lg text-jhr-white-muted max-w-2xl mx-auto">
                Each service can be added individually or combined for
                comprehensive coverage.
              </p>
            </div>
          </FadeUp>

          <StaggerContainer className="grid md:grid-cols-2 gap-6">
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <div className="card h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-jhr-gold/10 flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-6 h-6 text-jhr-gold" />
                    </div>
                    <div>
                      <h3 className="text-heading-md font-semibold text-jhr-white mb-2">
                        {service.title}
                      </h3>
                      <p className="text-body-md text-jhr-white-dim">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-padding bg-jhr-black">
        <div className="section-container">
          <FadeUp>
            <div className="text-center mb-12">
              <h2 className="text-display-sm font-display font-bold text-jhr-white mb-4">
                Common Applications
              </h2>
              <p className="text-body-lg text-jhr-white-muted max-w-2xl mx-auto">
                How organizations use event video to extend ROI.
              </p>
            </div>
          </FadeUp>

          <StaggerContainer className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <StaggerItem>
              <div className="bg-jhr-black-light border border-jhr-black-lighter rounded-lg p-6 h-full">
                <h3 className="text-heading-md font-semibold text-jhr-white mb-3">
                  Internal Training
                </h3>
                <p className="text-body-sm text-jhr-white-dim">
                  Keynote recordings become on-demand training for team members
                  who couldn't attend. Build a library of leadership content.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-jhr-black-light border border-jhr-black-lighter rounded-lg p-6 h-full">
                <h3 className="text-heading-md font-semibold text-jhr-white mb-3">
                  Event Promotion
                </h3>
                <p className="text-body-sm text-jhr-white-dim">
                  This year's highlight reel sells next year's tickets. Show
                  prospects exactly what they'll experience.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-jhr-black-light border border-jhr-black-lighter rounded-lg p-6 h-full">
                <h3 className="text-heading-md font-semibold text-jhr-white mb-3">
                  Stakeholder Reporting
                </h3>
                <p className="text-body-sm text-jhr-white-dim">
                  A 3-minute highlight reel communicates event success better than
                  any slide deck. Show the board what happened.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-jhr-black-light">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <FadeUp>
              <h2 className="text-display-sm font-display font-bold text-jhr-white mb-8 text-center">
                How We Work
              </h2>
            </FadeUp>

            <StaggerContainer className="space-y-6">
              {[
                {
                  step: "01",
                  title: "Pre-Production",
                  description:
                    "We review your event schedule, identify key capture moments, and coordinate with your AV team on audio feeds and positioning.",
                },
                {
                  step: "02",
                  title: "On-Site Capture",
                  description:
                    "Our video team works alongside our photography team (if applicable), capturing footage throughout the event without disruption.",
                },
                {
                  step: "03",
                  title: "Post-Production",
                  description:
                    "Professional editing, color grading, audio mixing, and graphics. We deliver polished content ready for its intended use.",
                },
                {
                  step: "04",
                  title: "Delivery",
                  description:
                    "Files delivered in all formats you need—archival masters, web versions, and platform-specific exports for social media.",
                },
              ].map((item) => (
                <StaggerItem key={item.step}>
                  <div className="flex gap-6 items-start bg-jhr-black border border-jhr-black-lighter rounded-lg p-6">
                    <span className="text-jhr-gold font-display font-bold text-heading-lg">
                      {item.step}
                    </span>
                    <div>
                      <h3 className="text-heading-md font-semibold text-jhr-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-body-md text-jhr-white-dim">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
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
            src="/images/generated/event-awards-ceremony.jpg"
            alt="Corporate awards ceremony"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="section-container text-center relative z-10">
          <FadeUp>
            <h2 className="text-display-sm font-display font-bold text-jhr-white mb-6">
              Let's Discuss Your Video Needs
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-body-lg text-jhr-white-muted max-w-2xl mx-auto mb-8">
              Every event has different video requirements. Schedule a call and
              we'll discuss what makes sense for your goals and budget.
            </p>
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
