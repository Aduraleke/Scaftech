
import GraphicEqTwoToneIcon from "@mui/icons-material/GraphicEqTwoTone";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import AccreditationSlider from "../../../components/AccreditationSlider";

const SystemAudit = () => {
  return (
    <div className="w-full  bg-[#0a192f] text-white">
      {/* Hero Section */}
      <section className="relative w-full h-[400px]">
        <img
          className="w-full h-full object-cover opacity-70"
          src="/checking-3.jpg"
          alt="System Audit Training"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5">
          <h1 className="text-2xl md:text-4xl font-bold tracking-wide">
            SYSTEM AUDIT & SKILLS GAP ANALYSIS TRAINING
          </h1>
          <p className="mt-4 text-base md:text-lg">
            <span className="text-[#0a192f] font-semibold">Slogan:</span>{" "}
            Empower Your Team & Workplace
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#07bc0c]">
          Course Contents Overview
        </h2>
        <p className="text-sm md:text-base text-gray-300 leading-relaxed mt-6 text-justify">
          Scaftech Engineering Services’ System Audit and Skills Gap Analysis
          Training equips professionals with the tools to assess organizational
          systems, audit processes, and evaluate workforce competencies. This
          comprehensive program focuses on identifying performance gaps,
          aligning skills with strategic goals, and driving continuous
          improvement through actionable insights, ensuring your organization
          thrives under Scaftech Engineering Services’ expertise.
        </p>
      </section>

      {/* Pre-requisites */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="text-xl md:text-2xl font-semibold text-[#07bc0c]">
          Pre-requisites
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Basic knowledge of organizational processes or HR systems</li>
          <li>
            Experience in operations, auditing, or workforce management
            (preferred)
          </li>
          <li>Strong analytical and problem-solving mindset</li>
          <li>
            Familiarity with internal controls and performance frameworks
            (optional)
          </li>
        </ul>
      </section>

      {/* Objectives */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-[#07bc0c]">
          <GraphicEqTwoToneIcon /> Course Objectives
        </h3>
        <p className="mt-2 text-gray-300">
          Participants in Scaftech’s System Audit & Skills Gap Analysis Training
          will:
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>
            Learn to design and conduct internal system audits aligned with
            industry standards
          </li>
          <li>
            Evaluate policies, procedures, and controls for effectiveness and
            compliance
          </li>
          <li>Identify skills gaps through data-driven assessment tools</li>
          <li>
            Develop actionable plans for training, upskilling, or process
            redesign
          </li>
          <li>Build dashboards for monitoring organizational capability</li>
          <li>
            Improve alignment between people, systems, and strategic goals
          </li>
        </ul>
      </section>

      {/* Target Audience */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-[#07bc0c]">
          <AccountCircleTwoToneIcon /> Target Audience
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>HR Managers & Learning & Development Officers</li>
          <li>Compliance & Internal Audit Teams</li>
          <li>HSE & Operations Managers</li>
          <li>Performance & Workforce Planners</li>
          <li>Project Managers & Organizational Developers</li>
          <li>Business Analysts & Quality Assurance Officers</li>
        </ul>
      </section>

      {/* Target Industry */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="text-xl md:text-2xl font-semibold text-[#07bc0c]">
          Target Industry
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Oil & Gas / Manufacturing / Power & Energy</li>
          <li>Government & Regulatory Agencies</li>
          <li>Engineering & Construction</li>
          <li>Logistics, Transportation & Utilities</li>
          <li>Finance, Banking & Corporate Enterprises</li>
          <li>NGOs & International Development Projects</li>
        </ul>
      </section>

      {/* Courses */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="text-xl md:text-2xl font-semibold text-[#07bc0c]">
          Courses Offered
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>ISO 45001 Internal Auditor Training</li>
          <li>Safety Management System Evaluation Training</li>
          <li>Certified Management Systems Auditor Training</li>
          <li>Internal Auditor Training</li>
        </ul>
      </section>

      {/* Accreditation */}
      <section className="bg-gray-900 py-12 mt-10">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-[#07bc0c]">
          ACCREDITATIONS & PROFESSIONAL MEMBERSHIPS
        </h3>
      <AccreditationSlider/>
      </section>
    </div>
  );
};

export default SystemAudit;
