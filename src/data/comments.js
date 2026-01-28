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


export function getRandomComments(amount = 25) {
  return COMMENTS
    .sort(() => 0.5 - Math.random())
    .slice(0, amount);
}