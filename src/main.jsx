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

// Training Faculties
import LiftingOperation from "./pages/Training Faculties/Lifting Operation & Basic Rigger/LiftingOperations.jsx";
import QAQCInpector from "./pages/Training Faculties/QA/QC Training/Inspector Training.jsx";
import HeavyEquipment from "./pages/Training Faculties/Heavy Equipment Training/Cranes,Forklifs,Trailors.jsx";
import BlastingandPainting from "./pages/Training Faculties/IWCF/Blasting and Painting Training/Blastingandpainting.jsx";
import HealthandSafety from "./pages/Training Faculties/Health and Safety/Health and Safety.jsx";
import WorkatHeight from "./pages/Training Faculties/Work at Height/ScaffoldingInspection.jsx";
import Osha from "./pages/Training Faculties/OSHA/OSHA.jsx";
import TowerCrane from "./pages/Training Faculties/Tower Crane Training/TowerCrane.jsx";
import MobileElevated from "./pages/Training Faculties/Mobile Elevated Work Platform/MobileElevated.jsx";
import FireWarden from "./pages/Training Faculties/Fire Warden and Marshal Traning/FireWarden.jsx";
import Rigger from "./pages/Training Faculties/Rigger/Rigger.jsx";
import LiftingSpecialist from "./pages/Training Faculties/IWCF copy/Lifting Specialist/LiftingSpecailist.jsx";
import NDT from "./pages/Training Faculties/Non-Destructive-Testing Traning/NDT.jsx";
import LeadershipAccount from "./pages/Training Faculties/Leadership and Accountability/LeadershipandAccountability.jsx";
import DefensiveDriving from "./pages/Training Faculties/Defensive Driving & Harzard/DefensiveDriving&Hazard.jsx";
import MentalReadiness from "./pages/Training Faculties/Mental Readiness Traning/MentalReadiness&Ergonomics.jsx";
import SystemAudit from "./pages/Training Faculties/System Audit and Gap Traning/SystemAudit&Skills.jsx";
import EquipmentOperation from "./pages/Training Faculties/Equipment Operation/EquipOperation.jsx";
import SustainableConstruction from "./pages/Training Faculties/Sustainable Contruction Traning/SustainableConstruction.jsx";
import Safety from "./pages/Training Faculties/Safety HSE Traning/Safety.jsx";
import ConfinedSpace from "./pages/Training Faculties/Confined Space Traning/ConfinedSpace.jsx";
import SkilledOperation from "./pages/Training Faculties/Skilled Operation Traning/SkilledOperation.jsx";
import Customized from "./pages/Training Faculties/Customized Traning/Customized.jsx";
import LiftingPlan from "./pages/Training Faculties/Lifting Plan Traning/LiftingPlan.jsx";

// Online
import FreeResources from "./pages/Online/Free_Resourses/FreeResources.jsx";


// Policies
import TermsofServices from "./pages/Training Faculties/Terms of Services/termsofservices.jsx";
import PrivacyPolicy from "./pages/Training Faculties/Privacy Policy/privacypolicy.jsx";
import WeldingTraining from "./pages/Training Faculties/Welding Training/WeldingTraning.jsx";


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
      <Route path="/Courses/lifting-operation" element={<LiftingOperation />} />
      <Route path="/Courses/inspector-training" element={<QAQCInpector />} />
      <Route path="/Courses/heavy-equipment" element={<HeavyEquipment />} />
      <Route
        path="/Courses/blasting-painting"
        element={<BlastingandPainting />}
      />
      <Route path="/Courses/health-safety" element={<HealthandSafety />} />
      <Route path="/Courses/work-height" element={<WorkatHeight />} />
      <Route path="/Courses/osha" element={<Osha />} />
      <Route path="/Courses/tower-crane" element={<TowerCrane />} />
      <Route path="/Courses/mobile-elevated" element={<MobileElevated />} />
      <Route path="/Courses/fire-warden" element={<FireWarden />} />
      <Route path="/Courses/rigger" element={<Rigger />} />
      <Route
        path="/Courses/lifting-specialist"
        element={<LiftingSpecialist />}
      />
      <Route path="/Courses/ndt" element={<NDT />} />
      <Route
        path="/Courses/leadership-accountability"
        element={<LeadershipAccount />}
      />
      <Route path="/Courses/defensive-driving" element={<DefensiveDriving />} />
      <Route path="/Courses/welding" element={<WeldingTraining />} />
      <Route path="/Courses/mental-readiness" element={<MentalReadiness />} />
      <Route path="/Courses/system-audit" element={<SystemAudit />} />
      <Route
        path="/Courses/equipment-operation"
        element={<EquipmentOperation />}
      />
      <Route
        path="/Courses/sustainable-construction"
        element={<SustainableConstruction />}
      />
      <Route path="/Courses/safety" element={<Safety />} />
      <Route path="/Courses/confined-space" element={<ConfinedSpace />} />
      <Route path="/Courses/skilled-operation" element={<SkilledOperation />} />
      <Route path="/Courses/customized" element={<Customized />} />
      <Route path="/Courses/lifting-plan" element={<LiftingPlan />} />

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
