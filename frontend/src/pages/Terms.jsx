export default function Terms() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 text-gray-800 dark:text-gray-200 bg-white dark:bg-[#0a0e1a] transition-colors duration-300">
      {/* Title */}
      <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
        Terms & Conditions
      </h1>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
        Effective Date: 1 November 2025
      </p>

      {/* Introduction */}
      <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
      <p className="text-justify mb-4 leading-relaxed">
        Welcome to <b>Codecraft Labs</b>. By accessing or using our website, you
        agree to comply with and be bound by these Terms and Conditions. Please
        read them carefully before using our services. If you do not agree to
        these terms, please refrain from using our website.
      </p>

      {/* Section: About Us */}
      <h2 className="text-2xl font-semibold mb-4">About Codecraft Labs</h2>
      <p className="text-justify mb-4 leading-relaxed">
        Codecraft Labs is a web development, design, and digital solutions
        agency based in Bangladesh and the United Kingdom. We provide
        professional IT services, including website design, software
        development, branding, and digital marketing.
      </p>

      {/* Section: Use of Our Website */}
      <h2 className="text-2xl font-semibold mb-4">Use of Our Website</h2>
      <ul className="list-disc ml-6 mb-6 space-y-2">
        <li>You must be at least 13 years old to use our services.</li>
        <li>
          You agree not to use our website for any unlawful purpose or in a way
          that may damage, disable, or overburden our servers.
        </li>
        <li>
          You may not attempt to gain unauthorized access to our systems or
          other users’ data.
        </li>
        <li>
          All information you submit must be accurate, current, and complete.
        </li>
      </ul>

      {/* Section: Intellectual Property */}
      <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
      <p className="text-justify mb-4 leading-relaxed">
        All content on this website, including text, graphics, logos, designs,
        and software, is the intellectual property of <b>Codecraft Labs</b>.
        Unauthorized use, reproduction, or distribution of any materials from
        this site is strictly prohibited without written permission.
      </p>

      {/* Section: Service Terms */}
      <h2 className="text-2xl font-semibold mb-4">Service Terms</h2>
      <ul className="list-disc ml-6 mb-6 space-y-2">
        <li>
          All project timelines and deliverables are discussed and agreed upon
          before project initiation.
        </li>
        <li>
          Payment terms are defined in individual contracts or invoices.
        </li>
        <li>
          Codecraft Labs reserves the right to modify or discontinue any service
          at its discretion, with prior notice to the client.
        </li>
      </ul>

      {/* Section: Payment & Refunds */}
      <h2 className="text-2xl font-semibold mb-4">Payment & Refund Policy</h2>
      <p className="text-justify mb-4 leading-relaxed">
        Payment must be made as per the agreed contract terms. Once a project
        begins, refunds are not typically issued unless required by law or in
        exceptional cases (e.g., project cancellation before any work starts).
        Refund requests must be made in writing to our official email.
      </p>

      {/* Section: Limitation of Liability */}
      <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
      <p className="text-justify mb-4 leading-relaxed">
        Codecraft Labs is not responsible for any direct, indirect, incidental,
        or consequential damages arising from the use or inability to use our
        website or services. We strive for reliability but cannot guarantee that
        our website will always be error-free or uninterrupted.
      </p>

      {/* Section: Third-Party Links */}
      <h2 className="text-2xl font-semibold mb-4">Third-Party Links</h2>
      <p className="text-justify mb-4 leading-relaxed">
        Our website may contain links to third-party websites. We do not control
        or endorse those sites and are not responsible for their content,
        privacy policies, or practices. Visiting any third-party site is at your
        own risk.
      </p>

      {/* Section: Privacy */}
      <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
      <p className="text-justify mb-4 leading-relaxed">
        Your use of our website is also governed by our{" "}
        <a
          href="/privacy"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          Privacy Policy
        </a>
        . Please review it to understand how we handle your personal
        information.
      </p>

      {/* Section: Termination */}
      <h2 className="text-2xl font-semibold mb-4">Termination of Access</h2>
      <p className="text-justify mb-4 leading-relaxed">
        We reserve the right to suspend or terminate access to our website at
        any time, without prior notice, for violations of these Terms or for
        maintenance purposes.
      </p>

      {/* Section: Changes */}
      <h2 className="text-2xl font-semibold mb-4">Changes to These Terms</h2>
      <p className="text-justify mb-4 leading-relaxed">
        Codecraft Labs reserves the right to update or modify these Terms and
        Conditions at any time. Any changes will be posted on this page with a
        revised effective date. Your continued use of our website after changes
        indicates acceptance of the updated Terms.
      </p>

      {/* Section: Governing Law */}
      <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
      <p className="text-justify mb-4 leading-relaxed">
        These Terms & Conditions are governed by the laws of Bangladesh and the
        United Kingdom, depending on your region of service. Any disputes will
        be handled in the courts of Sylhet (Bangladesh) or London (UK).
      </p>

      {/* Section: Contact */}
      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
      <p className="text-justify mb-4 leading-relaxed">
        For any questions about these Terms & Conditions, please contact us at:
      </p>
      <p className="leading-relaxed">
        📧 <b>team.codecraftlabs@gmail.com</b> <br />
        📞 <b>+880 1715-021121</b>
      </p>

    </div>
  );
}