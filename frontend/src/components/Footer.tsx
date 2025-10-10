import React from "react";

const Footer = () => {
  return (
    <footer
      style={{ backgroundColor: "#0B0B13", fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial', color: "#FFFFFF" }}
      className="py-12 mt-auto"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo / Company */}
          <div className="space-y-4 flex flex-col">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-md bg-white/10 flex items-center justify-center">
                {/* Simple SSA mark */}
                <span className="text-white font-semibold">SSA</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Student Software Association</h3>
                <p className="text-gray-300 text-sm">Vancouver chapter — building software together.</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 mt-2">
              <a
                href="https://github.com/Student-Software-Association"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-300 hover:text-white transition-colors duration-150"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
              </a>

              <a
                href="https://instagram.com/StudentSoftwareAssoc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-300 hover:text-white transition-colors duration-150"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 6.2A4.8 4.8 0 1016.8 13 4.81 4.81 0 0012 8.2zm6.4-2.9a1.2 1.2 0 11-1.2 1.2 1.2 1.2 0 011.2-1.2z" />
                </svg>
              </a>

              <a
                href="https://discord.gg/StudentSoftware"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discord"
                className="text-gray-300 hover:text-white transition-colors duration-150"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M20 3H4a1 1 0 00-1 1v13.5A2.5 2.5 0 005.5 20H18a2 2 0 002-2V4a1 1 0 00-1-1zM8.5 12.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm7 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
                </svg>
              </a>

              <a
                href="https://linkedin.com/company/student-software-association"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-300 hover:text-white transition-colors duration-150"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-md font-medium text-white mb-3">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-gray-300 hover:text-white transition-colors text-sm">About</a>
              </li>
              <li>
                <a href="/projects" className="text-gray-300 hover:text-white transition-colors text-sm">Projects</a>
              </li>
              <li>
                <a href="/events" className="text-gray-300 hover:text-white transition-colors text-sm">Events</a>
              </li>
              <li>
                <a href="/team" className="text-gray-300 hover:text-white transition-colors text-sm">Team</a>
              </li>
            </ul>
          </div>

          {/* For Students */}
          <div>
            <h4 className="text-md font-medium text-white mb-3">For Students</h4>
            <ul className="space-y-2">
              <li>
                <a href="/join" className="text-gray-300 hover:text-white transition-colors text-sm">Join SSA</a>
              </li>
              <li>
                <a href="/internships" className="text-gray-300 hover:text-white transition-colors text-sm">Internships</a>
              </li>
              <li>
                <a href="/mentorship" className="text-gray-300 hover:text-white transition-colors text-sm">Mentorship</a>
              </li>
              <li>
                <a href="/careers" className="text-gray-300 hover:text-white transition-colors text-sm">Careers</a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-md font-medium text-white mb-3">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="/blog" className="text-gray-300 hover:text-white transition-colors text-sm">Blog</a>
              </li>
              <li>
                <a href="/tutorials" className="text-gray-300 hover:text-white transition-colors text-sm">Tutorials</a>
              </li>
              <li>
                <a href="/docs" className="text-gray-300 hover:text-white transition-colors text-sm">Documentation</a>
              </li>
              <li>
                <a href="/library" className="text-gray-300 hover:text-white transition-colors text-sm">Library</a>
              </li>
            </ul>
          </div>

          {/* Data Control / Help */}
          <div>
            <h4 className="text-md font-medium text-white mb-3">Data Control</h4>
            <ul className="space-y-2">
              <li>
                <a href="/privacy" className="text-gray-300 hover:text-white transition-colors text-sm">Privacy Center</a>
              </li>
              <li>
                <a href="/data-request" className="text-gray-300 hover:text-white transition-colors text-sm">Data Requests</a>
              </li>
              <li>
                <a href="/cookies" className="text-gray-300 hover:text-white transition-colors text-sm">Cookie Settings</a>
              </li>
              <li>
                <a href="/export" className="text-gray-300 hover:text-white transition-colors text-sm">Export My Data</a>
              </li>

              <li className="mt-4 pt-4 border-t border-gray-700">
                <h4 className="text-md font-medium text-white mb-2">Help Center</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="/support" className="text-gray-300 hover:text-white transition-colors text-sm">Support</a>
                  </li>
                  <li>
                    <a href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">Contact Us</a>
                  </li>
                  <li>
                    <a href="/faq" className="text-gray-300 hover:text-white transition-colors text-sm">FAQ</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Student Software Association. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Designed with {'<3'} by SSA | Vancouver
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;