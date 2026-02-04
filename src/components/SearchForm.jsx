import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";

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
    <form
      ref={formRef}
      className="d-flex w-50 mx-auto mt-4 position-relative"
      role="search"
      onSubmit={handleSubmit}
    >
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search songs, artists, albums..."
        aria-label="Search"
        value={searchTerm}
        onChange={handleChange}
        style={{ paddingLeft: "40px" }}
        onKeyDown={handleKeyDown}
      />
      {showSuggestions && suggestions.length > 0 && (
  <ul className="search-suggestions text-start">
    
    {suggestions.map((s, i) => (
      <li
        key={i}
        className={i === activeIndex ? "active" : ""}
        onMouseEnter={() => setActiveIndex(i)}
        onClick={() => handleSuggestionClick(s)}
      >
      <IoIosSearch
        size={20}
        style={{
          marginRight: "8px",
          color: "#888",
        }}
      />{s}
      </li>
    ))}
  </ul>
)}
      <IoIosSearch
        size={20}
        style={{
          position: "absolute",
          left: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          color: "#888",
        }}
      />
    </form>
  );
};

export default SearchForm;