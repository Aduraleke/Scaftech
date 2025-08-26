
import GraphicEqTwoToneIcon from "@mui/icons-material/GraphicEqTwoTone";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import AccreditationSlider from "../../../components/AccreditationSlider";

const TowerCrane = () => {
  return (
    <div className="w-full bg-[#0a192f] text-white">
      {/* Hero Section */}
      <section className="relative w-full h-[400px]">
        <img
          className="w-full h-full object-cover opacity-70"
          src="/hightension.jpg"
          alt="Tower Crane Training"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5">
          <h1 className="text-2xl md:text-4xl font-bold tracking-wide">
            TOWER CRANE TRAINING
          </h1>
          <p className="mt-4 text-base md:text-lg max-w-3xl">
            <span className="text-[#0a192f] font-bold">Slogan:</span>{" "}
            Command the Heights. Operate with Confidence with Scaftech
            Engineering
          </p>
        </div>
      </section>

      {/* Course Overview */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#07bc0c]">
          Course Contents Overview
        </h2>
        <p className="text-sm md:text-base text-gray-300 leading-relaxed mt-6 text-justify">
          Scaftech Engineering Services’ Tower Crane Training is designed to
          equip operators and signalers with the technical expertise and safety
          discipline required to operate tower cranes in high-risk environments.
          This comprehensive program covers crane setup, load handling,
          communication protocols, emergency procedures, and compliance with
          lifting regulations—ensuring safe, smooth, and efficient crane
          operations under Scaftech Engineering Services’ expert guidance.
        </p>
      </section>

      {/* Pre-requisites */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="text-xl md:text-2xl font-semibold text-[#07bc0c]">
          Pre-requisites
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Physically and medically fit for high-elevation work</li>
          <li>Basic literacy and ability to follow safety instructions</li>
          <li>
            Prior experience in construction or rigging (recommended for
            operator level)
          </li>
          <li>
            Valid ID and PPE for practical sessions conducted by Scaftech
            Engineering Services
          </li>
        </ul>
      </section>

      {/* Course Objectives */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-[#07bc0c]">
          <GraphicEqTwoToneIcon /> Course Objectives
        </h3>
        <p className="mt-2 text-gray-300">
          Participants in Scaftech Engineering Services’ Tower Crane Training
          will:
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Understand tower crane mechanics, controls, and functions</li>
          <li>
            Learn safe lifting practices, load charts, and operational limits
            with Scaftech Engineering Services’ proven methodologies
          </li>
          <li>Master pre-start checks, shutdown procedures, and emergencies</li>
          <li>Identify and respond to potential crane hazards</li>
          <li>
            Communicate effectively using standard hand signals and radio
            protocols
          </li>
          <li>Comply with local and international crane safety standards</li>
        </ul>
      </section>

      {/* Target Audience */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-[#07bc0c]">
          <AccountCircleTwoToneIcon /> Target Audience
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Tower Crane Operators (new & experienced)</li>
          <li>Signalers & Banksmen</li>
          <li>Site Engineers & Lifting Coordinators</li>
          <li>HSE Officers & Safety Supervisors</li>
          <li>Construction & Structural Erection Teams</li>
        </ul>
      </section>

      {/* Target Industry */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="text-xl md:text-2xl font-semibold text-[#07bc0c]">
          Target Industry
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Oil & Gas Facilities</li>
          <li>Infrastructure & Civil Engineering Projects</li>
          <li>Shipyards & Heavy Industrial Plants</li>
          <li>Ports, Terminals & Logistics</li>
          <li>EPC & Turnkey Engineering Projects</li>
          <li>High-Rise Building Construction</li>
        </ul>
      </section>

      {/* Courses */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="text-xl md:text-2xl font-semibold text-[#07bc0c]">
          Courses Offered
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Tower Crane Operators Training</li>
          <li>Tower Crane Emergency & Rescue Training</li>
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

export default TowerCrane;
