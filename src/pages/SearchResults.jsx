import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "../components/navbar";
import SearchResultsList from "../components/SearchSongList";
import { searchSongs } from "../services/itunesApi";
import SearchForm from "../components/SearchForm";
import { motion } from "framer-motion";

const SearchResults = () => {
  const [params] = useSearchParams();
  const q = params.get("q") || "";
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const run = async () => {
      if (!q.trim()) {
        setLoading(false);
        return;
      }
      try {
        setLoading(true);
        const results = await searchSongs(q, 18);
        setSongs(results.filter((s) => s.audio));
      } catch (e) {
        console.error(e);
        setSongs([]);
      } finally {
        setLoading(false);
      }
    };

    run();
  }, [q]);

  return (
    <>
      <Navbar />
      

      <div style={{ marginLeft: "0", background: "linear-gradient(180deg, #0a0a0a 0%, #000000 100%)", overflowX: "hidden", width: "100%" }} className="ms-lg-0 ps-lg-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="content-wrapper"
          id="homewrapper"
          style={{ paddingLeft: "0", paddingTop: "60px", minHeight: "100vh", overflowX: "hidden", width: "100%" }}
        >
          <SearchForm />
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="container mt-4"
          >
            <h1 
              className="text-white fw-bold mb-4" 
              style={{
                fontSize: "2rem",
                background: "linear-gradient(135deg, #fff 0%, #ff021b 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
            >
              Results for: {q}
            </h1>
          </motion.div>
          <SearchResultsList songs={songs} loading={loading} />
        </motion.div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          #homewrapper { margin-left: 270px !important; }
        }
      `}</style>
    </>
  );
};

export default SearchResults;