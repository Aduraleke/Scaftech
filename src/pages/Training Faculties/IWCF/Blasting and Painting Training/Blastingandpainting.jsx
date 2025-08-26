
import InfoTwoToneIcon from "@mui/icons-material/InfoTwoTone";
import GraphicEqTwoToneIcon from "@mui/icons-material/GraphicEqTwoTone";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import AccreditationSlider from "../../../../components/AccreditationSlider";

const BlastingandPainting = () => {
  return (
    <div className="w-full bg-[#0a192f] text-white">
      {/* Hero Section */}
      <section className="relative w-full h-[400px]">
        <img
          className="w-full h-full object-cover opacity-70"
          src="/lifting-2.jpg"
          alt="Blasting and Painting Training"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5">
          <h1 className="text-3xl md:text-5xl font-bold tracking-wide">
            BLASTING & PAINTING TRAINING
          </h1>
          <p className="mt-4 text-base md:text-lg">
            <span className="text-[#07bc0c] font-bold">Slogan:</span> Trained
            Hands. Flawless Surfaces. Certified Excellence
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#07bc0c]">
          Course Contents Overview
        </h2>
        <p className="text-sm md:text-base text-gray-300 leading-relaxed mt-6 text-justify">
          Scaftech Engineering Services’ Blasting and Painting Training delivers
          the practical skills and safety knowledge required for surface
          preparation and industrial coating. From abrasive blasting techniques
          to paint mixing, application, and inspection, this comprehensive
          course ensures your team works to international surface protection
          standards safely, efficiently, and with lasting results, reflecting
          Scaftech Engineering Services’ commitment to quality and safety.
        </p>
      </section>

      {/* Pre-requisites */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-[#07bc0c]">
          <InfoTwoToneIcon /> Pre-requisites
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Basic understanding of site safety or industrial work</li>
          <li>Physically fit for field operations and PPE use</li>
          <li>
            Prior experience in painting or surface prep (advantageous but not
            required)
          </li>
          <li>
            Willingness to work in confined spaces or elevated areas (training
            provided by Scaftech)
          </li>
        </ul>
      </section>

      {/* Objectives */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-[#07bc0c]">
          <GraphicEqTwoToneIcon /> Course Objectives
        </h3>
        <p className="mt-4 text-gray-300">
          Participants in Scaftech’s Blasting and Painting Training will:
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Learn abrasive blasting techniques (dry, wet, mechanical)</li>
          <li>
            Understand paint types, surface preparation, and coating systems
          </li>
          <li>Conduct scaffold safety inspections and identify hazards</li>
          <li>Master spray, brush, and roller application methods</li>
          <li>Identify common coating defects and their solutions</li>
          <li>
            Comply with HSE practices, confined space, and respiratory
            protection
          </li>
          <li>
            Improve productivity while ensuring coating durability and surface
            integrity
          </li>
        </ul>
      </section>

      {/* Target Audience */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-[#07bc0c]">
          <AccountCircleTwoToneIcon /> Target Audience
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Industrial Painters & Blasters</li>
          <li>Surface Prep & Coating Technicians</li>
          <li>Oil & Gas Field Workers</li>
          <li>Marine and Shipyard Workers</li>
          <li>QA/QC Personnel in Coating Projects</li>
          <li>HSE Supervisors overseeing coating operations</li>
        </ul>
      </section>

      {/* Target Industry */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="text-xl md:text-2xl font-semibold text-[#07bc0c]">
          Target Industry
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Oil & Gas (Upstream/Downstream)</li>
          <li>Marine & Shipbuilding</li>
          <li>Construction & Steel Fabrication</li>
          <li>Manufacturing & Heavy Equipment</li>
          <li>Power Plants & Tank Farms</li>
          <li>Industrial Maintenance & Protective Coating Services</li>
        </ul>
      </section>

      {/* Courses */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="text-xl md:text-2xl font-semibold text-[#07bc0c]">
          Courses Offered
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Explosive & Blasting Agents</li>
          <li>Blasters & Painters Training</li>
          <li>Dipping & Coating Operations</li>
          <li>WSQ Blasting & Painting Course</li>
          <li>Offshore Blaster/Painter Training</li>
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

export default BlastingandPainting;
