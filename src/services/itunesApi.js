const BASE = "https://itunes.apple.com/search";

export async function searchSongs(term, limit = 12) {
  const q = encodeURIComponent(term.trim());
  const url = `${BASE}?term=${q}&entity=song&limit=${limit}`; /* Construccion final de la url */

  const res = await fetch(url); /* Peticion HTTP a la api */
  if (!res.ok) throw new Error("Error consultando iTunes API");

  const data = await res.json();


  return (data.results || []).map((item) => ({
    id: String(item.trackId), 
    title: item.trackName || "Sin título",
    artist: item.artistName || "Sin artista",
    audio: item.previewUrl || "",
    video: item.previewUrl || "",
    image: item.artworkUrl100
    ? item.artworkUrl100.replace("100x100", "600x600")
    : "",
  }));
}
