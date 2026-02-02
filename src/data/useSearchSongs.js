import { useState } from "react";
import { searchSongs } from "../services/itunesApi";

export function useSongSearch() {
  const [songs, setSongs] = useState([]);

  const handleSearch = async (term) => {
    const results = await searchSongs(term, 18);
    setSongs(results);
  };

  return { songs, handleSearch };
}