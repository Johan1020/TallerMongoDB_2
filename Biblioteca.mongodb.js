use("Colegio_2");
// db.Biblioteca.insertMany([
//   {
//     titulo: "El Viaje Eterno",
//     editorial: "Libros Universales",
//     publicacion: 2020,
//     paginas: 300,
//     idiomas: {
//       primer_idioma: "Español",
//       segundo_idioma: "Ingles",
//     },
//   },
//   {
//     titulo: "Le Monde Magique",
//     editorial: "Editions de Paris",
//     publicacion: 2021,
//     paginas: 280,
//     idiomas: {
//       primer_idioma: "Español",
//       segundo_idioma: "Frances",
//     },
//   },
//   {
//     titulo: "La Ultima Aventura",
//     editorial: "Editorial Fantastica",
//     publicacion: 2019,
//     paginas: 255,
//     idiomas: {
//       primer_idioma: "Español",
//       segundo_idioma: "Ingles",
//     },
//   },
//   {
//     titulo: "Voyage dans le Temps",
//     editorial: "Editions de Lyon",
//     publicacion: 2023,
//     paginas: 320,
//     idiomas: {
//       primer_idioma: "Español",
//       segundo_idioma: "Frances",
//     },
//   },
//   {
//     titulo: "El Enigma",
//     editorial: "Misterio Editorial",
//     publicacion: 2022,
//     paginas: 210,
//     idiomas: {
//       primer_idioma: "Español",
//     },
//   },
//   {
//     titulo: "Riddles and Puzzles",
//     editorial: "Puzzle Press",
//     publicacion: 2020,
//     paginas: 280,
//     idiomas: {
//       primer_idioma: "Español",
//       segundo_idioma: "Ingles",
//     },
//   },
//   {
//     titulo: "Aventuras en el Espacio",
//     editorial: "Galaxy Books",
//     publicacion: 2021,
//     paginas: 350,
//     idiomas: {
//       primer_idioma: "Español",
//       segundo_idioma: "Ingles",
//     },
//   },
//   {
//     titulo: "Les Mysteres de Paris",
//     editorial: "Librairie Francaise",
//     publicacion: 2019,
//     paginas: 240,
//     idiomas: {
//       primer_idioma: "Español",
//       segundo_idioma: "Frances",
//     },
//   },
//   {
//     titulo: "The Time Traveler's Guide",
//     editorial: "Chronicle Publishing",
//     publicacion: 2023,
//     paginas: 300,
//     idiomas: {
//       primer_idioma: "Español",
//       segundo_idioma: "Ingles",
//     },
//   },
//   {
//     titulo: "Historias de Fantasmas",
//     editorial: "Editorial de Terror",
//     publicacion: 2022,
//     paginas: 275,
//     idiomas: {
//       primer_idioma: "Español",
//     },
//   },
//   {
//     titulo: "Mysteries of the Unknown",
//     editorial: "Enigma Press",
//     publicacion: 2020,
//     paginas: 290,
//     idiomas: {
//       primer_idioma: "Español",
//       segundo_idioma: "Ingles",
//     },
//   },
//   {
//     titulo: "Aventuras en el Amazonas",
//     editorial: "Selva Libros",
//     publicacion: 2021,
//     paginas: 320,
//     idiomas: {
//       primer_idioma: "Español",
//       segundo_idioma: "Potugues",
//     },
//   },
//   {
//     titulo: "Les Contes Magiques",
//     editorial: "Contes de Fees",
//     publicacion: 2018,
//     paginas: 260,
//     idiomas: {
//       primer_idioma: "Español",
//       segundo_idioma: "Frances",
//     },
//   },
//   {
//     titulo: "The Mysterious Mansion",
//     editorial: "Mansion Books",
//     publicacion: 2022,
//     paginas: 310,
//     idiomas: {
//       primer_idioma: "Español",
//       segundo_idioma: "Ingles",
//     },
//   },
//   {
//     titulo: "Aventuras en el Desierto",
//     editorial: "Arena Editorial",
//     publicacion: 2019,
//     paginas: 245,
//     idiomas: {
//       primer_idioma: "Español",
//       segundo_idioma: "Arabe",
//     },
//   },
//   {
//     titulo: "La Foret Enchantee",
//     editorial: "Foret Editions",
//     publicacion: 2020,
//     paginas: 270,
//     idiomas: {
//       primer_idioma: "Español",
//       segundo_idioma: "Frances",
//     },
//   },
//   {
//     titulo: "The Haunted Castle",
//     editorial: "Castle Books",
//     publicacion: 2021,
//     paginas: 290,
//     idiomas: {
//       primer_idioma: "Español",
//       segundo_idioma: "Ingles",
//     },
//   },
//   {
//     titulo: "Viaje al Futuro",
//     editorial: "Futuristic Press",
//     publicacion: 2023,
//     paginas: 330,
//     idiomas: {
//       primer_idioma: "Español",
//       segundo_idioma: "Ingles",
//     },
//   },
//   {
//     titulo: "Les Secrets de l'Egypte Ancienne",
//     editorial: "Pharaon Editions",
//     publicacion: 2022,
//     paginas: 300,
//     idiomas: {
//       primer_idioma: "Español",
//       segundo_idioma: "Frances",
//     },
//   },
//   {
//     titulo: "The Lost City",
//     editorial: "Explorer Publishing",
//     publicacion: 2018,
//     paginas: 250,
//     idiomas: {
//       primer_idioma: "Español",
//       segundo_idioma: "Ingles",
//     },
//   },
//   {
//     titulo: "Aventuras en la Selva Amazonica",
//     editorial: "Amazon Jungle",
//     publicacion: 2021,
//     paginas: 310,
//     idiomas: {
//       primer_idioma: "Español",
//       segundo_idioma: "Portugues",
//     },
//   },
//   //   21 DATOS
//   {
//     titulo: "El Castillo Encantado",
//     editorial: "Libros Fantasticos",
//     publicacion: 2022,
//     paginas: 280,
//     idiomas: {
//       primer_idioma: "Español",
//       segundo_idioma: "Ingles",
//     },
//   },
//   {
//     titulo: "L'Enigme de la Tour",
//     editorial: "Editions Mystere",
//     publicacion: 2021,
//     paginas: 260,
//     idiomas: {
//       primer_idioma: "Frances",
//     },
//   },
//   {
//     titulo: "The Forbidden Forest",
//     editorial: "Enchanted Tales",
//     publicacion: 2020,
//     paginas: 290,
//     idiomas: {
//       primer_idioma: "Ingles",
//     },
//   },
//   {
//     titulo: "Misterios del Pasado",
//     editorial: "Editorial Historica",
//     publicacion: 2022,
//     paginas: 270,
//     idiomas: {
//       primer_idioma: "Español",
//     },
//   },
//   {
//     titulo: "Voyage au Centre de la Terre",
//     editorial: "Editions Parisienne",
//     publicacion: 2019,
//     paginas: 310,
//     idiomas: {
//       primer_idioma: "Frances",
//     },
//   },
//   {
//     titulo: "The Haunting of Hill House",
//     editorial: "Horror Publications",
//     publicacion: 2021,
//     paginas: 300,
//     idiomas: {
//       primer_idioma: "Ingles",
//     },
//   },
//   {
//     titulo: "Aventuras en el Lejano Oeste",
//     editorial: "Western Books",
//     publicacion: 2020,
//     paginas: 330,
//     idiomas: {
//       primer_idioma: "Español",
//       segundo_idioma: "Ingles",
//     },
//   },
//   {
//     titulo: "Les Secrets de la Nature",
//     editorial: "Editions Naturelles",
//     publicacion: 2023,
//     paginas: 290,
//     idiomas: {
//       primer_idioma: "Frances",
//     },
//   },
//   {
//     titulo: "The Lost Treasure",
//     editorial: "Treasure Hunter Publishing",
//     publicacion: 2019,
//     paginas: 270,
//     idiomas: {
//       primer_idioma: "Ingles",
//     },
//   },
//   {
//     titulo: "El Libro de los Hechizos",
//     editorial: "Magia Antigua",
//     publicacion: 2022,
//     paginas: 320,
//     idiomas: {
//       primer_idioma: "Español",
//     },
//   },
//   {
//     titulo: "Le Mystere de la Pyramide",
//     editorial: "Editions Pharaon",
//     publicacion: 2018,
//     paginas: 250,
//     idiomas: {
//       primer_idioma: "Frances",
//     },
//   },
//   {
//     titulo: "The Phantom Ship",
//     editorial: "Maritime Mysteries",
//     publicacion: 2020,
//     paginas: 280,
//     idiomas: {
//       primer_idioma: "Ingles",
//     },
//   },
//   {
//     titulo: "El Secreto del Alquimista",
//     editorial: "Alquimia Ediciones",
//     publicacion: 2021,
//     paginas: 290,
//     idiomas: {
//       primer_idioma: "Español",
//     },
//   },
//   {
//     titulo: "Les Contes de Grimm",
//     editorial: "Contes Magiques",
//     publicacion: 2019,
//     paginas: 260,
//     idiomas: {
//       primer_idioma: "Frances",
//     },
//   },
//   {
//     titulo: "The Enchanted Garden",
//     editorial: "Garden Publishing",
//     publicacion: 2023,
//     paginas: 310,
//     idiomas: {
//       primer_idioma: "Ingles",
//     },
//   },
//   {
//     titulo: "El Tesoro de la Isla Perdida",
//     editorial: "Aventuras Marinas",
//     publicacion: 2018,
//     paginas: 290,
//     idiomas: {
//       primer_idioma: "Español",
//       segundo_idioma: "Ingles",
//     },
//   },
//   {
//     titulo: "Les Secrets de la Lune",
//     editorial: "Editions Lunaire",
//     publicacion: 2022,
//     paginas: 280,
//     idiomas: {
//       primer_idioma: "Frances",
//     },
//   },
//   {
//     titulo: "The Witch's Curse",
//     editorial: "Witchcraft Press",
//     publicacion: 2020,
//     paginas: 270,
//     idiomas: {
//       primer_idioma: "Ingles",
//     },
//   },
//   {
//     titulo: "Aventuras en el Mundo Subterraneo",
//     editorial: "Subterranean Books",
//     publicacion: 2021,
//     paginas: 320,
//     idiomas: {
//       primer_idioma: "Español",
//     },
//   },
//   {
//     titulo: "Le Chateau des Mysteres",
//     editorial: "Chateau Editions",
//     publicacion: 2019,
//     paginas: 300,
//     idiomas: {
//       primer_idioma: "Frances",
//     },
//   },
//   {
//     titulo: "El Misterio del Faro",
//     editorial: "Libros de Misterio",
//     publicacion: 2022,
//     paginas: 290,
//     idiomas: {
//       primer_idioma: "Español",
//       segundo_idioma: "Ingles",
//     },
//   },
//   {
//     titulo: "Les Secrets de la Foret",
//     editorial: "Editions Naturelles",
//     publicacion: 2021,
//     paginas: 270,
//     idiomas: {
//       primer_idioma: "Frances",
//     },
//   },
//   {
//     titulo: "The Ghostly Manor",
//     editorial: "Haunted House Publications",
//     publicacion: 2020,
//     paginas: 310,
//     idiomas: {
//       primer_idioma: "Ingles",
//     },
//   },
//   {
//     titulo: "Relatos Historicos",
//     editorial: "Historias Antiguas",
//     publicacion: 2022,
//     paginas: 280,
//     idiomas: {
//       primer_idioma: "Español",
//     },
//   },
//   {
//     titulo: "La Quete du Tresor Perdu",
//     editorial: "Editions Aventures",
//     publicacion: 2019,
//     paginas: 300,
//     idiomas: {
//       primer_idioma: "Frances",
//     },
//   },
//   {
//     titulo: "The Witching Hour",
//     editorial: "Witchcraft & Spells",
//     publicacion: 2021,
//     paginas: 320,
//     idiomas: {
//       primer_idioma: "Ingles",
//     },
//   },
//   {
//     titulo: "Aventuras en el Espacio Profundo",
//     editorial: "Galactic Adventures",
//     publicacion: 2020,
//     paginas: 330,
//     idiomas: {
//       primer_idioma: "Español",
//       segundo_idioma: "Ingles",
//     },
//   },
//   {
//     titulo: "Les Enquetes de Detective",
//     editorial: "Editions Detective",
//     publicacion: 2023,
//     paginas: 290,
//     idiomas: {
//       primer_idioma: "Frances",
//     },
//   },
//   {
//     titulo: "The Lost Civilization",
//     editorial: "Ancient Mysteries",
//     publicacion: 2019,
//     paginas: 270,
//     idiomas: {
//       primer_idioma: "Ingles",
//     },
//   },
//   //   50 DATOS
// ]);

