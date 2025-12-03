export default function Experience() {
  const experiences = [
    {
      title: "Manager, Customer Experience & Insights",
      company: "Liberty Utilities",
      location: "Oakville, ON",
      period: "2022 – 2023",
      highlights: [
        "Led AMI/Smart Metering and MDM adaptation supporting digital transformation across US utilities",
        "Designed Meter2Cash process with customer payment propensity and revenue collection use cases",
        "Optimized call center operations achieving 80% service level through data-driven forecasting",
        "Published first cross-state utility reliability indices (SAIFI, SAIDI) scorecard",
        "Contributed to $1M+ reduction in past due recovery through customer segmentation analysis"
      ],
      color: "blue"
    },
    {
      title: "T&D Consultant, Utilities and Renewables",
      company: "Tetra Tech Canada Inc.",
      location: "Mississauga, ON",
      period: "2020 – 2022",
      highlights: [
        "Designed and modeled transmission lines for Hydro One, Toronto Hydro, and Alectra utilities",
        "Created optimized PLS CADD simulation model for 360km 230kV Waasigan transmission line",
        "Provided engineering support for 20km 138kV Windrise Windfarm interconnection",
        "Managed projects as lead, bridging design engineering and project management teams",
        "Utilized ARC GIS for spatial analysis of utility assets and network design"
      ],
      color: "purple"
    },
    {
      title: "Manager, Energy Planning",
      company: "K Electric Ltd",
      location: "Karachi, Pakistan",
      period: "2018 – 2020",
      highlights: [
        "Prepared business cases for $250M+ grid and transmission projects",
        "Led 15-year energy demand forecasting achieving 6% increased sales and 10% load shedding reduction",
        "Spearheaded load balancing initiative across 9 clusters achieving 92% completion with 100% customer satisfaction",
        "Created dashboards for new connections monitoring and process optimization",
        "Enabled 12% year-over-year revenue growth through strategic energy consumption insights"
      ],
      color: "green"
    },
    {
      title: "Distribution Engineer",
      company: "Saudi Electricity Company",
      location: "Saudi Arabia",
      period: "2014 – 2018",
      highlights: [
        "Designed system improvement projects worth $65M+ for annual budget planning",
        "Prepared electrical designs for capital projects valued over $100M",
        "Led technical reviews and project management for distribution network upgrades",
        "Coordinated with customers and municipal agencies for project execution"
      ],
      color: "yellow"
    }
  ];

  const colorClasses: Record<string, string> = {
    blue: "border-blue-500/20 hover:border-blue-500/50",
    purple: "border-purple-500/20 hover:border-purple-500/50",
    green: "border-green-500/20 hover:border-green-500/50",
    yellow: "border-yellow-500/20 hover:border-yellow-500/50"
  };

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Professional <span className="gradient-text">Experience</span>
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`p-6 bg-gray-800/50 rounded-lg border ${colorClasses[exp.color]} transition-all hover:transform hover:scale-[1.02]`}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                  <p className="text-lg text-blue-400">{exp.company}</p>
                  <p className="text-gray-400">{exp.location}</p>
                </div>
                <span className="text-gray-400 mt-2 md:mt-0">{exp.period}</span>
              </div>
              <ul className="space-y-2 mt-4">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-1"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span className="text-gray-300">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12">Education</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-800/50 rounded-lg border border-blue-500/20 hover:border-blue-500/50 transition-all">
              <div className="text-blue-500 font-bold text-lg mb-2">Master of Management Analytics</div>
              <div className="text-gray-300 mb-1">Queen's University</div>
              <div className="text-gray-400 text-sm">Smith School of Business</div>
              <div className="text-gray-500 text-sm mt-2">2022</div>
            </div>
            <div className="p-6 bg-gray-800/50 rounded-lg border border-purple-500/20 hover:border-purple-500/50 transition-all">
              <div className="text-purple-500 font-bold text-lg mb-2">Master of Engineering</div>
              <div className="text-gray-300 mb-1">NED University</div>
              <div className="text-gray-400 text-sm">Electrical Engineering</div>
              <div className="text-gray-500 text-sm mt-2">2013</div>
            </div>
            <div className="p-6 bg-gray-800/50 rounded-lg border border-green-500/20 hover:border-green-500/50 transition-all">
              <div className="text-green-500 font-bold text-lg mb-2">Bachelor of Engineering</div>
              <div className="text-gray-300 mb-1">NED University</div>
              <div className="text-gray-400 text-sm">Electrical Engineering</div>
              <div className="text-gray-500 text-sm mt-2">2010</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
