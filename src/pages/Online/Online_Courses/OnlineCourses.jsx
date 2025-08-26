
import Diversity2Icon from "@mui/icons-material/Diversity2";

const courses = [
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

const OnlineCourses = () => {
  return (
    <div className="w-full bg-[#0a192f]">
      <section className="px-6 sm:px-12 lg:px-24">
        {/* Heading */}
        <div className="text-center font-bold text-4xl sm:text-5xl text-white pb-6">
          Explore Our Online Courses
          <p className="text-[#07bc0c] font-medium text-base sm:text-lg mt-2">
            Sign up, learn, and get certified at your own convenience
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="bg-[#fff] rounded-2xl shadow-md p-6 flex flex-col justify-between hover:shadow-xl hover:-translate-y-2 transition-transform duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center text-[#07bc0c] bg-[#0a192f] rounded-full">
                <Diversity2Icon fontSize="large" />
              </div>

              {/* Course Title */}
              <h3 className="font-bold text-xl text-[#0a192f] mt-6">
                {course.title}
              </h3>

              {/* Description */}
              <p className="text-[#0a192f] mt-3 text-sm sm:text-base">
                This comprehensive course equips participants with the essential
                skills and knowledge to lead safely, ensuring effective risk
                management and fostering a safety-conscious workplace
                environment.
              </p>

              {/* Button */}
              <button className="mt-6 bg-[#07bc0c] text-[#fff] font-semibold py-2 px-4 rounded-md hover:bg-[#0a192f] hover:text-[#07bc0c] hover:scale-105 transform transition duration-300">
                View Details
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OnlineCourses;
