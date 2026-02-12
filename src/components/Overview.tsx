import React from 'react';
import { motion } from 'framer-motion';
import { Users, Briefcase, GraduationCap, ArrowRight } from 'lucide-react';
export function Overview() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  const audiences = [
  {
    id: 'parents',
    title: 'For Parents',
    icon: Users,
    description:
    'Give your child a structured, real-world AI entrepreneurship experience that differentiates their university application.',
    color: 'bg-blue-50',
    iconColor: 'text-blue-600'
  },
  {
    id: 'professionals',
    title: 'For Professionals',
    icon: Briefcase,
    description:
    'Get hands-on help adopting Claude Cowork from a bright, well-trained student. No cold calls, just community.',
    color: 'bg-teal-50',
    iconColor: 'text-uts-teal'
  },
  {
    id: 'students',
    title: 'For Students',
    icon: GraduationCap,
    description:
    'Master the most advanced AI tools, run your own service business, and earn income while building your portfolio.',
    color: 'bg-indigo-50',
    iconColor: 'text-indigo-600'
  }];

  return (
    <section id="overview" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-uts-navy font-bold tracking-widest text-sm uppercase mb-2 block">
            The Program
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            What Is This Program?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            The UTS Student AI Concierge is a pilot program that teaches UTS
            students to become experts in Claude Cowork — Anthropic's new AI
            desktop agent.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Students first use it to manage their own studies, then set it up
            for professionals in the UTS parent network. It's a dual-purpose
            initiative: real-world entrepreneurship for students, and practical
            AI adoption for professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audiences.map((audience, index) =>
          <motion.div
            key={audience.id}
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: index * 0.1,
              duration: 0.5
            }}
            className="group relative bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">

              <div
              className={`absolute top-0 left-0 w-full h-1 ${audience.id === 'professionals' ? 'bg-uts-teal' : 'bg-uts-navy'}`} />


              <div className="p-8">
                <div
                className={`w-14 h-14 ${audience.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>

                  <audience.icon className={`w-7 h-7 ${audience.iconColor}`} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {audience.title}
                </h3>
                <p className="text-gray-600 mb-8 min-h-[80px]">
                  {audience.description}
                </p>

                <button
                onClick={() => scrollTo(audience.id)}
                className="inline-flex items-center text-uts-navy font-semibold hover:text-uts-teal transition-colors">

                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}