
import GraphicEqTwoToneIcon from "@mui/icons-material/GraphicEqTwoTone";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import AccreditationSlider from "../../../components/AccreditationSlider";

const EquipmentOperation = () => {
  return (
    <div className="w-full bg-[#0a192f] text-white">
      {/* Hero Section */}
      <section className="relative w-full h-[400px]">
        <img
          className="w-full h-full object-cover opacity-70"
          src="/lift-materia-1.jpg"
          alt="Equipment Training"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5">
          <h1 className="text-2xl md:text-4xl font-bold tracking-wide">
            EQUIPMENT OPERATION & MAINTENANCE TRAINING
          </h1>
          <p className="mt-4 text-base md:text-lg">
            <span className="text-[#0a192f] font-semibold">Slogan:</span> Reduce
            Downtime & Increase Efficiency
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#07bc0c]">
          Course Contents Overview
        </h2>
        <p className="text-sm md:text-base text-gray-300 leading-relaxed mt-6 text-justify">
          Scaftech Engineering Services’ Equipment Operation and Maintenance
          Training equips participants with the technical know-how and hands-on
          skills to safely operate and maintain a wide range of industrial and
          site equipment. This program emphasizes efficient performance, daily
          inspections, troubleshooting, and preventive maintenance—minimizing
          downtime, avoiding costly repairs, and ensuring operational
          excellence.
        </p>
      </section>

      {/* Pre-requisites */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="text-xl md:text-2xl font-semibold text-[#07bc0c]">
          Pre-requisites
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Basic knowledge of site operations or equipment usage</li>
          <li>Physically fit and medically cleared for equipment work</li>
          <li>
            Prior safety induction is an advantage but not mandatory for
            Scaftech training
          </li>
        </ul>
      </section>

      {/* Objectives */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-[#07bc0c]">
          <GraphicEqTwoToneIcon /> Course Objectives
        </h3>
        <p className="mt-2 text-gray-300">
          Participants in Scaftech’s Equipment Operation & Maintenance Training
          will:
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Understand equipment functions and operational procedures</li>
          <li>Master routine checks, servicing, and preventive maintenance</li>
          <li>Identify early warning signs of equipment failure</li>
          <li>Adopt a safety-first mindset during equipment use</li>
          <li>Improve machine life cycle and workplace efficiency</li>
        </ul>
      </section>

      {/* Target Audience */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-[#07bc0c]">
          <AccountCircleTwoToneIcon /> Target Audience
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Equipment Operators & Technicians</li>
          <li>Maintenance Personnel</li>
          <li>Field Engineering & Supervisors</li>
          <li>Production & Operations Teams</li>
          <li>Technical Support Staff</li>
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
          <li>Manufacturing & Industrial Production</li>
          <li>Logistics & Material Handling</li>
          <li>Power Plants & Utilities</li>
          <li>Mining & Infrastructure Projects</li>
        </ul>
      </section>

      {/* Courses Offered */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="text-xl md:text-2xl font-semibold text-[#07bc0c]">
          Courses Offered
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Forklift Maintenance & Repair Training</li>
          <li>Mobile Cranes Maintenance & Repair Training</li>
          <li>Scissor Lifts Maintenance & Repair Training</li>
          <li>Trailers Maintenance & Repair Training</li>
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

export default EquipmentOperation;
