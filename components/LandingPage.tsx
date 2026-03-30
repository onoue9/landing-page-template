import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Benefits from './Benefits';
import PlanTypes from './PlanTypes';
import Steps from './Steps';
import Operators from './Operators';
import Consultant from './Consultant';
import LeadForm from './LeadForm';
import SocialProof from './SocialProof';
import FAQ from './FAQ';
import CTASection from './CTASection';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import BackToTop from './BackToTop';
import ScrollProgress from './ui/ScrollProgress';
import DemoBanner from './DemoBanner';
import Pricing from './Pricing';

const IS_DEMO = process.env.NEXT_PUBLIC_DEMO === 'true';

interface LandingPageProps {
  previewHref?: string;
}

export default function LandingPage({ previewHref }: LandingPageProps) {
  return (
    <div className={`flex flex-col${IS_DEMO ? ' pt-8' : ''}`}>
      <DemoBanner previewHref={previewHref} />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <PlanTypes />
        <Steps />
        <Operators />
        <Pricing />
        <Consultant />
        <div id="contato" className="bg-background py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <LeadForm />
          </div>
        </div>
        <SocialProof />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
}
