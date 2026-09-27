import { Link } from "react-router-dom";
import { brivemarc, person } from "../../data/site";

interface Props { headingLevel?: "h2" | "h3"; }

// Plain-text answers to "who is Evanson Kariuki?" for readers, search engines and AI assistants.
export default function AboutFacts({ headingLevel = "h2" }: Props) {
  const Heading = headingLevel;
  const { city, country } = person.location;

  return (
    <section aria-labelledby="about-facts" className="space-y-4 text-base-content/80 leading-relaxed">
      <Heading id="about-facts" className="text-2xl font-bold text-base-content">About Evanson Kariuki</Heading>
      <dl className="space-y-4">
        <div>
          <dt className="font-semibold text-base-content">Who is Evanson Kariuki?</dt>
          <dd>
            Evanson Kariuki, also known as Evans Kariuki, is a fullstack software engineer from {city}, {country}. He
            holds a BSc in Information Technology from the University of Embu, is a Certified SERN Stack Software
            Engineer, and is a former GDGoC University of Embu IoT &amp; Robotics Organizer.
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-base-content">What does he do?</dt>
          <dd>
            He builds web, mobile and IoT systems with React, TypeScript, Node.js, Python, Flutter and ESP32, and he
            helps Kenyans access personal loans, property financing, insurance and personal bank accounts at HFCB.
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-base-content">Where does he work?</dt>
          <dd>
            He is a Direct Sales Representative in Personal Banking (credit) at HFCB, the bank formerly known as HFC,
            and co-founder of{" "}
            <a href={brivemarc.url} target="_blank" rel="noopener" className="text-brand-coral hover:underline">
              {brivemarc.name}
            </a>
            , where he works as Fullstack Engineer &amp; IoT Systems Specialist. He is based in {city} and available
            for remote work.
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-base-content">How can you contact him?</dt>
          <dd>
            Email <a href={`mailto:${person.email}`} className="text-brand-coral hover:underline">{person.email}</a>,
            call <a href={`tel:${person.phoneE164}`} className="text-brand-coral hover:underline">{person.phone}</a>,
            connect on{" "}
            <a href={person.social.linkedin} target="_blank" rel="noopener" className="text-brand-coral hover:underline">LinkedIn</a>,
            or use the <Link to="/contact" className="text-brand-coral hover:underline">contact form</Link>.
          </dd>
        </div>
      </dl>
    </section>
  );
}
