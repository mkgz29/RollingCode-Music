import Navbar from "../components/navbar";
import Songlist from "../components/Songlist";
import SearchForm from "../components/SearchForm";
import { useState } from "react";

const Home = () => {
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  return (
    <>
      <Navbar onSearchToggle={() => setShowMobileSearch(!showMobileSearch)} />

      <div style={{ marginLeft: "0" }} className="ms-lg-0 ps-lg-0">
        <div
          className="content-wrapper"
          id="homewrapper"
          style={{ paddingLeft: "0", paddingTop: showMobileSearch ? "0" : "60px" }}
        >
          <div
            className={`${showMobileSearch ? "d-block" : "d-none"} d-lg-block`}
          >
            <SearchForm />
          </div>

          <Songlist />
        </div>
      </div>
      <style>{`
                @media (min-width: 992px) {
                #homewrapper {
                margin-left: 250px !important;
                }
                }
            `}</style>
    </>
  );
};

export default Home;