// SUB DOCUMENTOS

// db.Biblioteca.find();

// db.Biblioteca.find({ "idiomas.primer_idioma": "Ingles" });

// db.Biblioteca.find({ "idiomas.segundo_idioma": "Ingles" });

// db.Biblioteca.find({ "idiomas.primer_idioma": "Español", paginas: { $gte: 300 } });

// db.Biblioteca.remove({ "idiomas.segundo_idioma": "Portugues" });

// db.Biblioteca.updateOne(
//   { titulo: "El Viaje Eterno" },
//   { $set: { "idiomas.segundo_idioma": "Portugues" } }
// );

// INDICES

// db.Biblioteca.createIndex({ titulo: 1 });

// db.Biblioteca.find({}, { titulo: 1 }).sort({ titulo: 1 });

// db.Biblioteca.createIndex({ titulo: 1, editorial: 1 });

// db.Biblioteca.find({ titulo: "El Viaje Eterno", "idiomas.primer_idioma": "Español" });

// db.Biblioteca
//   .find({ titulo: "El Viaje Eterno", "idiomas.primer_idioma": "Español" })
//   .explain("executionStats");

// AGREGACIONES

// db.Biblioteca.aggregate([
//   { $match: { publicacion: 2020, paginas: 300 } },
// ]);

