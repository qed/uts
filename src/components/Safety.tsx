import React from 'react';
import { Shield, Lock, Eye } from 'lucide-react';
export function Safety() {
  return (
    <section id="safety" className="py-20 bg-uts-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-uts-teal font-bold tracking-widest text-sm uppercase mb-2 block">
            Trust & Security
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Safety & Safeguarding
          </h2>
          <p className="text-xl text-gray-300 mt-4 max-w-3xl mx-auto">
            Because this program involves minors providing a service to adults,
            safety is non-negotiable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10">
            <Shield className="w-10 h-10 text-uts-teal mb-6" />
            <h3 className="text-xl font-bold mb-4">Physical Safety</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="mr-2 text-uts-teal">•</span>
                <span>
                  <strong>Pairs Only:</strong> Students always work in pairs. No
                  student ever meets a professional alone.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-uts-teal">•</span>
                <span>
                  <strong>Public Spaces:</strong> Offices, libraries, or coffee
                  shops only. No private home visits.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-uts-teal">•</span>
                <span>
                  <strong>Vouched Only:</strong> Every professional is
                  personally known to a UTS parent.
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10">
            <Lock className="w-10 h-10 text-uts-teal mb-6" />
            <h3 className="text-xl font-bold mb-4">Data Privacy</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="mr-2 text-uts-teal">•</span>
                <span>
                  <strong>Your Device:</strong> Setup happens on the
                  professional's computer.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-uts-teal">•</span>
                <span>
                  <strong>No Data Transfer:</strong> Students do not take any
                  client data home.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-uts-teal">•</span>
                <span>
                  <strong>No Access:</strong> Students never access passwords or
                  sensitive files without supervision.
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10">
            <Eye className="w-10 h-10 text-uts-teal mb-6" />
            <h3 className="text-xl font-bold mb-4">Expectation Management</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="mr-2 text-uts-teal">•</span>
                <span>
                  "Claude Cowork is a new product in research preview. It may
                  have limitations."
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-uts-teal">•</span>
                <span>
                  "Your AI Concierge is a high school student. Response times
                  may be days, not hours."
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-uts-teal">•</span>
                <span>
                  "This is a learning experience, not a professional consulting
                  engagement."
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>);

}