"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  FileText,
  CheckCircle2,
  ChevronRight,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Scale,
  BadgeCheck,
  ScrollText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const complianceStats = [
  { value: "12", label: "Active Licences" },
  { value: "8", label: "Current Certifications" },
  { value: "9", label: "Published Policies" },
  { value: "Apr 2026", label: "Last Updated" },
];

const entities = [
  {
    name: "M.S. Security & Personnel Limited",
    shortName: "MS Security Ltd",
    description: "Primary operating entity for maritime security and personnel services.",
    logo: "/images/ms-security-group-logo.png",
    hasLogo: true,
  },
  {
    name: "M. SOS Maritime Security at Open Seas Ltd",
    shortName: "M. SOS Maritime",
    description: "Specialist maritime security operations in open sea environments.",
    logo: "/images/msos-logo.png",
    hasLogo: true,
  },
  {
    name: "NEW OCEAN SYSTEM LTD",
    shortName: "NEW OCEAN",
    description: "Technology and systems solutions for maritime operations.",
    logo: "/images/nos-logo.png",
    hasLogo: true,
  },
  {
    name: "MS OCEAN CREW LTD",
    shortName: "MS Ocean Crew",
    description: "Maritime crew management and deployment services.",
    logo: "/images/msoc-logo.png",
    hasLogo: true,
  },
  {
    name: "United Guards Services Limited",
    shortName: "United Guards",
    description: "Integrated guarding and security services.",
    logo: null,
    hasLogo: false,
  },
  {
    name: "Black Pearl Maritime Security Services Ltd",
    shortName: "Black Pearl",
    description: "Specialist high-risk maritime security deployments.",
    logo: null,
    hasLogo: false,
  },
  {
    name: "MS Private Security Services Ltd",
    shortName: "MS Private Security",
    description: "Private security services for corporate and personal clients.",
    logo: "/images/ms-private-security-logo.png",
    hasLogo: true,
  },
];

const entityLicences = [
  "Maritime Security Operating Licence",
  "ISO 9001:2015 Certification",
  "ISO 28000:2022 Certification",
  "Corporate Registration Certificate",
  "Professional Indemnity Insurance",
  "STCW Training Accreditation",
  "ISPS Code Compliance Certificate",
  "BIMCO Membership",
];

const entityPolicies = [
  "Privacy Policy",
  "Cookie Policy",
  "Terms & Conditions",
  "Data Protection Policy",
  "Health & Safety Policy",
  "Quality Policy",
  "Anti-Bribery & Ethics Policy",
  "Complaints Procedure",
  "Environmental Policy",
];

const complianceFaqs = [
  {
    question: "Are all certificates current?",
    answer: "Yes, all certificates and licences displayed on this page are current and valid. We maintain a proactive renewal schedule to ensure continuous compliance.",
  },
  {
    question: "How often is this page updated?",
    answer: "This compliance page is reviewed and updated quarterly, or immediately when any certificate or licence status changes.",
  },
  {
    question: "Can additional documentation be requested?",
    answer: "Yes, clients and partners may request additional documentation or verification by contacting our compliance department directly.",
  },
  {
    question: "Which company entity holds each licence?",
    answer: "Licences and certifications are held by the appropriate legal entity within the MS Security Group. Please refer to the Company Entities section for detailed breakdown.",
  },
  {
    question: "Are all documents publicly downloadable?",
    answer: "Selected documents are available for download. Some documents may require verification of business relationship before access is granted.",
  },
];

