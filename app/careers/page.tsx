import type { Metadata } from 'next'
import MissionHero from '@/components/careers/MissionHero'

export const metadata: Metadata = {
  title: 'Careers | MS Security Group',
  description:
    'Join international maritime security teams protecting vessels, ports, and crews across the world. Now recruiting for worldwide deployments.',
}

export default function CareersPage() {
  return (
    <main className="bg-[#060C18] text-[#F2F0EA]">
      <MissionHero />

      <section
        id="requirements"
        className="mx-auto flex min-h-[40vh] max-w-4xl flex-col items-center justify-center gap-4 px-6 py-24 text-center"
      >
        <p className="font-mono text-[11px] tracking-[0.3em] text-[#DFB264]">
          CANDIDATE REQUIREMENTS
        </p>
        <h2 className="text-3xl font-light">Requirements coming soon</h2>
        <p className="max-w-md text-sm leading-relaxed text-[#B9C2CF]">
          Detailed role requirements, certifications and deployment information
          will be published here shortly.
        </p>
      </section>
    </main>
  )
}
