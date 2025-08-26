import GraphicEqTwoToneIcon from "@mui/icons-material/GraphicEqTwoTone";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import AccreditationSlider from "../../../components/AccreditationSlider";

const NDT = () => {
  return (
    <div className="w-full bg-[#0a192f] text-white">
      {/* Hero Section */}
      <section className="relative w-full h-[400px]">
        <img
          className="w-full h-full object-cover opacity-70"
          src="/ndt-4.jpg"
          alt="NDT Training"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5">
          <h1 className="text-2xl md:text-4xl font-bold tracking-wide">
            NDT Certification – Ensuring Material Integrity
          </h1>
          <p className="mt-4 text-base md:text-lg max-w-3xl">
            <span className="text-[#07bc0c] font-semibold">Slogan:</span> See
            What Others Can’t. Detect Without Damage
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#07bc0c]">
          Course Contents Overview
        </h2>
        <p className="text-sm md:text-base text-gray-300 leading-relaxed mt-6 text-justify">
          Scaftech Engineering Services’ NDT Training equips technicians with
          critical inspection techniques to evaluate the integrity of materials,
          components, or structures without causing damage. The course covers
          methods such as Ultrasonic Testing (UT), Radiographic Testing (RT),
          Penetrant Testing (PT), Magnetic Particle Testing (MT), and Visual
          Testing (VT), helping participants detect flaws, ensure quality, and
          comply with global safety and reliability standards.
        </p>
      </section>

      {/* Pre-requisites */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="text-xl md:text-2xl font-semibold text-[#07bc0c]">
          Pre-requisites
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Basic understanding of science or engineering principles</li>
          <li>Prior technical or field experience (preferred for advanced)</li>
          <li>Strong attention to detail and analytical mindset</li>
          <li>Medical clearance for visual acuity (VT & PT especially)</li>
          <li>PPE and safety compliance for hands-on sessions</li>
        </ul>
      </section>

      {/* Course Objectives */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-[#07bc0c]">
          <GraphicEqTwoToneIcon /> Course Objectives
        </h3>
        <p className="mt-2 text-gray-300">
          Participants in Scaftech’s NDT Training will:
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>
            Understand the principles & applications of NDT methods (VT, MT, PT,
            UT, RT)
          </li>
          <li>Detect surface & subsurface defects in materials and welds</li>
          <li>
            Gain hands-on practice in equipment setup, calibration, and testing
          </li>
          <li>Interpret results, generate reports, and comply with codes</li>
          <li>
            Meet competency requirements for certifications (ASNT, ISO, PCN)
          </li>
          <li>Promote zero-defect quality control in high-risk industries</li>
        </ul>
      </section>

      {/* Target Audience */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-[#07bc0c]">
          <AccountCircleTwoToneIcon /> Target Audience
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Aspiring NDT Technicians & Inspectors</li>
          <li>QA/QC Personnel</li>
          <li>Mechanical & Welding Engineers</li>
          <li>Maintenance & Inspection Teams</li>
          <li>HSE Officers in asset integrity roles</li>
          <li>Shutdown & Turnaround Personnel</li>
        </ul>
      </section>

      {/* Target Industry */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="text-xl md:text-2xl font-semibold text-[#07bc0c]">
          Target Industry
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Oil & Gas</li>
          <li>Power & Energy</li>
          <li>Aerospace & Aviation</li>
          <li>Manufacturing & Steel Fabrication</li>
          <li>Construction & Civil Engineering</li>
          <li>Marine, Shipbuilding & Offshore Structures</li>
          <li>Petrochemical & Refinery Operations</li>
        </ul>
      </section>

      {/* List of Courses */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="text-xl md:text-2xl font-semibold text-[#07bc0c]">
          Courses Offered Under NDT Training
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Radiographic Inspection Training</li>
          <li>Dye Penetrant Inspection Training</li>
          <li>Visual & Ultrasonic Testing Training</li>
          <li>Inspection Engineer Training</li>
        </ul>
      </section>

      {/* Accreditation */}
      <section className="bg-gray-900 py-12 mt-10">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-[#07bc0c]">
          ACCREDITATIONS & PROFESSIONAL MEMBERSHIPS
        </h3>
        <AccreditationSlider />
      </section>
    </div>
  );
};

export default NDT;
