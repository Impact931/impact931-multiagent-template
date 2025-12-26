"use client";

import Image from "next/image";
import { CheckCircle, Clock, Calendar, Video } from "lucide-react";
import { PageHero } from "@/components/ui/HeroBanner";
import {
  FadeUp,
  SlideInLeft,
  SlideInRight,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/ScrollAnimation";

export default function SchedulePage() {
  return (
    <div>
      {/* Hero Banner */}
      <PageHero
        title="Schedule a Strategy Call"
        subtitle="Let's Connect"
        description="Book a 15-minute call with Jayson to discuss your event. We'll talk through your venue, timeline, and goals—no pressure, no hard sell. Just a conversation to see if we're a good fit."
        image="/images/generated/hero-services.jpg"
        imageAlt="Professional event photography"
      />

      {/* Schedule Section */}
      <section className="section-padding bg-jhr-black">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <SlideInLeft>
              <div>
                <h2 className="text-display-sm font-display font-bold text-jhr-white mb-6">
                  What to Expect
                </h2>
                <p className="text-body-lg text-jhr-white-muted mb-8">
                  This is a discovery conversation, not a sales call. We'll
                  discuss your event and see if there's a fit. If JHR isn't right
                  for what you need, we'll tell you—and potentially point you
                  toward someone who is.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-jhr-gold/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-jhr-gold" />
                    </div>
                    <div>
                      <p className="text-body-md font-medium text-jhr-white">
                        15 minutes
                      </p>
                      <p className="text-body-sm text-jhr-white-dim">
                        Quick and focused—we respect your time
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-jhr-gold/10 flex items-center justify-center flex-shrink-0">
                      <Video className="w-5 h-5 text-jhr-gold" />
                    </div>
                    <div>
                      <p className="text-body-md font-medium text-jhr-white">
                        Video or Phone
                      </p>
                      <p className="text-body-sm text-jhr-white-dim">
                        Your choice of Zoom, Google Meet, or phone call
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-jhr-gold/10 flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-5 h-5 text-jhr-gold" />
                    </div>
                    <div>
                      <p className="text-body-md font-medium text-jhr-white">
                        Flexible Scheduling
                      </p>
                      <p className="text-body-sm text-jhr-white-dim">
                        Available weekdays and some evenings
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-jhr-black-light border border-jhr-black-lighter rounded-lg p-6">
                  <h3 className="text-heading-md font-semibold text-jhr-white mb-4">
                    What We'll Cover
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Your event type and venue",
                      "Specific goals and outcomes you need",
                      "Timeline and logistics considerations",
                      "How JHR can help (or if we're not the right fit)",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-body-sm text-jhr-white-muted"
                      >
                        <CheckCircle className="w-4 h-4 text-jhr-gold mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </SlideInLeft>

            {/* Calendar Embed */}
            <SlideInRight>
              <div className="bg-jhr-black-light border border-jhr-black-lighter rounded-xl p-8">
                <div className="text-center">
                  <h2 className="text-heading-lg font-semibold text-jhr-white mb-4">
                    Select a Time
                  </h2>
                  <p className="text-body-md text-jhr-white-dim mb-8">
                    Choose a time that works for you. All times shown in your
                    local timezone.
                  </p>

                  {/* Placeholder for calendar embed */}
                  <div className="aspect-[4/3] bg-jhr-black-lighter rounded-lg flex items-center justify-center mb-6 relative overflow-hidden">
                    <Image
                      src="/images/generated/event-networking.jpg"
                      alt="Business meeting"
                      fill
                      className="object-cover opacity-20"
                    />
                    <div className="text-center p-8 relative z-10">
                      <Calendar className="w-12 h-12 text-jhr-gold mx-auto mb-4" />
                      <p className="text-jhr-white-muted text-body-md">
                        Calendar scheduling widget will be embedded here
                      </p>
                      <p className="text-jhr-white-dim text-body-sm mt-2">
                        (Calendly, Cal.com, or custom scheduler)
                      </p>
                    </div>
                  </div>

                  {/* Alternative: Direct contact */}
                  <div className="border-t border-jhr-black-lighter pt-6">
                    <p className="text-body-sm text-jhr-white-dim mb-4">
                      Prefer to reach out directly?
                    </p>
                    <a
                      href="mailto:info@jhr-photography.com"
                      className="text-jhr-gold hover:text-jhr-gold-light transition-colors text-body-md font-medium"
                    >
                      info@jhr-photography.com
                    </a>
                  </div>
                </div>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-jhr-black-light">
        <div className="section-container">
          <FadeUp>
            <h2 className="text-display-sm font-display font-bold text-jhr-white mb-8 text-center">
              Questions About the Call?
            </h2>
          </FadeUp>

          <StaggerContainer className="max-w-3xl mx-auto space-y-6">
            <StaggerItem>
              <div className="card">
                <h3 className="text-heading-md font-semibold text-jhr-white mb-2">
                  Is this a sales call?
                </h3>
                <p className="text-body-md text-jhr-white-dim">
                  No. This is a discovery conversation. We'll talk about your
                  event and see if there's a fit. If JHR isn't right for what you
                  need, we'll tell you—and potentially point you toward someone
                  who is.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="card">
                <h3 className="text-heading-md font-semibold text-jhr-white mb-2">
                  Will I get a quote on the call?
                </h3>
                <p className="text-body-md text-jhr-white-dim">
                  We don't do ballpark pricing on calls. After we understand your
                  event fully, we'll send a detailed proposal that addresses your
                  specific needs. This ensures you get accurate information, not
                  guesswork.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="card">
                <h3 className="text-heading-md font-semibold text-jhr-white mb-2">
                  What if I need to reschedule?
                </h3>
                <p className="text-body-md text-jhr-white-dim">
                  No problem. You'll receive a confirmation email with a link to
                  reschedule or cancel. We understand plans change—just give us
                  reasonable notice if you can.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
