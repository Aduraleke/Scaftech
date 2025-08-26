
import GraphicEqTwoToneIcon from "@mui/icons-material/GraphicEqTwoTone";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import AccreditationSlider from "../../../components/AccreditationSlider";

const DefensiveDriving = () => {
  return (
    <div className="w-full bg-[#0a192f] text-white">
      {/* Hero Section */}
      <section className="relative w-full h-[400px]">
        <img
          className="w-full h-full object-cover opacity-70"
          src="/ScafIos-4.jpg"
          alt="Defensive Driving Training"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5">
          <h1 className="text-2xl md:text-4xl font-bold tracking-wide">
            DEFENSIVE DRIVING & HAZARD AWARENESS TRAINING
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
          Scaftech Engineering Services’ Defensive Driving & Hazard Awareness
          Training empowers drivers with proactive driving techniques and sharp
          situational awareness to minimize risks, avoid collisions, and respond
          effectively to road hazards. This program enhances driver behavior,
          promotes a road safety culture, and reduces accidents, downtime, and
          liability — aligning with Scaftech Engineering Services’ commitment to
          safety excellence.
        </p>
      </section>

      {/* Pre-requisites */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="text-xl md:text-2xl font-semibold text-[#07bc0c]">
          Pre-requisites
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Valid driver’s license (appropriate class for vehicle type)</li>
          <li>Basic vehicle handling experience</li>
          <li>Medically fit and mentally alert</li>
          <li>
            Willingness to adapt and improve personal driving habits through
            Scaftech’s guidance
          </li>
        </ul>
      </section>

      {/* Objectives */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-[#07bc0c]">
          <GraphicEqTwoToneIcon /> Course Objectives
        </h3>
        <p className="mt-2 text-gray-300">
          Participants in Scaftech’s Defensive Driving Training will:
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>
            Master defensive driving principles and safe driving attitudes
          </li>
          <li>
            Recognize and respond to hazardous road, weather, and traffic
            conditions
          </li>
          <li>Prevent accidents, manage fatigue, and maintain focus</li>
          <li>
            Understand the impact of distractions, speed, alcohol, and emotions
            on driving
          </li>
          <li>
            Learn emergency handling, vehicle inspection & trip risk assessment
          </li>
          <li>
            Comply with company fleet policies & national road safety
            regulations
          </li>
        </ul>
      </section>

      {/* Target Audience */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-[#07bc0c]">
          <AccountCircleTwoToneIcon /> Target Audience
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Company & Commercial Drivers</li>
          <li>Logistics & Delivery Staff</li>
          <li>Oil & Gas Fleet Operators</li>
          <li>Utility & Field Service Drivers</li>
          <li>Security Convoy Drivers</li>
          <li>Executive Chauffeurs & VIP Drivers</li>
        </ul>
      </section>

      {/* Target Industry */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="text-xl md:text-2xl font-semibold text-[#07bc0c]">
          Target Industry
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Oil & Gas / Energy / Mining</li>
          <li>Logistics, Transport & Courier Services</li>
          <li>Construction & Engineering</li>
          <li>Government Agencies & NGOs</li>
          <li>Corporate Organizations with Fleet Operations</li>
          <li>Private Security & Protocol Services</li>
        </ul>
      </section>

      {/* Courses */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="text-xl md:text-2xl font-semibold text-[#07bc0c]">
          Courses Offered
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Defensive Driving Training</li>
          <li>Work-Zone Traffic Safety Training</li>
          <li>Fleet Safety Management Training</li>
          <li>Driver Safety Training</li>
          <li>Executive Drivers Training Masterclass</li>
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

export default DefensiveDriving;
