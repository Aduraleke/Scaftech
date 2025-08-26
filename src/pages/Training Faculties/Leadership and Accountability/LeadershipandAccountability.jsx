
import GraphicEqTwoToneIcon from "@mui/icons-material/GraphicEqTwoTone";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import AccreditationSlider from "../../../components/AccreditationSlider";

const LeadershipAccount = () => {
  return (
    <div className="w-full bg-[#0a192f] text-white">
      {/* Hero Section */}
      <section className="relative w-full h-[400px]">
        <img
          className="w-full h-full object-cover opacity-70"
          src="/scafIos-5.jpg"
          alt="Leadership Training"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5">
          <h1 className="text-2xl md:text-4xl font-bold tracking-wide">
            LEADERSHIP & ACCOUNTABILITY TRAINING
          </h1>
          <p className="mt-3 text-base md:text-lg max-w-2xl">
            Cultivate Effective Leaders. Leadership and Accountability Training.
          </p>
          <p className="mt-2 text-sm md:text-base max-w-xl">
            <span className="text-[#07bc0c] font-semibold">Slogan:</span>{" "}
            Reliable Leaders Build Global Leaders
          </p>
        </div>
      </section>

      {/* Course Overview */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#07bc0c]">
          Course Contents Overview
        </h2>
        <p className="text-sm md:text-base text-gray-300 leading-relaxed mt-6 text-justify">
          Scaftech Engineering Services’ Leadership and Accountability Training
          is designed to build effective, responsible, and empowered leaders at
          all organizational levels. This course focuses on decision-making,
          ownership, team dynamics, conflict resolution, and performance
          culture, empowering participants to lead with purpose and hold
          themselves and others accountable for results.
        </p>
      </section>

      {/* Pre-requisites */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="text-xl md:text-2xl font-semibold text-[#07bc0c]">
          Pre-requisites
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Must hold or aspire to a leadership or supervisory role</li>
          <li>Basic communication and interpersonal skills</li>
          <li>Willingness to engage in self-assessment and peer learning</li>
          <li>
            Open mindset towards organizational growth and people management
          </li>
        </ul>
      </section>

      {/* Course Objectives */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-[#07bc0c]">
          <GraphicEqTwoToneIcon /> Course Objectives
        </h3>
        <p className="mt-2 text-gray-300">
          Participants in Scaftech’s Leadership and Accountability Training
          will:
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>
            Develop core leadership skills: influence, vision, and emotional
            intelligence
          </li>
          <li>
            Understand the link between leadership and accountability in teams
          </li>
          <li>Learn tools to delegate effectively and manage performance</li>
          <li>
            Master strategies for feedback, conflict resolution, and
            decision-making
          </li>
          <li>
            Build a culture of responsibility, ownership, and transparency
          </li>
          <li>
            Align personal leadership styles with Scaftech’s organizational
            values & goals
          </li>
        </ul>
      </section>

      {/* Target Audience */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-[#07bc0c]">
          <AccountCircleTwoToneIcon /> Target Audience
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Team Leads & Supervisors</li>
          <li>Mid- to Senior-Level Managers</li>
          <li>Project Coordinators & Department Heads</li>
          <li>HR Professionals & Organizational Developers</li>
          <li>Business Owners & Startup Founders</li>
          <li>Emerging Leaders & Talent Pipeline Candidates</li>
        </ul>
      </section>

      {/* Target Industry */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="text-xl md:text-2xl font-semibold text-[#07bc0c]">
          Target Industry
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Corporate & Business Enterprises</li>
          <li>Oil & Gas, Power & Energy</li>
          <li>Construction & Engineering Firms</li>
          <li>Manufacturing & Logistics</li>
          <li>Government & Public Sector</li>
          <li>NGOs, Development Agencies & Education</li>
        </ul>
      </section>

      {/* Courses Offered */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="text-xl md:text-2xl font-semibold text-[#07bc0c]">
          Courses Offered
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Scaftech Leadership Academy</li>
          <li>Scaftech Regional Leadership Retreats</li>
          <li>Scaftech Global Masterclasses</li>
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

export default LeadershipAccount;
