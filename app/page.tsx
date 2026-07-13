"use client";

import Image from "next/image";
import {
  Shield,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Award,
  Ship,
  FileText,
  UserCheck,
  Video,
  ClipboardCheck,
  Anchor,
  Eye,
  Binoculars,
  Container,
  ChevronDown,
  Calendar,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { useState, useRef, useEffect, useCallback } from "react";
import MissionHero from "@/components/careers/MissionHero";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

// Scroll animation wrapper component
function ScrollReveal({ 
  children, 
  className = "", 
  delay = 0 
}: { 
  children: React.ReactNode; 
  className?: string; 
  delay?: number;
}) {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(32px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// Section label component
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-px w-10 bg-[#1B6CA8]" />
      <span className="font-mono text-xs uppercase tracking-widest text-[#1B6CA8]">
        {children}
      </span>
    </div>
  );
}

const stats = [
  { value: "40+", label: "Years Maritime Security" },
  { value: "1500+", label: "Security Guards Deployed" },
  { value: "Global", label: "Operational Reach" },
  { value: "24/7", label: "Operational Coverage" },
];

const divisions = [
  {
    title: "Cargo Vessel Security",
    description: "Seal inspections, deck patrols, cargo monitoring.",
    image: "/images/cargo-vessel-security.jpg",
    slug: "cargo-vessel-security",
  },
  {
    title: "High Risk Armed Deployments",
    description: "Security teams deployed on elevated risk maritime routes.",
    image: "/images/armed-deployments.jpg",
    slug: "high-risk-armed-deployments",
  },
  {
    title: "Vessel CCTV Security",
    description: "24/7 CCTV surveillance and technical security monitoring.",
    image: "/images/bridge-monitoring.jpg",
    slug: "vessel-cctv-security",
  },
  {
    title: "Port & Terminal Security",
    description: "ISPS compliant port operations and gangway security.",
    image: "/images/port-security.jpg",
    slug: "port-terminal-security",
  },
  {
    title: "Ferry & Passenger Security",
    description: "Passenger terminal security and onboard ferry operations.",
    image: "/images/ferry-passenger-security.jpg",
    slug: "ferry-passenger-security",
  },
];

const benefits = [
  "Competitive salary",
  "Accommodation and meals onboard",
  "International operations",
  "Structured deployment rotations",
  "Career progression opportunities",
];

const requirements = [
  "Military, police, or professional security background",
  "English proficiency",
  "Clean criminal record",
  "Valid passport",
  "Ability to deploy internationally",
  "Maritime experience preferred but not mandatory",
];

const recruitmentSteps = [
  { num: "1", title: "Submit Application", description: "Upload CV and basic details.", icon: FileText },
  { num: "2", title: "Recruitment Screening", description: "Initial review of experience and qualifications.", icon: UserCheck },
  { num: "3", title: "Interview", description: "Online interview with recruitment officer.", icon: Video },
  { num: "4", title: "Compliance Documentation", description: "Background checks and certification review.", icon: ClipboardCheck },
  { num: "5", title: "Deployment Assignment", description: "Placement on vessel based on availability.", icon: Ship },
];

const duties = [
  { icon: Binoculars, title: "Deck Patrols", description: "Regular security patrols of all vessel areas" },
  { icon: Shield, title: "Cargo Seal Verification", description: "Inspection and verification of container seals" },
  { icon: Eye, title: "Elevated Watch", description: "24/7 surveillance from elevated positions" },
  { icon: Container, title: "Container Inspections", description: "Thorough inspection of cargo containers" },
  { icon: Anchor, title: "Port Security Monitoring", description: "Security oversight during port operations" },
];

const newsArticles = [
  {
    title: "MS Security Group Expands Operations in Red Sea Region",
    excerpt: "In response to increased maritime security demands, MS Security Group has deployed additional teams to protect commercial vessels transiting the Red Sea corridor.",
    date: "March 28, 2026",
    category: "Operations",
    image: "https://images.unsplash.com/photo-1559825481-12a05cc00344?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "New Training Facility Opens in Mediterranean",
    excerpt: "Our new state-of-the-art training center will provide advanced maritime security training for over 500 personnel annually.",
    date: "March 15, 2026",
    category: "Company News",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Industry Recognition: Best Maritime Security Provider 2025",
    excerpt: "MS Security Group has been awarded the prestigious Maritime Security Excellence Award for outstanding service and operational standards.",
    date: "February 22, 2026",
    category: "Awards",
    image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&w=600&q=80",
  },
];

const faqs = [
  {
    question: "Do I need maritime experience?",
    answer: "Maritime experience is preferred but not mandatory. We provide comprehensive training for candidates with military, police, or professional security backgrounds.",
  },
  {
    question: "What contracts are available?",
    answer: "We offer various contract lengths ranging from 2-6 months, with structured rotation schedules to ensure work-life balance.",
  },
  {
    question: "Are flights provided?",
    answer: "Yes, all travel arrangements including flights to and from deployment locations are arranged and covered by the company.",
  },
  {
    question: "What salary range should I expect?",
    answer: "Salaries are competitive and vary based on position, experience, and deployment type. Details are discussed during the interview process.",
  },
  {
    question: "What documents are required?",
    answer: "Required documents include a valid passport, relevant certifications, CV, and clean criminal background check. Additional maritime certifications may be required for certain positions.",
  },
];

export default function MSSecurityGroupPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLink = `transition-colors duration-[250ms] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1B6CA8] ${
    scrolled
      ? "text-[#334155] hover:text-[#1B6CA8]"
      : "text-[#16233D] hover:text-[#1B6CA8]"
  }`;

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header — transparent over the light hero, solid white once scrolled;
          only the background and border change between states */}
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-[250ms] ${
          scrolled
            ? "border-[#E2E8F0] bg-white/95 backdrop-blur-sm"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
          <Image
            src="/images/ms-security-logo.png"
            alt="MS Security Group"
            width={150}
            height={40}
            className="brightness-0"
            style={{ height: "40px", width: "auto" }}
            priority
          />

          <nav className="hidden gap-8 text-sm lg:flex">
            <a
              href="#"
              className="font-medium text-[#1B6CA8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1B6CA8]"
            >
              Home
            </a>
            <a href="#news" className={navLink}>News</a>
            <a href="/services" className={navLink}>Services</a>
            <a href="#operations" className={navLink}>Operations</a>
            <a href="#careers" className={navLink}>Careers</a>
            <a href="/compliance" className={navLink}>Compliance</a>
            <a href="#apply" className={navLink}>Apply</a>
          </nav>

          <Button className="rounded-lg border border-transparent bg-[#0D1B2A] px-6 text-white transition-colors duration-[250ms] hover:bg-[#1B6CA8]">
            Apply Now
          </Button>
        </div>
      </header>

      {/* Hero Section - Choose Your Mission */}
      <MissionHero embedded />

      {/* Accreditations Section */}
      <section className="bg-white py-10">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <ScrollReveal>
            <div className="mb-6 text-center">
              <span className="font-mono text-xs uppercase tracking-widest text-[#1B6CA8]">
                Accreditations & Memberships
              </span>
            </div>
            <div className="mx-auto mb-8 h-px w-full max-w-4xl bg-[#E2E8F0]" />
          </ScrollReveal>

          {/* Desktop: Static row of logos */}
          <ScrollReveal delay={100}>
            <div className="hidden items-center justify-between gap-8 lg:flex">
              {[
                { src: "/images/accreditations/bimco.png", alt: "BIMCO", height: 52 },
                { src: "/images/accreditations/sceg.png", alt: "SCEG - Security in Complex Environments Group", height: 40 },
                { src: "/images/accreditations/highfield.png", alt: "Highfield Qualifications", height: 52 },
                { src: "/images/accreditations/lloyds.png", alt: "Lloyd's Register UKAS - ISO 9001, 14001, 45001", height: 52 },
                { src: "/images/accreditations/mss-global.png", alt: "MSS Global UKAS - ISO 28000:2022", height: 52 },
                { src: "/images/accreditations/iso-28007.png", alt: "ISO 28007:2015 - Maritime Armed Security", height: 52 },
              ].map((logo) => (
                <div
                  key={logo.alt}
                  className="flex-shrink-0 grayscale transition-all duration-300 hover:grayscale-0"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={140}
                    height={logo.height}
                    className="w-auto object-contain"
                    style={{ height: `${logo.height}px`, width: "auto" }}
                  />
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Mobile: Scrolling marquee */}
          <div className="relative overflow-hidden lg:hidden">
            <div className="flex animate-marquee items-center gap-10">
              {[
                { src: "/images/accreditations/bimco.png", alt: "BIMCO" },
                { src: "/images/accreditations/sceg.png", alt: "SCEG" },
                { src: "/images/accreditations/highfield.png", alt: "Highfield" },
                { src: "/images/accreditations/lloyds.png", alt: "Lloyd's" },
                { src: "/images/accreditations/mss-global.png", alt: "MSS Global" },
                { src: "/images/accreditations/iso-28007.png", alt: "ISO 28007" },
                { src: "/images/accreditations/bimco.png", alt: "BIMCO 2" },
                { src: "/images/accreditations/sceg.png", alt: "SCEG 2" },
                { src: "/images/accreditations/highfield.png", alt: "Highfield 2" },
                { src: "/images/accreditations/lloyds.png", alt: "Lloyd's 2" },
                { src: "/images/accreditations/mss-global.png", alt: "MSS Global 2" },
                { src: "/images/accreditations/iso-28007.png", alt: "ISO 28007 2" },
              ].map((logo, index) => (
                <div key={`${logo.alt}-${index}`} className="flex-shrink-0 grayscale">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={100}
                    height={44}
                    className="h-11 w-auto object-contain"
                    style={{ height: "44px", width: "auto" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Operational Divisions Section */}
      <section id="operations" className="bg-[#F4F7FA] py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <ScrollReveal>
            <SectionLabel>Our Services</SectionLabel>
            <h2 className="mt-4 text-3xl font-bold text-[#0D1B2A] md:text-4xl">Operational Divisions</h2>
          </ScrollReveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {divisions.slice(0, 3).map((division, index) => (
              <ScrollReveal key={division.title} delay={index * 100}>
                <Card className="group h-full overflow-hidden border-0 border-t-2 border-[#1B6CA8] bg-white shadow-[0_1px_3px_rgba(13,27,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={division.image}
                      alt={division.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-semibold text-[#0D1B2A]">{division.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#334155]">{division.description}</p>
                    <a href={`/services/${division.slug}`} className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#1B6CA8] transition-colors hover:text-[#0D1B2A]">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </a>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-2 lg:mx-auto lg:max-w-2xl">
            {divisions.slice(3).map((division, index) => (
              <ScrollReveal key={division.title} delay={(index + 3) * 100}>
                <Card className="group h-full overflow-hidden border-0 border-t-2 border-[#1B6CA8] bg-white shadow-[0_1px_3px_rgba(13,27,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={division.image}
                      alt={division.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-semibold text-[#0D1B2A]">{division.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#334155]">{division.description}</p>
                    <a href={`/services/${division.slug}`} className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#1B6CA8] transition-colors hover:text-[#0D1B2A]">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </a>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section id="careers" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <ScrollReveal className="lg:pr-8">
              <SectionLabel>Careers</SectionLabel>
              <h2 className="mt-4 text-3xl font-bold text-[#0D1B2A] md:text-4xl">
                Join Our Security Teams
              </h2>
              <p className="mt-6 leading-relaxed text-[#334155]">
                MS Security Group recruits experienced professionals from military, police and security backgrounds for maritime security operations worldwide.
              </p>

              <div className="mt-8">
                <h3 className="font-semibold text-[#0D1B2A]">Benefits</h3>
                <ul className="mt-4">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3 border-b border-slate-100 py-3 text-[#0D1B2A]">
                      <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-[#1B6CA8]" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <Button className="mt-8 rounded-lg bg-[#0D1B2A] px-8 py-3 text-white hover:bg-[#1B6CA8]">
                Apply Now
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </ScrollReveal>

            <ScrollReveal delay={200} className="hidden lg:block">
              <div className="relative h-96 overflow-hidden rounded-lg border border-[#1B6CA8] shadow-[6px_6px_0_#1B6CA8]">
                <Image
                  src="/images/hero-security-team.jpg"
                  alt="Security team"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section id="requirements" className="bg-[#F4F7FA] py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <SectionLabel>Requirements</SectionLabel>
              <h2 className="mt-4 text-3xl font-bold text-[#0D1B2A] md:text-4xl">Who Can Apply</h2>
              <p className="mx-auto mt-4 max-w-2xl text-[#334155]">
                Review the minimum requirements below to determine your eligibility for our security positions.
              </p>
            </div>
          </ScrollReveal>

          <div className="mx-auto max-w-4xl">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {requirements.map((req, index) => (
                <ScrollReveal key={req} delay={index * 100}>
                  <div className="flex items-start gap-3 rounded-lg border border-[#E2E8F0] bg-white p-4">
                    <Shield className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#1B6CA8]" />
                    <span className="text-[#0D1B2A]">{req}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recruitment Process Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <SectionLabel>Process</SectionLabel>
              <h2 className="mt-4 text-3xl font-bold text-[#0D1B2A] md:text-4xl">Recruitment Process</h2>
            </div>
          </ScrollReveal>

          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 right-0 top-6 h-0.5 bg-[#E2E8F0]" />
              
              <div className="relative flex justify-between">
                {recruitmentSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <ScrollReveal key={step.num} delay={index * 100} className="flex flex-col items-center text-center" style={{ width: "18%" }}>
                      <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#1B6CA8] text-white shadow-lg transition-transform duration-300 hover:scale-110">
                        <span className="text-sm font-bold">{step.num}</span>
                      </div>
                      <h3 className="mt-4 font-semibold text-[#0D1B2A]">{step.title}</h3>
                      <p className="mt-2 text-sm text-[#334155]">{step.description}</p>
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden">
            <div className="relative pl-8">
              {/* Vertical line */}
              <div className="absolute bottom-0 left-3 top-0 w-0.5 bg-[#E2E8F0]" />
              
              <div className="space-y-8">
                {recruitmentSteps.map((step, index) => (
                  <ScrollReveal key={step.num} delay={index * 100} className="relative">
                    <div className="absolute -left-8 flex h-6 w-6 items-center justify-center rounded-full bg-[#1B6CA8] text-xs font-bold text-white">
                      {step.num}
                    </div>
                    <h3 className="font-semibold text-[#0D1B2A]">{step.title}</h3>
                    <p className="mt-1 text-sm text-[#334155]">{step.description}</p>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>

          <ScrollReveal delay={500}>
            <p className="mt-12 text-center font-mono text-sm italic text-[#1B6CA8]">
              Typical recruitment process takes 2-4 weeks.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Life Onboard Section */}
      <section className="bg-[#F4F7FA] py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <SectionLabel>Operations</SectionLabel>
              <h2 className="mt-4 text-3xl font-bold text-[#0D1B2A] md:text-4xl">Life Onboard a Vessel</h2>
              <p className="mx-auto mt-4 max-w-2xl text-[#334155]">
                Our security personnel perform essential duties to ensure the safety of crew, cargo, and vessel.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {duties.map((duty, index) => {
              const Icon = duty.icon;
              return (
                <ScrollReveal key={duty.title} delay={index * 100}>
                  <Card className="group h-full border-[#E2E8F0] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-t-2 hover:border-t-[#1B6CA8]">
                    <CardContent className="p-6">
                      <Icon className="h-8 w-8 text-[#1B6CA8]" />
                      <h3 className="mt-4 font-semibold text-[#0D1B2A]">{duty.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#334155]">{duty.description}</p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="apply" className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <SectionLabel>Apply Now</SectionLabel>
              <h2 className="mt-4 text-3xl font-bold text-[#0D1B2A] md:text-4xl">Submit Your Application</h2>
              <p className="mt-4 text-[#334155]">
                Join our professional maritime security teams today.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="rounded-lg border border-[#E2E8F0] bg-white p-8 shadow-sm">
              <div className="grid gap-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#0D1B2A]">Full Name</label>
                    <Input 
                      className="rounded-md border-[#CBD5E1] bg-white focus:border-[#1B6CA8] focus:ring-[#1B6CA8]/15" 
                      placeholder="John Smith" 
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#0D1B2A]">Email</label>
                    <Input 
                      className="rounded-md border-[#CBD5E1] bg-white focus:border-[#1B6CA8] focus:ring-[#1B6CA8]/15" 
                      type="email" 
                      placeholder="john@example.com" 
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#0D1B2A]">Phone</label>
                    <Input 
                      className="rounded-md border-[#CBD5E1] bg-white focus:border-[#1B6CA8] focus:ring-[#1B6CA8]/15" 
                      placeholder="+1 234 567 890" 
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#0D1B2A]">Nationality</label>
                    <Input 
                      className="rounded-md border-[#CBD5E1] bg-white focus:border-[#1B6CA8] focus:ring-[#1B6CA8]/15" 
                      placeholder="Your nationality" 
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[#0D1B2A]">Security / Military Background</label>
                  <Textarea
                    className="min-h-[100px] rounded-md border-[#CBD5E1] bg-white focus:border-[#1B6CA8] focus:ring-[#1B6CA8]/15"
                    placeholder="Describe your relevant experience..."
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[#0D1B2A]">Upload CV</label>
                  <div className="flex cursor-pointer items-center justify-center rounded-md border-2 border-dashed border-[#1B6CA8] bg-[#1B6CA8]/[0.04] p-8 transition-colors hover:border-solid hover:bg-[#1B6CA8]/[0.08]">
                    <div className="text-center">
                      <FileText className="mx-auto h-10 w-10 text-[#1B6CA8]" />
                      <p className="mt-2 text-sm text-[#334155]">
                        Drag and drop your CV here, or <span className="font-medium text-[#1B6CA8]">browse</span>
                      </p>
                      <p className="mt-1 text-xs text-[#64748B]">PDF, DOC up to 10MB</p>
                    </div>
                  </div>
                </div>

                <Button size="lg" className="w-full rounded-md bg-[#0D1B2A] py-3 text-white transition-colors hover:bg-[#1B6CA8]">
                  Submit Application
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#F4F7FA] py-20">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <SectionLabel>FAQ</SectionLabel>
              <h2 className="mt-4 text-3xl font-bold text-[#0D1B2A] md:text-4xl">Frequently Asked Questions</h2>
            </div>
          </ScrollReveal>

          <div className="divide-y divide-[#E2E8F0]">
            {faqs.map((faq, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="py-4">
                  <button
                    className="flex w-full items-center justify-between text-left"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <span className={`font-medium transition-colors ${openFaq === index ? "text-[#1B6CA8]" : "text-[#0D1B2A]"}`}>
                      {faq.question}
                    </span>
                    <span className={`ml-4 flex-shrink-0 text-[#1B6CA8] transition-transform ${openFaq === index ? "rotate-45" : ""}`}>
                      +
                    </span>
                  </button>
                  {openFaq === index && (
                    <div className="mt-3 pb-2">
                      <p className="text-sm leading-relaxed text-[#334155]">{faq.answer}</p>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* News & Updates Section */}
      <section id="news" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <ScrollReveal>
            <div className="mb-12 flex flex-col items-center justify-between gap-4 sm:flex-row">
              <div>
                <SectionLabel>Latest Updates</SectionLabel>
                <h2 className="mt-4 text-3xl font-bold text-[#0D1B2A] md:text-4xl">News & Insights</h2>
              </div>
              <Button variant="outline" className="rounded-lg border-[#0D1B2A] text-[#0D1B2A] hover:bg-[#0D1B2A] hover:text-white">
                View All News
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </ScrollReveal>

          <div className="grid gap-8 lg:grid-cols-3">
            {newsArticles.map((article, index) => (
              <ScrollReveal key={article.title} delay={index * 100}>
                <Card className="group h-full overflow-hidden rounded-lg border-[#E2E8F0] bg-white transition-shadow hover:shadow-lg">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-400 group-hover:scale-105"
                    />
                    <div className="absolute left-4 top-4">
                      <span className="rounded-full bg-[#1B6CA8] px-3 py-1 text-xs font-medium text-white">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-3 font-mono text-xs text-[#64748B]">
                      {article.date}
                    </div>
                    <h3 className="font-semibold text-[#0D1B2A] transition-colors group-hover:text-[#1B6CA8]">
                      {article.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#334155]">
                      {article.excerpt}
                    </p>
                    <button className="mt-4 flex items-center gap-1 text-sm font-medium text-[#1B6CA8] transition-colors hover:text-[#0D1B2A]">
                      Read More
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1B6CA8] bg-[#0D1B2A]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:px-12 lg:grid-cols-4">
          <div>
            <Image
              src="/images/ms-security-logo.png"
              alt="MS Security Group"
              width={150}
              height={40}
              className="brightness-0 invert"
              style={{ height: "40px", width: "auto" }}
            />
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Maritime security operations and personnel deployment for international shipping companies.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold text-white">Navigation</div>
            <div className="mt-4 space-y-2 text-sm text-slate-300">
              <div><a href="#" className="transition hover:text-white">Home</a></div>
              <div><a href="#operations" className="transition hover:text-white">Operations</a></div>
              <div><a href="#careers" className="transition hover:text-white">Careers</a></div>
              <div><a href="/compliance" className="transition hover:text-white">Compliance</a></div>
              <div><a href="#apply" className="transition hover:text-white">Apply</a></div>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold text-white">Contact</div>
            <div className="mt-4 space-y-3 text-sm text-slate-300">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[#1B6CA8]" /> 
                +357 25 001120
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[#1B6CA8]" /> 
                recruitment@mano-security.com
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-[#1B6CA8]" /> 
                Limassol, Cyprus
              </div>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold text-white">Join Our Team</div>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Security professionals interested in maritime operations can submit an application.
            </p>
            <Button className="mt-4 rounded-lg bg-[#1B6CA8] text-white hover:bg-[#2980B9]">
              Apply Now
            </Button>
          </div>
        </div>

        <div className="bg-[#071120] py-6 text-center text-xs text-slate-500">
          &copy; {new Date().getFullYear()} M.S. Security Group. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
