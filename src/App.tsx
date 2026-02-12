import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Overview } from './components/Overview';
import { ForParents } from './components/ForParents';
import { ForProfessionals } from './components/ForProfessionals';
import { ForStudents } from './components/ForStudents';
import { HowItWorks } from './components/HowItWorks';
import { Safety } from './components/Safety';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
export function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Overview />
        <ForParents />
        <ForProfessionals />
        <ForStudents />
        <HowItWorks />
        <Safety />
        <FAQ />
      </main>
      <Footer />
    </div>);

}