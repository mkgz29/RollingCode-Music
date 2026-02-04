import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { motion } from "framer-motion";

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const formRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setShowSuggestions(false);
        setActiveIndex(-1);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

const handleChange = (e) => {
  const value = e.target.value;
  setSearchTerm(value);

  fetchSuggestions(value);
};

  const handleSubmit = (e) => {
    e.preventDefault();
    const term = searchTerm.trim();
    if (!term) return;

    setShowSuggestions(false);
    setSuggestions([]);
    setActiveIndex(-1);
    navigate(`/search?q=${encodeURIComponent(term)}`);
  };

  const fetchSuggestions = async (value) => {
  if (value.length < 2) {
    setSuggestions([]);
    setShowSuggestions(false);
    return;
  }

  try {
    const res = await fetch(
      `https://itunes.apple.com/search?term=${encodeURIComponent(
        value
      )}&entity=musicArtist&limit=6`
    );
    const data = await res.json();

    setSuggestions(
      data.results.map((r) => r.artistName)
    );
    setShowSuggestions(true);
  } catch (e) {
    console.error(e);
  }
};

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setShowSuggestions(false);
    setSuggestions([]);
    setActiveIndex(-1);
    navigate(`/search?q=${encodeURIComponent(suggestion)}`);
  };

  const handleKeyDown = (e) => {
  if (!suggestions.length) return;

  if (e.key === "ArrowDown") {
    e.preventDefault();
    setActiveIndex((prev) =>
      prev < suggestions.length - 1 ? prev + 1 : 0
    );
  }

  if (e.key === "ArrowUp") {
    e.preventDefault();
    setActiveIndex((prev) =>
      prev > 0 ? prev - 1 : suggestions.length - 1
    );
  }

  if (e.key === "Enter" && activeIndex >= 0) {
    e.preventDefault();
    const selected = suggestions[activeIndex];
    handleSuggestionClick(selected);
  }

  if (e.key === "Escape") {
    setShowSuggestions(false);
    setActiveIndex(-1);
  }
};

  return (
    <motion.form
      ref={formRef}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="d-flex mx-auto mt-4 position-relative"
      role="search"
      onSubmit={handleSubmit}
      style={{ 
        maxWidth: "700px",
        width: "90%"
      }}
    >
      <div className="position-relative w-100">
        <motion.input
          whileFocus={{ scale: 1.01 }}
          className="form-control"
          type="search"
          placeholder="Search songs, artists, albums..."
          aria-label="Search"
          value={searchTerm}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          style={{ 
            paddingLeft: "55px",
            paddingRight: "20px",
            height: "55px",
            fontSize: "1rem",
            background: "#1a1a1a",
            border: "2px solid #333",
            borderRadius: "30px",
            color: "#ffffff",
            transition: "all 0.3s ease",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)"
          }}
          onFocus={(e) => {
            e.target.style.border = "2px solid #ff021b";
            e.target.style.boxShadow = "0 4px 20px rgba(255, 2, 27, 0.3)";
          }}
          onBlur={(e) => {
            e.target.style.border = "2px solid #333";
            e.target.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.2)";
          }}
        />
        {showSuggestions && suggestions.length > 0 && (
          <motion.ul 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "absolute",
              top: "calc(100% + 10px)",
              left: 0,
              right: 0,
              background: "#1a1a1a",
              border: "2px solid #333",
              borderRadius: "20px",
              listStyle: "none",
              margin: 0,
              padding: "10px",
              zIndex: 1000,
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.5)",
              maxHeight: "300px",
              overflowY: "auto"
            }}
          >
            {suggestions.map((s, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: i * 0.03 }}
                whileHover={{ 
                  backgroundColor: "rgba(255, 2, 27, 0.1)",
                  x: 5
                }}
                className={i === activeIndex ? "active" : ""}
                onMouseEnter={() => setActiveIndex(i)}
                onClick={() => handleSuggestionClick(s)}
                style={{
                  padding: "12px 15px",
                  cursor: "pointer",
                  borderRadius: "12px",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  transition: "all 0.2s ease",
                  backgroundColor: i === activeIndex ? "rgba(255, 2, 27, 0.15)" : "transparent",
                  fontWeight: "500"
                }}
              >
                <IoIosSearch
                  size={20}
                  style={{
                    marginRight: "12px",
                    color: i === activeIndex ? "#ff021b" : "#888",
                    transition: "color 0.2s ease"
                  }}
                />
                {s}
              </motion.li>
            ))}
          </motion.ul>
        )}
        <div
          style={{
            position: "absolute",
            left: "20px",
            top: "0",
            bottom: "0",
            pointerEvents: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <IoIosSearch
            size={22}
            style={{
              color: "#999"
            }}
          />
        </div>
      </div>
    </motion.form>
  );
};

export default SearchForm;