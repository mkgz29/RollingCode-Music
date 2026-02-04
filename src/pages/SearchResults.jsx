import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "../components/navbar";
import SearchResultsList from "../components/SearchSongList";
import { searchSongs } from "../services/itunesApi";
import SearchForm from "../components/SearchForm";

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
      

      <div style={{ marginLeft: "0" }} className="ms-lg-0 ps-lg-0">
        <div
          className="content-wrapper"
          id="homewrapper"
          style={{ paddingLeft: "0" }}
        ><SearchForm />
          <h1 className="mx-auto text-white opacity-75 fs-4 m-4">Results for: {q}</h1>
          <SearchResultsList songs={songs} loading={loading} />
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          #homewrapper { margin-left: 250px !important; }
        }
      `}</style>
    </>
  );
};

export default SearchResults;