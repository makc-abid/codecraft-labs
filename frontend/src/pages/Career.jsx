export default function Career() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 text-gray-800 dark:text-gray-200 bg-white dark:bg-[#0a0e1a] transition-colors duration-300">
      {/* Title Section */}
      <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-3 text-center">
        Join Our Team
      </h1>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
        At <b>Codecraft Labs</b>, we believe in creativity, collaboration, and
        continuous growth. We're always looking for passionate individuals to
        join our team of developers, designers, and digital innovators.
      </p>

      {/* Why Work With Us */}
      <h2 className="text-2xl font-semibold mb-4">Why Work With Us?</h2>
      <ul className="list-disc ml-6 mb-10 space-y-2">
        <li>Work with a young, energetic, and innovative tech team.</li>
        <li>Gain hands-on experience with real client projects worldwide.</li>
        <li>Flexible working hours and hybrid opportunities.</li>
        <li>Performance-based bonuses and career growth support.</li>
        <li>Fun, supportive, and learning-friendly environment.</li>
      </ul>

      {/* Open Positions */}
      <h2 className="text-2xl font-semibold mb-4">Current Open Positions</h2>
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Job Card 1 */}
        <div className="border border-gray-300 dark:border-gray-700 rounded-xl p-6 shadow hover:shadow-lg transition-all">
          <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">
            Frontend Developer (React.js)
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-3">
            We are looking for a skilled React.js developer to join our frontend
            team. You’ll be responsible for building dynamic interfaces and
            optimizing user experiences.
          </p>
          <ul className="list-disc ml-5 text-gray-500 dark:text-gray-400 mb-4">
            <li>1+ years of experience with React.js</li>
            <li>Basic knowledge of Tailwind CSS and REST APIs</li>
            <li>Understanding of Git & deployment tools</li>
          </ul>
          <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            📍 Location: Remote / Sylhet Office
          </p>
          <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4">
            💰 Salary: Negotiable
          </p>
          <a
            href="mailto:team.codecraftlabs@gmail.com?subject=Frontend Developer Application"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition-colors"
          >
            Apply Now
          </a>
        </div>

        {/* Job Card 2 */}
        <div className="border border-gray-300 dark:border-gray-700 rounded-xl p-6 shadow hover:shadow-lg transition-all">
          <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">
            UI/UX Designer
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-3">
            We are looking for a creative UI/UX Designer to craft intuitive,
            beautiful user interfaces for web and mobile applications.
          </p>
          <ul className="list-disc ml-5 text-gray-500 dark:text-gray-400 mb-4">
            <li>Proficiency in Figma or Adobe XD</li>
            <li>Strong understanding of color, typography, and layout</li>
            <li>Ability to convert wireframes into modern designs</li>
          </ul>
          <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            📍 Location: Sylhet / Remote
          </p>
          <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4">
            💰 Salary: Negotiable
          </p>
          <a
            href="mailto:team.codecraftlabs@gmail.com?subject=UIUX Designer Application"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition-colors"
          >
            Apply Now
          </a>
        </div>
      </div>

      {/* Internship Section */}
      <h2 className="text-2xl font-semibold mb-4">Internship Opportunities</h2>
      <p className="text-justify mb-6 leading-relaxed">
        Codecraft Labs offers internship programs for students and fresh
        graduates who are passionate about technology, creativity, and
        innovation. Our internship programs provide mentorship, training, and
        real-world project experience that help you grow as a professional.
      </p>
      <p className="mb-8">
        📅 <b>Duration:</b> 3 to 6 months <br />
        🕓 <b>Type:</b> Remote / In-office <br />
        🎓 <b>Open For:</b> Developers, Designers, and Digital Marketers
      </p>

      <a
        href="mailto:team.codecraftlabs@gmail.com?subject=Internship Application"
        className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
      >
        Apply for Internship
      </a>

      {/* Culture Section */}
      <h2 className="text-2xl font-semibold mt-16 mb-4">Life at Codecraft Labs</h2>
      <p className="text-justify mb-6 leading-relaxed">
        We believe great work comes from happy, motivated, and creative people.
        Our culture values collaboration, respect, and continuous learning.
        We celebrate achievements, encourage innovation, and make sure everyone
        feels like part of the family.
      </p>

      {/* Contact Section */}
      <h2 className="text-2xl font-semibold mb-4">Contact Our HR Team</h2>
      <p className="text-justify leading-relaxed mb-4">
        If you have questions about open positions, internship programs, or
        partnership opportunities, please reach out to our HR team.
      </p>
      <p className="leading-relaxed">
        📧 <b>team.codecraftlabs@gmail.com</b> <br />
        📞 <b>+880 1715-021121</b>
      </p>

    </div>
  );
}