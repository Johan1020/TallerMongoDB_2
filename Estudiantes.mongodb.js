use("Colegio_2");
// db.Estudiantes.insertMany([
//   {
//     nombre: "Carlos",
//     edad: 18,
//     direccion: "Calle 22",
//     tel: 245224,
//     materias: {
//       primer_materia: "Algebra",
//       segunda_materia: "Matematicas",
//       tercer_materia: "Ingles",
//     },
//   },

//   {
//     nombre: "Maria",
//     edad: 16,
//     direccion: "Calle 25",
//     tel: 234567,
//     materias: {
//       primer_materia: "Matematicas",
//       segunda_materia: "Algebra",
//       tercer_materia: "Ingles",
//     },
//   },

//   {
//     nombre: "Pedro",
//     edad: 55,
//     direccion: "Calle 34",
//     tel: 8904563,
//     materias: {
//       primer_materia: "Historia",
//       segunda_materia: "Matematicas",
//       tercer_materia: "Ingles",
//     },
//   },

//   {
//     nombre: "Laura",
//     edad: 25,
//     direccion: "Calle 36",
//     tel: 1345670,
//     materias: {
//       primer_materia: "Matematicas",
//       segunda_materia: "Historia",
//       tercer_materia: "Geografia",
//     },
//   },

//   {
//     nombre: "Ana",
//     edad: 90,
//     direccion: "Calle 76",
//     tel: 1678900,
//     materias: {
//       primer_materia: "Historia",
//       segunda_materia: "Geografia",
//     },
//   },

//   {
//     nombre: "Luis",
//     edad: 56,
//     direccion: "Calle 13",
//     tel: 7865643,
//     materias: {
//       primer_materia: "Matematicas",
//       segunda_materia: "Geografia",
//     },
//   },

//   {
//     nombre: "Marta",
//     edad: 56,
//     direccion: "Calle 90",
//     tel: 8900087,
//     materias: {
//       primer_materia: "Historia",
//       segunda_materia: "Geografia",
//     },
//   },

//   {
//     nombre: "Marta",
//     edad: 56,
//     direccion: "Calle 90",
//     tel: 8900087,
//     materias: {
//       primer_materia: "Historia",
//     },
//   },

//   {
//     nombre: "David",
//     edad: 17,
//     direccion: "Calle 100",
//     tel: 123456,
//     materias: {
//       primer_materia: "Algebra",
//       segunda_materia: "Geografia",
//     },
//   },

//   {
//     nombre: "Elena",
//     edad: 20,
//     direccion: "Calle 21",
//     tel: 3678901,
//     materias: {
//       primer_materia: "Historia",
//       segunda_materia: "Geografia",
//     },
//   },

//   {
//     nombre: "Jose",
//     edad: 20,
//     direccion: "Carrera 21",
//     tel: 890745,
//     materias: {
//       primer_materia: "Matematicas",
//       segunda_materia: "Geografia",
//     },
//   },

//   {
//     nombre: "Isabel",
//     edad: 78,
//     direccion: "Carrera 12",
//     tel: 765432,
//     materias: {
//       primer_materia: "Algebra",
//       segunda_materia: "Matematicas",
//       tercer_materia: "Historia",
//       cuarta_materia: "Geografia",
//     },
//   },

//   {
//     nombre: "Miguel",
//     edad: 23,
//     direccion: "Carrera 17",
//     tel: 789000,
//     materias: {
//       primer_materia: "Algebra",
//       segunda_materia: "Matematicas",
//       tercer_materia: "Historia",
//       cuarta_materia: "Ingles",
//     },
//   },

//   {
//     nombre: "Carolina",
//     edad: 45,
//     direccion: "Carrera 77",
//     tel: 567890,
//     materias: {
//       primer_materia: "Algebra",
//       segunda_materia: "Matematicas",
//       tercer_materia: "Historia",
//     },
//   },

