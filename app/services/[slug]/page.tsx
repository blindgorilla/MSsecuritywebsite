import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, CheckCircle2, Shield, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

const services = {
  "cargo-vessel-security": {
    title: "Cargo Vessel Security Services",
    tagline: "Protecting cargo integrity and crew safety across international trade routes.",
    metaDescription:
      "MS Security Group provides cargo vessel security services including seal inspections, deck patrols, container monitoring, and anti-drug trafficking operations for commercial shipping companies worldwide.",
    image: "/images/cargo-vessel-security.jpg",
    items: [
      "Seal inspections and container integrity checks",
      "24/7 deck patrols and elevated watch positions",
      "Anti-drug trafficking and contraband detection",
      "Gangway access control during port calls",
      "Incident reporting and cargo documentation support",
      "Coordination with port authorities and customs agencies",
    ],
    standards:
      "ISPS Code compliant. All personnel hold STCW certification and relevant maritime security qualifications.",
    ctaHeading: "Join Our Cargo Security Teams",
    ctaText:
      "Experienced security professionals are deployed aboard cargo vessels on international rotations.",
  },
  "high-risk-armed-deployments": {
    title: "High Risk Armed Deployments",
    tagline:
      "Armed Vessel Protection Detachments for the world's most demanding maritime corridors.",
    metaDescription:
      "MS Security Group provides armed maritime security teams for high-risk vessel transits including the Red Sea, Gulf of Aden, and Indian Ocean. ISO 28007:2015 certified and IMO compliant.",
    image: "/images/armed-deployments.jpg",
    items: [
      "Armed Vessel Protection Detachments (VPD) for high-risk transits",
      "Citadel and emergency response planning",
      "Pre-transit threat assessment and route briefings",
      "24/7 elevated watch during transit",
      "Real-time communication with vessel master and ship owner",
      "Post-transit incident reporting and documentation",
    ],
    standards:
      "ISO 28007:2015 certified. Compliant with IMO MSC.1/Circ.1405/Rev.3 and flag state requirements. BIMCO GUARDCON contractual framework.",
    ctaHeading: "Deploy With Our Armed Security Teams",
    ctaText:
      "We recruit former military and law enforcement professionals for armed maritime protection roles.",
  },
  "vessel-cctv-security": {
    title: "Vessel CCTV Security",
    tagline: "24/7 surveillance and technical monitoring across all vessel areas.",
    metaDescription:
      "MS Security Group provides vessel CCTV security services including surveillance system installation, 24/7 monitoring, radar watch, and onboard technical security management for commercial vessels.",
    image: "/images/bridge-monitoring.jpg",
    items: [
      "CCTV system installation and management across all vessel zones",
      "24/7 radar and AIS surveillance",
      "Navigation security watch and bridge support",
      "Integration with vessel security management systems",
      "Threat identification and alert protocols",
      "Maritime cyber threat awareness support",
    ],
    standards:
      "Systems aligned with SOLAS Chapter XI-2 requirements. Personnel trained to STCW watchkeeping standards.",
    ctaHeading: "Technical Security Roles Available",
    ctaText: "We place trained technical security personnel aboard vessels operating globally.",
  },
  "port-terminal-security": {
    title: "Port & Terminal Security Services",
    tagline: "ISPS-compliant security for ports, terminals, and maritime gateways.",
    metaDescription:
      "MS Security Group delivers ISPS-compliant port and terminal security including gangway control, perimeter security, cargo inspection, and access management for ports and maritime terminals.",
    image: "/images/port-security.jpg",
    items: [
      "Gangway and access point control",
      "Perimeter patrol and fence-line monitoring",
      "Cargo screening and seal verification",
      "Coordination with port state authority and customs",
      "Personnel and visitor access management",
      "Emergency response and evacuation support",
    ],
    standards:
      "ISPS Code compliant. Services delivered in accordance with SOLAS Chapter XI-2 and IMO maritime security frameworks.",
    ctaHeading: "Port Security Positions Available",
    ctaText:
      "We deploy experienced security officers to ports and terminals across Europe, the Mediterranean, and internationally.",
  },
  "ferry-passenger-security": {
    title: "Ferry & Passenger Security Services",
    tagline: "Discreet, professional security for high-volume passenger ferry operations.",
    metaDescription:
      "MS Security Group provides ferry and passenger vessel security including passenger screening, onboard patrols, crowd management, and ISPS-compliant terminal operations for ferry operators.",
    image: "/images/ferry-passenger-security.jpg",
    items: [
      "Passenger and baggage screening at embarkation",
      "Onboard security patrols and incident response",
      "Crowd management and access zone enforcement",
      "Vehicle deck monitoring and access control",
      "Coordination with port terminals and local law enforcement",
      "ISPS-compliant security plan support",
    ],
    standards:
      "Officers trained under STCW V/2 passenger ship security standards. ISPS Code compliant. Experience across Mediterranean, European, and international ferry routes.",
    ctaHeading: "Ferry Security Roles Available",
    ctaText:
      "Join our teams protecting passenger vessels and ferry operations across international routes.",
  },
};

type Slug = keyof typeof services;

