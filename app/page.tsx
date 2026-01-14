import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import PlanTypes from '../components/PlanTypes';
import Operators from '../components/Operators';
import LeadForm from '../components/LeadForm';
import SocialProof from '../components/SocialProof';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Benefits />
        <PlanTypes />
        <Operators />
        <div id="contato" className="bg-slate-50 py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <LeadForm />
          </div>
        </div>
        <SocialProof />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}