
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";

const About_us = () => {
  const offices = [
    {
      city: "Lagos Office",
      address:
        "Office 27, Ringback mall, Beside Mobil Filling Station, Oribanwa Bus-stop, Ibeju-Lekki Lagos",
      phone: "+234 816 163 7797",
      email: "info@scaftechservices.com",
    },
    {
      city: "Port Harcourt Office",
      address: "Block6, 3rd Avenue Elekahia Housing Estate, Port Harcourt.",
      phone: "+234 708 641 9457",
      email: "info@scaftechservices.com",
    },
    {
      city: "Abuja Office",
      address: "No 29, Ndola Crescent, Wuse Zone6.",
      phone: "+234 708 641 9457",
      email: "info@scaftechservices.com",
    },
  ];

const certificates = [
  { id: 1, img: "/winpart.png", title: "Winpart " },
  { id: 2, img: "/Zenilum.jpg", title: "Zenilum " },
  { id: 3, img: "/Vita.jpg", title: "Vita Certificate" },
  { id: 4, img: "/British.jpg", title: "British Deputy High Commision" },
  { id: 5, img: "/red-round.png", title: "Red Round " },
  { id: 6, img: "/Lafarge.png", title: "Lafarge Cement" },
  { id: 7, img: "/nigerite.png", title: "Nigerite " },
  { id: 8, img: "/Dangote.png", title: "Dangote " },
  { id: 9, img: "/Smartflow.png", title: "Smart Flow " },
  { id: 10, img: "/Daystar-power.png", title: "Daystar Power Energy Solutions" },
];


  const testimonials = [
    {
      id: 1,
      name: "Bernard Bele Olorunwa",
      role: "Trainee",
      img: "/avatar1.jpeg",
      text: "I recently completed the Overhead Crane Operation Safety Refresher Course with Scaftech Engineering Services and was thoroughly impressed by the depth and quality of the training. The instructors were knowledgeable and approachable, making complex topics easy to understand. The practical exercises were particularly beneficial, allowing me to apply theoretical knowledge in a controlled environment. I highly recommend Scaftech for anyone looking to enhance their safety skills in the engineering field.",
    },
    {
      id: 2,
      name: "Abayomi Oladipupo",
      role: "Trainee",
      img: "/avatar2.png",
      text: "Scaftech Engineering Services delivers professional and insightful training sessions. Their Overhead Crane Operation course was filled with valuable safety insights and best practices. Although I found some sections a bit rushed, the overall quality of the training was outstanding. The instructors were experienced and genuinely interested in our learning. I left the course feeling more prepared and aware of the safety aspects of crane operation.",
    },
    {
      id: 3,
      name: "Falade Steph",
      role: "Trainee",
      img: "/avatar3.webp",
      text: "I can't speak highly enough of the safety training provided by Scaftech Engineering Services. The instructors are true experts in their field, offering practical advice and tips that go beyond just textbook knowledge. The focus on pre-operational inspection and hazard identification was incredibly useful. The Forklift Safety Refresher course was interactive and encouraged active participation, making the learning process both effective and enjoyable.",
    },
    {
      id: 4,
      name: "Ayomide Onoja",
      role: "Trainee",
      img: "/avatar4.png",
      text: "The Overhead Crane Operation Safety Refresher Course by Scaftech Engineering Services is a must for any experienced crane operator looking to brush up on their skills. The mix of theoretical knowledge and practical application was perfect. I particularly appreciated the focus on mental alertness and emergency protocols. It's clear that Scaftech prioritizes safety and professionalism. I'll definitely be returning for future training needs.",
    },
    {
      id: 5,
      name: "Owodunni Habeeb",
      role: "Trainee",
      img: "/avatar5.png",
      text: "I cannot praise enough the safety training offered by Scaftech Engineering Services. The instructors demonstrate genuine expertise in their field, providing practical insights and advice that extend beyond theoretical knowledge. The emphasis on pre-operational inspection and hazard identification proved immensely valuable. Additionally, the interactive nature of the Forklift Safety Refresher course fostered active engagement, resulting in a learning experience that was not only effective but also enjoyable.",
    },
  ];

  return (
    <div className="bg-[#0a192f] text-white">
      {/* Who We Are */}
      <section className="flex flex-col lg:flex-row items-center gap-10 py-16 px-6 md:px-12 lg:px-20">
        <div className="flex-1">
          <img
            className="rounded-lg shadow-lg w-full h-[300px] object-cover"
            src="/PH-Picture2.jpg"
            alt="Who We Are"
          />
        </div>
        <div className="flex-1 text-justify lg:text-left">
          <h2 className="text-3xl font-bold text-[#07bc0c] mb-4">Who We Are</h2>
          <p className="text-gray-300 mb-3 leading-relaxed">
            We are a leading provider of specialized industrial training,
            committed to empowering individuals and organizations with the
            skills and knowledge necessary for success.
          </p>
          <p className="text-gray-300 mb-3 leading-relaxed">
            We are dedicated to maintaining the highest standards of quality and
            safety, adhering to regulations set by OSHA, the Federal Ministry of
            Labour (FML), and other recognized bodies.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Our mission is to bridge the skills gap and contribute to a safer,
            more productive industrial workforce.
          </p>
        </div>
      </section>

      {/* Hero / Mission + Vision */}
      <section className="flex flex-col md:flex-row gap-8 px-6 md:px-12 lg:px-20 py-16">
        <div className="flex-1 bg-[#07bc0c]/10 rounded-xl shadow-lg p-6 text-center hover:scale-105 transition">
          <h2 className="text-3xl font-bold text-[#07bc0c] mb-3">
            Our Mission
          </h2>
          <p className="text-gray-300 text-base leading-relaxed">
            We are established as a hub where competencies can be developed,
            assessed, and monitored.
          </p>
        </div>
        <div className="flex-1 bg-[#07bc0c]/10 rounded-xl shadow-lg p-6 text-center hover:scale-105 transition">
          <h2 className="text-3xl font-bold text-[#07bc0c] mb-3">Our Vision</h2>
          <p className="text-gray-300 text-base leading-relaxed">
            Our vision is to be the most preferred and referred training
            organization in Africa.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#07bc0c]/10 py-12">
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 text-center">
          <div>
            <p className="text-4xl font-bold text-[#07bc0c]">100+</p>
            <p className="text-gray-300 mt-2 font-medium">Accredited Courses</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-[#07bc0c]">50,000+</p>
            <p className="text-gray-300 mt-2 font-medium">Students Trained</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-[#07bc0c]">10,000+</p>
            <p className="text-gray-300 mt-2 font-medium">Positive Reviews</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="text-center pt-16 pb-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold">
          Satisfied <span className="text-[#07bc0c]">Clients</span>
        </h1>
        <p className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto">
          Hear from our satisfied clients and see how our training programs have
          helped them achieve their goals.
        </p>
      </section>

      {/* Certificates */}
      <section className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 px-5">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-4 flex flex-col items-center"
          >
            <img
              src={cert.img}
              alt={cert.title}
              className="w-24 h-24 object-contain"
            />
            <p className="text-[#0a192f] text-center text-sm font-semibold mt-3">
              {cert.title}
            </p>
          </div>
        ))}
      </section>

      {/* Testimonials */}
      <section className="bg-[#0b1b2bcc] py-12 mt-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">What Our Trainee Say</h2>
          <p className="text-gray-300">We have a track record of excellence</p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 px-5">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white text-[#0a192f] rounded-2xl shadow-lg hover:shadow-xl p-6 transition-all duration-300"
            >
              <div className="flex justify-center text-[#07bc0c] mb-4">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarHalfIcon />
              </div>
              <div className="flex items-start gap-5">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <p className="text-gray-700 text-base">{t.text}</p>
                  <h3 className="text-[#07bc0c] font-bold mt-4">{t.name}</h3>
                  <p className="text-gray-500 text-sm">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Training Centers */}
      <section className="bg-[#0a192f] py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white">
            Our Training Centers
          </h2>
          <p className="text-gray-400 mt-2">
            Find us across Nigeria in our training hubs
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 px-6 md:px-12 lg:px-20">
          {offices.map((office, index) => (
            <div
              key={index}
              className="bg-[#07bc0c]/10 rounded-lg shadow-md p-6 hover:scale-105 transition text-center"
            >
              <h3 className="text-2xl font-bold text-[#07bc0c] mb-3">
                {office.city}
              </h3>
              <p className="text-gray-300 text-sm mb-4">{office.address}</p>
              <div className="flex flex-col items-center gap-2">
                <a
                  href={`tel:${office.phone}`}
                  className="flex items-center gap-2 text-gray-200 hover:text-[#07bc0c] transition"
                >
                  <CallIcon fontSize="small" /> {office.phone}
                </a>
                <a
                  href={`mailto:${office.email}`}
                  className="flex items-center gap-2 text-blue-400 hover:text-[#07bc0c] transition"
                >
                  <EmailIcon fontSize="small" /> {office.email}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About_us;
