export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          About <span className="gradient-text">Me</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a utility professional with 10+ years of experience in distribution system engineering,
              system planning, business operations, and project management with a strong focus on digital
              transformations and customer solutions.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I hold a Master of Management Analytics from Queen's University and a Master of Engineering
              in Electrical Engineering. My expertise lies in leveraging data-driven solutions to solve
              complex business problems in the power and utilities sector.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Dedicated to driving business growth and improvising unique customer experiences through
              digital technologies, advanced analytics, and innovative engineering solutions.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-gray-800/50 rounded-lg border border-blue-500/20 hover:border-blue-500/50 transition-all">
              <div className="text-4xl font-bold text-blue-500 mb-2">10+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div className="p-6 bg-gray-800/50 rounded-lg border border-purple-500/20 hover:border-purple-500/50 transition-all">
              <div className="text-4xl font-bold text-purple-500 mb-2">$250M+</div>
              <div className="text-gray-400">Projects Led</div>
            </div>
            <div className="p-6 bg-gray-800/50 rounded-lg border border-green-500/20 hover:border-green-500/50 transition-all">
              <div className="text-4xl font-bold text-green-500 mb-2">3</div>
              <div className="text-gray-400">Advanced Degrees</div>
            </div>
            <div className="p-6 bg-gray-800/50 rounded-lg border border-yellow-500/20 hover:border-yellow-500/50 transition-all">
              <div className="text-4xl font-bold text-yellow-500 mb-2">P.Eng</div>
              <div className="text-gray-400">Licensed Engineer</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
