
import InfoTwoToneIcon from "@mui/icons-material/InfoTwoTone";
import GraphicEqTwoToneIcon from "@mui/icons-material/GraphicEqTwoTone";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import AccreditationSlider from "../../../components/AccreditationSlider";

const Customized = () => {
  return (
    <div className="w-full bg-[#0a192f] text-white">
      {/* Hero Section */}
      <section className="relative w-full h-[400px]">
        <img
          className="w-full h-full object-cover opacity-70"
          src="/hydro-4.jpg"
          alt="Customized Training"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5">
          <h1 className="text-3xl md:text-4xl font-bold tracking-wide text-[#fff]">
            CUSTOMIZED TRAINING (According to Client Specification)
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-300">
            Tailored Training Solutions. Customized Programs for Your Needs.
          </p>
        </div>
      </section>

      {/* Course Overview */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#07bc0c]">
          Course Contents Overview
        </h2>
        <p className="text-sm md:text-base text-gray-300 leading-relaxed mt-6 text-justify">
          Scaftech Engineering Services’ Customized Training is a fully
          adaptable program designed to meet specific client goals, worksite
          conditions, compliance standards, and workforce gaps. From safety and
          technical skills to leadership and compliance, this solution-based
          training is built around your company’s real needs, ensuring maximum
          relevance, engagement, and ROI.
        </p>
      </section>

      {/* Pre-requisites */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-[#07bc0c]">
          <InfoTwoToneIcon /> Pre-requisites
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>
            Clearly defined training objectives and outcomes (from client)
          </li>
          <li>
            Willingness to collaborate on content scoping and customization
          </li>
          <li>
            Access to existing operational procedures, job roles, or compliance
            gaps
          </li>
          <li>Target workforce or department ready for engagement</li>
        </ul>
      </section>

      {/* Course Objectives */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-[#07bc0c]">
          <GraphicEqTwoToneIcon /> Course Objectives
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>
            Address site-specific operational, safety, or performance challenges
          </li>
          <li>
            Upskill employees based on current industry standards or regulations
          </li>
          <li>Bridge identified knowledge or competency gaps</li>
          <li>
            Improve job-specific execution, safety, and team communication
          </li>
          <li>
            Provide measurable impact in productivity, safety, or compliance
          </li>
        </ul>
      </section>

      {/* Target Audience */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-[#07bc0c]">
          <AccountCircleTwoToneIcon /> Target Audience
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Companies with unique operational needs</li>
          <li>Project-specific teams or site-based workgroups</li>
          <li>HR, HSE, and Learning & Development Managers</li>
          <li>Compliance units or technical departments</li>
          <li>Multidisciplinary or multi-level workforce</li>
        </ul>
      </section>

      {/* Target Industry */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="text-xl md:text-2xl font-semibold text-[#07bc0c]">
          Target Industry
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Oil & Gas / Marine / Power & Utilities</li>
          <li>Engineering & Construction</li>
          <li>Manufacturing / FMCG / Mining</li>
          <li>Agro-Processing & Industrial Services</li>
          <li>Government Agencies, NGOs & Multinational Projects</li>
          <li>Any industry with project-based or technical workforce</li>
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

export default Customized;
