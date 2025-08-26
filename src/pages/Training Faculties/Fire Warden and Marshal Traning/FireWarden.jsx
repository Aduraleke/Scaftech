
import GraphicEqTwoToneIcon from "@mui/icons-material/GraphicEqTwoTone";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import AccreditationSlider from "../../../components/AccreditationSlider";

const FireWarden = () => {
  return (
    <div className="w-full bg-[#0a192f] text-white">
      {/* Hero Section */}
      <section className="relative w-full h-[400px]">
        <img
          className="w-full h-full object-cover opacity-70"
          src="/Permit-work-img.jpg"
          alt="Permit-to-Work Training"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5">
          <h1 className="text-2xl md:text-4xl font-bold tracking-wide">
            PERMIT-TO-WORK SYSTEM TRAINING
          </h1>
          <p className="mt-4 text-base md:text-lg max-w-3xl">
            <span className="text-[#07bc0c] font-semibold">Slogan:</span> Right
            procedures deliver safety
          </p>
        </div>
      </section>

      {/* Course Overview */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#07bc0c]">
          Course Contents Overview
        </h2>
        <p className="text-sm md:text-base text-gray-300 leading-relaxed mt-6 text-justify">
          The Permit-to-Work (PTW) System, offered by Scaftech Engineering
          Services, is a vital safety mechanism designed to ensure high-risk
          tasks are performed safely and systematically. This training equips
          participants with the knowledge and skills to initiate, manage, and
          audit PTW systems effectively across various industries. Key focus
          areas include understanding the permit lifecycle, defining roles and
          responsibilities, and preventing unauthorized or unsafe work
          practices.
        </p>
      </section>

      {/* Pre-requisites */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="text-xl md:text-2xl font-semibold text-[#07bc0c]">
          Pre-requisites
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Basic understanding of workplace safety practices</li>
          <li>Prior HSE induction recommended (not mandatory)</li>
          <li>Familiarity with operational workflows is advantageous</li>
        </ul>
      </section>

      {/* Course Objectives */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-[#07bc0c]">
          <GraphicEqTwoToneIcon /> Course Objectives
        </h3>
        <p className="mt-2 text-gray-300">
          By the end of the training, participants will:
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Understand the purpose and structure of a PTW system</li>
          <li>Identify high-risk work scenarios requiring a permit</li>
          <li>Initiate, issue, monitor, and close permits effectively</li>
          <li>Recognize the roles and responsibilities of all permit users</li>
          <li>
            Apply PTW best practices to minimize risks and enhance compliance
          </li>
        </ul>
      </section>

      {/* Target Audience */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-[#07bc0c]">
          <AccountCircleTwoToneIcon /> Target Audience
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Site Supervisors & Safety Officers</li>
          <li>Maintenance Technicians & Engineers</li>
          <li>Contractors & Subcontractors</li>
          <li>Operations & Facility Managers</li>
          <li>Project Coordinators & Field Leaders</li>
        </ul>
      </section>

      {/* Target Industry */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="text-xl md:text-2xl font-semibold text-[#07bc0c]">
          Target Industry
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Construction & Civil Engineering</li>
          <li>Oil & Gas</li>
          <li>Power & Utilities</li>
          <li>Marine & Offshore Operations</li>
          <li>Mining & Industrial Services</li>
        </ul>
      </section>

      {/* Courses Offered */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="text-xl md:text-2xl font-semibold text-[#07bc0c]">
          Courses Offered Under PTW Training
        </h3>
        <ul className="list-decimal list-inside mt-4 space-y-2 text-gray-300">
          <li>
            Hot Work Permit Training – Safe practices for welding & cutting
          </li>
          <li>
            Confined Space Entry Permit – Procedures for safe confined space
            work
          </li>
          <li>Emergency & Rescue Procedures – Response & rescue during PTW</li>
          <li>Electrical Work Permit – Safety for electrical installations</li>
          <li>Working at Height Permit – Elevated task safety measures</li>
          <li>Excavation & Trenching Permit – Safe digging operations</li>
          <li>Permit Issuer / Receiver Training – Roles & responsibilities</li>
          <li>Isolation & Lockout/Tagout (LOTO) – Energy source isolation</li>
          <li>Permit-to-Work System Audit – Ensuring PTW compliance</li>
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

export default FireWarden;
