"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Calendar, Shield, Zap, Phone, FileText, Camera } from "lucide-react";
import { HeroBanner } from "@/components/ui/HeroBanner";
import {
  FadeUp,
  FadeIn,
  SlideInLeft,
  SlideInRight,
  StaggerContainer,
  StaggerItem,
  ScaleUp,
} from "@/components/ui/ScrollAnimation";
import { PhotographerTrustBadges } from "@/components/ui/TrustBadges";
import { ProcessTimeline } from "@/components/ui/ProcessTimeline";

// StoryBrand Homepage - Hero acknowledges anxiety, routes by outcome
export default function HomePage() {
  return (
    <div>
      {/* Hero Section with Banner Image */}
      <HeroBanner
        title="Stop Worrying About Your Media Vendor."
        subtitle="Planning a high-stakes event in Nashville?"
        description="JHR Photography is Nashville's trusted partner for corporate event photography and headshot activations. We remove the friction so you can focus on what matters—delivering an exceptional event."
        image="/images/generated/hero-homepage.jpg"
        imageAlt="Professional corporate event photography at Nashville convention center"
        primaryCta={{ text: "Schedule a Strategy Call", href: "/schedule" }}
        secondaryCta={{ text: "Explore Our Services", href: "/services" }}
        height="full"
        overlay="gradient"
      >
        {/* Trust Signals */}
        <div className="flex flex-wrap gap-6 mt-8">
          <div className="flex items-center gap-2 text-jhr-white-muted">
            <CheckCircle className="w-5 h-5 text-jhr-gold" />
            <span className="text-body-sm">Venue-Fluent</span>
          </div>
          <div className="flex items-center gap-2 text-jhr-white-muted">
            <CheckCircle className="w-5 h-5 text-jhr-gold" />
            <span className="text-body-sm">Agency-Grade Execution</span>
          </div>
          <div className="flex items-center gap-2 text-jhr-white-muted">
            <CheckCircle className="w-5 h-5 text-jhr-gold" />
            <span className="text-body-sm">AI-Accelerated Delivery</span>
          </div>
        </div>
      </HeroBanner>

      {/* Photographer Trust Engine */}
      <section className="py-8 bg-jhr-black border-b border-jhr-black-lighter">
        <div className="section-container">
          <PhotographerTrustBadges
            title="Professional Photographers You Can Trust"
            subtitle="Our Team"
            compact
          />
        </div>
      </section>

      {/* ICP Routing Section - "Choose Your Outcome" */}
      <section className="section-padding bg-jhr-black-light">
        <div className="section-container">
          <FadeUp>
            <div className="text-center mb-12">
              <h2 className="text-display-sm font-display font-bold text-jhr-white mb-4">
                What Brings You Here Today?
              </h2>
              <p className="text-body-lg text-jhr-white-muted max-w-2xl mx-auto">
                We serve different clients with different needs. Choose the path that fits your situation.
              </p>
            </div>
          </FadeUp>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* DMC/Agency Card */}
            <StaggerItem>
              <Link href="/solutions/dmcs-agencies" className="card group h-full block">
                <div className="w-12 h-12 rounded-lg bg-jhr-gold/10 flex items-center justify-center mb-4 group-hover:bg-jhr-gold/20 transition-colors">
                  <Shield className="w-6 h-6 text-jhr-gold" />
                </div>
                <h3 className="text-heading-lg font-semibold text-jhr-white mb-2">
                  I need reliable execution for my client.
                </h3>
                <p className="text-body-md text-jhr-white-dim mb-4">
                  You're a DMC, agency, or production company managing an event in Nashville. You need a vendor who won't let you down.
                </p>
                <span className="text-jhr-gold flex items-center gap-2 text-body-sm font-medium group-hover:gap-3 transition-all">
                  Solutions for Agencies <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </StaggerItem>

            {/* Enterprise Card */}
            <StaggerItem>
              <Link href="/solutions/exhibitors-sponsors" className="card group h-full block">
                <div className="w-12 h-12 rounded-lg bg-jhr-gold/10 flex items-center justify-center mb-4 group-hover:bg-jhr-gold/20 transition-colors">
                  <Zap className="w-6 h-6 text-jhr-gold" />
                </div>
                <h3 className="text-heading-lg font-semibold text-jhr-white mb-2">
                  I need to drive traffic and generate leads.
                </h3>
                <p className="text-body-md text-jhr-white-dim mb-4">
                  You're an exhibitor or sponsor looking to maximize booth engagement and capture qualified leads at your next event.
                </p>
                <span className="text-jhr-gold flex items-center gap-2 text-body-sm font-medium group-hover:gap-3 transition-all">
                  Solutions for Exhibitors <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </StaggerItem>

            {/* Association Card */}
            <StaggerItem>
              <Link href="/solutions/associations" className="card group h-full block">
                <div className="w-12 h-12 rounded-lg bg-jhr-gold/10 flex items-center justify-center mb-4 group-hover:bg-jhr-gold/20 transition-colors">
                  <Calendar className="w-6 h-6 text-jhr-gold" />
                </div>
                <h3 className="text-heading-lg font-semibold text-jhr-white mb-2">
                  I need a meaningful member benefit.
                </h3>
                <p className="text-body-md text-jhr-white-dim mb-4">
                  You're planning a conference and want to deliver real value to attendees while elevating your event experience.
                </p>
                <span className="text-jhr-gold flex items-center gap-2 text-body-sm font-medium group-hover:gap-3 transition-all">
                  Solutions for Associations <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Services Overview with Images */}
      <section className="section-padding bg-jhr-black">
        <div className="section-container">
          <FadeUp>
            <div className="text-center mb-12">
              <p className="text-jhr-gold font-medium text-body-lg mb-2">Our Services</p>
              <h2 className="text-display-sm font-display font-bold text-jhr-white mb-4">
                Outcome-Based Media Systems
              </h2>
              <p className="text-body-lg text-jhr-white-muted max-w-2xl mx-auto">
                We don't sell hours or photographers. We deliver complete media systems designed for specific outcomes.
              </p>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Headshot Activation */}
            <SlideInLeft>
              <Link href="/services/headshot-activation" className="group block">
                <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/generated/service-headshot-activation.jpg"
                    alt="Professional headshot activation at trade show"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-heading-lg font-semibold text-jhr-white mb-2 group-hover:text-jhr-gold transition-colors">
                      Headshot Activation™
                    </h3>
                    <p className="text-body-sm text-jhr-white-muted">
                      Turn your booth into a destination with high-engagement headshot stations.
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2 text-body-sm text-jhr-white-muted">
                    <CheckCircle className="w-4 h-4 text-jhr-gold mt-0.5 flex-shrink-0" />
                    <span>300+ attendees processed per day</span>
                  </li>
                  <li className="flex items-start gap-2 text-body-sm text-jhr-white-muted">
                    <CheckCircle className="w-4 h-4 text-jhr-gold mt-0.5 flex-shrink-0" />
                    <span>Real-time lead capture and data delivery</span>
                  </li>
                </ul>
                <span className="text-jhr-gold flex items-center gap-2 text-body-sm font-medium group-hover:gap-3 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </SlideInLeft>

            {/* Corporate Event Coverage */}
            <SlideInRight>
              <Link href="/services/corporate-event-coverage" className="group block">
                <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/generated/service-event-coverage.jpg"
                    alt="Corporate event photography at conference"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-heading-lg font-semibold text-jhr-white mb-2 group-hover:text-jhr-gold transition-colors">
                      Corporate Event Coverage™
                    </h3>
                    <p className="text-body-sm text-jhr-white-muted">
                      Comprehensive documentation with the professionalism your brand demands.
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2 text-body-sm text-jhr-white-muted">
                    <CheckCircle className="w-4 h-4 text-jhr-gold mt-0.5 flex-shrink-0" />
                    <span>Multi-day coverage capabilities</span>
                  </li>
                  <li className="flex items-start gap-2 text-body-sm text-jhr-white-muted">
                    <CheckCircle className="w-4 h-4 text-jhr-gold mt-0.5 flex-shrink-0" />
                    <span>Same-day highlight delivery available</span>
                  </li>
                </ul>
                <span className="text-jhr-gold flex items-center gap-2 text-body-sm font-medium group-hover:gap-3 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </SlideInRight>

            {/* Corporate Headshot Program */}
            <SlideInLeft delay={0.2}>
              <Link href="/services/corporate-headshot-program" className="group block">
                <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/generated/service-corporate-headshots.jpg"
                    alt="Corporate team headshot session"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-heading-lg font-semibold text-jhr-white mb-2 group-hover:text-jhr-gold transition-colors">
                      Corporate Headshot Program™
                    </h3>
                    <p className="text-body-sm text-jhr-white-muted">
                      Consistent, on-brand headshots for your entire team.
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2 text-body-sm text-jhr-white-muted">
                    <CheckCircle className="w-4 h-4 text-jhr-gold mt-0.5 flex-shrink-0" />
                    <span>On-site at your office</span>
                  </li>
                  <li className="flex items-start gap-2 text-body-sm text-jhr-white-muted">
                    <CheckCircle className="w-4 h-4 text-jhr-gold mt-0.5 flex-shrink-0" />
                    <span>AI-retouched, ready for LinkedIn</span>
                  </li>
                </ul>
                <span className="text-jhr-gold flex items-center gap-2 text-body-sm font-medium group-hover:gap-3 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </SlideInLeft>

            {/* Event Video Systems */}
            <SlideInRight delay={0.2}>
              <Link href="/services/event-video-systems" className="group block">
                <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/generated/service-event-video.jpg"
                    alt="Event video production at corporate conference"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-heading-lg font-semibold text-jhr-white mb-2 group-hover:text-jhr-gold transition-colors">
                      Event Video Systems™
                    </h3>
                    <p className="text-body-sm text-jhr-white-muted">
                      Capture the motion and emotion of your event.
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2 text-body-sm text-jhr-white-muted">
                    <CheckCircle className="w-4 h-4 text-jhr-gold mt-0.5 flex-shrink-0" />
                    <span>Keynote and session capture</span>
                  </li>
                  <li className="flex items-start gap-2 text-body-sm text-jhr-white-muted">
                    <CheckCircle className="w-4 h-4 text-jhr-gold mt-0.5 flex-shrink-0" />
                    <span>Social-ready highlight clips</span>
                  </li>
                </ul>
                <span className="text-jhr-gold flex items-center gap-2 text-body-sm font-medium group-hover:gap-3 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Venue Fluency Section with Image */}
      <section className="relative section-padding overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/generated/hero-venues.jpg"
            alt="Nashville skyline and convention venues"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/80" />
        </div>

        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <SlideInLeft>
              <p className="text-jhr-gold font-medium text-body-lg mb-2">Venue Fluency</p>
              <h2 className="text-display-sm font-display font-bold text-jhr-white mb-6">
                We Know Nashville's Premier Venues
              </h2>
              <p className="text-body-lg text-jhr-white-muted mb-6">
                When you're planning from out of state, you need a partner who knows the terrain. We've worked extensively at Nashville's top convention and event venues—we know the marshaling yards, the loading docks, the lighting challenges, and the people who run them.
              </p>
              <p className="text-body-md text-jhr-white-dim mb-8">
                This isn't just familiarity—it's operational fluency that translates to zero friction for you.
              </p>
              <Link href="/venues" className="btn-secondary">
                Explore Our Venue Experience
              </Link>
            </SlideInLeft>

            <SlideInRight>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "Music City Center", href: "/venues/music-city-center", image: "/images/generated/venue-music-city-center.jpg" },
                  { name: "Gaylord Opryland", href: "/venues/gaylord-opryland", image: "/images/generated/venue-gaylord-opryland.jpg" },
                  { name: "Renaissance Hotel", href: "/venues/renaissance-hotel-nashville", image: "/images/generated/venue-hotel-ballroom.jpg" },
                  { name: "Omni Hotel", href: "/venues/omni-hotel-nashville", image: "/images/generated/venue-conference-room.jpg" },
                ].map((venue) => (
                  <Link
                    key={venue.name}
                    href={venue.href}
                    className="group relative aspect-square rounded-xl overflow-hidden"
                  >
                    <Image
                      src={venue.image}
                      alt={venue.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-heading-sm font-medium text-jhr-white group-hover:text-jhr-gold transition-colors">
                        {venue.name}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* The Process - The Plan */}
      <section className="section-padding bg-jhr-black">
        <div className="section-container">
          <FadeUp>
            <div className="text-center mb-16">
              <p className="text-jhr-gold font-medium text-body-lg mb-2">How It Works</p>
              <h2 className="text-display-sm font-display font-bold text-jhr-white mb-4">
                A Clear Path to Success
              </h2>
              <p className="text-body-lg text-jhr-white-muted max-w-2xl mx-auto">
                Working with JHR is straightforward. We take the burden off your plate so you can focus on your event.
              </p>
            </div>
          </FadeUp>

          <ProcessTimeline
            steps={[
              {
                id: 1,
                title: "Strategy Call",
                description: "We schedule a brief consultation to align on your specific logistics, venue constraints, and goals. We identify potential friction points before they happen.",
                icon: Phone,
              },
              {
                id: 2,
                title: "Logistics Takeover",
                description: "Our team handles the heavy lifting—coordinating with venues, managing equipment logistics, and executing the onsite activation with uniformed, professional staff.",
                icon: FileText,
              },
              {
                id: 3,
                title: "Asset Delivery",
                description: "You receive AI-retouched assets and granular data instantly, ready for your post-event marketing sequences. No delays, no surprises.",
                icon: Camera,
              },
            ]}
          />
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="section-padding bg-jhr-black-light">
        <div className="section-container">
          <FadeUp>
            <div className="text-center mb-12">
              <p className="text-jhr-gold font-medium text-body-lg mb-2">Our Work</p>
              <h2 className="text-display-sm font-display font-bold text-jhr-white mb-4">
                Event Photography That Delivers
              </h2>
            </div>
          </FadeUp>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: "/images/generated/event-keynote.jpg", alt: "Keynote speaker at corporate conference" },
              { src: "/images/generated/event-trade-show.jpg", alt: "Trade show floor photography" },
              { src: "/images/generated/event-networking.jpg", alt: "Networking event photography" },
              { src: "/images/generated/event-awards-ceremony.jpg", alt: "Awards ceremony photography" },
              { src: "/images/generated/gallery-headshot-1.jpg", alt: "Professional corporate headshot" },
              { src: "/images/generated/gallery-headshot-2.jpg", alt: "Executive portrait" },
              { src: "/images/generated/gallery-headshot-3.jpg", alt: "Business professional headshot" },
              { src: "/images/generated/venue-hotel-ballroom.jpg", alt: "Corporate gala photography" },
            ].map((img, index) => (
              <ScaleUp key={index} delay={index * 0.05}>
                <div className="relative aspect-square rounded-lg overflow-hidden group">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                </div>
              </ScaleUp>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section - Light Background for Visual Break */}
      <section className="section-padding section-light">
        <div className="section-container">
          <FadeUp>
            <div className="text-center mb-12">
              <p className="text-jhr-gold-dark font-medium text-body-lg mb-2">Trusted By</p>
              <h2 className="text-display-sm font-display font-bold text-jhr-black mb-4">
                Event Professionals Choose JHR
              </h2>
            </div>
          </FadeUp>

          <FadeIn delay={0.2}>
            <div className="max-w-3xl mx-auto text-center">
              <blockquote className="text-body-lg lg:text-xl text-jhr-light-text italic mb-6">
                "Working with Jayson and his team was seamless. They understood our needs, showed up prepared, and delivered exceptional results. Our attendees loved the headshot activation."
              </blockquote>
              <p className="text-body-sm text-jhr-light-text-muted">
                — Event Director, National Association Conference
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Final CTA with Background Image */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/generated/event-keynote.jpg"
            alt="Corporate event"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/85" />
        </div>

        <div className="section-container relative z-10 text-center">
          <FadeUp>
            <h2 className="text-display-sm lg:text-display-md font-display font-bold text-jhr-white mb-6">
              Ready to Remove the Worry?
            </h2>
            <p className="text-body-lg text-jhr-white-muted max-w-2xl mx-auto mb-8">
              Let's talk about your event. Schedule a strategy call and discover how JHR can deliver the professional reliability and results your event deserves.
            </p>
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
