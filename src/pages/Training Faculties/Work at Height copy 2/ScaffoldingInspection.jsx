
import InfoTwoToneIcon from "@mui/icons-material/InfoTwoTone";
import GraphicEqTwoToneIcon from "@mui/icons-material/GraphicEqTwoTone";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import AccreditationSlider from "../../../components/AccreditationSlider";

const EmployabilitySkills = () => {
  return (
    <div className="w-full bg-[#0a192f] text-white">
      {/* Hero Section */}
      <section className="relative w-full h-[400px]">
        <img
          className="w-full h-full object-cover opacity-70"
          src="/jc-img2.jpg"
          alt="Employability Skills Training"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5">
          <h1 className="text-2xl md:text-4xl font-bold tracking-wide">
            EMPLOYABILITY SKILLS TRAINING
          </h1>
          <p className="mt-4 text-base md:text-lg max-w-3xl leading-relaxed">
            Are you a fresh graduate or non-graduate aspiring to build a
            successful career in the Oil & Gas Industry? This training equips
            you with essential skills to enhance your employability and set you
            on the path to success in oil and gas, marine, and construction
            industries.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#07bc0c]">
          Course Overview
        </h2>
        <p className="text-sm md:text-base text-gray-300 leading-relaxed mt-6 text-justify">
          The Employability Skills program at JC International is tailored for
          fresh graduates and non-graduates who aim to build successful careers
          in the Oil & Gas, Marine, and Construction industries. It covers
          foundational skills, industry-relevant certifications, and practical
          training required to thrive in demanding environments.
        </p>
        <p className="text-sm md:text-base text-gray-300 leading-relaxed mt-6 text-justify">
          By enrolling, participants gain certifications and hands-on experience
          that unlock diverse career paths, including Drilling Engineer, Rigger,
          Blaster, Painter, Scaffolder, Rope Access Technician, Welder, and many
          more. With JC International, you gain the confidence and competence to
          take your first step towards a rewarding career.
        </p>
      </section>

      {/* Training Cards */}
      <section className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            title: "Welding Training",
            img: "/images/STORE.jpg",
            duration: "3 Days",
            level: "All Levels",
            provider: "JCI",
          },
          {
            title: "Rope Access Technician",
            img: "/Rope-access.png",
            duration: "10 Weeks",
            level: "All Levels",
            provider: "JCI",
          },
          {
            title: "Blasting & Painting",
            img: "/images/Corrosion-Control.jpg",
            duration: "2 Days",
            level: "All Levels",
            provider: "JCI",
          },
          {
            title: "Plant Inspector - N039",
            img: "/images/App-Image_2.jpg",
            duration: "5 Days",
            level: "All Levels",
            provider: "JCI",
          },
        ].map((course, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300"
          >
            <img
              src={course.img}
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-white">
                {course.title}
              </h3>
              <div className="flex items-center gap-2 text-gray-400 mt-3">
                <InfoTwoToneIcon /> {course.duration}
              </div>
              <div className="flex items-center gap-2 text-gray-400 mt-2">
                <GraphicEqTwoToneIcon /> {course.level}
              </div>
              <div className="flex items-center gap-2 text-gray-400 mt-2">
                <AccountCircleTwoToneIcon /> {course.provider}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Accreditation Section */}
      <section className="bg-gray-900 py-12 mt-10">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-[#07bc0c]">
          ACCREDITATIONS & PROFESSIONAL MEMBERSHIPS
        </h3>
        <AccreditationSlider />
      </section>
    </div>
  );
};

export default EmployabilitySkills;
