
import GraphicEqTwoToneIcon from "@mui/icons-material/GraphicEqTwoTone";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import AccreditationSlider from "../../../components/AccreditationSlider";

const SkilledOperation = () => {
  return (
    <div className="w-full bg-[#0a192f] text-white">
      {/* Hero Section */}
      <section className="relative w-full h-[400px]">
        <img
          className="w-full h-full object-cover opacity-70"
          src="/inspector-1.jpg"
          alt="Skilled Operation Training"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5">
          <h1 className="text-3xl md:text-4xl font-bold tracking-wide text-[#fff]">
            SKILLED OPERATION AND LEADERSHIP TRAINING
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-300">
            <span className="text-[#07bc0c] font-bold">Slogan:</span> Master the
            Task. Inspire the Team. Lead the Way with Scaftech Engineering
          </p>
        </div>
      </section>

      {/* Course Overview */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#07bc0c]">
          Course Contents Overview
        </h2>
        <p className="text-sm md:text-base text-gray-300 leading-relaxed mt-6 text-justify">
          Scaftech Engineering Services’ Skilled Operation and Leadership
          Training blends technical competence with leadership capability,
          transforming skilled workers into confident, safety-conscious, and
          performance-driven leaders. This comprehensive course equips
          participants with the tools to supervise teams, manage worksite
          dynamics, ensure compliance, and deliver operational excellence under
          pressure.
        </p>
      </section>

      {/* Pre-requisites */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="text-xl md:text-2xl font-semibold text-[#07bc0c]">
          Pre-requisites
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>
            Technical skill or hands-on experience in a trade or operational
            field
          </li>
          <li>Previous worksite exposure or field team involvement</li>
          <li>Basic communication and problem-solving abilities</li>
          <li>
            Openness to learning leadership principles and team management
          </li>
        </ul>
      </section>

      {/* Course Objectives */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-[#07bc0c]">
          <GraphicEqTwoToneIcon /> Course Objectives
        </h3>
        <p className="mt-2 text-gray-300">Participants will:</p>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Strengthen technical knowledge with supervisory skills</li>
          <li>
            Lead teams, communicate instructions, and resolve site-level issues
          </li>
          <li>Master job planning, resource allocation, and time management</li>
          <li>
            Apply leadership ethics, accountability, and safety-first culture
          </li>
          <li>Improve team morale, productivity, and incident prevention</li>
          <li>
            Serve as a bridge between frontline execution and management
            objectives
          </li>
        </ul>
      </section>

      {/* Target Audience */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-[#07bc0c]">
          <AccountCircleTwoToneIcon /> Target Audience
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Technicians, Operators & Field Workers</li>
          <li>Site Supervisors & Shift Leaders</li>
          <li>
            Welders, Scaffolders, Riggers & Drivers ready for leadership roles
          </li>
          <li>Workshop Coordinators & Equipment Handlers</li>
          <li>Safety Marshals & Operation Assistants</li>
          <li>Individuals being groomed for supervisory roles</li>
        </ul>
      </section>

      {/* Target Industry */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="text-xl md:text-2xl font-semibold text-[#07bc0c]">
          Target Industry
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Oil & Gas / Marine / Petrochemical</li>
          <li>Construction & Civil Engineering</li>
          <li>Power & Utilities</li>
          <li>Manufacturing & Production Plants</li>
          <li>Mining, Fabrication & Logistics</li>
          <li>Agro-Processing & Industrial Services</li>
        </ul>
      </section>

      {/* List of Courses */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="text-xl md:text-2xl font-semibold text-[#07bc0c]">
          List of Courses
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Strategic People Management & Team Leadership Programme</li>
          <li>Mastering People Management & Team Leadership Programme</li>
          <li>
            Leadership Skills & Team Development for Technical Professionals
          </li>
          <li>The Strategic Leader Training</li>
          <li>Advanced Leadership & Team Building Programme</li>
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

export default SkilledOperation;
