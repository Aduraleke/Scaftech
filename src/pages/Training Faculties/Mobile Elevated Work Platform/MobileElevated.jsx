import GraphicEqTwoToneIcon from "@mui/icons-material/GraphicEqTwoTone";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import AccreditationSlider from "../../../components/AccreditationSlider";

const MobileElevated = () => {
  return (
    <div className="w-full bg-[#0a192f] text-white">
      {/* Hero Section */}
      <section className="relative w-full h-[400px]">
        <img
          className="w-full h-full object-cover opacity-70"
          src="/Scaftechfork-2.jpg"
          alt="MEWP Scissor Lift Training"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5">
          <h1 className="text-2xl md:text-4xl font-bold tracking-wide">
            MOBILE ELEVATED WORK PLATFORM (MEWP) <br /> SCISSOR LIFT TRAINING
          </h1>
          <p className="mt-4 text-base md:text-lg max-w-3xl">
            <span className="text-[#07bc0c] font-semibold">Slogan:</span> Rise
            Smartly with Confidence with Scaftech
          </p>
        </div>
      </section>

      {/* Course Overview */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#07bc0c]">
          Course Contents Overview
        </h2>
        <p className="text-sm md:text-base text-gray-300 leading-relaxed mt-6 text-justify">
          Scaftech Engineering Services’ MEWP Scissor Lift Training prepares
          operators to safely and effectively operate scissor lifts in elevated
          work environments. This comprehensive course covers equipment
          controls, stability principles, hazard recognition, fall prevention,
          and emergency procedures—ensuring operators meet site-specific and
          international safety standards upheld by Scaftech Engineering
          Services.
        </p>
      </section>

      {/* Pre-requisites */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="text-xl md:text-2xl font-semibold text-[#07bc0c]">
          Pre-requisites
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Physically and medically fit for work at height</li>
          <li>Basic literacy and communication skills</li>
          <li>
            Prior general safety or work-at-height awareness (recommended)
          </li>
          <li>
            PPE (safety harness, helmet, boots, etc.) must be available for
            practical sessions conducted by Scaftech Engineering Services
          </li>
        </ul>
      </section>

      {/* Course Objectives */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-[#07bc0c]">
          <GraphicEqTwoToneIcon /> Course Objectives
        </h3>
        <p className="mt-2 text-gray-300">
          Participants in Scaftech Engineering Services’ MEWP Scissor Lift
          Training will:
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>
            Understand the components, functions, and limitations of scissor
            lifts
          </li>
          <li>
            Learn how to conduct pre-use inspections and identify potential
            hazards with guidance from Scaftech Engineering Services
          </li>
          <li>
            Operate MEWPs with a focus on balance, load management, and safe
            maneuvering
          </li>
          <li>
            Apply safety procedures for elevation, descent, movement, and
            emergency lowering
          </li>
          <li>
            Comply with OSHA/ISO/BS EN safety standards and site-specific permit
            protocols
          </li>
        </ul>
      </section>

      {/* Target Audience */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-[#07bc0c]">
          <AccountCircleTwoToneIcon /> Target Audience
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Construction Workers & Site Technicians</li>
          <li>Warehouse & Maintenance Personnel</li>
          <li>Facility & Utility Contractors</li>
          <li>
            Operators involved in elevated tasks or equipment installation
          </li>
          <li>
            Safety Officers & Supervisors overseeing aerial lift operations
          </li>
        </ul>
      </section>

      {/* Target Industry */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="text-xl md:text-2xl font-semibold text-[#07bc0c]">
          Target Industry
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Construction & Civil Engineering</li>
          <li>Oil & Gas / Power / Telecom Installation</li>
          <li>Manufacturing / Warehousing / Maintenance</li>
          <li>Events & Stage Rigging Services</li>
          <li>Aviation Ground Operations</li>
          <li>Facility Management & Industrial Cleaning Services</li>
        </ul>
      </section>

      {/* Courses Offered */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="text-xl md:text-2xl font-semibold text-[#07bc0c]">
          Courses Offered
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Primelift Safety Resources Training</li>
          <li>MEWP Scissor Lift Training</li>
          <li>Manlift Training</li>
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

export default MobileElevated;