//   {
//     nombre: "Pablo",
//     edad: 75,
//     direccion: "Carrera 99",
//     tel: 345678,
//     materias: {
//       primer_materia: "Algebra",
//       segunda_materia: "Matematicas",
//       tercer_materia: "Historia",
//       cuarta_materia: "Geografia",
//     },
//   },

//   {
//     nombre: "Lucia",
//     edad: 55,
//     direccion: "Carrera 1",
//     tel: 765432,
//     materias: {
//       primer_materia: "Algebra",
//       segunda_materia: "Matematicas",
//       tercer_materia: "Historia",
//       cuarta_materia: "Ingles",
//     },
//   },

//   {
//     nombre: "Alejandro",
//     edad: 12,
//     direccion: "Carrera 10",
//     tel: 987654,
//     materias: {
//       primer_materia: "Algebra",
//       segunda_materia: "Matematicas",
//       tercer_materia: "Historia",
//     },
//   },

//   {
//     nombre: "Carmen",
//     edad: 55,
//     direccion: "Carrera 15",
//     tel: 145678,
//     materias: {
//       primer_materia: "Algebra",
//       segunda_materia: "Matematicas",
//       tercer_materia: "Historia",
//       cuarta_materia: "Ingles",
//     },
//   },

//   {
//     nombre: "Daniel",
//     edad: 45,
//     direccion: "carrera 15",
//     tel: 876543,
//     materias: {
//       primer_materia: "Matematicas",
//       segunda_materia: "Historia",
//     },
//   },

//   {
//     nombre: "Paula",
//     edad: 45,
//     direccion: "carrera 89",
//     tel: 678543,
//     materias: {
//       primer_materia: "Matematicas",
//       segunda_materia: "Historia",
//     },
//   },

//   {
//     nombre: "Jorge",
//     edad: 37,
//     direccion: "calle 89",
//     tel: 123456,
//     materias: {
//       primer_materia: "Matematicas",
//       segunda_materia: "Historia",
//     },
//   },

//   {
//     nombre: "Jorge",
//     edad: 90,
//     direccion: "calle 55",
//     tel: 3456789,
//     materias: {
//       primer_materia: "Historia",
//     },
//   },

//   {
//     nombre: "Sara",
//     edad: 30,
//     direccion: "calle 32",
//     tel: 13458900,
//     materias: {
//       primer_materia: "Algebra",
//     },
//   },

//   {
//     nombre: "Javier",
//     edad: 30,
//     direccion: "calle 21",
//     tel: 123456,
//     materias: {
//       primer_materia: "Historia",
//     },
//   },

//   {
//     nombre: "Raquel",
//     edad: 49,
//     direccion: "calle 15",
//     tel: 123456,
//     materias: {
//       primer_materia: "Matematicas",
//     },
//   },

//   {
//     nombre: "Francisco",
//     edad: 57,
//     direccion: "calle 75",
//     tel: 890324,
//     materias: {
//       primer_materia: "Historia",
//     },
//   },

//   {
//     nombre: "Martina",
//     edad: 25,
//     direccion: "calle 34",
//     tel: 456789,
//     materias: {
//       primer_materia: "Matematicas",
//       segunda_materia: "Historia",
//     },
//   },

//   {
//     nombre: "Antonio",
//     edad: 10,
//     direccion: "carrera 21",
//     tel: 678906,
//     materias: {
//       primer_materia: "Matematicas",
//       segunda_materia: "Algebra",
//     },
//   },

//   {
//     nombre: "Beatriz",
//     edad: 25,
//     direccion: "carrera 45",
//     tel: 134598,
//     materias: {
//       primer_materia: "Matematicas",
//       segunda_materia: "Algebra",
//     },
//   },

//   {
//     nombre: "Manuel",
//     edad: 25,
//     direccion: "carrera 55",
//     tel: 556780,
//     materias: {
//       primer_materia: "Matematicas",
//       segunda_materia: "Historia",
//     },
//   },

