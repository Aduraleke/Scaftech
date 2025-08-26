import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import RootRoute from "./route/RootRoute.jsx";

// Pages
import Home from "./pages/Home.jsx";
import About_us from "./pages/About_us/About_us";
import Accredition from "./pages/Accreditions/Accredition.jsx";
import Courses from "./pages/Courses/Courses.jsx";
import Certificate from "./pages/Verify Certificate/Certificate.jsx";
import Contact_Us from "./pages/Contact Us/Contact_Us.jsx";
import Blog from "./pages/Blog/Blog.jsx";
import OnlineCourses from "./pages/Online/Online_Courses/OnlineCourses.jsx";

// Online
import FreeResources from "./pages/Online/Free_Resourses/FreeResources.jsx";

// Policies
import TermsofServices from "./pages/Terms of Services/termsofservices.jsx";
import PrivacyPolicy from "./pages/Privacy Policy/privacypolicy.jsx";

import CourseTemplate from "./components/CourseTemplate/Coursetemplate.js";

// Router setup
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootRoute />}>
      {/* Main Pages */}
      <Route index element={<Home />} />
      <Route path="about-us" element={<About_us />} />
      <Route path="Courses" element={<Courses />} />
      <Route path="accredition" element={<Accredition />} />
      <Route path="online" element={<OnlineCourses />} />
      <Route path="certificate" element={<Certificate />} />
      <Route path="contact-us" element={<Contact_Us />} />
      <Route path="blog" element={<Blog />} />

      {/* Training Faculties */}
      <Route path="/Courses/:coursePath" element={<CourseTemplate />} />

      {/* Online */}
      <Route path="free-resources" element={<FreeResources />} />
      <Route path="online-courses" element={<OnlineCourses />} />

      {/* Policies */}
      <Route path="terms-of-services" element={<TermsofServices />} />
      <Route path="privacy-policy" element={<PrivacyPolicy />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