export async function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services[slug as Slug];
  if (!service) return {};
  return {
    title: `${service.title} | MS Security Group`,
    description: service.metaDescription,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services[slug as Slug];
  if (!service) notFound();

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-[#E2E8F0] bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
          <Link href="/">
            <Image
              src="/images/ms-security-logo.png"
              alt="MS Security Group"
              width={150}
              height={40}
              className="brightness-0"
              style={{ height: "40px", width: "auto" }}
              priority
            />
          </Link>

          <nav className="hidden gap-8 text-sm text-[#334155] lg:flex">
            <Link href="/" className="transition hover:text-[#1B6CA8]">Home</Link>
            <Link href="/#news" className="transition hover:text-[#1B6CA8]">News</Link>
            <Link href="/services" className="font-medium text-[#1B6CA8]">Services</Link>
            <Link href="/#operations" className="transition hover:text-[#1B6CA8]">Operations</Link>
            <Link href="/#careers" className="transition hover:text-[#1B6CA8]">Careers</Link>
            <Link href="/compliance" className="transition hover:text-[#1B6CA8]">Compliance</Link>
            <Link href="/#apply" className="transition hover:text-[#1B6CA8]">Apply</Link>
          </nav>

          <Link
            href="https://join.mano-security.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-[#0D1B2A] px-6 py-2 text-sm font-medium text-white transition hover:bg-[#1B6CA8]"
          >
            Apply Now
          </Link>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="border-b border-[#E2E8F0] bg-[#F4F7FA]">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-6 py-3 text-sm text-[#64748B] md:px-12">
          <Link href="/" className="transition hover:text-[#1B6CA8]">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/services" className="transition hover:text-[#1B6CA8]">Services</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-[#0D1B2A] font-medium">{service.title}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative min-h-[420px] overflow-hidden" style={{ background: "#0D1B2A" }}>
        <div className="absolute inset-0">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(13,27,42,0.95) 40%, rgba(13,27,42,0.6))" }} />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:px-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-[#1B6CA8]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#1B6CA8]">
              MS Security Group
            </span>
          </div>
          <h1 className="text-4xl font-black leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
            {service.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            {service.tagline}
          </p>
          <Link
            href="https://join.mano-security.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#1B6CA8] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#2980B9]"
          >
            Apply Now <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-[#1B6CA8]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#1B6CA8]">
              What We Provide
            </span>
          </div>
          <h2 className="mt-2 text-3xl font-bold text-[#0D1B2A] md:text-4xl">Services Breakdown</h2>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.items.map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 rounded-lg border border-[#E2E8F0] bg-[#F4F7FA] p-5"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#1B6CA8]" />
                <span className="text-[#0D1B2A] leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards & Compliance */}
      <section className="bg-[#0D1B2A] py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-4">
              <Shield className="h-10 w-10 flex-shrink-0 text-[#1B6CA8]" />
              <div>
                <div className="font-mono text-xs uppercase tracking-widest text-[#1B6CA8] mb-1">
                  Standards & Compliance
                </div>
                <p className="text-slate-200 leading-relaxed max-w-2xl">{service.standards}</p>
              </div>
            </div>
            <Link
              href="/compliance"
              className="inline-flex flex-shrink-0 items-center gap-2 rounded-lg border border-[#1B6CA8] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#1B6CA8]"
            >
              View Compliance <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#F4F7FA] py-20">
        <div className="mx-auto max-w-4xl px-6 text-center md:px-12">
          <h2 className="text-3xl font-bold text-[#0D1B2A] md:text-4xl">{service.ctaHeading}</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[#334155]">
            {service.ctaText}
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="https://join.mano-security.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#0D1B2A] px-10 py-4 text-base font-semibold text-white transition hover:bg-[#1B6CA8]"
            >
              Apply Now <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-lg border border-[#0D1B2A] px-10 py-4 text-base font-semibold text-[#0D1B2A] transition hover:bg-[#0D1B2A] hover:text-white"
            >
              All Services
            </Link>
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
              <div><Link href="/" className="transition hover:text-white">Home</Link></div>
              <div><Link href="/services" className="transition hover:text-white">Services</Link></div>
              <div><Link href="/#operations" className="transition hover:text-white">Operations</Link></div>
              <div><Link href="/#careers" className="transition hover:text-white">Careers</Link></div>
              <div><Link href="/compliance" className="transition hover:text-white">Compliance</Link></div>
              <div><Link href="/#apply" className="transition hover:text-white">Apply</Link></div>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold text-white">Contact</div>
            <div className="mt-4 space-y-3 text-sm text-slate-300">
              <div>+357 25 001120</div>
              <div>recruitment@mano-security.com</div>
              <div>Limassol, Cyprus</div>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold text-white">Join Our Team</div>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Security professionals interested in maritime operations can submit an application.
            </p>
            <Link
              href="https://join.mano-security.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block rounded-lg bg-[#1B6CA8] px-6 py-2 text-sm font-medium text-white transition hover:bg-[#2980B9]"
            >
              Apply Now
            </Link>
          </div>
        </div>

        <div className="bg-[#071120] py-6 text-center text-xs text-slate-500">
          &copy; {new Date().getFullYear()} M.S. Security Group. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
