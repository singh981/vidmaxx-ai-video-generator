import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/landing/hero-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />

        {/* Pricing Placeholder */}
        <section id="pricing" className="py-24 bg-black/20">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">Pricing</h2>
            <p className="text-muted-foreground">Coming soon...</p>
          </div>
        </section>

        {/* About Placeholder */}
        <section id="about" className="py-24">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">About VidMax</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We are building the next generation of video content creation tools.
            </p>
          </div>
        </section>

      </main>
      <SiteFooter />
    </div>
  );
}
