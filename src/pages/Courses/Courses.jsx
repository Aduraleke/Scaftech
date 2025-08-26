import { useState } from "react";
import { Link } from "react-router-dom";
import Diversity2Icon from "@mui/icons-material/Diversity2";

// Training Courses
const trainingCourses = [
  { path: "lifting-operation", name: "Lifting Operation" },
  { path: "inspector-training", name: "QA/QC Inspector" },
  { path: "heavy-equipment", name: "Heavy Equipment" },
  { path: "blasting-painting", name: "Blasting and Painting" },
  { path: "health-safety", name: "Health & Safety" },
  { path: "work-height", name: "Work at Height" },
  { path: "osha", name: "OSHA" },
  { path: "tower-crane", name: "Tower Crane" },
  { path: "mobile-elevated", name: "Mobile Elevated Work Platform" },
  { path: "fire-warden", name: "Fire Warden" },
  { path: "rigger", name: "Rigger" },
  { path: "lifting-specialist", name: "Lifting Specialist" },
  { path: "ndt", name: "NDT" },
  { path: "leadership-accountability", name: "Leadership & Accountability" },
  { path: "defensive-driving", name: "Defensive Driving" },
  { path: "mental-readiness", name: "Mental Readiness" },
  { path: "system-audit", name: "System Audit" },
  { path: "equipment-operation", name: "Equipment Operation" },
  { path: "sustainable-construction", name: "Sustainable Construction" },
  { path: "safety", name: "Safety" },
  { path: "confined-space", name: "Confined Space" },
  { path: "skilled-operation", name: "Skilled Operation" },
  { path: "customized", name: "Customized Training" },
  { path: "lifting-plan", name: "Lifting Plan" },
  { path: "welding", name: "Welding Training" },
];

// Online Courses
const onlineCourses = [
  { title: "IOSH Managing Safely" },
  { title: "IOSH Working at Heights" },
  { title: "LOLER & PUWER Seminar" },
  { title: "Fall Protection Training" },
  { title: "Basic First Aid/CPR/AED" },
  { title: "H₂S Safety Awareness" },
  { title: "Drop Object Awareness" },
  { title: "Manual Handling Training" },
  { title: "COSHH Training" },
  { title: "Work At Height Rescue" },
  { title: "Safe Working At Height" },
  { title: "Hands Arm Vibration Syndrome (HAVS)" },
  { title: "Offshore Orientation" },
  { title: "Fire Fighting & Prevention" },
  { title: "Fire Warden/Marshal" },
  { title: "Dangerous Goods" },
  { title: "Rigging Loft Controller" },
  { title: "Rigging Loft Management" },
  { title: "Stuck Pipe Prevention" },
  { title: "IADC Wellsharp" },
  { title: "Helicopter Landing Officer" },
  { title: "Introduction to Drilling" },
  { title: "Rig Mathematics" },
];

const Courses = () => {
  const [activeTab, setActiveTab] = useState("training"); // "training" or "online"

  return (
    <div className="bg-[#0a192f] text-white min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-20 px-6 md:px-12 lg:px-24">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#07bc0c] mb-4">
          Our Courses
        </h1>
        <p className="text-gray-300 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
          Explore our comprehensive training programs and online courses
          designed to empower individuals and organizations. Click on any course
          to learn more.
        </p>
      </section>

      {/* Tabs */}
      <div className="flex justify-center space-x-6 mb-12">
        <button
          className={`px-6 py-2 rounded-full font-semibold transition ${
            activeTab === "training"
              ? "bg-[#07bc0c] text-[#0a192f]"
              : "bg-[#0a192f] text-[#07bc0c] border border-[#07bc0c]"
          }`}
          onClick={() => setActiveTab("training")}
        >
          Training Courses
        </button>
        <button
          className={`px-6 py-2 rounded-full font-semibold transition ${
            activeTab === "online"
              ? "bg-[#07bc0c] text-[#0a192f]"
              : "bg-[#0a192f] text-[#07bc0c] border border-[#07bc0c]"
          }`}
          onClick={() => setActiveTab("online")}
        >
          Online Courses
        </button>
      </div>

      {/* Courses Grid */}
      <section className="px-6 md:px-12 lg:px-24 pb-20">
        {activeTab === "training" && (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {trainingCourses.map((course) => (
              <Link
                key={course.path}
                to={course.path}
                className="relative bg-[#0a192f] border border-[#07bc0c]/20 rounded-2xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[#07bc0c]/10 to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-2xl"></div>

                <h2 className="relative text-2xl font-bold text-[#07bc0c] mb-2 z-10">
                  {course.name}
                </h2>
                <p className="relative text-gray-300 text-sm z-10">
                  Click to view course details and training schedule.
                </p>

                <span className="absolute bottom-4 right-4 text-[#07bc0c] text-xl z-10 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </Link>
            ))}
          </div>
        )}

        {activeTab === "online" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {onlineCourses.map((course, idx) => (
              <div
                key={idx}
                className="bg-[#fff] rounded-2xl shadow-md p-6 flex flex-col justify-between hover:shadow-xl hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-14 h-14 flex items-center justify-center text-[#07bc0c] bg-[#0a192f] rounded-full">
                  <Diversity2Icon fontSize="large" />
                </div>

                <h3 className="font-bold text-xl text-[#0a192f] mt-6">
                  {course.title}
                </h3>

                <p className="text-[#0a192f] mt-3 text-sm sm:text-base">
                  This comprehensive course equips participants with the
                  essential skills and knowledge to lead safely and foster a
                  safety-conscious workplace environment.
                </p>

                <button className="mt-6 bg-[#07bc0c] text-[#fff] font-semibold py-2 px-4 rounded-md hover:bg-[#0a192f] hover:text-[#07bc0c] hover:scale-105 transform transition duration-300">
                  View Details
                </button>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Courses;
