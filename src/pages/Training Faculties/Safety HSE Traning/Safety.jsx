
import GraphicEqTwoToneIcon from "@mui/icons-material/GraphicEqTwoTone";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import AccreditationSlider from "../../../components/AccreditationSlider";

const Safety = () => {
  return (
    <div className="w-full bg-[#0a192f] text-white">
      {/* Hero Section */}
      <section className="relative w-full h-[400px]">
        <img
          className="w-full h-full object-cover opacity-70"
          src="/academy-1.jpg"
          alt="Safety Training"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5">
          <h1 className="text-3xl md:text-4xl font-bold tracking-wide">
            SAFETY (HSE) TRAINING
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-200">
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
          Scaftech Engineering Services’ Scaffold Training equips workers with
          the knowledge and practical skills to safely erect, inspect, and
          dismantle scaffolding in line with industry standards. This
          comprehensive program emphasizes stability, load capacity, fall
          protection, and hazard prevention—ensuring zero compromise on safety
          when working at height.
        </p>
      </section>

      {/* Pre-requisites */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="text-xl md:text-2xl font-semibold text-[#07bc0c]">
          Pre-requisites
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Basic physical fitness and safety awareness</li>
          <li>Prior construction or site experience (recommended)</li>
          <li>
            Must have or be provided with appropriate PPE for training sessions
          </li>
          <li>Medical clearance for height work (where applicable)</li>
        </ul>
      </section>

      {/* Objectives */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-[#07bc0c]">
          <GraphicEqTwoToneIcon /> Course Objectives
        </h3>
        <p className="mt-2 text-gray-300">
          Participants in Scaftech Engineering Services’ Scaffold Training will:
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Understand types of scaffolding systems and applications</li>
          <li>Learn safe assembly, modification, and dismantling procedures</li>
          <li>Conduct scaffold safety inspections and identify hazards</li>
          <li>
            Master fall prevention, load limits, and tagging protocols as taught
            by Scaftech
          </li>
          <li>Ensure compliance with local and international standards</li>
        </ul>
      </section>

      {/* Target Audience */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-[#07bc0c]">
          <AccountCircleTwoToneIcon /> Target Audience
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Scaffolders & Riggers</li>
          <li>Construction & Site Workers</li>
          <li>Safety Officers & Site Engineers</li>
          <li>Maintenance & Utility Crews</li>
          <li>Supervisors overseeing elevated work</li>
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
          <li>Manufacturing & Industrial Services</li>
          <li>Power & Energy Projects</li>
          <li>Shipyards & Marine Operations</li>
          <li>Facility Maintenance & Infrastructure Projects</li>
        </ul>
      </section>

      {/* List of Courses */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="text-xl md:text-2xl font-semibold text-[#07bc0c]">
          List of Courses
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Scaffold Erector Training</li>
          <li>Scaffold Inspector Training</li>
          <li>Scaffold Safety & Emergency Response Training</li>
          <li>Scaffold User & Builder Training</li>
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

export default Safety;
