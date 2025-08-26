
import InfoTwoToneIcon from "@mui/icons-material/InfoTwoTone";
import GraphicEqTwoToneIcon from "@mui/icons-material/GraphicEqTwoTone";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import AccreditationSlider from "../../../../components/AccreditationSlider";

const QAQCInspector = () => {
  return (
    <div className="w-full bg-[#0a192f] text-white">
      {/* Hero Section */}
      <section className="relative w-full h-[400px]">
        <img
          className="w-full h-full object-cover opacity-70"
          src="/inspect-3.jpg"
          alt="QAQC Inspector Training"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5">
          <h1 className="text-3xl md:text-5xl font-bold tracking-wide">
            QA/QC INSPECTOR TRAINING
          </h1>
          <p className="mt-4 text-base md:text-lg">
            <span className="text-[#07bc0c] font-bold">Slogan:</span> Safety is
            Non-Negotiable with Scaftech Engineering Services
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#07bc0c]">
          Course Contents Overview
        </h2>
        <p className="text-sm md:text-base text-gray-300 leading-relaxed mt-6 text-justify">
          Scaftech Engineering Services’ QA/QC Inspector Training prepares
          participants with the technical knowledge and practical tools to
          conduct quality inspections across engineering, manufacturing, and
          construction projects. From document control to visual, dimensional,
          and non-destructive testing, this program ensures trainees learn how
          to maintain standards, prevent defects, and ensure compliance with
          project specifications and international codes, upholding Scaftech
          Engineering Services’ commitment to quality excellence.
        </p>
      </section>

      {/* Pre-requisites */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-[#07bc0c]">
          <InfoTwoToneIcon /> Pre-requisites
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>
            Background in engineering, technical trades, or HSE (recommended)
          </li>
          <li>
            Basic understanding of construction, welding, or fabrication
            processes
          </li>
          <li>
            Familiarity with quality standards (ISO, ASME, AWS) is an advantage
          </li>
          <li>
            Good observation and reporting skills for Scaftech’s rigorous
            training
          </li>
        </ul>
      </section>

      {/* Objectives */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-[#07bc0c]">
          <GraphicEqTwoToneIcon /> Course Objectives
        </h3>
        <p className="mt-4 text-gray-300">
          Participants in Scaftech’s QA/QC Inspector Training will:
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>
            Understand QA/QC principles, standards, and inspection procedures
          </li>
          <li>
            Learn how to read and interpret engineering drawings, WPS, P&IDs
          </li>
          <li>
            Develop skills in risk assessment, incident response, and PPE usage
          </li>
          <li>
            Gain awareness of material traceability and quality documentation
          </li>
          <li>
            Document inspection reports, NCRs, ITPs, and test records accurately
          </li>
          <li>
            Promote zero-defect delivery and project integrity aligned with
            Scaftech
          </li>
        </ul>
      </section>

      {/* Target Audience */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-[#07bc0c]">
          <AccountCircleTwoToneIcon /> Target Audience
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Aspiring QA/QC Inspectors</li>
          <li>Engineers (Mechanical, Civil, Electrical)</li>
          <li>Welders & Fabricators seeking certification</li>
          <li>Site Supervisors & Construction Managers</li>
          <li>Maintenance & Shutdown Inspectors</li>
          <li>HSE & Compliance Personnel</li>
        </ul>
      </section>

      {/* Target Industry */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="text-xl md:text-2xl font-semibold text-[#07bc0c]">
          Target Industry
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Oil & Gas</li>
          <li>Construction & Civil Infrastructure</li>
          <li>Manufacturing & Industrial Fabrication</li>
          <li>Power Plants & Utilities</li>
          <li>Marine & Offshore Engineering</li>
          <li>EPC Projects & Quality-Critical Environments</li>
        </ul>
      </section>

      {/* Courses */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="text-xl md:text-2xl font-semibold text-[#07bc0c]">
          Courses Offered
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>QA/QC Inspector Training</li>
          <li>Ultrasonic Inspection Training</li>
          <li>Coating, Insulation & Fireproofing Inspector Training</li>
          <li>Welding QC & Inspection Workshop</li>
          <li>QA/QC Tools & SPC Fundamentals Training</li>
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

export default QAQCInspector;
