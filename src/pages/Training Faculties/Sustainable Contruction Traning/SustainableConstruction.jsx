
import GraphicEqTwoToneIcon from "@mui/icons-material/GraphicEqTwoTone";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import AccreditationSlider from "../../../components/AccreditationSlider";

const SustainableConstruction = () => {
  return (
    <div className="w-full bg-[#0a192f] text-white">
      {/* Hero Section */}
      <section className="relative w-full h-[400px]">
        <img
          className="w-full h-full object-cover opacity-70"
          src="/big-housing.jpg"
          alt="Sustainable Construction"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5">
          <h1 className="text-2xl md:text-4xl font-bold tracking-wide">
            SUSTAINABLE CONSTRUCTION MANAGEMENT TRAINING
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-200">
            Build Greener with Scaftech Sustainable Construction Management
            Training
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#07bc0c]">
          Course Contents Overview
        </h2>
        <p className="text-sm md:text-base text-gray-300 leading-relaxed mt-6 text-justify">
          Scaftech Engineering Services’ Sustainable Construction Management
          Training prepares professionals to integrate green practices, resource
          efficiency, and environmental compliance into construction projects.
          This expertly crafted course emphasizes eco-friendly materials, waste
          reduction, energy efficiency, and sustainable site planning—aligning
          your team with global environmental standards and ESG goals.
        </p>
      </section>

      {/* Pre-requisites */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="text-xl md:text-2xl font-semibold text-[#07bc0c]">
          Pre-requisites
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Background in construction, engineering, or architecture</li>
          <li>Understanding of project lifecycle or site management</li>
          <li>Interest in environmental stewardship and innovation</li>
          <li>
            Openness to green building technologies and compliance systems
          </li>
        </ul>
      </section>

      {/* Objectives */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-[#07bc0c]">
          <GraphicEqTwoToneIcon /> Course Objectives
        </h3>
        <p className="mt-2 text-gray-300">
          Participants in Scaftech’s Sustainable Construction Management
          Training will:
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>
            Understand the principles and drivers of sustainable construction
          </li>
          <li>
            Plan and manage eco-friendly construction activities effectively
          </li>
          <li>
            Implement green material selection, energy-saving techniques, and
            site optimization
          </li>
          <li>
            Apply waste minimization, water conservation, and carbon reduction
            strategies
          </li>
          <li>Align projects with LEED, BREEAM, and ESG standards</li>
          <li>
            Foster long-term value, compliance, and social responsibility in
            construction
          </li>
        </ul>
      </section>

      {/* Target Audience */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-[#07bc0c]">
          <AccountCircleTwoToneIcon /> Target Audience
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Project Managers & Construction Engineers</li>
          <li>Architects & Quantity Surveyors</li>
          <li>Site Supervisors & Foremen</li>
          <li>Environmental Managers & HSE Officers</li>
          <li>Facility Managers & CSR Leads</li>
          <li>Government Agencies & Regulatory Bodies</li>
        </ul>
      </section>

      {/* Target Industry */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="text-xl md:text-2xl font-semibold text-[#07bc0c]">
          Target Industry
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Real Estate Development & Urban Infrastructure</li>
          <li>Oil & Gas (Sustainable Facility Upgrades)</li>
          <li>Construction & Civil Engineering</li>
          <li>Power & Renewable Energy Projects</li>
          <li>Smart Cities & Sustainable Housing Projects</li>
          <li>Government, NGOs & Environmental Consultancies</li>
        </ul>
      </section>

      {/* Courses Offered */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="text-xl md:text-2xl font-semibold text-[#07bc0c]">
          Courses Offered
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Construction Safety & Management Training</li>
          <li>Specialist “Sustainability” Content Training</li>
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

export default SustainableConstruction;
