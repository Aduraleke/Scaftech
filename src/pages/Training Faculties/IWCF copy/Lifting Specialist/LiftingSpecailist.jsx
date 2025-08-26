import AccreditationSlider from "../../../../components/AccreditationSlider";

const LiftingSpecialist = () => {
  const courses = [
    { title: "IADC Wellsharp", img: "/jc img 1.jpg" },
    { title: "Introduction To Rotary Drilling", img: "/jc img 1.jpg" },
    {
      title: "Introduction to Well Control",
      img: "/JC-International-Training.jpg",
    },
    {
      title: "IWCF Drilling Well Control (Level 2)",
      img: "/JC-International-Training.jpg",
    },
    { title: "IWCF Drilling Well Control (Level 3)", img: "/jc img 1.jpg" },
    { title: "IWCF Drilling Well Control (Level 4)", img: "/jc img 1.jpg" },
    {
      title: "IWCF Well Intervention Pressure Control",
      img: "/images/Well-Control-Training.jpg",
    },
    {
      title: "IWCF Well Intervention Pressure Control (Level 2)",
      img: "/images/Well-Control-Training.jpg",
    },
    {
      title: "IWCF Well Intervention Pressure Control (Level 3)",
      img: "/images/Well-Control-Training.jpg",
    },
    {
      title: "IWCF Well Intervention Pressure Control (Level 4)",
      img: "/images/Well-Control-Training.jpg",
    },
    { title: "Offshore Orientation", img: "/DSC.jpg" },
    { title: "Rig Mathematics", img: "/offshore-hebron-boat.jpg" },
    { title: "Rotary Drilling", img: "/images/Image-A.jpg" },
    { title: "Roustabout Training", img: "/images/IMG_5538.jpg" },
    { title: "Stuck Pipe Prevention", img: "/Stuck-Pipe.jpg" },
  ];

  return (
    <div className="w-full bg-[#0a192f] text-white">
      {/* Hero Section */}
      <section className="relative w-full h-[400px]">
        <img
          className="w-full h-full object-cover opacity-70"
          src="/lift-1.jpg"
          alt="Lifting Specialist Training"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-2xl md:text-4xl font-bold">
            LIFTING SPECIALIST TRAINING
          </h1>
          <p className="mt-4 text-base md:text-lg max-w-3xl">
            <span className="text-[#07bc0c] font-semibold">Slogan:</span>{" "}
            Mastering Lifting Plans Ensure Safety & Efficiency
          </p>
        </div>
      </section>

      {/* Course Overview */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#07bc0c]">
          Course Overview
        </h2>
        <p className="text-sm md:text-base text-gray-300 leading-relaxed mt-6 text-justify">
          Learn to develop and implement comprehensive lifting plans with our
          specialized training. The program covers risk assessment, load
          calculations, equipment selection, and communication protocols to
          ensure every lift is executed safely and efficiently.
        </p>
        <p className="mt-6 text-gray-300 leading-relaxed text-justify">
          Our training is essential for roles such as Derrickmen, Mud Loggers,
          Mud Engineers, Assistant Drillers, Drillers, Drilling Engineers,
          Drilling Superintendents, Rig Managers, Drilling Managers, Tool
          Pushers, and Offshore Installation Managers. Participants gain a
          thorough understanding of well control principles, risk management,
          and industry best practices.
        </p>
      </section>

      {/* Standards */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="text-xl md:text-2xl font-semibold text-[#07bc0c]">
          Standards
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>ASME B30 Series</li>
          <li>Relevant International Engineering Standards</li>
        </ul>
      </section>

      {/* Courses Grid */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-[#07bc0c]">
          Courses Offered
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:scale-105 transform transition duration-300"
            >
              <img
                src={course.img}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h4 className="text-sm md:text-base font-semibold text-[#07bc0c]">
                  {course.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Accreditation */}
      <section className="bg-gray-900 py-12 mt-10">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-[#07bc0c]">
          ACCREDITATIONS & PROFESSIONAL MEMBERSHIPS
        </h3>
        <AccreditationSlider />
      </section>
    </div>
  );
};

export default LiftingSpecialist;
