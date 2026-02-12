import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Shield, Users, DollarSign } from 'lucide-react';
export function ForParents() {
  return (
    <section id="parents" className="py-20 bg-uts-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="text-uts-teal font-bold tracking-widest text-sm uppercase mb-2 block">
            Audience
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-uts-navy mb-6">
            For Parents
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl">
            Position your child at the forefront of the AI revolution while
            connecting our community.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Benefits & Role */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why This Matters For Your Child
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-uts-teal mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-gray-900 block">
                      University Application Advantage
                    </span>
                    <span className="text-gray-600">
                      From 2026 onwards, competitive applicants will leverage
                      AI. This program provides a tangible narrative of
                      leadership.
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-uts-teal mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-gray-900 block">
                      Entrepreneurship Experience
                    </span>
                    <span className="text-gray-600">
                      Students run a real service business, learning unit
                      economics and client management.
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-uts-teal mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-gray-900 block">
                      Technical AI Fluency
                    </span>
                    <span className="text-gray-600">
                      Going beyond ChatGPT to true agentic workflow design with
                      Claude Cowork.
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Your Role
              </h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  <strong className="text-uts-navy">1. Opt In:</strong> Sign
                  your child up for the program.
                </p>
                <p>
                  <strong className="text-uts-navy">2. Identify:</strong> Find
                  professionals in your network who need AI help.
                </p>
                <p>
                  <strong className="text-uts-navy">3. Connect:</strong> Make
                  the warm introduction and vouch for the professional.
                </p>
                <p>
                  <strong className="text-uts-navy">4. Manage:</strong> Collect
                  payments directly from the professional (UTSPA handles no
                  money).
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Safety & Finance */}
          <div className="space-y-8">
            <div className="bg-uts-navy text-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <Shield className="w-8 h-8 text-uts-teal mr-4" />
                <h3 className="text-2xl font-bold">Safety First</h3>
              </div>
              <ul className="space-y-4 text-gray-200">
                <li className="flex items-center">
                  <Users className="w-5 h-5 mr-3 text-uts-teal" />
                  <span>
                    Students <strong>always</strong> work in pairs.
                  </span>
                </li>
                <li className="flex items-center">
                  <Users className="w-5 h-5 mr-3 text-uts-teal" />
                  <span>
                    Public spaces or offices only.{' '}
                    <strong>No home visits.</strong>
                  </span>
                </li>
                <li className="flex items-center">
                  <Users className="w-5 h-5 mr-3 text-uts-teal" />
                  <span>
                    Every client is <strong>personally vouched for</strong> by a
                    UTS parent.
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <DollarSign className="w-6 h-6 text-uts-navy mr-2" />
                Financial Structure
              </h3>
              <div className="overflow-hidden border border-gray-200 rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Item
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Amount
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Flow
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        Setup Fee
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">$200</td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        Pro → Parent
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        Maintenance
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        $50/mo
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        Pro → Parent
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        Student Cost
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        $20/mo
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        Claude Sub
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm text-gray-500 italic">
                *UTSPA handles $0. Financial aid is available for student
                subscriptions.
              </p>
            </div>

            <div className="text-center pt-4">
              <a
                href="mailto:contact@utspa.ca?subject=UTS%20Student%20AI%20Concierge%20Interest"
                className="inline-block w-full sm:w-auto bg-uts-teal hover:bg-uts-teal/90 text-white font-bold py-4 px-8 rounded-lg shadow-md transition-colors text-lg">

                Opt Your Child In
              </a>
              <p className="mt-2 text-sm text-gray-500">
                Contact your Grade Rep to join the pilot
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>);

}