//   {
//     nombre: "Claudia",
//     edad: 25,
//     direccion: "carrera 35",
//     tel: 678900,
//     materias: {
//       primer_materia: "Algebra",
//       segunda_materia: "Historia",
//       tercer_materia: "Matematicas",
//     },
//   },

//   {
//     nombre: "Alberto",
//     edad: 29,
//     direccion: "calle 55",
//     tel: 556780,
//     materias: {
//       primer_materia: "Algebra",
//       segunda_materia: "Historia",
//       tercer_materia: "Matematicas",
//     },
//   },

//   {
//     nombre: "Andrea",
//     edad: 85,
//     direccion: "carrera 89",
//     tel: 456789,
//     materias: {
//       primer_materia: "Algebra",
//       segunda_materia: "Historia",
//       tercer_materia: "Matematicas",
//     },
//   },

//   {
//     nombre: "Fernando",
//     edad: 25,
//     direccion: "carrera 55",
//     tel: 556780,
//     materias: {
//       primer_materia: "Matematicas",
//       segunda_materia: "Historia",
//     },
//   },

//   {
//     nombre: "Manuel",
//     edad: 14,
//     direccion: "calle 75",
//     tel: 890067,
//     materias: {
//       primer_materia: "Matematicas",
//       segunda_materia: "Historia",
//     },
//   },

//   {
//     nombre: "Natalia",
//     edad: 55,
//     direccion: "calle 25",
//     tel: 678921,
//     materias: {
//       primer_materia: "Matematicas",
//       segunda_materia: "Historia",
//     },
//   },

//   {
//     nombre: "Sergio",
//     edad: 95,
//     direccion: "calle 35",
//     tel: 123456,
//     materias: {
//       primer_materia: "Matematicas",
//       segunda_materia: "Historia",
//     },
//   },

//   {
//     nombre: "Manuel",
//     edad: 25,
//     direccion: "carrera 55",
//     tel: 556780,
//     materias: {
//       primer_materia: "Historia",
//     },
//   },

//   {
//     nombre: "Victoria",
//     edad: 16,
//     direccion: "calle 79",
//     tel: 456700,
//     materias: {
//       primer_materia: "Algebra",
//     },
//   },

//   {
//     nombre: "Adrian",
//     edad: 48,
//     direccion: "calle 45",
//     tel: 876543,
//     materias: {
//       primer_materia: "Matematicas",
//     },
//   },

//   {
//     nombre: "Carlos",
//     edad: 18,
//     direccion: "Calle 22",
//     tel: 245224,
//     materias: {
//       primer_materia: "Algebra",
//       segunda_materia: "Matematicas",
//     },
//   },

//   {
//     nombre: "Maria",
//     edad: 16,
//     direccion: "Calle 25",
//     tel: 234567,
//     materias: {
//       primer_materia: "Matematicas",
//       segunda_materia: "Algebra",
//     },
//   },

//   {
//     nombre: "Pedro",
//     edad: 55,
//     direccion: "Calle 34",
//     tel: 8904563,
//     materias: {
//       primer_materia: "Historia",
//       segunda_materia: "Matematicas",
//     },
//   },

//   {
//     nombre: "Laura",
//     edad: 25,
//     direccion: "Calle 36",
//     tel: 1345670,
//     materias: {
//       primer_materia: "Matematicas",
//       segunda_materia: "Historia",
//     },
//   },

//   {
//     nombre: "Ana",
//     edad: 90,
//     direccion: "Calle 76",
//     tel: 1678900,
//     materias: {
//       primer_materia: "Historia",
//     },
//   },

//   {
//     nombre: "Luis",
//     edad: 56,
//     direccion: "Calle 13",
//     tel: 7865643,
//     materias: {
//       primer_materia: "Matematicas",
//     },
//   },

//   {
//     nombre: "Marta",
//     edad: 56,
//     direccion: "Calle 90",
//     tel: 8900087,
//     materias: {
//       primer_materia: "Historia",
//     },
//   },

//   {
//     nombre: "Carla",
//     edad: 56,
//     direccion: "Calle 90",
//     tel: 8900087,
//     materias: {
//       primer_materia: "Historia",
//     },
//   },

