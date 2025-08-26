
import InfoTwoToneIcon from "@mui/icons-material/InfoTwoTone";
import GraphicEqTwoToneIcon from "@mui/icons-material/GraphicEqTwoTone";


const courses = [
  {
    id: 1,
    img: "/arc-welding-steel.jpg",
    title: "Appointed Persons for Lifting",
    duration: "2 Days",
    level: "Expert",
  },
  {
    id: 2,
    img: "/Accident-Investigation.jpg",
    title: "Banksman & Slinger",
    duration: "2 Days",
    level: "All Levels",
  },
  {
    id: 3,
    img: "/images/IMG-scaled.jpg",
    title: "Rigging & Slinging Training",
    duration: "2 Days",
    level: "All Levels",
  },
  {
    id: 4,
    img: "/pikaso_texttoimage.jpeg",
    title: "Forklift Competence Training",
    duration: "2 Days",
    level: "All Levels",
  },
];

const ClientTestimonials = () => {
  return (
    <div className="bg-[#0a192f] text-white">
     

      {/* Courses */}
      <section className="max-w-7xl mx-auto py-12 px-5">
        <h2 className="text-center text-3xl font-bold mb-8">
          Find a <span className="text-[#07bc0c]">Course</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <img
                src={course.img}
                alt={course.title}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <h3 className="text-[#0a192f] font-semibold text-lg">
                  {course.title}
                </h3>
                <div className="text-gray-500 flex items-center gap-2 mt-2">
                  <InfoTwoToneIcon /> {course.duration}
                </div>
                <div className="text-gray-500 flex items-center gap-2 mt-1">
                  <GraphicEqTwoToneIcon /> {course.level}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Note */}
      <div className="text-center text-gray-300 text-sm py-6 px-5 border-t border-gray-700">
        If you encounter any issues during verification, please contact our
        support team at{" "}
        <span className="text-[#07bc0c] font-semibold">
          verify@scaftechtraining.com
        </span>
      </div>
    </div>
  );
};

export default ClientTestimonials;
