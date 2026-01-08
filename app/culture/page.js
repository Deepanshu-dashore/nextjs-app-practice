import React from 'react';
import { Users, Heart, Lightbulb, Rocket } from 'lucide-react'; // Using lucide-react for icons

const CultureCard = ({ icon: Icon, title, description, className }) => (
  <div className={`p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-500 group ${className}`}>
    <div className="w-12 h-12 mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-blue-500/20">
      <Icon className="text-white" size={24} />
    </div>
    <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </div>
);

export default function CompanyCulture() {
  return (
    <section className="relative min-h-screen bg-[#050505] py-24 px-6 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-blue-500 font-semibold tracking-widest uppercase text-sm mb-4">Inside our Studio</h2>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Culture</span>
          </h1>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
            We are more than just a workplace. We are a collective of thinkers, makers, and doers obsessed with creating the future.
          </p>
        </div>
        

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Big Card */}
          <CultureCard 
            icon={Users}
            title="People First"
            description="We believe that great work starts with happy people. We prioritize mental health, work-life harmony, and personal growth above all else."
            className="md:col-span-2"
          />

          {/* Small Card */}
          <CultureCard 
            icon={Lightbulb}
            title="Radical Innovation"
            description="No idea is too crazy. We encourage failing fast and learning faster."
            className="md:col-span-1"
          />

          {/* Small Card */}
          <CultureCard 
            icon={Heart}
            title="Inclusive by Design"
            description="Diversity is our superpower. Every voice matters here."
            className="md:col-span-1"
          />

          {/* Big Card */}
          <CultureCard 
            icon={Rocket}
            title="Ownership Mentality"
            description="We don't just complete tasks; we take ownership of the mission. Every team member has the autonomy to make high-impact decisions."
            className="md:col-span-2"
          />
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 p-12 rounded-[40px] bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-white/5 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Want to be part of the journey?</h3>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">We are always looking for passionate individuals who challenge the status quo.</p>
          <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform duration-300">
            View Openings
          </button>
        </div>
      </div>
    </section>
  );
}