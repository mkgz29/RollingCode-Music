const STORAGE_KEY = 'songs';

export function getSongs() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export function saveSongs(songs) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(songs));
};

export function addSong(newSong) {
  const songs = getSongs();

  newSong.id = Date.now();
  songs.push(newSong);

  saveSongs(songs);
}

export function deleteSong(id) {
  const songs = getSongs();

  const updatedSongs = songs.filter(song => song.id !== id);

  saveSongs(updatedSongs);
}
