const logos = [

  { src: "/images/opito-1.jpg", alt: "Opito" },
  { src: "/images/IOSH-2.png", alt: "IOSH" },
  { src: "/images/NPORS-3.png", alt: "NPORS" },
  { src: "/images/IWCF-4.png", alt: "IWCF" },
  { src: "/images/IADC-5.jpg", alt: "IADC" },
  { src: "/images/leea-6.png", alt: "LEEA" },
  { src: "/images/nuprc-7.png", alt: "NUPRC" },
  { src: "/images/IADC-8.jpg", alt: "IADC" },
  { src: "/images/ASNT-9.jpg", alt: "ASNT" },
  { src: "/images/IRATA-10.png", alt: "IRATA" },
];

const Accredition = () => {
  return (
    <section className="bg-[#0a192f] pt-16  px-6 flex flex-col lg:min-h-screen">
      {/* Heading */}
      <h2 className="text-center font-bold text-3xl text-[#07bc0c] mb-4">
        ACCREDITATIONS & CERTIFICATION
      </h2>

      {/* Intro */}
      <p className=" text-white text-sm sm:text-base max-w-2xl mx-auto mb-2 text-justify">
        Our training programs are recognized and accredited by leading
        organizations, including OSHA and the Federal Ministry of Labour (FML).
      </p>
      <p className="text-justify text-white text-sm sm:text-base max-w-2xl mx-auto mb-12">
        We maintain the highest standards of quality and safety, ensuring that
        our graduates are well-prepared for success in their careers.
      </p>

      {/* Logos Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 place-items-center mb-24 lg:mx-16">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="relative w-full p-4 rounded-lg overflow-hidden bg-white shadow-md cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-[#07bc0c]/20 opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-lg"></div>

            <img
              src={logo.src}
              alt={logo.alt}
              className="relative z-10 max-h-20 object-contain mx-auto"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Accredition;
