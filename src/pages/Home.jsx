import Header from "../components/Header/Header";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";
import KeyOffRoundedIcon from "@mui/icons-material/KeyOffRounded";
import GroupAddSharpIcon from "@mui/icons-material/GroupAddSharp";
import { motion } from "framer-motion";
import Imageslider from "../components/Imageslider";
import "./style.css";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import PinDropIcon from "@mui/icons-material/PinDrop";
import Marquee from "react-fast-marquee";
import Slidder from "../Slidder/Slidder";
import AccreditationSlider from "../components/AccreditationSlider";


const Home = () => {
  const stats = [
    { number: "500+", label: "GRADUATES PLACED" },
    { number: "15+", label: "YEARS EXPERIENCE" },
    { number: "98%", label: "SUCCESS RATE" },
    { number: "50+", label: "INDUSTRY PARTNERS" },
  ];

  const trainings = [
    {
      bg: "/Scaftechfork-7.jpg",
      title: "System Audit Training",
      location: "Lagos",
      date: "February 10, 2025",
    },
    {
      bg: "/Scaftechfork-3.jpg",
      title: "Mobile Elevated Training",
      location: "Port Harcourt",
      date: "March 5, 2025",
    },
    {
      bg: "/Scaftechfork-5.jpg",
      title: "Ergonomics Training",
      location: "Abuja",
      date: "April 12, 2025",
    },
  ];


  return (
    <div className="overflow-hidden">
      <Header />

      <div
        className="
                bg-[#0a192f] text-white py-12 px-6 text-center
                bg-[url('/images/mobile-pic.jpg')] bg-cover bg-center
                sm:bg-[url('/images/desktop-pic.jpg')]
              "
      >
        <h2 className="text-2xl md:text-3xl font-bold text-green-400">
          Ready to Engineer Your Future?
        </h2>

        <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
          Join thousands of successful engineers who started their journey with
          Scaftech Academy. Take the first step toward mastering your craft and
          advancing your career.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
          <a href="/contact-us">
            {" "}
            <button className="bg-green-500 hover:bg-green-600 cursor-pointer text-white font-semibold py-3 px-6 rounded-full transition">
              ENROLL NOW
            </button>
          </a>

          <a href="https://calendly.com/consult-scaftechservices/30-minute-consultation-with-a-scaftech-representative">
            <button className="border border-green-500 hover:bg-green-500 hover:text-white text-green-400 cursor-pointer font-semibold py-3 px-6 rounded-full transition">
              SCHEDULE CONSULTATION
            </button>
          </a>
        </div>
      </div>

      <div
        className="
                bg-black py-10 
                bg-[url('/images/mobile-pic.jpg')] bg-cover bg-center
                sm:bg-[url('/images/desktop-pic.jpg')]
              "
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {stats.map((item, index) => (
              <div key={index}>
                <h2 className="text-green-500 text-3xl sm:text-4xl font-bold">
                  {item.number}
                </h2>
                <p className="text-white mt-2 text-xs sm:text-sm tracking-wider">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section
        className="
            bg-[#ffffff] px-8 py-8 
            bg-[url('/images/mobile-pic.jpg')] bg-cover bg-center
            sm:bg-[url('/images/desktop-pic.jpg')]
          "
      >
        <Marquee speed={80} gradient={false} autoFill={true} direction="left">
          <img
            src="/winpart.png"
            alt=""
            className="h-8 sm:h-10 max-w-[80px] sm:max-w-[100px] object-contain mx-2"
          />
          <img
            src="/Zenilum.jpg"
            alt=""
            className="h-8 sm:h-10 max-w-[80px] sm:max-w-[100px] object-contain mx-2"
          />
          <img
            src="/Vita.jpg"
            alt=""
            className="h-8 sm:h-10 max-w-[80px] sm:max-w-[100px] object-contain mx-2"
          />
          <img
            src="/British.jpg"
            alt=""
            className="h-8 sm:h-10 max-w-[80px] sm:max-w-[100px] object-contain mx-2"
          />
          <img
            src="/red-round.png"
            alt=""
            className="h-8 sm:h-10 max-w-[80px] sm:max-w-[100px] object-contain mx-2"
          />
          <img
            src="/nigerite.png"
            alt=""
            className="h-8 sm:h-10 max-w-[80px] sm:max-w-[100px] object-contain mx-2"
          />
          <img
            src="/Lafarge.png"
            alt=""
            className="h-8 sm:h-10 max-w-[80px] sm:max-w-[100px] object-contain mx-2"
          />
          <img
            src="/ITB.jpg"
            alt=""
            className="h-8 sm:h-10 max-w-[80px] sm:max-w-[100px] object-contain mx-2"
          />
          <img
            src="/Desnky.jpg"
            alt=""
            className="h-8 sm:h-10 max-w-[80px] sm:max-w-[100px] object-contain mx-2"
          />
          <img
            src="/Daystar-power.png"
            alt=""
            className="h-8 sm:h-10 max-w-[80px] sm:max-w-[100px] object-contain mx-2"
          />
          <img
            src="/Dangote.png"
            alt=""
            className="h-8 sm:h-10 max-w-[80px] sm:max-w-[100px] object-contain mx-2"
          />
          <img
            src="/cfao-equip.jpg"
            alt=""
            className="h-8 sm:h-10 max-w-[80px] sm:max-w-[100px] object-contain mx-2"
          />
          <img
            src="/Smartflow.png"
            alt=""
            className="h-8 sm:h-10 max-w-[80px] sm:max-w-[100px] object-contain mx-2"
          />
        </Marquee>
      </section>

      <section className="bg-[#0a192f] py-16">
        {/* Heading */}
        <div className="text-center font-bold text-3xl sm:text-4xl md:text-5xl text-white pb-12">
          <h1>
            Our Training <span className="text-[#07bc0c]">Faculties</span>
          </h1>
        </div>

        {/* Cards */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-8 justify-center px-4">
          {/* Card 1 */}
          <div
            className="relative w-full sm:w-[45%] lg:w-[30%] h-96 rounded-xl overflow-hidden cursor-pointer transform transition hover:scale-105"
            style={{ backgroundImage: `url('/scaftek-fold-2.jpg')` }}
          >
            <div className="absolute inset-0 bg-[#07bc0c]/20 opacity-0 hover:opacity-50 transition-opacity"></div>
            <div className="absolute bottom-6 left-6 bg-white bg-opacity-90 p-6 rounded-lg shadow-lg max-w-sm">
              <a href="/Scaffold">
                <h2 className="text-2xl font-bold mb-2 text-[#0a192f]">
                  Scaffold Training Courses
                </h2>
                <p className="text-sm text-[#0a192f]">23 Courses</p>
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="relative w-full sm:w-[45%] lg:w-[30%] h-96 rounded-xl overflow-hidden cursor-pointer transform transition hover:scale-105"
            style={{ backgroundImage: `url('/hightension.jpg')` }}
          >
            <div className="absolute inset-0 bg-[#07bc0c]/20 opacity-0 hover:opacity-50 transition-opacity"></div>
            <div className="absolute bottom-6 left-6 bg-white bg-opacity-90 p-6 rounded-lg shadow-lg max-w-sm">
              <a href="/towercrane">
                <h2 className="text-2xl font-bold mb-2 text-[#0a192f]">
                  Tower Crane Training
                </h2>
                <p className="text-sm text-[#0a192f]">3 Courses</p>
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="relative w-full sm:w-[45%] lg:w-[30%] h-96 rounded-xl overflow-hidden cursor-pointer transform transition hover:scale-105"
            style={{ backgroundImage: `url('/ndt-3.jpg')` }}
          >
            <div className="absolute inset-0 bg-[#07bc0c]/20 opacity-0 hover:opacity-50 transition-opacity"></div>
            <div className="absolute bottom-6 left-6 bg-white bg-opacity-90 p-6 rounded-lg shadow-lg max-w-sm">
              <a href="/NDT">
                <h2 className="text-2xl font-bold mb-2 text-[#0a192f]">
                  ASNT NDT Inspection
                </h2>
                <p className="text-sm text-[#0a192f]">6 Courses</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0d182d] min-h-[300px]">
        <div className="text-center font-semibold text-4xl text-[#07bc0c] pt-20 pb-4">
          <h1>ACCREDITATIONS</h1>
        </div>

        <p className="font-semibold text-sm text-gray-200 text-center">
          Click on any accreditation logo to find the course that best supports
          your career ambitions and certification needs.
        </p>

        <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-20">
          <AccreditationSlider />
        </div>
      </section>

      <section className="bg-[#0a192f] py-16">
        {/* Heading */}
        <div className="text-center mb-12 px-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Why Choose <span className="text-[#07bc0c]">Scaftech</span>
          </h1>
          <p className="mt-4 text-gray-300 max-w-3xl mx-auto text-sm sm:text-base">
            We are steadfast in our commitment to providing high-quality
            training programs that enable organizations to enhance personnel
            competence, while empowering individuals to reach their full
            potential.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {[
            {
              icon: <PublicRoundedIcon className="text-4xl text-[#07bc0c]" />,
              title: "Industry Recognized Certifications",
              desc: "We are accredited by recognized bodies to train, assess, and certify personnel in the oil and gas industry.",
            },
            {
              icon: <KeyOffRoundedIcon className="text-4xl text-[#07bc0c]" />,
              title: "Hands-on Practical Training",
              desc: "We prioritize hands-on learning to prepare students for real-world scenarios, making them job-ready from day one.",
            },
            {
              icon: <GroupAddSharpIcon className="text-4xl text-[#07bc0c]" />,
              title: "Certified & Experienced Instructors",
              desc: "Our trainings are led by certified and highly experienced instructors with years of industry expertise.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-[#fff] rounded-2xl p-6 shadow-md text-center text-[#0a192f] 
                   hover:bg-[#07bc0c] hover:text-white transition-all duration-300 hover:scale-105"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h2 className="font-bold text-lg">{item.title}</h2>
              <p className="mt-3 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#0a192f] py-16">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 px-6">
          {/* Left - Slider */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="max-w-md w-full">
              <Imageslider />
            </div>
          </div>

          {/* Right - Text */}
          <div className="w-full lg:w-1/2 text-white">
            <h1 className="font-extrabold text-2xl sm:text-3xl md:text-4xl leading-snug mb-6">
              Driving Competence and Growth in <br />
              Africa&apos;s Oil & Gas Industry <br />
              Through Specialized Training Services
            </h1>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-6">
              For 23 years, Scaftech has delivered specialist training to Oil &
              Gas, Marine, and Construction industries. Our vision is to be
              Africa&apos;s leading training provider by offering high-quality
              programs that enhance competence and empower individuals to reach
              their full potential.
            </p>
            <a href="/contact-us">
              <button className="rounded-lg bg-[#07bc0c] px-6 py-3 font-semibold shadow-lg transition-all duration-300 hover:bg-white hover:text-[#0a192f]">
                Enrol Now
              </button>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#0a192f] py-16">
        {/* Heading */}
        <div className="text-center mb-6 px-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Explore Our Popular <span className="text-[#07bc0c]">Courses</span>
          </h1>
          <p className="mt-2 text-gray-300 text-sm sm:text-base">
            All our courses are fully accredited by relevant regulatory bodies.
          </p>
        </div>

        {/* Subheader and Button */}
        <div className="flex flex-col sm:flex-row items-center gap-6 justify-center sm:justify-start px-6 mb-8">
          <p className="text-white font-semibold text-xl sm:text-2xl">
            Popular Courses
          </p>
          <button className="bg-[#07bc0c] text-white px-5 py-2 rounded-full text-sm sm:text-base font-medium shadow-md hover:bg-white hover:text-[#0a192f] transition-all duration-300">
            Featured Courses
          </button>
        </div>

        {/* Slider Component */}
        <div className="px-4">
          <Slidder />
        </div>
      </section>

      <section className="bg-[#0a192f] py-16">
        {/* Heading */}
        <div className="text-center mb-12 px-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Upcoming Trainings
          </h1>
          <p className="text-gray-400 text-sm sm:text-base">
            Join our expert-led programs and boost your skills
          </p>
        </div>

        {/* Trainings Grid */}
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {trainings.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="relative h-80 rounded-xl overflow-hidden shadow-xl cursor-pointer group"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-center bg-cover"
                style={{ backgroundImage: `url(${item.bg})` }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition duration-300" />

              {/* Info Panel */}
              <div className="absolute bottom-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                <p className="font-medium mb-1 flex items-center gap-2 text-sm sm:text-base">
                  <WorkOutlineIcon
                    className="text-[#07bc0c]"
                    fontSize="small"
                  />{" "}
                  {item.date}
                </p>
                <h2 className="text-xl sm:text-2xl font-semibold mb-1">
                  {item.title}
                </h2>
                <p className="flex items-center gap-2 text-sm sm:text-base">
                  <PinDropIcon className="text-[#07bc0c]" fontSize="small" />{" "}
                  {item.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-[#0a192f] py-10 swiperImageSection">
        <div className="max-w-screen-xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-10 mt-6">
          {/* Left Text Section */}
          <div className="text-white flex-1">
            <h1 className="pb-4 font-bold text-3xl md:text-4xl">
              Are You an <span className="text-[#07bc0c]">Organization?</span>
            </h1>

            <p className="text-sm md:text-base text-gray-200 font-medium leading-relaxed">
              We specialize in providing fully customized training programs
              designed to align with your company&apos;s unique goals,
              challenges, and operational requirements. Whether you need to
              enhance technical skills, boost safety compliance, or upskill your
              workforce, we create training that&apos;s built around what
              matters most to your business.
            </p>

            <p className="text-sm md:text-base text-gray-200 pt-3 font-medium leading-relaxed">
              We offer the flexibility to deliver training both on-site at your
              company location and at our own training facility.
            </p>

            <a href="/contact-us">
              <button className="mt-5 rounded-md border-2 border-[#07bc0c] bg-transparent text-[#07bc0c] px-6 py-3 font-medium text-base hover:bg-[#07bc0c] hover:text-[#0a192f] transition-all duration-300">
                Contact Us
              </button>
            </a>
          </div>

          {/* Right Image Section */}
          <div className="flex-1">
            <img
              src="/academy-1.jpg"
              alt="Training Academy"
              className="w-full rounded-lg shadow-lg object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#0a192f] py-16">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Latest News
          </h1>
          <p className="text-gray-300 mt-2 text-sm sm:text-base">
            Stay updated with our recent trainings & insights
          </p>
        </div>

        {/* News Grid */}
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              img: "/ndt-5.jpg",
              category: "Non-Destructive Testing",
              title: "NDT Career Guide: Explore Industry Opportunities",
              date: "February 4, 2025",
            },
            {
              img: "/lift-2.jpg",
              category: "Training",
              title:
                "Master the Art of Lifting with Scaftech Appointed Person for Lifting Operations Training",
              date: "January 24, 2025",
            },
            {
              img: "/safetyman-2.jpg",
              category: "Health and Safety",
              title: "The Heimlich Maneuver: A Life-Saving Skill To Rescue",
              date: "January 14, 2025",
            },
            {
              img: "/lifting-4.jpg",
              category: "Training",
              title: "Master Mobile Crane Operations with Scaftech",
              date: "December 20, 2024",
            },
            {
              img: "/lifting-5.jpg",
              category: "Training",
              title: "Standard Best Practices For Rope Access Operations",
              date: "December 6, 2024",
            },
          ].map((news, idx) => (
            <div
              key={idx}
              className="bg-[#0a192f] rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 group"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-t-xl">
                <img
                  src={news.img}
                  alt={news.title}
                  className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-[#07bc0c] text-sm font-semibold">
                  {news.category}
                </p>
                <h2 className="text-white text-lg font-bold mt-2">
                  {news.title}
                </h2>
                <p className="text-gray-400 text-sm mt-3">{news.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
