import { Link } from "react-router-dom";
import { Home as HomeIcon, Mail, Phone, PiggyBank, ShieldCheck, Wallet } from "lucide-react";
import SectionHeader from "../components/Shared/SectionHeader";
import { bankingDisclaimer, bankingProducts, bankingSteps, person } from "../data/site";

// TODO: confirm all wording on this page with HFCB policy / compliance before going live.
// Rules: no interest rates, fees, eligibility promises or approval guarantees, and no HFCB logo.

const icons = [Wallet, HomeIcon, ShieldCheck, PiggyBank];

export default function PersonalBanking() {
  return (
    <div className="section-padding">
      <div className="container-max">
        <SectionHeader
          as="h1"
          title="Personal Banking with HFCB"
          subtitle="Personal loans, property financing, insurance and personal accounts, with one person to guide you from enquiry to disbursement."
        />

        <p className="text-base-content/80 leading-relaxed max-w-3xl mb-12">
          I'm {person.name}, a Direct Sales Representative in HFCB Personal Banking, based in {person.location.city}. I
          help Kenyans find the HFCB product that fits their needs, explain the options in plain language and handle
          the application with them, so nothing gets lost along the way.
        </p>

        <section aria-labelledby="how-i-help" className="mb-16">
          <h2 id="how-i-help" className="text-2xl font-bold mb-6">How I can help</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {bankingProducts.map((p, i) => {
              const Icon = icons[i % icons.length];
              return (
                <li key={p.name} className="card bg-base-200 border border-base-300 p-6">
                  <Icon className="text-brand-coral mb-3" size={26} />
                  <h3 className="font-bold text-lg mb-1">{p.name}</h3>
                  <p className="text-sm text-base-content/80">{p.description}</p>
                </li>
              );
            })}
          </ul>
        </section>

        <section aria-labelledby="how-it-works" className="mb-16">
          <h2 id="how-it-works" className="text-2xl font-bold mb-6">How it works</h2>
          <ol className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {bankingSteps.map((step, i) => (
              <li key={step} className="rounded-xl border border-base-300 p-5">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-brand-coral text-on-coral font-bold mb-3">
                  {i + 1}
                </span>
                <p className="text-sm text-base-content/80">{step}</p>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="talk-to-me" className="card bg-gradient-to-r from-brand-forest to-brand-deep text-white p-8">
          <h2 id="talk-to-me" className="text-2xl font-bold mb-3">Talk to me about a loan, property, cover or an account</h2>
          <p className="text-white/80 mb-6 max-w-2xl">
            Call, email or send a message and I'll get back to you to understand what you need.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={`tel:${person.phoneE164}`} className="btn bg-brand-coral border-brand-coral text-on-coral hover:bg-brand-coral/90 gap-2">
              <Phone size={16} /> Call {person.phone}
            </a>
            <a
              href={`mailto:${person.email}?subject=${encodeURIComponent("HFCB personal banking enquiry")}`}
              className="btn btn-outline text-white border-white/60 hover:bg-white hover:text-brand-forest gap-2"
            >
              <Mail size={16} /> Email me
            </a>
            <Link
              to="/contact?subject=HFCB%20personal%20banking%20enquiry"
              className="btn btn-ghost text-white hover:bg-white/10"
            >
              Use the contact form
            </Link>
          </div>
        </section>

        <p className="text-sm text-base-content/70 mt-6">{bankingDisclaimer}</p>
      </div>
    </div>
  );
}
