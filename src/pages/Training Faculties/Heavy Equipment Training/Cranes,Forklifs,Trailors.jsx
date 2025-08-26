
import InfoTwoToneIcon from "@mui/icons-material/InfoTwoTone";
import GraphicEqTwoToneIcon from "@mui/icons-material/GraphicEqTwoTone";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import AccreditationSlider from "../../../components/AccreditationSlider";

const HeavyEquipment = () => {
  return (
    <div className="w-full bg-[#0a192f] text-white">
      {/* Hero Section */}
      <section className="relative w-full h-[400px]">
        <img
          className="w-full h-full object-cover opacity-70"
          src="/lift-2.jpg"
          alt="Heavy Equipment Training"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5">
          <h1 className="text-3xl md:text-5xl font-bold tracking-wide">
            HEAVY EQUIPMENT TRAINING
          </h1>
          <p className="mt-4 text-base md:text-lg">
            <span className="text-[#07bc0c] font-bold">Slogan:</span> Healthy
            Equipment Increases Safety
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#07bc0c]">
          Course Contents Overview
        </h2>
        <p className="text-sm md:text-base text-gray-300 leading-relaxed mt-6 text-justify">
          Scaftech Engineering Services’ Heavy Equipment Training equips
          operators with the technical skills, safety awareness, and operational
          discipline required to handle machinery such as excavators,
          bulldozers, graders, loaders, and backhoes. This comprehensive
          training blends hands-on field experience with operational theory,
          ensuring efficiency, precision, and safety on every job site.
        </p>
      </section>

      {/* Pre-requisites */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-[#07bc0c]">
          <InfoTwoToneIcon /> Pre-requisites
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Physically fit and medically cleared for machine operation</li>
          <li>Basic literacy and numeracy</li>
          <li>Prior construction or field exposure (recommended)</li>
          <li>Valid ID and PPE for practical sessions</li>
        </ul>
      </section>

      {/* Objectives */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-[#07bc0c]">
          <GraphicEqTwoToneIcon /> Course Objectives
        </h3>
        <p className="mt-4 text-gray-300">
          Participants in Scaftech’s Heavy Equipment Training will:
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>
            Understand types, functions, and safe operation of heavy equipment
          </li>
          <li>
            Perform pre-start inspections, routine maintenance, and
            troubleshooting
          </li>
          <li>
            Learn maneuvering techniques, load handling, and terrain assessment
          </li>
          <li>Apply site safety rules and hazard mitigation strategies</li>
          <li>
            Operate equipment in line with national and international safety
            standards
          </li>
          <li>Build a foundation for certification and career advancement</li>
        </ul>
      </section>

      {/* Target Audience */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-[#07bc0c]">
          <AccountCircleTwoToneIcon /> Target Audience
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Equipment Operators (New & Experienced)</li>
          <li>Site Workers & Machine Assistants</li>
          <li>Construction & Earthmoving Teams</li>
          <li>Utility & Roadwork Crews</li>
          <li>Mining & Quarry Workers</li>
          <li>HSE and Safety Compliance Teams</li>
        </ul>
      </section>

      {/* Target Industry */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="text-xl md:text-2xl font-semibold text-[#07bc0c]">
          Target Industry
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Oil & Gas (Onshore/Offshore)</li>
          <li>Mining & Quarrying</li>
          <li>Construction & Civil Engineering</li>
          <li>Manufacturing & Heavy Equipment</li>
          <li>Road & Infrastructure Projects</li>
          <li>Agriculture & Land Development</li>
          <li>Ports, Logistics & Equipment Leasing Firms</li>
        </ul>
      </section>

      {/* Courses */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="text-xl md:text-2xl font-semibold text-[#07bc0c]">
          Courses Offered
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Heavy Equipment Safety Training</li>
          <li>Forklift Operations Training</li>
          <li>Mobile Crane Operations Training</li>
          <li>Excavator Operations Training</li>
          <li>Scissor Lift Operations Training</li>
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

export default HeavyEquipment;
