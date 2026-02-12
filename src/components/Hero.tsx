import React from 'react';
import { motion } from 'framer-motion';
import { Users, Calendar, DollarSign } from 'lucide-react';
export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/Website_Hero_Image.jpg"
          alt="Students and professional working together"
          className="w-full h-full object-cover" />

        {/* Overlay */}
        <div className="absolute inset-0 bg-uts-navy/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-uts-navy via-transparent to-transparent opacity-90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            ease: 'easeOut'
          }}>

          <span className="inline-block py-1 px-3 rounded-full bg-uts-teal/20 border border-uts-teal/50 text-uts-teal-light text-sm font-semibold tracking-wider mb-6 uppercase">
            Pilot Program • March 2026
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
            The UTS Student <br className="hidden md:block" />
            <span className="text-uts-teal">AI Concierge</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
            UTS students learn how to build AI workflow for managing their schedule and extracurriculars. Then they help professionals in the community get set up with the tools of the future.
          </p>
        </motion.div>

        {/* Stats Pills */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 md:gap-8"
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: 'easeOut'
          }}>

          <div className="flex items-center bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full">
            <Users className="w-5 h-5 text-uts-teal mr-3" />
            <span className="font-medium">Be one of the 10 professionals or students in the pilot</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          delay: 1,
          duration: 1
        }}>

        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <motion.div
            className="w-1 h-2 bg-uts-teal rounded-full"
            animate={{
              y: [0, 12, 0]
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5
            }} />

        </div>
      </motion.div>
    </section>);

}