//   {
//     nombre: "David",
//     edad: 17,
//     direccion: "Calle 100",
//     tel: 123456,
//     materias: {
//       primer_materia: "Algebra",
//       segunda_materia: "Ingles",
//     },
//   },

//   {
//     nombre: "Elena",
//     edad: 20,
//     direccion: "Calle 21",
//     tel: 3678901,
//     materias: {
//       primer_materia: "Historia",
//       segunda_materia: "Ingles",
//     },
//   },
//   50 DATOS
// ]);

// SUB DOCUMENTOS

// db.Estudiantes.find();

// db.Estudiantes.find({ "materias.primer_materia": "Algebra" });

// db.Estudiantes.find({ "materias.segunda_materia": "Ingles" });

// db.Estudiantes.find({ "materias.primer_materia": "Algebra", edad: { $gte: 18 } });

// db.Estudiantes.remove({ "materias.segunda_materia": "Geografia" });

// db.Estudiantes.updateOne(
//   { nombre: "Carlos" },
//   { $set: { "materias.segunda_materia": "Programacion" } }
// );

// INDICES

// db.Estudiantes.createIndex({ nombre: 1 });

// db.Estudiantes.find({}, { nombre: 1 }).sort({ nombre: 1 });

// db.Estudiantes.createIndex({ nombre: 1, edad: 1 });

// db.Estudiantes.find({ nombre: "Maria", "materias.primer_materia": "Matematicas" });

// db.Estudiantes.find({
//   nombre: "Marta",
//   "materias.primer_materia": "Historia",
// }).explain("executionStats");

// AGREGACIONES

// db.Estudiantes.aggregate([{ $match: { edad: 18, direccion: "Calle 22"  } }]);

// db.Estudiantes.aggregate([
//   { $project: { _id: 1, edad: 1, direccion: 1, tel: 1 } },
// ]);

// db.Estudiantes.aggregate([
//   { $group: { _id: "$nombre", totaldocs: { $sum: 1} } },
// ]);

// db.Estudiantes.aggregate([
//   { $group: { _id: "$nombre", totaldocs: { $sum: 1 } } },
//   { $out: "aggResults_Estudiantes" },
// ]);
// db.aggResults_Estudiantes.find();

// db.Estudiantes.aggregate([
//   {
//     $match: { edad: 18 },
//   },
//   { $unwind: "$materias" },
// ]);

// db.Estudiantes.aggregate([
//   { $match: { nombre: "Carlos" } },
//   { $unwind: "$materias" },
//   {
//     $project: {
//       _id: 1,
//       "materias.primer_materia": 1,
//       "materias.segunda_materia": 1,
//     },
//   },
//   { $sort: { "materias.primer_materia": -1 } },
// ]);

// db.Estudiantes.aggregate([
//   { $match: { nombre: "Maria" } },
//   { $unwind: "$materias" },
//   { $project: { _id: 0, "materias.primer_materia": 1, "materia.segunda_materia": 1 } },
//   { $sort: { "materias.primer_materia": -1 } },
//   { $limit: 1 },
// ]);

// db.Estudiantes.updateMany(
//   { edad: 18 },
//   { $set: { Año_de_nacimmiento: 2005 } }
// );

// db.Estudiantes.aggregate([
//   { $unwind: "$materias" },
//   { $count: "total_documents" },
// ]);

// db.Estudiantes.aggregate([
//   { $match: { edad: 18 } },
//   { $project: { _id: 0, edad: 18 } },
//   {
//     $lookup: {
//       from: "Estudiantes",
//       localField: "materias",
//       foreignField: "Algebra",
//       as: "Estudiantes",
//     },
//   },
// ]);

// db.Estudiantes.aggregate([{ $sortByCount: "$edad" }]);

// db.Estudiantes.aggregate([
//   { $unwind: "$materias" },
//   { $group: { _id: "$nombre", totalalumni: { $sum: "$edad" } } },
// ]);
