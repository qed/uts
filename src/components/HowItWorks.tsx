import React from 'react';
import { motion } from 'framer-motion';
export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-uts-navy font-bold tracking-widest text-sm uppercase mb-2 block">
            Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            How It Works
          </h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform md:-translate-x-1/2" />

          {/* Phase 1 */}
          <motion.div
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
            className="relative mb-16 md:mb-24">

            <div className="flex flex-col md:flex-row items-start md:items-center">
              <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0 pl-12 md:pl-0">
                <span className="text-uts-teal font-bold tracking-wider text-sm uppercase mb-1 block">
                  Weeks 1-2 March
                </span>
                <h3 className="text-2xl font-bold text-uts-navy mb-2">
                  Phase 1: Students Become Experts
                </h3>
                <p className="text-gray-600">
                  Participating students install Claude Cowork and build
                  personal workflows to manage their studies and
                  extracurriculars. They learn by doing.
                </p>
              </div>

              <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-uts-navy rounded-full border-4 border-white shadow-sm flex items-center justify-center transform md:-translate-x-1/2 z-10">
                <span className="text-white text-xs font-bold">1</span>
              </div>

              <div className="md:w-1/2 md:pl-12 pl-12">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-2">
                    Example Student Workflows:
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>
                      • <strong>Daily To-Do Engine:</strong> Processes calendars
                      & assignments into a daily plan.
                    </li>
                    <li>
                      • <strong>Extracurricular Coordinator:</strong> Monitors
                      debate & sports schedules.
                    </li>
                    <li>
                      • <strong>Study Session Planner:</strong> Organizes
                      materials by test date.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Phase 2 */}
          <motion.div
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
            className="relative mb-16 md:mb-24">

            <div className="flex flex-col md:flex-row-reverse items-start md:items-center">
              <div className="md:w-1/2 md:pl-12 mb-4 md:mb-0 pl-12">
                <span className="text-uts-teal font-bold tracking-wider text-sm uppercase mb-1 block">
                  Ongoing
                </span>
                <h3 className="text-2xl font-bold text-uts-navy mb-2">
                  Phase 2: Parents Make the Match
                </h3>
                <p className="text-gray-600">
                  Parents identify professionals in their network, explain the
                  concept, and make the connection. Every professional is
                  personally vouched for.
                </p>
              </div>

              <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-uts-navy rounded-full border-4 border-white shadow-sm flex items-center justify-center transform md:-translate-x-1/2 z-10">
                <span className="text-white text-xs font-bold">2</span>
              </div>

              <div className="md:w-1/2 md:pr-12 pl-12 md:pl-0 md:text-right">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 inline-block text-left">
                  <h4 className="font-bold text-gray-900 mb-2">
                    The Trust Layer
                  </h4>
                  <p className="text-sm text-gray-600">
                    No cold calls. No strangers. The grade representative sends
                    a warm intro email, and parents handle their own outreach to
                    trusted contacts.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Phase 3 */}
          <motion.div
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
            className="relative">

            <div className="flex flex-col md:flex-row items-start md:items-center">
              <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0 pl-12 md:pl-0">
                <span className="text-uts-teal font-bold tracking-wider text-sm uppercase mb-1 block">
                  March Break
                </span>
                <h3 className="text-2xl font-bold text-uts-navy mb-2">
                  Phase 3: The Setup Session
                </h3>
                <p className="text-gray-600">
                  Students work in pairs to meet the professional at their
                  office or a public location for a half-day session.
                </p>
              </div>

              <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-uts-navy rounded-full border-4 border-white shadow-sm flex items-center justify-center transform md:-translate-x-1/2 z-10">
                <span className="text-white text-xs font-bold">3</span>
              </div>

              <div className="md:w-1/2 md:pl-12 pl-12">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-2">
                    Session Agenda:
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>
                      1. <strong>AI Discovery (60m):</strong> Structured intake
                      prompt.
                    </li>
                    <li>
                      2. <strong>Review (30m):</strong> Refine the project
                      brief.
                    </li>
                    <li>
                      3. <strong>Setup (90m):</strong> Install & build
                      workflows.
                    </li>
                    <li>
                      4. <strong>Handoff (30m):</strong> Documentation & next
                      steps.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}