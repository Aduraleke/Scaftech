
import InfoTwoToneIcon from "@mui/icons-material/InfoTwoTone";
import GraphicEqTwoToneIcon from "@mui/icons-material/GraphicEqTwoTone";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import AccreditationSlider from "../../../components/AccreditationSlider";

const WorkatHeight = () => {
  return (
    <div className="w-full  bg-[#0a192f] text-white">
      {/* Hero Section */}
      <section className="relative w-full h-[400px]">
        <img
          className="w-full h-full object-cover opacity-70"
          src="/roof-1.jpg"
          alt="Work at Height Training"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5">
          <h1 className="text-2xl md:text-4xl font-bold tracking-wide max-w-4xl">
            WORK AT HEIGHT TRAINING (Scaffolding Inspector, Supervisors,
            Foremen)
          </h1>
          <p className="mt-4 text-base md:text-lg">
            <span className="text-[#07bc0c] font-bold">Slogan:</span> Go Higher
            with All Security
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#07bc0c]">
          Course Contents Overview
        </h2>
        <p className="text-sm md:text-base text-gray-300 leading-relaxed mt-6 text-justify">
          Scaftech Engineering Services’ Work at Height Training is designed to
          minimize risks and prevent falls when working in elevated
          environments. This comprehensive course provides practical skills on
          fall protection, hazard recognition, safe use of harnesses, ladders,
          scaffolds, and access equipment. It’s not just training; it’s about
          ensuring workers come home safe, reflecting Scaftech Engineering
          Services’ commitment to safety and excellence.
        </p>
      </section>

      {/* Pre-requisites */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-[#07bc0c]">
          <InfoTwoToneIcon /> Pre-requisites
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Basic fitness for physical tasks</li>
          <li>Prior HSE awareness is helpful but not mandatory</li>
          <li>PPE required for hands-on sessions with Scaftech trainers</li>
        </ul>
      </section>

      {/* Objectives */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-[#07bc0c]">
          <GraphicEqTwoToneIcon /> Course Objectives
        </h3>
        <p className="mt-4 text-gray-300">
          Participants in Scaftech Engineering Services’ Work at Height Training
          will:
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>
            Understand legal and safety requirements for working at heights
          </li>
          <li>Identify fall hazards and apply control measures</li>
          <li>
            Use fall arrest systems, harnesses, and anchor points correctly
          </li>
          <li>Perform risk assessments and rescue planning</li>
          <li>
            Build confidence with ladders, scaffolds, and elevated platforms
          </li>
        </ul>
      </section>

      {/* Target Audience */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-[#07bc0c]">
          <AccountCircleTwoToneIcon /> Target Audience
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Scaffolders & Riggers</li>
          <li>Construction & Maintenance Workers</li>
          <li>Safety Officers & Site Supervisors</li>
          <li>Tower & Telecom Technicians</li>
          <li>Engineers & Contractors</li>
        </ul>
      </section>

      {/* Target Industry */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="text-xl md:text-2xl font-semibold text-[#07bc0c]">
          Target Industry
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Oil & Gas</li>
          <li>Construction & Civil Engineering</li>
          <li>Manufacturing & Industrial Fabrication</li>
          <li>Telecom & Tower Installation</li>
          <li>Power & Energy (Transmission)</li>
          <li>Facility Maintenance & Cleaning Services</li>
          <li>Shipping & Marine</li>
        </ul>
      </section>

      {/* Courses */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="text-xl md:text-2xl font-semibold text-[#07bc0c]">
          Courses Offered
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Rope Access Training</li>
          <li>Access Equipment Safety Training</li>
          <li>PPE & Fall Protection Systems Training</li>
          <li>Hazard Control & Site Safety Training</li>
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

export default WorkatHeight;
