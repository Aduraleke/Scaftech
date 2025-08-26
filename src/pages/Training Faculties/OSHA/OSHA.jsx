import GraphicEqTwoToneIcon from "@mui/icons-material/GraphicEqTwoTone";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import AccreditationSlider from "../../../components/AccreditationSlider";

const Osha = () => {
  return (
    <div className="w-full bg-[#0a192f] text-white">
      {/* Hero Section */}
      <section className="relative w-full h-[400px]">
        <img
          className="w-full h-full object-cover opacity-70"
          src="/fireEquip.jpg"
          alt="Wellbeing and Mental Wellness Training"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5">
          <h1 className="text-2xl md:text-4xl font-bold tracking-wide max-w-4xl">
            WELLBEING AND MENTAL WELLNESS TRAINING
          </h1>
          <p className="mt-4 text-base md:text-lg">
            Our OSHA training is fully accredited by{" "}
            <span className="text-[#07bc0c] font-semibold">
              The American Society for Non Destructive Testing (ASNT)
            </span>
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#07bc0c]">
          Course Contents Overview
        </h2>
        <p className="text-sm md:text-base text-gray-300 leading-relaxed mt-6 text-justify">
          This training is designed to educate and empower individuals and teams
          to understand, manage, and improve their mental, emotional, and social
          wellbeing. It focuses on reducing workplace stress, enhancing
          emotional intelligence, building resilience, and creating a mentally
          supportive work culture.
        </p>
      </section>

      {/* Course Objectives */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-[#07bc0c]">
          <GraphicEqTwoToneIcon /> Course Objectives
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Understand the fundamentals of mental health and wellbeing</li>
          <li>
            Recognize early signs of stress, anxiety, depression, or burnout
          </li>
          <li>Build emotional resilience and self-awareness</li>
          <li>
            Learn strategies for stress management, mindfulness, and work-life
            balance
          </li>
          <li>Promote healthy communication and workplace relationships</li>
          <li>
            Create a supportive and inclusive culture that prioritizes mental
            health
          </li>
        </ul>
      </section>

      {/* Target Audience */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-[#07bc0c]">
          <AccountCircleTwoToneIcon /> Target Audience
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Employees at all levels</li>
          <li>Managers and team leaders</li>
          <li>HR professionals</li>
          <li>Occupational health & safety officers</li>
          <li>
            Anyone looking to improve their personal and professional wellbeing
          </li>
        </ul>
      </section>

      {/* Benefits */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="text-xl md:text-2xl font-semibold text-[#07bc0c]">
          Benefits of Mental Wellness Training
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Reduced absenteeism and turnover</li>
          <li>Improved morale and engagement</li>
          <li>Healthier, more supportive workplace culture</li>
          <li>Boosted productivity and creativity</li>
          <li>Early intervention and coping strategies</li>
          <li>Stronger team communication and empathy</li>
        </ul>
      </section>

      {/* Delivery Formats */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="text-xl md:text-2xl font-semibold text-[#07bc0c]">
          Delivery Formats
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Workshops (on-site or virtual)</li>
          <li>eLearning modules</li>
          <li>Webinars and guest speaker series</li>
          <li>Group activities, guided meditation & reflection sessions</li>
          <li>
            Certification (for Mental Health Awareness or First Aid, depending
            on provider)
          </li>
        </ul>
      </section>

      {/* Practical Add-ons */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="text-xl md:text-2xl font-semibold text-[#07bc0c]">
          📍 Practical Add-ons for Workplace Training
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>Anonymous mental health assessments</li>
          <li>Wellness calendars or journals</li>
          <li>Wellbeing ambassadors or peer support groups</li>
          <li>Weekly “Mindful Mondays” or “Wellbeing Wednesdays”</li>
          <li>Access to mental health support resources or helplines</li>
        </ul>
      </section>

      {/* Courses */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="text-xl md:text-2xl font-semibold text-[#07bc0c]">
          Courses Offered
        </h3>
        <ol className="list-decimal list-inside mt-4 space-y-2 text-gray-300">
          <li>Introduction to Mental Health and Wellbeing</li>
          <li>Common Mental Health Issues in the Workplace</li>
          <li>Self-Care Techniques and Lifestyle Adjustments</li>
          <li>Mindfulness and Stress Reduction Techniques</li>
          <li>Emotional Intelligence and Coping Mechanisms</li>
          <li>How to Support a Colleague or Employee in Distress</li>
          <li>Workplace Boundaries and Preventing Burnout</li>
          <li>Mental Health First Aid (Optional Module)</li>
        </ol>
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

export default Osha;
