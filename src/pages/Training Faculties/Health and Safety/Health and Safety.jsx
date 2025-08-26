
import InfoTwoToneIcon from "@mui/icons-material/InfoTwoTone";
import GraphicEqTwoToneIcon from "@mui/icons-material/GraphicEqTwoTone";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import AccreditationSlider from "../../../components/AccreditationSlider";

const HealthandSafety = () => {
  return (
    <div className="w-full bg-[#0a192f] text-white">
      {/* Hero Section */}
      <section className="relative w-full h-[400px]">
        <img
          className="w-full h-full object-cover opacity-70"
          src="/safetyman-1.jpg"
          alt="Health and Safety Training"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5">
          <h1 className="text-3xl md:text-5xl font-bold tracking-wide">
            HEALTH & SAFETY TRAINING
          </h1>
          <p className="mt-4 text-base md:text-lg">
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
          Scaftech Engineering Services’ Health and Safety Training empowers
          your workforce to identify, control, and prevent workplace hazards.
          This comprehensive program promotes a safety-first culture, ensures
          compliance with industry regulations, and reduces accidents, injuries,
          and downtime because safe workers mean productive workers,
          reflecting Scaftech Engineering Services’ commitment to workplace
          safety and excellence.
        </p>
      </section>

      {/* Pre-requisites */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-[#07bc0c]">
          <InfoTwoToneIcon /> Pre-requisites
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>No prior experience required</li>
          <li>Ideal for both new hires and experienced staff</li>
          <li>
            Basic literacy in English or local language for Scaftech’s training
            sessions
          </li>
        </ul>
      </section>

      {/* Objectives */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-[#07bc0c]">
          <GraphicEqTwoToneIcon /> Course Objectives
        </h3>
        <p className="mt-4 text-gray-300">
          Participants in Scaftech Engineering Services’ Health and Safety
          Training will:
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>
            Understand the core principles of occupational health and safety
          </li>
          <li>Recognize, report, and control hazards effectively</li>
          <li>Develop skills in risk assessment, incident response, and PPE</li>
          <li>Gain awareness of emergency procedures and safety protocols</li>
          <li>Promote a proactive safety mindset and legal compliance</li>
        </ul>
      </section>

      {/* Target Audience */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-[#07bc0c]">
          <AccountCircleTwoToneIcon /> Target Audience
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>All Employees (Admin to Field Level)</li>
          <li>Health & Safety Officers</li>
          <li>Operations Managers & Team Leads</li>
          <li>HR & Compliance Personnel</li>
          <li>Contractors and Subcontractors</li>
        </ul>
      </section>

      {/* Target Industry */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="text-xl md:text-2xl font-semibold text-[#07bc0c]">
          Target Industry
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Oil & Gas</li>
          <li>Construction</li>
          <li>Manufacturing</li>
          <li>Power & Energy</li>
          <li>Logistics & Warehousing</li>
          <li>Facility Management</li>
          <li>FMCG & Food Production</li>
        </ul>
      </section>

      {/* Courses */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="text-xl md:text-2xl font-semibold text-[#07bc0c]">
          Courses Offered
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Occupational Health & Industrial Hygiene Training</li>
          <li>Basic/Advanced Firefighting + Fire Warden/Marshal Training</li>
          <li>Train-the-Trainer Program</li>
          <li>General Industry Safety & Health Training</li>
          <li>Construction Safety & Health Program</li>
          <li>Fall Protection / Working at Height / Rescue Training</li>
          <li>Emergency Response / First Aid / AED / CPR Training</li>
          <li>Hazard Identification & Risk Assessment Training</li>
          <li>Accident/Incident Investigation Training</li>
          <li>Audit & Continuous Improvement Training</li>
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

export default HealthandSafety;
