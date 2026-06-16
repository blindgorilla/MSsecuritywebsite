import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | MS Security Group",
  description:
    "MS Security Group provides professional maritime security services including cargo vessel security, armed deployments, vessel CCTV, port security, and ferry passenger security.",
};

const services = [
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

export default function ServicesPage() {
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

      {/* Page Hero */}
      <section className="bg-[#0D1B2A] py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-[#1B6CA8]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#1B6CA8]">
              Our Services
            </span>
          </div>
          <h1 className="text-4xl font-black leading-tight tracking-tight text-white md:text-5xl">
            Operational Divisions
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            MS Security Group provides specialist maritime security services across five core operational divisions — protecting vessels, crew, and cargo on international trade routes.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-[#F4F7FA] py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 3).map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group block overflow-hidden rounded-lg border-0 border-t-2 border-[#1B6CA8] bg-white shadow-[0_1px_3px_rgba(13,27,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h2 className="font-semibold text-[#0D1B2A]">{service.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-[#334155]">{service.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#1B6CA8] transition-colors group-hover:text-[#0D1B2A]">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:mx-auto lg:max-w-2xl lg:grid-cols-2">
            {services.slice(3).map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group block overflow-hidden rounded-lg border-0 border-t-2 border-[#1B6CA8] bg-white shadow-[0_1px_3px_rgba(13,27,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h2 className="font-semibold text-[#0D1B2A]">{service.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-[#334155]">{service.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#1B6CA8] transition-colors group-hover:text-[#0D1B2A]">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
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