export default function CompliancePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeEntity, setActiveEntity] = useState(0);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
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

          <nav className="hidden gap-8 text-sm text-slate-600 lg:flex">
            <Link href="/" className="transition hover:text-[#0369A1]">Home</Link>
            <Link href="/#operations" className="transition hover:text-[#0369A1]">Operations</Link>
            <Link href="/#careers" className="transition hover:text-[#0369A1]">Careers</Link>
            <Link href="/compliance" className="font-medium text-[#0369A1]">Compliance</Link>
            <Link href="/#apply" className="transition hover:text-[#0369A1]">Apply</Link>
          </nav>

          <Button className="rounded-lg bg-[#0369A1] px-6 text-white hover:bg-[#0284C7]">
            Apply Now
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#0369A1]/20 bg-[#0369A1]/5 px-4 py-1.5 text-sm font-medium text-[#0369A1]">
              <BadgeCheck className="h-4 w-4" />
              Transparency & Trust
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 md:text-5xl">
              Compliance, Licences
              <span className="block text-[#0369A1]">& Certifications</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              A central place to review our corporate licences, certifications, legal policies, and compliance documentation.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {complianceStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
                <div className="mt-1 text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex h-12 w-12 mx-auto items-center justify-center rounded-full bg-[#0369A1]/10">
              <Scale className="h-6 w-6 text-[#0369A1]" />
            </div>
            <h2 className="mt-6 text-2xl font-semibold text-slate-900">Our Commitment to Compliance</h2>
            <p className="mt-4 leading-8 text-slate-600">
              MS Security Group publishes this information in the interest of transparency, legal compliance, and industry best practice. We maintain rigorous standards across all operational areas and ensure all licences, certifications, and policies are kept current. Our commitment to compliance reflects our dedication to delivering trustworthy, professional maritime security services to clients worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Company Entities Section */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="text-sm font-semibold uppercase tracking-wide text-[#0369A1]">Group Structure</div>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900 md:text-4xl">Company Entities</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Licences and certifications grouped by legal entity within the MS Security Group.
            </p>
          </div>

          {/* Entity Tabs - Horizontally scrollable */}
          <div className="mb-8 -mx-6 px-6 overflow-x-auto scrollbar-hide">
            <div className="flex gap-2 min-w-max pb-2">
              {entities.map((entity, index) => (
                <button
                  key={entity.name}
                  onClick={() => setActiveEntity(index)}
                  className={`whitespace-nowrap rounded-lg px-5 py-3 text-sm font-medium transition-colors ${
                    activeEntity === index
                      ? "bg-[#0369A1] text-white"
                      : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {entity.shortName}
                </button>
              ))}
            </div>
          </div>

          {/* Active Entity Content */}
          <Card className="border-slate-200 bg-white">
            <CardContent className="p-8">
              {/* Logo */}
              <div className="mb-6">
                {entities[activeEntity].hasLogo ? (
                  <Image
                    src={entities[activeEntity].logo!}
                    alt={entities[activeEntity].name}
                    width={200}
                    height={80}
                    className="object-contain object-left"
                    style={{ maxHeight: "80px", width: "auto" }}
                  />
                ) : (
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-[#0369A1]/10">
                    <Shield className="h-8 w-8 text-[#0369A1]" />
                  </div>
                )}
              </div>

              {/* Company Name & Description */}
              <h3 className="text-xl font-bold text-slate-900">{entities[activeEntity].name}</h3>
              <p className="mt-1 text-slate-600">{entities[activeEntity].description}</p>

              {/* Associated Licences & Certifications */}
              <div className="mt-8 border-t border-slate-200 pt-6">
                <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-4">
                  Associated Licences & Certifications
                </h4>
                <div className="grid gap-3 sm:grid-cols-2">
                  {entityLicences.map((licence) => (
                    <div
                      key={licence}
                      className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 p-4"
                    >
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-green-600" />
                        <span className="font-medium text-slate-900">{licence}</span>
                      </div>
                      <span className="flex-shrink-0 rounded-full bg-green-100 px-2.5 py-1 text-xs font-medium text-green-700">
                        Active
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Policies & Procedures */}
              <div className="mt-8 border-t border-slate-200 pt-6">
                <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-4">
                  Policies & Procedures
                </h4>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {entityPolicies.map((policy) => (
                    <div
                      key={policy}
                      className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 p-3"
                    >
                      <div className="flex items-center gap-2">
                        <ScrollText className="h-4 w-4 flex-shrink-0 text-slate-500" />
                        <span className="text-sm font-medium text-slate-900">{policy}</span>
                      </div>
                      <Button variant="ghost" size="sm" className="h-auto p-1 text-[#0369A1] hover:text-[#0284C7]">
                        Read
                        <ChevronRight className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <Card className="border-slate-200 bg-slate-50">
              <CardContent className="p-8 lg:p-12">
                <div className="text-center">
                  <div className="flex h-14 w-14 mx-auto items-center justify-center rounded-full bg-[#0369A1]/10">
                    <FileText className="h-7 w-7 text-[#0369A1]" />
                  </div>
                  <h2 className="mt-6 text-2xl font-semibold text-slate-900">Document Verification</h2>
                  <p className="mt-4 text-slate-600">
                    For compliance-related enquiries, document verification requests, or to obtain additional documentation not listed on this page, please contact our compliance department.
                  </p>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border border-slate-200 bg-white p-4">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-[#0369A1]" />
                      <div>
                        <div className="text-xs text-slate-500">Compliance Department</div>
                        <div className="font-medium text-slate-900">compliance@mano-security.com</div>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg border border-slate-200 bg-white p-4">
                    <div className="flex items-center gap-3">
                      <Scale className="h-5 w-5 text-[#0369A1]" />
                      <div>
                        <div className="text-xs text-slate-500">Legal Department</div>
                        <div className="font-medium text-slate-900">legal@mano-security.com</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <Button className="rounded-lg bg-[#0369A1] px-8 text-white hover:bg-[#0284C7]">
                    Request Verification
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <p className="mt-4 text-sm text-slate-500">
                    Additional documents may be available on request subject to verification of business relationship.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">Frequently Asked Questions</h2>
            <p className="mt-4 text-slate-600">Common questions about our compliance documentation.</p>
          </div>

          <div className="space-y-4">
            {complianceFaqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-lg border border-slate-200 bg-white overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex w-full items-center justify-between p-5 text-left"
                >
                  <span className="font-medium text-slate-900">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-slate-500 transition-transform ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="border-t border-slate-200 px-5 py-4 text-slate-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Legal Links */}
      <section className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-600">
            <Link href="#" className="transition hover:text-[#0369A1]">Privacy Policy</Link>
            <span className="text-slate-300">|</span>
            <Link href="#" className="transition hover:text-[#0369A1]">Cookie Policy</Link>
            <span className="text-slate-300">|</span>
            <Link href="#" className="transition hover:text-[#0369A1]">Terms & Conditions</Link>
            <span className="text-slate-300">|</span>
            <Link href="/compliance" className="font-medium text-[#0369A1]">Compliance</Link>
            <span className="text-slate-300">|</span>
            <Link href="/#apply" className="transition hover:text-[#0369A1]">Contact</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-900">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-4 lg:px-8">
          <div>
            <Image
              src="/images/ms-security-logo.png"
              alt="MS Security Group"
              width={150}
              height={40}
              style={{ height: "40px", width: "auto" }}
            />
            <p className="mt-4 text-sm leading-7 text-slate-400">
              Maritime security operations and personnel deployment for international shipping companies.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold text-white">Navigation</div>
            <div className="mt-4 space-y-2 text-sm text-slate-400">
              <div><Link href="/" className="transition hover:text-white">Home</Link></div>
              <div><Link href="/#operations" className="transition hover:text-white">Operations</Link></div>
              <div><Link href="/#careers" className="transition hover:text-white">Careers</Link></div>
              <div><Link href="/compliance" className="transition hover:text-white">Compliance</Link></div>
              <div><Link href="/#apply" className="transition hover:text-white">Apply</Link></div>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold text-white">Contact</div>
            <div className="mt-4 space-y-2 text-sm text-slate-400">
              <div className="flex items-center gap-2"><Phone className="h-4 w-4" /> +357 25 001120</div>
              <div className="flex items-center gap-2"><Mail className="h-4 w-4" /> recruitment@mano-security.com</div>
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Limassol, Cyprus</div>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold text-white">Compliance</div>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              Review our licences, certifications, and corporate policies.
            </p>
            <Button className="mt-4 rounded-lg bg-[#0369A1] text-white hover:bg-[#0284C7]">
              View Documents
            </Button>
          </div>
        </div>

        <div className="border-t border-slate-800 py-6 text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} M.S. Security Group. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
