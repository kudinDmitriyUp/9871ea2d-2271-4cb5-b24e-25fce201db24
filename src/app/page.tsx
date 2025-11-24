"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import FeatureCardFive from '@/components/sections/feature/FeatureCardFive';
import AboutPhoneTimeline from '@/components/sections/about/AboutPhoneTimeline';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Briefcase, Scale, Lightbulb, Heart, Building, Users, Linkedin } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="large"
      sizing="medium"
      background="circleGradient"
      cardStyle="glass-depth"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="minimal"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline 
          brandName="Legal Counsel"
          navItems={[
            { name: "Services", id: "services" },
            { name: "About", id: "about" },
            { name: "Team", id: "team" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Schedule Consultation",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogo 
          logoText="Legal Counsel"
          description="Premier legal services for individuals and businesses seeking expert guidance and unwavering advocacy"
          buttons={[
            { text: "Schedule Consultation", href: "contact" },
            { text: "Learn More", href: "services" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764018721252-v0s49xfr.jpg"
          imageAlt="Modern law office interior"
          showDimOverlay={true}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardFive 
          title="Our Practice Areas"
          description="Comprehensive legal expertise across multiple disciplines to serve your needs"
          tag="Services"
          features={[
            { title: "Corporate Law", icon: Briefcase },
            { title: "Litigation", icon: Scale },
            { title: "Intellectual Property", icon: Lightbulb },
            { title: "Family Law", icon: Heart },
            { title: "Real Estate", icon: Building },
            { title: "Employment Law", icon: Users }
          ]}
          gridVariant="three-columns-all-equal-width"
          textboxLayout="default"
          animationType="slide-up"
          showIconBoxBackground={true}
        />
      </div>

      <div id="about" data-section="about">
        <AboutPhoneTimeline 
          tag="About Us"
          title="Dedicated to Excellence"
          description="With over 25 years of combined legal experience, our firm has established a reputation for delivering results. We combine sharp legal minds with compassionate advocacy to achieve the best outcomes for our clients. Our team is committed to staying at the forefront of legal innovation and industry best practices."
          phoneOne={{
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764018724428-dm0mo90a.jpg"
          }}
          phoneTwo={{
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764018724428-dm0mo90a.jpg"
          }}
          buttons={[
            { text: "Our Story", href: "#" },
            { text: "Meet Our Team", href: "team" }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo 
          title="Meet Our Legal Team"
          description="Experienced attorneys dedicated to your case"
          tag="Team"
          members={[
            {
              id: "1",
              name: "Margaret Richardson",
              role: "Senior Partner",
              description: "25+ years in corporate and business law. Harvard Law School graduate with extensive litigation experience.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764018727605-6e0fex4l.jpg",
              socialLinks: [{ icon: Linkedin, url: "https://linkedin.com" }]
            },
            {
              id: "2",
              name: "James Mitchell",
              role: "Partner",
              description: "20+ years in litigation and dispute resolution. Known for strategic approach and client advocacy.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764018732907-crl1bqhg.jpg",
              socialLinks: [{ icon: Linkedin, url: "https://linkedin.com" }]
            },
            {
              id: "3",
              name: "Sarah Chen",
              role: "Associate Attorney",
              description: "Specialized in intellectual property and technology law. Yale Law School graduate with innovative solutions.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764018738095-epg77hal.jpg",
              socialLinks: [{ icon: Linkedin, url: "https://linkedin.com" }]
            },
            {
              id: "4",
              name: "David Thompson",
              role: "Associate Attorney",
              description: "Family law and estate planning specialist. Compassionate approach to sensitive legal matters.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/tmp/professional-portrait-business-person-at-1764018754510-73ebe79d.jpg",
              socialLinks: [{ icon: Linkedin, url: "https://linkedin.com" }]
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          textboxLayout="default"
          animationType="slide-up"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo 
          title="Client Testimonials"
          description="Hear from satisfied clients about their experience working with us"
          tag="Reviews"
          testimonials={[
            {
              id: "1",
              name: "Robert Johnson",
              role: "CEO, Tech Innovations Inc.",
              testimonial: "Legal Counsel handled our corporate restructuring flawlessly. Their attention to detail and strategic guidance saved us significant time and resources. Highly professional and results-driven.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764018755140-2txxsv4g.jpg"
            },
            {
              id: "2",
              name: "Jennifer Davis",
              role: "Founder, Creative Agency",
              testimonial: "The team's expertise in intellectual property law protected our brand effectively. They provided clear guidance and were always available when we needed them. Excellent service.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764018755850-4ob18r44.png"
            },
            {
              id: "3",
              name: "Michael Santos",
              role: "Business Owner",
              testimonial: "Outstanding representation in our litigation matter. They fought hard for us and achieved an excellent settlement. Truly professional and compassionate team.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/tmp/professional-man-business-portrait-1764018772520-3d06aa59.jpg"
            },
            {
              id: "4",
              name: "Patricia Nelson",
              role: "Executive Director",
              testimonial: "Their employment law expertise guided us through a complex HR situation. Practical advice and thorough understanding of regulations. Highly recommended.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/tmp/professional-executive-portrait-1764018789164-0dfae667.jpg"
            },
            {
              id: "5",
              name: "Christopher Adams",
              role: "Property Developer",
              testimonial: "Real estate transactions require expertise. They handled every detail with precision and integrity. Excellent legal partner for our developments.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764018789894-1yti30e9.jpg"
            },
            {
              id: "6",
              name: "Amanda Foster",
              role: "Small Business Owner",
              testimonial: "From contract review to dispute resolution, they provided exceptional guidance. Their proactive approach prevented potential issues. Great value and service.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764018795278-ovc3o8n5.jpg"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          textboxLayout="default"
          animationType="slide-up"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase 
          title="Frequently Asked Questions"
          description="Find answers to common questions about our legal services"
          tag="Help"
          faqs={[
            {
              id: "1",
              title: "How do I know if I need a lawyer?",
              content: "If you face any legal issue, business decision, or contract that could have legal implications, consulting with a lawyer is advisable. We offer free initial consultations to assess your situation."
            },
            {
              id: "2",
              title: "What are your fees and billing practices?",
              content: "We offer flexible billing arrangements including hourly rates, flat fees, and contingency arrangements depending on the matter. We provide transparent fee estimates upfront and communicate regularly about costs."
            },
            {
              id: "3",
              title: "How long does a typical legal matter take?",
              content: "Timeline varies based on the complexity and type of matter. Simple contracts may take days, while litigation can take months or years. We provide realistic timelines during your initial consultation."
            },
            {
              id: "4",
              title: "Do you offer free consultations?",
              content: "Yes, we offer free initial consultations for potential clients. This allows us to understand your needs and you to evaluate if we are the right fit for your legal representation."
            },
            {
              id: "5",
              title: "Can you represent me in court?",
              content: "Yes, we have extensive court experience across various practice areas. Our attorneys represent clients in trials, appeals, and other court proceedings at all levels."
            },
            {
              id: "6",
              title: "How do you handle client confidentiality?",
              content: "Client confidentiality is paramount. All communications are protected by attorney-client privilege. We maintain strict privacy protocols and never share information without explicit consent."
            }
          ]}
          textboxLayout="default"
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm 
          title="Schedule Your Consultation"
          description="Get in touch with our team to discuss your legal needs. We respond to all inquiries promptly and professionally."
          inputs={[
            { name: "name", type: "text", placeholder: "Full Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: true },
            { name: "practice_area", type: "text", placeholder: "Practice Area of Interest", required: true }
          ]}
          textarea={{
            name: "message",
            placeholder: "Briefly describe your legal matter...",
            rows: 5,
            required: true
          }}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764018798275-09qjzlne.jpg"
          mediaPosition="right"
          buttonText="Send Inquiry"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis 
          logoText="Legal Counsel"
          columns={[
            {
              items: [
                { label: "Services", href: "services" },
                { label: "About Us", href: "about" },
                { label: "Team", href: "team" }
              ]
            },
            {
              items: [
                { label: "Contact", href: "contact" },
                { label: "FAQ", href: "faq" }
              ]
            },
            {
              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}