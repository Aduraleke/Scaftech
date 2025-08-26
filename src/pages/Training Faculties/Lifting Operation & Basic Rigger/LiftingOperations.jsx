import AccreditationSlider from "../../../components/AccreditationSlider";


const LiftingOperation = () => {
  return (
    <div className="w-full bg-[#0a192f] text-white">
      {/* Hero Section */}
      <section className="relative w-full h-[400px]">
        <img
          className="w-full h-full object-cover opacity-70"
          src="/lifting-4.jpg"
          alt="Lifting Operations"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5">
          <h1 className="text-3xl md:text-5xl font-bold tracking-wide">
            LIFTING OPERATION TRAINING & BASIC RIGGER
          </h1>
          <p className="mt-4 text-base md:text-lg">
            <span className="text-[#07bc0c] font-bold">Slogan:</span> Lift Safe.
            Lift Smart. Lift Right.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#07bc0c]">
          Course Contents Overview
        </h2>
        <p className="text-sm md:text-base text-gray-300 leading-relaxed mt-6 text-justify">
          Scaftech Engineering Services’ Lifting Operations Training equips
          personnel with the skills, knowledge, and awareness to plan,
          supervise, and execute lifting tasks safely and efficiently. This
          comprehensive program focuses on lifting gear inspection, load
          calculation, communication signals, and legal compliance, minimizing
          the risk of accidents and equipment failure in high-risk environments
          while upholding Scaftech Engineering Services’ commitment to safety
          and excellence.
        </p>
      </section>

      {/* Pre-requisites */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="text-xl md:text-2xl font-semibold text-[#07bc0c]">
          Pre-requisites
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Basic understanding of site safety practices</li>
          <li>Physically fit and medically cleared for fieldwork</li>
          <li>
            Prior experience in rigging/lifting is a plus (for advanced levels)
          </li>
          <li>
            PPE required for practical sessions conducted by Scaftech
            Engineering Services
          </li>
        </ul>
      </section>

      {/* Objectives */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="text-xl md:text-2xl font-semibold text-[#07bc0c]">
          Course Objectives
        </h3>
        <p className="mt-4 text-gray-300">
          Participants in Scaftech Engineering Services’ Lifting Operations
          Training will:
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>
            Understand lifting principles, load dynamics, and safe procedures
          </li>
          <li>
            Identify and inspect lifting equipment (slings, shackles, cranes,
            etc.)
          </li>
          <li>
            Learn proper use of lifting accessories and safety precautions
          </li>
          <li>
            Interpret lifting plans, risk assessments, and signaling techniques
          </li>
          <li>
            Ensure compliance with local and international lifting regulations
          </li>
        </ul>
      </section>

      {/* Target Audience */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="text-xl md:text-2xl font-semibold text-[#07bc0c]">
          Target Audience
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Riggers & Signalers</li>
          <li>Crane & Forklift Operators</li>
          <li>Lifting Supervisors & Coordinators</li>
          <li>Site Engineers & Safety Officers</li>
          <li>Oilfield & Construction Workers</li>
        </ul>
      </section>

      {/* Target Industry */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="text-xl md:text-2xl font-semibold text-[#07bc0c]">
          Target Industry
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Oil & Gas</li>
          <li>Logistics & Material Handling</li>
          <li>Construction & Infrastructure</li>
          <li>Power Plants & Heavy Manufacturing</li>
          <li>Warehousing & Equipment Rental Companies</li>
        </ul>
      </section>

      {/* Courses */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="text-xl md:text-2xl font-semibold text-[#07bc0c]">
          Courses Offered
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Lifting Operators Training</li>
          <li>Lifting & Slinging Training</li>
          <li>Banksman & Slinger Training</li>
          <li>Cargo Carrying Unit Inspection Training</li>
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

export default LiftingOperation;
