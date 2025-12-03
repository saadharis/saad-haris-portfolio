export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl text-gray-300 mb-6">
              I'm always open to discussing new opportunities, innovative projects, or partnerships
              in the data and utilities space.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a
              href="mailto:saad.haris@hotmail.com"
              className="p-6 bg-gray-800/50 rounded-lg border border-blue-500/20 hover:border-blue-500/50 transition-all text-center group"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">📧</div>
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-400 text-sm break-all">saad.haris@hotmail.com</p>
            </a>

            <a
              href="https://ca.linkedin.com/in/saadharis/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-gray-800/50 rounded-lg border border-blue-500/20 hover:border-blue-500/50 transition-all text-center group"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">💼</div>
              <h3 className="text-lg font-semibold text-white mb-2">LinkedIn</h3>
              <p className="text-gray-400 text-sm">linkedin.com/in/saadharis</p>
            </a>

            <div className="p-6 bg-gray-800/50 rounded-lg border border-blue-500/20 hover:border-blue-500/50 transition-all text-center">
              <div className="text-4xl mb-3">📍</div>
              <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
              <p className="text-gray-400 text-sm">Brampton, Ontario</p>
              <p className="text-gray-500 text-xs mt-1">289-988-9550</p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://ca.linkedin.com/in/saadharis/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-medium transition-all transform hover:scale-105"
            >
              Let's Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400">
            <p className="mb-2">© {new Date().getFullYear()} Saad Haris. All rights reserved.</p>
            <p className="text-sm text-gray-500">
              Data & Analytics Engineer | P.Eng | M.Eng | MMA
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}
