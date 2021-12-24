import { AnimatePresence } from "framer-motion";

import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";

const Page: React.FC = ({ children }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <div className="max-w-screen-2xl mx-auto">
        <Navbar />
        {children}
        <Footer />
      </div>
    </AnimatePresence>
  );
};

export default Page;
