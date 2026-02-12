import React from 'react';
export function Footer() {
  return (
    <footer className="bg-uts-navy text-white py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4 tracking-wide">
              UTS STUDENT AI CONCIERGE
            </h3>
            <p className="text-gray-400 text-sm max-w-xs">
              A UTSPA-facilitated pilot program empowering students and
              professionals with the next generation of AI tools.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-uts-teal">Program</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href="#parents"
                  className="hover:text-white transition-colors">

                  For Parents
                </a>
              </li>
              <li>
                <a
                  href="#professionals"
                  className="hover:text-white transition-colors">

                  For Professionals
                </a>
              </li>
              <li>
                <a
                  href="#students"
                  className="hover:text-white transition-colors">

                  For Students
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="hover:text-white transition-colors">

                  How It Works
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-uts-teal">Contact</h4>
            <p className="text-sm text-gray-400 mb-2">
              For general inquiries, please contact your Grade Representative.
            </p>
            <a
              href="mailto:pamela.wong@utschools.ca"
              className="text-sm text-white hover:text-uts-teal transition-colors">

              pamela.wong@utschools.ca
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-xs text-gray-500">
          <p className="mb-2">
            This program is a pilot initiative. UTSPA assumes no liability for
            the services provided by students.
          </p>
          <p>
            &copy; {new Date().getFullYear()} UTS Parents Association. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>);

}