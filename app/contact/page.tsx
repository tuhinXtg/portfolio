import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { contactCopy } from "@/data/personal";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch about projects, opportunities, or ideas.",
};

export default function ContactPage() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title={contactCopy.headline}
          description={contactCopy.subtext}
        />
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <ContactForm />
          <ContactInfo />
        </div>
      </Container>
    </section>
  );
}
