
import GraphicEqTwoToneIcon from "@mui/icons-material/GraphicEqTwoTone";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import AccreditationSlider from "../../../components/AccreditationSlider";

const ConfinedSpace = () => {
  return (
    <div className="w-full bg-[#0a192f] text-white">
      {/* Hero Section */}
      <section className="relative w-full h-[400px]">
        <img
          className="w-full h-full object-cover opacity-70"
          src="/hydro-2.jpg"
          alt="Confined Space Training"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5">
          <h1 className="text-3xl md:text-4xl font-bold tracking-wide">
            CONFINED SPACE AND WAH TRAINING
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-200">
            <span className="text-[#0a192f] font-bold">Slogan:</span> Confined
            Space. Unlimited Risks. Certified Training is the Key
          </p>
        </div>
      </section>

      {/* Course Overview */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#07bc0c]">
          Course Contents Overview
        </h2>
        <p className="text-sm md:text-base text-gray-300 leading-relaxed mt-6 text-justify">
          Scaftech Engineering Services’ Confined Space Training provides
          critical knowledge and hands-on skills for safely entering, working,
          and exiting confined spaces. This expertly designed course addresses
          hazard recognition, atmospheric testing, permit-to-work systems,
          emergency protocols, and proper use of PPE and rescue equipment,
          ensuring compliance, competence, and confidence in high-risk
          environments.
        </p>
      </section>

      {/* Pre-requisites */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="text-xl md:text-2xl font-semibold text-[#07bc0c]">
          Pre-requisites
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Must be physically and medically fit for confined space entry</li>
          <li>Basic literacy and ability to follow instructions</li>
          <li>Prior general safety or HSE induction (recommended)</li>
          <li>PPE and willingness to participate in practical sessions</li>
        </ul>
      </section>

      {/* Course Objectives */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-[#07bc0c]">
          <GraphicEqTwoToneIcon /> Course Objectives
        </h3>
        <p className="mt-2 text-gray-300">
          Participants in Scaftech Engineering Services’ Confined Space Training
          will:
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>
            Understand legal definitions, risks, and duties for confined space
            entry
          </li>
          <li>
            Identify hazards such as toxic gases, engulfment, or oxygen
            deficiency
          </li>
          <li>
            Follow proper entry and exit procedures, including permit systems
          </li>
          <li>
            Safely use gas detectors, harnesses, ventilation, and retrieval
            systems
          </li>
          <li>
            Respond effectively to emergencies and practice rescue procedures
          </li>
          <li>
            Promote a zero-incident culture through planning and hazard control
          </li>
        </ul>
      </section>

      {/* Target Audience */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-[#07bc0c]">
          <AccountCircleTwoToneIcon /> Target Audience
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Maintenance & Shutdown Crews</li>
          <li>Welders, Fitters & Cleaners</li>
          <li>Tank & Vessel Entry Teams</li>
          <li>Utility & Sewer Line Workers</li>
          <li>Safety Officers, HSE Coordinators & Supervisors</li>
          <li>Emergency Response and Rescue Personnel</li>
        </ul>
      </section>

      {/* Target Industry */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="text-xl md:text-2xl font-semibold text-[#07bc0c]">
          Target Industry
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Oil & Gas / Petrochemical / Refining</li>
          <li>Construction & Civil Engineering</li>
          <li>Power Generation & Energy</li>
          <li>Marine / Offshore / Shipyards</li>
          <li>Water Treatment & Waste Management</li>
          <li>Manufacturing / Food Processing</li>
        </ul>
      </section>

      {/* List of Courses */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="text-xl md:text-2xl font-semibold text-[#07bc0c]">
          List of Courses
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Confined Space Entrant & Attendant Training</li>
          <li>Confined Space Entry Training</li>
          <li>Confined Space Safety Emergency & Rescue</li>
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

export default ConfinedSpace;
