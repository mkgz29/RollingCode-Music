export const COMMENTS = [
  "🔥 Tremendo tema",
  "No me canso de escucharlo",
  "Esto en vivo debe ser una locura",
  "Alta vibra",
  "Me trae recuerdos",
  "Temazo mal",
  "La rompieron toda",
"Muy buen beat",
  "Ideal para escuchar de noche",
  "Se siente mucho este tema",
  "Qué buena producción",
  "Este artista nunca falla",
  "Lo escucho en loop",
  "Subí el volumen 🔊",
  "Esto es arte",
  "Me pone de buen humor",
  "Perfecto para viajar",
  "Se escucha increíble con auriculares",
  "No lo puedo sacar de la cabeza",
  "Qué letra tan buena",

  "Este tema envejece bien",
  "De los mejores del álbum",
  "Infravalorado",
  "Tiene algo especial",
  "Me gusta más cada vez que lo escucho",
  "Arranca tranqui y después explota",
  "Muy buena combinación de voces",
  "Gran instrumental",
  "Esto suena fuerte",
  "Alta producción",

  "Lo descubrí hace poco y me encantó",
  "Nunca me aburre",
  "Ideal para escuchar solo",
  "Me acompaña mucho este tema",
  "Esto merece más reconocimiento",
  "Suena muy limpio",
  "Gran trabajo del productor",
  "Tiene mucha personalidad",
  "Re pegadizo",
  "Esto es calidad",

  "Lo escucho siempre",
  "Buenísimo para entrenar",
  "Me transmite mucho",
  "Muy bien logrado",
  "Esto en el auto suena increíble",
  "Alta energía",
  "Hermosa canción",
  "Se nota el laburo detrás",
  "Muy disfrutable",
  "Una joyita",
];


export const RANDOM_NAMES = [
  "juanperez_98",
  "mica.music",
  "nico_dev",
  "lautaro.ok",
  "sofi.vibes",
  "fede.ar",
  "agus.mp3",
  "tomi_rock",
  "valen.sounds",
  "bruno.wav",
  "camila_lofi",
  "gonza_beat",
  "paz.audio",
  "nacho.fx",
  "martu.play",
  "lean.flow",
  "luchi.music",
  "santi.remix",
  "ema_bass",
  "flor.chill",

  "franco_23",
  "lucas.mtz",
  "marcos_beat",
  "agus_ok",
  "valen.ar",
  "nico_1999",
  "tomas.wav",
  "lean_mx",
  "fede.loops",
  "martin.play",

  "sofia_rock",
  "camilo_beat",
  "brisa.chill",
  "rodrigo_fx",
  "lucio.dev",
  "pablo.ar",
  "mati.mp3",
  "juli.wav",
  "nahuel.music",
  "cris.flow",

  "lucas_ok",
  "ramiro_beat",
  "ignacio.ar",
  "seba.sound",
  "kevin.mp3",
  "emanuel_lofi",
  "fran.play",
  "axel.wav",
  "nico_sounds",
  "joaco.fx",

  "martu.ok",
  "agus.stereo",
  "flor_98",
  "vale.music",
  "santi.ar",
  "tobi.beats",
  "maxi.flow",
  "lean.chill",
  "julian_fx",
  "dami.wav"
];

const TIMES = [  "hace unos segundos",
  "hace 1 min",
  "hace 2 min",
  "hace 3 min",
  "hace 5 min",
  "hace 8 min",
  "hace 10 min",
  "hace 15 min",
  "hace 20 min",
  "hace 30 min",
  "hace 45 min",

  "hace 1 hora",
  "hace 2 horas",
  "hace 3 horas",
  "hace 4 horas",
  "hace 6 horas",
  "hace 8 horas",
  "hace 10 horas",
  "hace 12 horas",
  "hace 18 horas",
  "hace 23 horas",

  "hace 1 día",
  "hace 2 días",
  "hace 3 días",
  "hace 4 días",
  "hace 5 días",
  "hace 1 semana",
  "hace 2 semanas",
  "hace 3 semanas",

  "hace 1 mes",
  "hace 2 meses",
  "hace 3 meses",
  "hace 6 meses",
  "hace 9 meses",
  "hace 1 año"];

  function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function avatarUrl(seed) {
  return `https://api.dicebear.com/7.x/thumbs/svg?seed=${encodeURIComponent(seed)}`;
}

export function getRandomComments(songId, amount = 50) {
  const usedNames = new Set();
  const comments = [];

  for (let i = 0; i < amount; i++) {
    let name = pick(RANDOM_NAMES);

    while (usedNames.has(name)) {
      name = pick(RANDOM_NAMES);
    }

    usedNames.add(name);

    const seed = `${songId}-${name}`;

    comments.push({
      id: `${seed}-${i}`,
      name,
      time: pick(TIMES),
      text: pick(COMMENTS),
      avatar: avatarUrl(seed),
    });
  }

  return comments;
}