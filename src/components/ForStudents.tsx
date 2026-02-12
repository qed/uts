import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, BookOpen, Target, CheckCircle, ArrowRight } from 'lucide-react';
export function ForStudents() {
  return (
    <section id="students" className="py-20 bg-uts-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="text-uts-teal font-bold tracking-widest text-sm uppercase mb-2 block">
            Audience
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-uts-navy mb-6">
            For Students
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl">
            Build a real business, master AI, and stand out for university.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left: What You Learn */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              The University Application Advantage
            </h3>
            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    Entrepreneurship Experience
                  </h4>
                  <p className="text-gray-600">
                    You're running a real service business. You'll learn unit
                    economics (92% gross margin!) and client management.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    Technical AI Fluency
                  </h4>
                  <p className="text-gray-600">
                    Move beyond casual ChatGPT use. You'll design agentic
                    workflows that actually do work.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-uts-teal" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    Community Impact
                  </h4>
                  <p className="text-gray-600">
                    Help real professionals become more productive. A tangible
                    narrative of service and leadership.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Quick Start */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Quick-Start Guide
            </h3>
            <ol className="space-y-4 relative border-l border-gray-200 ml-3">
              <li className="mb-4 ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-uts-teal rounded-full -left-3 ring-4 ring-white text-white text-xs font-bold">
                  1
                </span>
                <h4 className="font-bold text-gray-900">
                  Install Claude Desktop
                </h4>
                <p className="text-sm text-gray-600">
                  Download from claude.ai/download and sign in with Pro.
                </p>
              </li>
              <li className="mb-4 ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-uts-teal rounded-full -left-3 ring-4 ring-white text-white text-xs font-bold">
                  2
                </span>
                <h4 className="font-bold text-gray-900">Enable Cowork Mode</h4>
                <p className="text-sm text-gray-600">
                  Switch to the "Cowork" tab in the desktop app.
                </p>
              </li>
              <li className="mb-4 ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-uts-teal rounded-full -left-3 ring-4 ring-white text-white text-xs font-bold">
                  3
                </span>
                <h4 className="font-bold text-gray-900">
                  Create "My Life" Folder
                </h4>
                <p className="text-sm text-gray-600">
                  Add your schedule, extracurriculars, and to-do lists.
                </p>
              </li>
              <li className="mb-4 ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-uts-teal rounded-full -left-3 ring-4 ring-white text-white text-xs font-bold">
                  4
                </span>
                <h4 className="font-bold text-gray-900">Build 3 Workflows</h4>
                <p className="text-sm text-gray-600">
                  Experiment with a Daily To-Do Engine or Study Planner.
                </p>
              </li>
              <li className="ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-uts-teal rounded-full -left-3 ring-4 ring-white text-white text-xs font-bold">
                  5
                </span>
                <h4 className="font-bold text-gray-900">Get Ready to Teach</h4>
                <p className="text-sm text-gray-600">
                  Once you're an expert, you're ready for your first client.
                </p>
              </li>
            </ol>
            <div className="mt-8">
              <a href="mailto:pamela.wong@utschools.ca?subject=Student%20Get%20Started%20Guide%20Request" className="w-full bg-uts-teal hover:bg-uts-teal/90 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center">
                Details in the internal Get Started Guide <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>

        {/* Checklist */}
        <div className="bg-uts-navy rounded-xl p-8 text-white">
          <h3 className="text-xl font-bold mb-6">
            Your First Client Session Checklist
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-uts-teal mr-3 mt-0.5" />
              <span className="text-sm text-gray-300">
                Confirm meeting time & location (always in pairs!)
              </span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-uts-teal mr-3 mt-0.5" />
              <span className="text-sm text-gray-300">
                Ensure client has Claude Pro & Desktop App
              </span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-uts-teal mr-3 mt-0.5" />
              <span className="text-sm text-gray-300">
                Have the Intake Prompt ready
              </span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-uts-teal mr-3 mt-0.5" />
              <span className="text-sm text-gray-300">
                Bring laptop charger
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>);

}