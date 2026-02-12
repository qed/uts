import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = [
  {
    question: "Won't this encourage students to use AI for schoolwork?",
    answer:
    'This is the most important risk to address. The program is strictly for life management outside the classroom — organizing, scheduling, and tracking. Cowork is not used to write essays or solve problem sets. The reality is that every student applying to university from 2026 onwards will be using AI tools. UTS students who learn to use them responsibly will have an advantage.'
  },
  {
    question: 'What if my child is too busy during exams?',
    answer:
    'Expectations are set upfront. Students are students first. Professionals accept that response times for maintenance questions may be measured in days, not hours. If a student needs to pause during exams, that is fully supported.'
  },
  {
    question: 'What if Cowork has a bug or disrupts a workflow?',
    answer:
    'Disclaimers cover this. Cowork runs in a VM with deletion protection, and the professional always maintains control of their own device. This is an early-adoption opportunity, not enterprise-grade software.'
  },
  {
    question: 'What if a professional wants a refund?',
    answer:
    'The parent handles refunds at their discretion. UTSPA has no financial exposure. The parent-to-parent trust relationship acts as the buffer.'
  },
  {
    question: 'Is financial aid available?',
    answer:
    'Yes. Approximately 20% of UTS students receive financial aid. A donation fund covers Claude subscriptions for these students to ensure no one is excluded from this opportunity.'
  },
  {
    question: "What is UTSPA's role?",
    answer:
    "UTSPA's role is limited to communication and basic marketing materials. No money flows through the association. The financial relationship is entirely between individual parents and professionals."
  }];

  return (
    <section id="faq" className="py-20 bg-uts-offwhite">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-uts-navy">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) =>
          <div
            key={index}
            className="bg-white rounded-lg border border-gray-200 overflow-hidden">

              <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex justify-between items-center p-6 text-left focus:outline-none">

                <span className="font-bold text-gray-900">{faq.question}</span>
                <ChevronDown
                className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${openIndex === index ? 'transform rotate-180' : ''}`} />

              </button>
              <AnimatePresence>
                {openIndex === index &&
              <motion.div
                initial={{
                  height: 0,
                  opacity: 0
                }}
                animate={{
                  height: 'auto',
                  opacity: 1
                }}
                exit={{
                  height: 0,
                  opacity: 0
                }}
                transition={{
                  duration: 0.2
                }}>

                    <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
              }
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
    </section>);

}