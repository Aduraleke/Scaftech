
import GraphicEqTwoToneIcon from "@mui/icons-material/GraphicEqTwoTone";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import AccreditationSlider from "../../../components/AccreditationSlider";

const MentalReadiness = () => {
  return (
    <div className="w-full bg-[#0a192f] text-white">
      {/* Hero Section */}
      <section className="relative w-full h-[400px]">
        <img
          className="w-full h-full object-cover opacity-70"
          src="/scaftech-hire.jpg"
          alt="Mental Readiness Training"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5">
          <h1 className="text-2xl md:text-4xl font-bold tracking-wide">
            MENTAL READINESS & ERGONOMICS TRAINING
          </h1>
          <p className="mt-4 text-base md:text-lg max-w-3xl">
            <span className="text-[#07bc0c] font-semibold">Slogan:</span> Hazard
            Awareness Ensures Safety
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#07bc0c]">
          Course Contents Overview
        </h2>
        <p className="text-sm md:text-base text-gray-300 leading-relaxed mt-6 text-justify">
          Scaftech Engineering Services’ Mental Readiness & Ergonomics Training
          equips workers with the psychological resilience and physical
          awareness needed to perform safely, efficiently, and sustainably. This
          expertly designed program combines mental alertness strategies, stress
          management, and ergonomic best practices to reduce fatigue, boost
          focus, and prevent musculoskeletal injuries and burnout, ensuring a
          healthier and more productive workforce.
        </p>
      </section>

      {/* Pre-requisites */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="text-xl md:text-2xl font-semibold text-[#07bc0c]">
          Pre-requisites
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Open to all employees across departments</li>
          <li>No prior technical or safety training required</li>
          <li>
            Willingness to engage in self-awareness and workplace safety
            practices
          </li>
          <li>Basic literacy and interest in health and performance</li>
        </ul>
      </section>

      {/* Objectives */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-[#07bc0c]">
          <GraphicEqTwoToneIcon /> Course Objectives
        </h3>
        <p className="mt-2 text-gray-300">
          Participants in Scaftech’s Mental Readiness & Ergonomics Training
          will:
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>
            Understand the role of mental readiness in accident prevention and
            job performance
          </li>
          <li>
            Learn techniques to manage stress, stay alert, and boost mental
            focus
          </li>
          <li>Identify and correct ergonomic hazards in the workplace</li>
          <li>
            Apply posture, lifting, and workstation setup techniques to reduce
            strain and fatigue
          </li>
          <li>
            Promote a culture of wellness, early symptom reporting, and
            self-care
          </li>
          <li>
            Support safe decision-making under pressure and in high-risk tasks
          </li>
        </ul>
      </section>

      {/* Target Audience */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-[#07bc0c]">
          <AccountCircleTwoToneIcon /> Target Audience
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Frontline Workers & Equipment Operators</li>
          <li>Office Staff & Admin Teams</li>
          <li>HSE Officers & Safety Coordinators</li>
          <li>Line Supervisors & Shift Leaders</li>
          <li>HR & Occupational Health Teams</li>
          <li>Remote or Isolated Workers</li>
        </ul>
      </section>

      {/* Target Industry */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="text-xl md:text-2xl font-semibold text-[#07bc0c]">
          Target Industry
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Oil & Gas / Manufacturing / Construction</li>
          <li>Logistics & Warehouse Operations</li>
          <li>Healthcare & Emergency Services</li>
          <li>Engineering & Power Utilities</li>
          <li>Government & NGOs</li>
          <li>Office & Administrative Workplaces</li>
        </ul>
      </section>

      {/* Courses */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="text-xl md:text-2xl font-semibold text-[#07bc0c]">
          Courses Offered
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Corporate Ergonomics Program</li>
          <li>Basic Workplace Ergonomics Training</li>
          <li>Participatory Ergonomics Team Training</li>
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

export default MentalReadiness;
