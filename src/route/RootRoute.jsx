import { Outlet } from "react-router-dom";
import Nav from "../components/Header/Nav";
import Footer from "../components/Footer/Footer";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const RootRoute = () => {
  return (
    <div className="relative">
      <Nav />

      <div className="min-h-screen flex flex-col">
        <Outlet />
      </div>

      <Footer />

      {/* WhatsApp Floating 3D Icon */}
      <motion.a
        href="https://api.whatsapp.com/send/?phone=%2B2348061928187&text&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-green-500 p-4 rounded-full shadow-lg z-50 cursor-pointer"
        animate={{
          y: [0, -10, 0], // vertical bounce
          rotate: [0, 10, -10, 0], // slight rotation
          scale: [1, 1.1, 1, 1.1], // scaling for 3D pop effect
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      >
        <FaWhatsapp className="text-white text-2xl" />
      </motion.a>
    </div>
  );
};

export default RootRoute;
