import Nav from "@/components/Nav";
import SideIndex from "@/components/SideIndex";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import profile from "@/data/profile.json";
import contact from "@/data/contact.json";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  email: `mailto:${contact.email}`,
  url: "https://my-portfolio-ecru-ten-83.vercel.app",
  sameAs: contact.socials.map((s) => s.url),
  knowsAbout: ["React", "Next.js", "TypeScript", "Frontend Development", "Applied AI"],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-bg focus:px-4 focus:py-2 focus:text-sm focus:text-text focus:shadow"
      >
        Skip to content
      </a>
      <Nav />
      <SideIndex />
      <main>
        <Hero />
        <Work />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
