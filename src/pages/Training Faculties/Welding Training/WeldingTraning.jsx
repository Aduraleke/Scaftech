
import GraphicEqTwoToneIcon from "@mui/icons-material/GraphicEqTwoTone";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import AccreditationSlider from "../../../components/AccreditationSlider";

const WeldingTraining = () => {
  return (
    <div className="w-full bg-[#0a192f] text-white">
      {/* Hero Section */}
      <section className="relative w-full h-[400px]">
        <img
          className="w-full h-full object-cover opacity-70"
          src="/pipelin-1.jpg"
          alt="Welding Training"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5">
          <h1 className="text-2xl md:text-4xl font-bold tracking-wide">
            WELDING TRAINING
          </h1>
          <p className="mt-4 text-base md:text-lg max-w-3xl">
            <span className="text-[#0a192f] font-bold">Slogan:</span> Turn Heat
            into Craft. Turn Skill into Career
          </p>
        </div>
      </section>

      {/* Course Overview */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#07bc0c]">
          Course Contents Overview
        </h2>
        <p className="text-sm md:text-base text-gray-300 leading-relaxed mt-6 text-justify">
          Scaftech Engineering Services’ Fabrication/Welding Training offers
          hands-on, technical instruction on metal joining, cutting, shaping,
          and structural fabrication using industry-standard equipment and
          techniques. From blueprint reading to safety protocols, this
          comprehensive course builds skilled, job-ready welders and fabricators
          with strong safety and precision awareness, ensuring alignment with
          Scaftech Engineering Services’ commitment to excellence and safety.
        </p>
      </section>

      {/* Pre-requisites */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="text-xl md:text-2xl font-semibold text-[#07bc0c]">
          Pre-requisites
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Basic knowledge of technical drawing is a plus</li>
          <li>Must be physically fit for workshop activities</li>
          <li>
            Previous shop-floor or metalwork exposure is helpful but not
            required
          </li>
          <li>
            Safety gear (PPE) required for hands-on sessions conducted by
            Scaftech Engineering Services
          </li>
        </ul>
      </section>

      {/* Course Objectives */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-[#07bc0c]">
          <GraphicEqTwoToneIcon /> Course Objectives
        </h3>
        <p className="mt-2 text-gray-300">
          Participants in Scaftech Engineering Services’ Fabrication/Welding
          Training will:
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>
            Understand different welding techniques (SMAW, MIG, TIG, etc.)
          </li>
          <li>
            Learn metal cutting, joining, and forming processes with guidance
            from Scaftech Engineering Services
          </li>
          <li>Interpret fabrication drawings and symbols</li>
          <li>
            Master safety procedures and proper PPE use as taught by Scaftech
            Engineering Services
          </li>
          <li>Gain hands-on experience with welding tools and equipment</li>
          <li>
            Prepare for certification and real-world applications aligned with
            Scaftech Engineering Services’ standards
          </li>
        </ul>
      </section>

      {/* Target Audience */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-[#07bc0c]">
          <AccountCircleTwoToneIcon /> Target Audience
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Aspiring Welders & Fabricators</li>
          <li>Technical Students & Trade Apprentices</li>
          <li>Maintenance & Workshop Technicians</li>
          <li>Construction Site Personnel</li>
          <li>Oil & Gas Field Workers</li>
          <li>Skilled Trades Professionals seeking upskilling</li>
        </ul>
      </section>

      {/* Target Industry */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="text-xl md:text-2xl font-semibold text-[#07bc0c]">
          Target Industry
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Oil & Gas</li>
          <li>Construction & Steel Fabrication</li>
          <li>Manufacturing & Industrial Production</li>
          <li>Shipbuilding & Marine Engineering</li>
          <li>Automotive & Heavy Equipment</li>
          <li>Power Plants & Energy Infrastructure</li>
        </ul>
      </section>

      {/* Courses Offered */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="text-xl md:text-2xl font-semibold text-[#07bc0c]">
          Courses Offered
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Welding & Cutting General Industry</li>
          <li>Welding Safety & Hot Work Training</li>
          <li>Shielded Metal Arc Welding (SMAW) Training</li>
          <li>Pipe & Structural Welding Training</li>
          <li>Weld Inspection & Quality Control Training</li>
          <li>Weld Repair & Maintenance Training</li>
          <li>Fabrication Skill Workshop Training</li>
          <li>Gas Metal/Flux-Cored Arc Welding (GMAW/FCAW) Training</li>
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

export default WeldingTraining;
