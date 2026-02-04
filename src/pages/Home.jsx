import Navbar from "../components/Navbar";
import Songlist from "../components/Songlist";
import SearchForm from "../components/SearchForm";
import { useState } from "react";
import { motion } from "framer-motion";

const Home = () => {
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  return (
    <>
      <Navbar onSearchToggle={() => setShowMobileSearch(!showMobileSearch)} />

      <div
        style={{ marginLeft: "0", background: "linear-gradient(180deg, #0a0a0a 0%, #000000 100%)", overflowX: "hidden", width: "100%" }}
        className="ms-lg-0 ps-lg-0"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="content-wrapper"
          id="homewrapper"
          style={{
            paddingLeft: "0",
            paddingTop: showMobileSearch ? "0" : "20px",
            minHeight: "100vh",
            overflowX: "hidden",
            width: "100%"
          }}
        >
          <div
            className={`${showMobileSearch ? "d-block" : "d-none"} d-lg-block`}
          >
            <SearchForm />
          </div>

          <Songlist />
        </motion.div>
      </div>
      <style>{`
                @media (min-width: 992px) {
                #homewrapper {
                margin-left: 270px !important;
                }
                }
            `}</style>
    </>
  );
};

export default Home;
