export default function Refund() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 text-gray-800 dark:text-gray-200 bg-white dark:bg-[#0a0e1a] transition-colors duration-300">
      {/* Title */}
      <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
        Refund Policy
      </h1>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
        Effective Date: 1 November 2025
      </p>

      {/* Introduction */}
      <h2 className="text-2xl font-semibold mb-4">Overview</h2>
      <p className="text-justify mb-4 leading-relaxed">
        At <b>Codecraft Labs</b>, we aim to provide complete client satisfaction
        for every service we deliver. This Refund Policy outlines the conditions
        under which a refund may be granted for our digital products and
        services. Please read this policy carefully before making any purchase
        or project commitment.
      </p>

      {/* Section: Service Nature */}
      <h2 className="text-2xl font-semibold mb-4">
        Nature of Our Services
      </h2>
      <p className="text-justify mb-4 leading-relaxed">
        Codecraft Labs provides digital services such as web development,
        branding, UI/UX design, software solutions, and digital marketing. As
        our work involves custom project-based development and digital
        deliverables, refunds are handled differently than for physical goods.
      </p>

      {/* Section: Refund Eligibility */}
      <h2 className="text-2xl font-semibold mb-4">
        Refund Eligibility
      </h2>
      <ul className="list-disc ml-6 mb-6 space-y-2">
        <li>
          If a project is canceled <b>before any design or development work has started</b>,
          a full refund may be issued.
        </li>
        <li>
          If work has begun but is less than 30% completed, a <b>partial refund</b> may be
          provided based on project stage and resources used.
        </li>
        <li>
          Once the project has progressed beyond 50% completion, no refund will be issued.
        </li>
        <li>
          Refunds are not available for completed projects, delivered source codes, or live deployments.
        </li>
      </ul>

      {/* Section: Non-Refundable Services */}
      <h2 className="text-2xl font-semibold mb-4">
        Non-Refundable Services
      </h2>
      <p className="text-justify mb-4 leading-relaxed">
        The following services are considered <b>non-refundable</b>:
      </p>
      <ul className="list-disc ml-6 mb-6 space-y-2">
        <li>Domain name registration or renewal.</li>
        <li>Web hosting fees and third-party integrations.</li>
        <li>Consultation or strategy sessions once completed.</li>
        <li>Monthly maintenance, SEO, or subscription-based services.</li>
      </ul>

      {/* Section: Refund Request Process */}
      <h2 className="text-2xl font-semibold mb-4">
        Refund Request Process
      </h2>
      <p className="text-justify mb-4 leading-relaxed">
        To request a refund, clients must submit a written request to our
        support team within <b>7 days of payment</b>. The email should include:
      </p>
      <ul className="list-disc ml-6 mb-6 space-y-2">
        <li>Project name or invoice ID</li>
        <li>Payment reference number</li>
        <li>Reason for refund request</li>
      </ul>
      <p className="text-justify mb-6 leading-relaxed">
        Once your request is received, our finance department will review it
        within 5–7 business days. Approved refunds are processed to the same
        payment method originally used.
      </p>

      {/* Section: Late or Missing Refunds */}
      <h2 className="text-2xl font-semibold mb-4">
        Late or Missing Refunds
      </h2>
      <p className="text-justify mb-6 leading-relaxed">
        If you have not received your refund within 10 business days after
        approval, please contact your bank or payment provider first. If the
        issue persists, reach out to us at{" "}
        <b>team.codecraftlabs@gmail.com</b> for further assistance.
      </p>

      {/* Section: Refund for Digital Products */}
      <h2 className="text-2xl font-semibold mb-4">
        Refund for Digital Products
      </h2>
      <p className="text-justify mb-6 leading-relaxed">
        Refunds are not issued for downloadable digital items, templates, or
        software packages once they have been accessed or downloaded. Please
        review product descriptions carefully before purchase.
      </p>

      {/* Section: Policy Updates */}
      <h2 className="text-2xl font-semibold mb-4">
        Updates to This Policy
      </h2>
      <p className="text-justify mb-6 leading-relaxed">
        Codecraft Labs reserves the right to update or modify this Refund Policy
        at any time. Any changes will be published on this page with a revised
        effective date. Continued use of our services after changes indicates
        acceptance of the new terms.
      </p>

      {/* Section: Contact */}
      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
      <p className="text-justify mb-4 leading-relaxed">
        For any questions or refund-related inquiries, please contact us at:
      </p>
      <p className="leading-relaxed">
        📧 <b>team.codecraftlabs@gmail.com</b> <br />
        📞 <b>+880 1715-021121</b>
      </p>

    </div>
  );
}