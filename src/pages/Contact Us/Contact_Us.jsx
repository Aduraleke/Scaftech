import { useState, useRef } from "react";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";


const CalltoAction = () => {
  const formRef = useRef(null);
  const [faqOpen, setFaqOpen] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const offices = [
    {
      name: "Lagos Office",
      address:
        "Office 27, Ringback mall, Beside Mobil Filling Station, Oribanwa Bus-stop, Ibeju-Lekki Lagos",
      phone: "+2348161637797",
      email: "info@scaftechservices.com",
      image: "/Lagos-Picture2.png",
    },
    {
      name: "Port Harcourt Office",
      address: "Block 6, 3rd Avenue Elekahia Housing Estate, Port Harcourt",
      phone: "+2347086419457",
      email: "info@scaftechservices.com",
      image: "/PH-Picture2.jpg",
    },
    {
      name: "Abuja Office",
      address: "No 29, Ndola Crescent, Wuse Zone 6",
      phone: "+2347086419457",
      email: "info@scaftechservices.com",
      image: "/uganda-picture.jpeg",
    },
  ];

  const faqs = [
    {
      question: "Are there any prerequisites for enrolling in training?",
      answer:
        "Some advanced programs may require basic technical skills or prior certifications. These details are listed on the course pages. For beginners, we offer entry-level courses with no prior experience required.",
    },
    {
      question: "Does Scaftech offer job placement after training?",
      answer:
        "While we do not guarantee placements, we provide networking opportunities, industry connections, and certifications that enhance employability.",
    },
    {
      question: "What industries do Scaftech's training programs serve?",
      answer:
        "We serve professionals in oil & gas, marine, construction, and related industries. Our focus is on safety, operational efficiency, and compliance.",
    },
    {
      question: "Can I book custom training for my company?",
      answer:
        "Absolutely! We offer customized training programs tailored to your company's specific needs, with certifications issued upon completion.",
    },
    {
      question: "What qualifications do Scaftech instructors hold?",
      answer:
        "Our instructors hold certifications from globally recognized bodies such as ASNT, IWCF, OPITO, IRATA, IADC, and NPORS, and bring years of field experience.",
    },
  ];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.company.trim())
      newErrors.company = "Company name is required";
    if (!formData.location.trim()) newErrors.location = "Location is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // submit form logic here
      setSubmitted(true);
      console.log("Form submitted:", formData);
      setFormData({
        name: "",
        email: "",
        company: "",
        location: "",
        message: "",
      });
    }
  };

  return (
    <div>
      {/* CTA Section */}
      <section className="bg-[#0a192f] py-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#07bc0c]">
            Contact us today to learn more about our training
          </h2>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-6 px-6">
          <a
            href="https://calendly.com/consult-scaftechservices/30-minute-consultation-with-a-scaftech-representative"
            className="bg-[#07bc0c] text-[#0a192f] font-semibold text-sm px-6 py-3 rounded-full hover:bg-[#fff] hover:text-[#07bc0c] shadow transition-transform transform hover:scale-105"
          >
            Request a Free Consultation
          </a>
          <button className="bg-[#07bc0c] text-[#0a192f] font-semibold text-sm px-6 py-3 rounded-full hover:bg-[#fff] hover:text-[#07bc0c] shadow transition-transform transform hover:scale-105">
            Download Our Training Brochure
          </button>
          <button
            onClick={() =>
              formRef.current?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-[#07bc0c] text-[#0a192f] font-semibold text-sm px-6 py-3 rounded-full hover:bg-[#fff] hover:text-[#07bc0c] shadow transition-transform transform hover:scale-105"
          >
            Register for an Upcoming Course
          </button>
        </div>

        {/* Office Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
          {offices.map((office, index) => (
            <div
              key={index}
              className="relative h-96 bg-cover bg-center rounded-xl shadow-lg flex items-end"
              style={{ backgroundImage: `url('${office.image}')` }}
            >
              <div className="bg-[#fff] bg-opacity-90 p-5 rounded-lg m-5 w-full">
                <h3 className="text-xl font-bold text-[#0a192f] mb-2">
                  {office.name}
                </h3>
                <p className="text-sm text-[#0a192f]">{office.address}</p>
                <a
                  href={`tel:${office.phone}`}
                  className=" mt-3 text-[#0a192f] hover:text-[#07bc0c] flex items-center"
                >
                  <CallIcon className="mr-1" /> {office.phone}
                </a>
                <a
                  href={`mailto:${office.email}`}
                  className=" mt-1 text-[#0a192f] hover:text-[#07bc0c] flex items-center"
                >
                  <EmailIcon className="mr-1" /> {office.email}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="text-center mt-20" ref={formRef}>
          <h2 className="text-3xl font-semibold text-[#07bc0c]">
            Leave Us a Message
          </h2>
        </div>
        {submitted && (
          <p className="text-green-400 mt-4 text-center">
            Your message has been sent!
          </p>
        )}
        <form
          className="mt-10 max-w-lg mx-auto space-y-6 px-6"
          onSubmit={handleSubmit}
        >
          {[
            { label: "Name", name: "name" },
            { label: "Email", name: "email" },


          ].map((field, index) => (
            <div key={index}>
              <label
                htmlFor={field.name}
                className="block text-sm font-medium text-[#fff]"
              >
                {field.label}
              </label>
              <input
                type="text"
                id={field.name}
                name={field.name}
                placeholder={field.label}
                value={formData[field.name]}
                onChange={handleInputChange}
                className={`mt-2 w-full rounded-md bg-[#fff] border px-3 py-2 text-[#0a192f] placeholder-[#0a192f] focus:outline-none focus:ring-2 focus:ring-[#07bc0c] ${
                  errors[field.name] ? "border-red-500" : "border-[#07bc0c]"
                }`}
              />
              {errors[field.name] && (
                <p className="text-red-500 text-sm mt-1">
                  {errors[field.name]}
                </p>
              )}
            </div>
          ))}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-[#fff]"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Your message..."
              value={formData.message}
              onChange={handleInputChange}
              className={`mt-2 w-full rounded-md bg-[#fff] border px-3 py-2 text-[#0a192f] placeholder-[#0a192f] focus:outline-none focus:ring-2 focus:ring-[#07bc0c] ${
                errors.message ? "border-red-500" : "border-[#07bc0c]"
              }`}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-[#07bc0c] text-[#0a192f] font-semibold py-3 rounded-lg hover:bg-[#fff] hover:text-[#07bc0c] transition-colors"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#0a192f] py-16 px-6 text-center">
        <h2 className="text-2xl font-bold text-[#07bc0c] mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-[#fff] mb-10">
          Some of your common questions answered
        </p>
        <div className="max-w-3xl mx-auto space-y-4 text-left">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-[#1f2a3a] p-6 rounded-md shadow-lg cursor-pointer"
              onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-[#07bc0c]">
                  {faq.question}
                </h3>
                <span className="text-2xl">{faqOpen === idx ? "−" : "+"}</span>
              </div>
              {faqOpen === idx && (
                <p className="mt-3 text-sm text-[#fff]">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CalltoAction;
