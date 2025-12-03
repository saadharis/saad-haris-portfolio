export default function Skills() {
  const skillCategories = [
    {
      title: "Data & Analytics",
      icon: "📊",
      skills: [
        { name: "Python", level: 90 },
        { name: "R", level: 85 },
        { name: "SQL", level: 95 },
        { name: "Power BI", level: 90 },
        { name: "Alteryx", level: 80 },
        { name: "Tableau", level: 75 }
      ],
      color: "blue"
    },
    {
      title: "Cloud & DevOps",
      icon: "☁️",
      skills: [
        { name: "Microsoft Azure", level: 80 },
        { name: "Git", level: 85 },
        { name: "CI/CD", level: 75 }
      ],
      color: "purple"
    },
    {
      title: "Engineering Tools",
      icon: "⚡",
      skills: [
        { name: "AutoCAD", level: 85 },
        { name: "ARC GIS", level: 90 },
        { name: "MicroStation", level: 80 },
        { name: "PLS CADD", level: 85 },
        { name: "SAP CRM", level: 75 }
      ],
      color: "green"
    },
    {
      title: "Domain Expertise",
      icon: "🔌",
      skills: [
        { name: "Smart Grid & AMI", level: 95 },
        { name: "Distribution Systems", level: 95 },
        { name: "System Planning", level: 90 },
        { name: "Demand Forecasting", level: 90 },
        { name: "Reliability Analysis", level: 85 },
        { name: "Customer Analytics", level: 90 }
      ],
      color: "yellow"
    }
  ];

  const colorClasses: Record<string, { border: string; bg: string; text: string }> = {
    blue: { border: "border-blue-500/30", bg: "bg-blue-500", text: "text-blue-400" },
    purple: { border: "border-purple-500/30", bg: "bg-purple-500", text: "text-purple-400" },
    green: { border: "border-green-500/30", bg: "bg-green-500", text: "text-green-400" },
    yellow: { border: "border-yellow-500/30", bg: "bg-yellow-500", text: "text-yellow-400" }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Technical <span className="gradient-text">Skills</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`p-6 bg-gray-800/50 rounded-lg border ${colorClasses[category.color].border} hover:border-opacity-70 transition-all`}
            >
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-3">{category.icon}</span>
                <h3 className={`text-2xl font-bold ${colorClasses[category.color].text}`}>
                  {category.title}
                </h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className={`${colorClasses[category.color].bg} h-2 rounded-full transition-all duration-1000`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8">Professional Strengths</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-800/50 rounded-lg border border-blue-500/20 text-center hover:border-blue-500/50 transition-all">
              <div className="text-4xl mb-3">👥</div>
              <h4 className="text-xl font-semibold text-white mb-2">Leadership</h4>
              <p className="text-gray-400">High interpersonal and team working skills with ability to lead</p>
            </div>
            <div className="p-6 bg-gray-800/50 rounded-lg border border-purple-500/20 text-center hover:border-purple-500/50 transition-all">
              <div className="text-4xl mb-3">🎯</div>
              <h4 className="text-xl font-semibold text-white mb-2">Problem Solving</h4>
              <p className="text-gray-400">Self-starter with analytical mindset and problem-solving attitude</p>
            </div>
            <div className="p-6 bg-gray-800/50 rounded-lg border border-green-500/20 text-center hover:border-green-500/50 transition-all">
              <div className="text-4xl mb-3">🚀</div>
              <h4 className="text-xl font-semibold text-white mb-2">Adaptability</h4>
              <p className="text-gray-400">Highly adaptable with strong willingness to learn new skills</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
