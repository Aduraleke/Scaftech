// src/pages/Courses/CourseTemplate.jsx
import { useParams } from "react-router-dom";
import coursesData from "../../data/courseData";
import AccreditationSlider from "../../components/AccreditationSlider";
import InfoTwoToneIcon from "@mui/icons-material/InfoTwoTone";
import GraphicEqTwoToneIcon from "@mui/icons-material/GraphicEqTwoTone";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import React from "react";

// Map icon strings -> actual components
const icons = {
  InfoTwoToneIcon,
  GraphicEqTwoToneIcon,
  AccountCircleTwoToneIcon,
};

const CourseTemplate = () => {
  const { coursePath } = useParams();
  const course = coursesData.find((c) => c.path === coursePath);

  if (!course) {
    return <h2 className="text-center text-red-500 mt-10">Course not found</h2>;
  }

  return (
    <div className="w-full bg-[#0a192f] text-white">
      {/* Hero */}
      <section className="relative w-full h-[400px]">
        <img
          className="w-full h-full object-cover opacity-70"
          src={course.heroImage}
          alt={course.title}
        />
        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition duration-300" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5">
          <h1 className="text-3xl md:text-5xl font-bold">{course.title}</h1>
          <p className="mt-4 text-base md:text-lg">
            <span className="text-[#07bc0c] font-bold">Slogan:</span>{" "}
            {course.slogan}
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#07bc0c]">
          Course Contents Overview
        </h2>
        <p className="text-sm md:text-base text-gray-300 leading-relaxed mt-6 text-justify">
          {course.overview}
        </p>
      </section>

      {/* Pre-requisites */}
      {course.prerequisites && (
        <section className="max-w-5xl mx-auto px-6 py-8">
          <h3 className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-[#07bc0c]">
            {course.prerequisites.icon &&
              React.createElement(icons[course.prerequisites.icon])}
            Pre-requisites
          </h3>
          <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
            {course.prerequisites.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Objectives */}
      {course.objectives && (
        <section className="max-w-5xl mx-auto px-6 py-8">
          <h3 className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-[#07bc0c]">
            {course.objectives.icon &&
              React.createElement(icons[course.objectives.icon])}
            Course Objectives
          </h3>
          <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
            {course.objectives.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Audience */}
      {course.audience && (
        <section className="max-w-5xl mx-auto px-6 py-8">
          <h3 className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-[#07bc0c]">
            {course.audience.icon &&
              React.createElement(icons[course.audience.icon])}
            Target Audience
          </h3>
          <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
            {course.audience.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Industries */}
      {course.industries && (
        <section className="max-w-5xl mx-auto px-6 py-8">
          <h3 className="text-xl md:text-2xl font-semibold text-[#07bc0c]">
            Target Industry
          </h3>
          <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
            {course.industries.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Offered Courses */}
      {course.offeredCourses && (
        <section className="max-w-5xl mx-auto px-6 py-8">
          <h3 className="text-xl md:text-2xl font-semibold text-[#07bc0c]">
            Courses Offered
          </h3>
          <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
            {course.offeredCourses.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>
      )}

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

export default CourseTemplate;
