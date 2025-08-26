
import GraphicEqTwoToneIcon from "@mui/icons-material/GraphicEqTwoTone";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import AccreditationSlider from "../../../components/AccreditationSlider";

const Rigger = () => {
  return (
    <div className="w-full bg-[#0a192f] text-white">
      {/* Hero Section */}
      <section className="relative w-full h-[400px]">
        <img
          className="w-full h-full object-cover opacity-70"
          src="/lift-opreate-2.jpg"
          alt="Rigger Training"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5">
          <h1 className="text-2xl md:text-4xl font-bold tracking-wide">
            RIGGER TRAINING
          </h1>
          <p className="mt-4 text-base md:text-lg max-w-3xl">
            <span className="text-[#07bc0c] font-semibold">Slogan:</span>{" "}
            Trained to Deliver
          </p>
        </div>
      </section>

      {/* Course Overview */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#07bc0c]">
          Course Contents Overview
        </h2>
        <p className="text-sm md:text-base text-gray-300 leading-relaxed mt-6 text-justify">
          Scaftech Engineering Services’ Rigger Training equips participants
          with the essential skills and safety awareness required to prepare,
          secure, and move heavy loads using advanced lifting equipment. Through
          our expertly designed program, participants will master rigging
          techniques, equipment selection, load estimation, signaling, and
          coordination — all aligned with international lifting and safety
          standards.
        </p>
      </section>

      {/* Pre-requisites */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="text-xl md:text-2xl font-semibold text-[#07bc0c]">
          Pre-requisites
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Basic site safety awareness</li>
          <li>Medically fit for lifting and field operations</li>
          <li>Prior lifting experience is an advantage (not mandatory)</li>
          <li>PPE required for hands-on sessions</li>
        </ul>
      </section>

      {/* Course Objectives */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-[#07bc0c]">
          <GraphicEqTwoToneIcon /> Course Objectives
        </h3>
        <p className="mt-2 text-gray-300">
          Participants in Scaftech’s Rigger Training will:
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Understand rigging roles, responsibilities, and load dynamics</li>
          <li>Select and inspect slings, shackles, hooks, and rigging tools</li>
          <li>Estimate load weights and apply rigging methods safely</li>
          <li>Communicate using standard hand and radio signals</li>
          <li>Prevent accidents by identifying hazards and failure risks</li>
          <li>
            Align practices with lifting regulations & site protocols endorsed
            by Scaftech
          </li>
        </ul>
      </section>

      {/* Target Audience */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-[#07bc0c]">
          <AccountCircleTwoToneIcon /> Target Audience
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Riggers (Entry to Advanced)</li>
          <li>Lifting Crew Members</li>
          <li>Crane Operators & Signalers</li>
          <li>Site Engineers & Lifting Supervisors</li>
          <li>Warehouse & Industrial Handling Staff</li>
          <li>Safety and Compliance Officers</li>
        </ul>
      </section>

      {/* Target Industry */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="text-xl md:text-2xl font-semibold text-[#07bc0c]">
          Target Industry
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Oil & Gas (Onshore & Offshore)</li>
          <li>Shipyards & Maritime</li>
          <li>Construction & Heavy Engineering</li>
          <li>Manufacturing & Logistics</li>
          <li>Power Generation & Utilities</li>
          <li>Mining, Cement & Infrastructure Projects</li>
        </ul>
      </section>

      {/* Courses Offered */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="text-xl md:text-2xl font-semibold text-[#07bc0c]">
          Courses Offered Under Rigger Training
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Basic Rigger I Training</li>
          <li>Intermediate Rigger II Training</li>
          <li>Advanced Rigger Training</li>
          <li>OPITO Rigger Training</li>
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

export default Rigger;