// db.Biblioteca.aggregate([
//   { $project: { _id: 1, editorial: 1, publicacion: 1, paginas: 1 } },
// ]);

// db.Biblioteca.aggregate([
//   { $group: { _id: "$titulo", totaldocs: { $sum: 1 + 2 } } },
// ]);

// db.Biblioteca.aggregate([
//   { $group: { _id: "$titulo", totaldocs: { $sum: 1 } } },
//   { $out: "aggResults_Biblioteca" },
// ]);
// db.aggResults_Biblioteca.find();

// db.Biblioteca.aggregate([
//   {
//     $match: { paginas: 300 },
//   },
//   { $unwind: "$idiomas" },
// ]);

// db.Biblioteca.aggregate([
//   { $match: { titulo: "El Viaje Eterno" } },
//   { $unwind: "$idiomas" },
//   { $project: { _id: 0, "idiomas.primer_idioma": 1, "idiomas.segundo_idioma": 1 } },
//   { $sort: { "idiomas.primer_idioma": -1 } },
// ]);

// db.Biblioteca.aggregate([
//   { $match: { titulo: "El Viaje Eterno" } },
//   { $unwind: "$idiomas" },
//   { $project: { _id: 0, "idiomas.primer_idioma": 1, "idiomas.segundo_idioma": 1 } },
//   { $sort: { "idiomas.primer_idioma": -1 } },
//   { $limit: 2 },
// ]);

// db.Biblioteca.updateMany(
//   { titulo: "El Viaje Eterno" },
//   { $set: { Año_de_fundacion: 1998 } }
// );

// db.Biblioteca.aggregate([
//   { $unwind: "$idiomas" },
//   { $count: "total_documents" },
// ]);

// db.Biblioteca.aggregate([
//   { $match: { titulo: "El Viaje Eterno" } },
//   { $project: { _id: 0, titulo: 1 } },
//   {
//     $lookup: {
//       from: "Biblioteca",
//       localField: "idiomas",
//       foreignField: "primer_idioma",
//       as: "Biblioteca",
//     },
//   },
// ]);

// db.Biblioteca.aggregate([{ $sortByCount: "$paginas" }]);

// db.Biblioteca.aggregate([
//   { $unwind: "$idiomas" },
//   { $group: { _id: "$titulo", totalalumni: { $sum: "$paginas" } } },
// ]);
