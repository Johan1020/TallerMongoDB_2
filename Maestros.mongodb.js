use("Colegio_2");
// db.Maestros.insertMany([
//   {
//     nombre: "Juan",
//     edad: 38,
//     añosEducando: 5,
//     tel: 123456,
//     Cursos: [
//       {
//         Nombre: "Matematicas",
//         Dia: {
//           primer_dia: "Lunes",
//           segundo_dia: "Miercoles",
//         },
//         Aula: 30,
//       },
//     ],
//   },

//   {
//     nombre: "Ramon",
//     edad: 34,
//     añosEducando: 3,
//     tel: 23135,
//     Cursos: [
//       {
//         Nombre: "Historia",
//         Dia: {
//           primer_dia: "Jueves",
//         },
//         Aula: 202,
//       },
//     ],
//   },
//   {
//     nombre: "Ramon",
//     edad: 37,
//     añosEducando: 7,
//     tel: 233245,
//     Cursos: [
//       {
//         Nombre: "Ingles",
//         Dia: {
//           primer_dia: "Martes",
//           segundo_dia: "Jueves",
//         },
//         Aula: 20,
//       },
//     ],
//   },
//   {
//     nombre: "Laura",
//     edad: 35,
//     añosEducando: 5,
//     tel: 987654321,
//     Cursos: [
//       {
//         Nombre: "Ciencias sociales",
//         Dia: {
//           primer_dia: "Martes",
//           segundo_dia: "Jueves",
//         },
//         Aula: 30,
//       },
//     ],
//   },
//   {
//     nombre: "Carlos",
//     edad: 42,
//     añosEducando: 8,
//     tel: 544567,
//     Cursos: [
//       {
//         Nombre: "Fisica",
//         Dia: {
//           primer_dia: "Lunes",
//           segundo_dia: "Miercoles",
//         },
//         Aula: 30,
//       },
//     ],
//   },
//   {
//     nombre: "Ana",
//     edad: 36,
//     añosEducando: 7,
//     tel: 233245,
//     Cursos: [
//       {
//         Nombre: "Ingles",
//         Dia: {
//           primer_dia: "Martes",
//           segundo_dia: "Jueves",
//         },
//         Aula: 30,
//       },
//     ],
//   },
//   {
//     nombre: "Jose",
//     edad: 41,
//     añosEducando: 9,
//     tel: 657890,
//     Cursos: [
//       {
//         Nombre: "Educacion fisica",
//         Dia: {
//           primer_dia: "Lunes",
//           segundo_dia: "Miercoles",
//         },
//         Aula: 30,
//       },
//     ],
//   },
//   {
//     nombre: "Maria",
//     edad: 38,
//     añosEducando: 6,
//     tel: 677680,
//     Cursos: [
//       {
//         Nombre: "Ciencias naturales",
//         Dia: {
//           primer_dia: "Martes",
//           segundo_dia: "Jueves",
//         },
//         Aula: 30,
//       },
//     ],
//   },
//   {
//     nombre: "David",
//     edad: 37,
//     añosEducando: 6,
//     tel: 434345,
//     Cursos: [
//       {
//         Nombre: "Español",
//         Dia: {
//           primer_dia: "Lunes",
//           segundo_dia: "Miercoles",
//         },
//         Aula: 30,
//       },
//     ],
//   },
//   {
//     nombre: "Sara",
//     edad: 34,
//     añosEducando: 5,
//     tel: 3443565,
//     Cursos: [
//       {
//         Nombre: "Tecnologia",
//         Dia: {
//           primer_dia: "Martes",
//           segundo_dia: "Jueves",
//         },
//         Aula: 11,
//       },
//     ],
//   },
//   {
//     nombre: "Javier",
//     edad: 40,
//     añosEducando: 8,
//     tel: 343468,
//     Cursos: [
//       {
//         Nombre: "Economia",
//         Dia: {
//           primer_dia: "Lunes",
//           segundo_dia: "Miercoles",
//         },
//         Aula: 10,
//       },
//     ],
//   },
//   {
//     nombre: "Elena",
//     edad: 33,
//     añosEducando: 7,
//     tel: 678990,
//     Cursos: [
//       {
//         Nombre: "Filosofia",
//         Dia: {
//           primer_dia: "Martes",
//           segundo_dia: "Jueves",
//         },
//         Aula: 10,
//       },
//     ],
//   },
//   {
//     nombre: "Daniel",
//     edad: 39,
//     añosEducando: 6,
//     tel: 567890,
//     Cursos: [
//       {
//         Nombre: "Artistica",
//         Dia: {
//           primer_dia: "Lunes",
//           segundo_dia: "Miercoles",
//         },
//         Aula: 11,
//       },
//     ],
//   },
//   {
//     nombre: "Lucia",
//     edad: 36,
//     añosEducando: 7,
//     tel: 434565,
//     Cursos: [
//       {
//         Nombre: "Etica",
//         Dia: {
//           primer_dia: "Martes",
//           segundo_dia: "Jueves",
//         },
//         Aula: 12,
//       },
//     ],
//   },
//   {
//     nombre: "Miguel",
//     edad: 41,
//     añosEducando: 8,
//     tel: 233234,
//     Cursos: [
//       {
//         Nombre: "Quimica",
//         Dia: {
//           primer_dia: "Lunes",
//           segundo_dia: "Miercoles",
//         },
//         Aula: 13,
//       },
//     ],
//   },
//   {
//     nombre: "Sandra",
//     edad: 37,
//     añosEducando: 7,
//     tel: 344323,
//     Cursos: [
//       {
//         Nombre: "Fisica",
//         Dia: {
//           primer_dia: "Martes",
//           segundo_dia: "Jueves",
//         },
//         Aula: 14,
//       },
//     ],
//   },
//   {
//     nombre: "Pablo",
//     edad: 39,
//     añosEducando: 6,
//     tel: 344355,
//     Cursos: [
//       {
//         Nombre: "Tecnologia",
//         Dia: {
//           primer_dia: "Lunes",
//           segundo_dia: "Miercoles",
//         },
//         Aula: 15,
//       },
//     ],
//   },
//   {
//     nombre: "Silvia",
//     edad: 35,
//     añosEducando: 5,
//     tel: 907455,
//     Cursos: [
//       {
//         Nombre: "Programacion",
//         Dia: {
//           primer_dia: "Martes",
//           segundo_dia: "Jueves",
//         },
//         Aula: 16,
//       },
//     ],
//   },
//   {
//     nombre: "Alejandro",
//     edad: 42,
//     añosEducando: 8,
//     tel: 344366,
//     Cursos: [
//       {
//         Nombre: "Geografia",
//         Dia: {
//           primer_dia: "Lunes",
//           segundo_dia: "Miercoles",
//         },
//         Aula: 17,
//       },
//     ],
//   },
//   {
//     nombre: "Cristina",
//     edad: 36,
//     añosEducando: 7,
//     tel: 566578,
//     Cursos: [
//       {
//         Nombre: "Filosofia",
//         Dia: {
//           primer_dia: "Martes",
//           segundo_dia: "Jueves",
//         },
//         Aula: 18,
//       },
//     ],
//   },
//   {
//     nombre: "Fernando",
//     edad: 40,
//     añosEducando: 8,
//     tel: 344356,
//     Cursos: [
//       {
//         Nombre: "Economia",
//         Dia: {
//           primer_dia: "Lunes",
//           segundo_dia: "Miercoles",
//         },
//         Aula: 19,
//       },
//     ],
//   },
//   {
//     nombre: "Raquel",
//     edad: 37,
//     añosEducando: 7,
//     tel: 233245,
//     Cursos: [
//       {
//         Nombre: "Ingles",
//         Dia: {
//           primer_dia: "Martes",
//           segundo_dia: "Jueves",
//         },
//         Aula: 20,
//       },
//     ],
//   },
//   {
//     nombre: "Jose ",
//     edad: 41,
//     añosEducando: 8,
//     tel: 323443,
//     Cursos: [
//       {
//         Nombre: "Ciencias naturales",
//         Dia: {
//           primer_dia: "Lunes",
//           segundo_dia: "Miercoles",
//         },
//         Aula: 21,
//       },
//     ],
//   },
//   //   20 DATOS
//   {
//     nombre: "Isabel",
//     edad: 39,
//     añosEducando: 6,
//     tel: 344356,
//     Cursos: [
//       {
//         Nombre: "Etica",
//         Dia: {
//           primer_dia: "Martes",
//           segundo_dia: "Jueves",
//         },
//         Aula: 22,
//       },
//     ],
//   },
//   {
//     nombre: "Roberto",
//     edad: 37,
//     añosEducando: 7,
//     tel: 677680,
//     Cursos: [
//       {
//         Nombre: "Quimica",
//         Dia: {
//           primer_dia: "Lunes",
//           segundo_dia: "Miercoles",
//         },
//         Aula: 23,
//       },
//     ],
//   },
//   {
//     nombre: "Carmen",
//     edad: 40,
//     añosEducando: 8,
//     tel: 233244,
//     Cursos: [
//       {
//         Nombre: "Ciencias sociales",
//         Dia: {
//           primer_dia: "Martes",
//           segundo_dia: "Jueves",
//         },
//         Aula: 24,
//       },
//     ],
//   },
//   {
//     nombre: "Fernando",
//     edad: 38,
//     añosEducando: 9,
//     tel: 909855,
//     Cursos: [
//       {
//         Nombre: "Geografia",
//         Dia: {
//           primer_dia: "Lunes",
//           segundo_dia: "Miercoles",
//         },
//         Aula: 25,
//       },
//     ],
//   },
//   {
//     nombre: "Alicia",
//     edad: 35,
//     añosEducando: 5,
//     tel: 899855,
//     Cursos: [
//       {
//         Nombre: "Filosofia",
//         Dia: {
//           primer_dia: "Martes",
//           segundo_dia: "Jueves",
//         },
//         Aula: 26,
//       },
//     ],
//   },
//   {
//     nombre: "Luis",
//     edad: 42,
//     añosEducando: 10,
//     tel: 233223,
//     Cursos: [
//       {
//         Nombre: "Economia",
//         Dia: {
//           primer_dia: "Lunes",
//           segundo_dia: "Miercoles",
//         },
//         Aula: 27,
//       },
//     ],
//   },
//   {
//     nombre: "Pilar",
//     edad: 36,
//     añosEducando: 11,
//     tel: 233223,
//     Cursos: [
//       {
//         Nombre: "Ingles",
//         Dia: {
//           primer_dia: "Martes",
//           segundo_dia: "Jueves",
//         },
//         Aula: 28,
//       },
//     ],
//   },
//   {
//     nombre: "Jorge",
//     edad: 41,
//     añosEducando: 12,
//     tel: 233245,
//     Cursos: [
//       {
//         Nombre: "Ciencias naturales",
//         Dia: {
//           primer_dia: "Lunes",
//           segundo_dia: "Miercoles",
//         },
//         Aula: 29,
//       },
//     ],
//   },
//   {
//     nombre: "Sofia",
//     edad: 37,
//     añosEducando: 13,
//     tel: 322345,
//     Cursos: [
//       {
//         Nombre: "Artistica",
//         Dia: {
//           primer_dia: "Martes",
//           segundo_dia: "Jueves",
//         },
//         Aula: 30,
//       },
//     ],
//   },
//   {
//     nombre: "Ricardo",
//     edad: 43,
//     añosEducando: 14,
//     tel: 344345,
//     Cursos: [
//       {
//         Nombre: "Español",
//         Dia: {
//           primer_dia: "Lunes",
//           segundo_dia: "Miercoles",
//         },
//         Aula: 23,
//       },
//     ],
//   },
//   {
//     nombre: "Eva",
//     edad: 39,
//     añosEducando: 15,
//     tel: 433465,
//     Cursos: [
//       {
//         Nombre: "Tecnologia",
//         Dia: {
//           primer_dia: "Martes",
//           segundo_dia: "Jueves",
//         },
//         Aula: 22,
//       },
//     ],
//   },
//   {
//     nombre: "Andres",
//     edad: 44,
//     añosEducando: 16,
//     tel: 233245,
//     Cursos: [
//       {
//         Nombre: "Filosofia",
//         Dia: {
//           primer_dia: "Lunes",
//           segundo_dia: "Miercoles",
//         },
//         Aula: 22,
//       },
//     ],
//   },
//   {
//     nombre: "Paula",
//     edad: 38,
//     añosEducando: 17,
//     tel: 809070,
//     Cursos: [
//       {
//         Nombre: "Economia",
//         Dia: {
//           primer_dia: "Martes",
//           segundo_dia: "Jueves",
//         },
//         Aula: 22,
//       },
//     ],
//   },
//   {
//     nombre: "Diego",
//     edad: 45,
//     añosEducando: 18,
//     tel: 344334,
//     Cursos: [
//       {
//         Nombre: "Fisica",
//         Dia: {
//           primer_dia: "Lunes",
//           segundo_dia: "Miercoles",
//         },
//         Aula: 22,
//       },
//     ],
//   },
//   {
//     nombre: "Celia",
//     edad: 40,
//     añosEducando: 19,
//     tel: 344345,
//     Cursos: [
//       {
//         Nombre: "Matematicas",
//         Dia: {
//           primer_dia: "Martes",
//           segundo_dia: "Jueves",
//         },
//         Aula: 22,
//       },
//     ],
//   },
//   {
//     nombre: "Hugo",
//     edad: 46,
//     añosEducando: 20,
//     tel: 344356,
//     Cursos: [
//       {
//         Nombre: "Ciencias sociales",
//         Dia: {
//           primer_dia: "Lunes",
//           segundo_dia: "Miercoles",
//         },
//         Aula: 22,
//       },
//     ],
//   },
//   {
//     nombre: "Elena",
//     edad: 39,
//     añosEducando: 11,
//     tel: 344356,
//     Cursos: [
//       {
//         Nombre: "Ciencias naturales",
//         Dia: {
//           primer_dia: "Martes",
//           segundo_dia: "Jueves",
//         },
//         Aula: 22,
//       },
//     ],
//   },
//   {
//     nombre: "Marcos",
//     edad: 41,
//     añosEducando: 12,
//     tel: 324576,
//     Cursos: [
//       {
//         Nombre: "Tecnologia",
//         Dia: {
//           primer_dia: "Lunes",
//           segundo_dia: "Miercoles",
//         },
//         Aula: 22,
//       },
//     ],
//   },
//   {
//     nombre: "Lucia",
//     edad: 41,
//     añosEducando: 23,
//     tel: 435678,
//     Cursos: [
//       {
//         Nombre: "Español",
//         Dia: {
//           primer_dia: "Martes",
//           segundo_dia: "Jueves",
//         },
//         Aula: 22,
//       },
//     ],
//   },
//   {
//     nombre: "Antonio",
//     edad: 40,
//     añosEducando: 24,
//     tel: 708090,
//     Cursos: [
//       {
//         Nombre: "Artistica",
//         Dia: {
//           primer_dia: "Lunes",
//           segundo_dia: "Miercoles",
//         },
//         Aula: 22,
//       },
//     ],
//   },
//   {
//     nombre: "Natalia",
//     edad: 35,
//     añosEducando: 15,
//     tel: 344356,
//     Cursos: [
//       {
//         Nombre: "Economia",
//         Dia: {
//           primer_dia: "Martes",
//           segundo_dia: "Jueves",
//         },
//         Aula: 23,
//       },
//     ],
//   },
//   {
//     nombre: "Manuel",
//     edad: 42,
//     añosEducando: 26,
//     tel: 344345,
//     Cursos: [
//       {
//         Nombre: "Geografia",
//         Dia: {
//           primer_dia: "Lunes",
//           segundo_dia: "Miercoles",
//         },
//         Aula: 23,
//       },
//     ],
//   },
//   {
//     nombre: "Rosa",
//     edad: 37,
//     añosEducando: 27,
//     tel: 323443,
//     Cursos: [
//       {
//         Nombre: "Filosofia",
//         Dia: {
//           primer_dia: "Martes",
//           segundo_dia: "Jueves",
//         },
//         Aula: 23,
//       },
//     ],
//   },
//   //40 DATOS
//   {
//     nombre: "Miguel",
//     edad: 40,
//     añosEducando: 28,
//     tel: 345665,
//     Cursos: [
//       {
//         Nombre: "Etica",
//         Dia: {
//           primer_dia: "Lunes",
//           segundo_dia: "Miercoles",
//         },
//         Aula: 23,
//       },
//     ],
//   },
//   {
//     nombre: "Lorena",
//     edad: 36,
//     añosEducando: 29,
//     tel: 345456,
//     Cursos: [
//       {
//         Nombre: "Quimica",
//         Dia: {
//           primer_dia: "Martes",
//           segundo_dia: "Jueves",
//         },
//         Aula: 23,
//       },
//     ],
//   },
//   {
//     nombre: "Diego",
//     edad: 43,
//     añosEducando: 20,
//     tel: 345678,
//     Cursos: [
//       {
//         Nombre: "Ciencias sociales",
//         Dia: {
//           primer_dia: "Lunes",
//           segundo_dia: "Miercoles",
//         },
//         Aula: 23,
//       },
//     ],
//   },
//   {
//     nombre: "Ana",
//     edad: 39,
//     añosEducando: 11,
//     tel: 234567,
//     Cursos: [
//       {
//         Nombre: "Geografia",
//         Dia: {
//           primer_dia: "Martes",
//           segundo_dia: "Jueves",
//         },
//         Aula: 23,
//       },
//     ],
//   },
// //   50 DATOS
// ]);

// SUB DOCUMENTOS

// db.Maestros.find();

// db.Maestros.find({ "Cursos.Nombre": "Español" });

// db.Maestros.find({ "Cursos.Aula": 30 });

// db.Maestros.find({ "Cursos.Dia.primer_dia": "Lunes", edad: { $gte: 18 } });

// db.Maestros.remove({ "Cursos.Aula": 10 });

// db.Maestros.updateOne(
//   { nombre: "Juan" },
//   { $set: { "Curso.Dia.primer_dia": "Viernes" } }
// );

// INDICES

// db.Maestros.createIndex({ nombre: 1 });

// db.Maestros.find({}, { nombre: 1 }).sort({ nombre: 1 });

// db.Maestros.createIndex({ nombre: 1, edad: 1 });

// db.Maestros.find({ nombre: "Sara", "Cursos.Dia.primer_dia": "Martes" });

// db.Maestros.find({ nombre: "Sara", "Cursos.Aula": 11 }).explain(
//   "executionStats"
// );

// AGREGACIONES

// db.Maestros.aggregate([{ $match: { nombre: "Juan", tel: 123456  } }]);

// db.Maestros.aggregate([
//   { $project: { _id: 1, edad: 1, direccion: 1, tel: 1 } },
// ]);

// db.Maestros.aggregate([
//   { $group: { _id: "$nombre", totaldocs: { $sum: 1 + 2} } },
// ]);

// db.Maestros.aggregate([
//   { $group: { _id: "$nombre", totaldocs: { $sum: 1 } } },
//   { $out: "aggResults_Maestros" },
// ]);
// db.aggResults_Maestros.find();

// db.Maestros.aggregate([
//   {
//     $match: { edad: 35 },
//   },
//   { $unwind: "$Cursos" },
// ]);

// db.Maestros.aggregate([
//   { $match: { nombre: "Carlos" } },
//   { $unwind: "$Cursos" },
//   {
//     $project: {
//       _id: 1,
//       "Cursos.Nombre": 1,
//     },
//   },
//   { $sort: { "Cursos.Nombre": -1 } },
// ]);

// db.Maestros.aggregate([
//   { $match: { nombre: "Juan" } },
//   { $unwind: "$Cursos" },
//   { $project: { _id: 0, "Cursos.Aula": 1 } },
//   { $sort: { "Cursos.Aula": -1 } },
//   { $limit: 2 },
// ]);

// db.Maestros.updateMany(
//   { edad: 37 },
//   { $set: { Año_de_nacimmiento: 1987 } }
// );

// db.Maestros.aggregate([
//   { $unwind: "$Cursos" },
//   { $count: "total_documents" },
// ]);

// db.Maestros.aggregate([
//   { $match: { nombre: "Juan" } },
//   { $project: { _id: 0, edad: 37 } },
//   {
//     $lookup: {
//       from: "Maestros",
//       localField: "Cursos",
//       foreignField: "Aula",
//       as: "Maestros",
//     },
//   },
// ]);

// db.Maestros.aggregate([{ $sortByCount: "$edad" }]);

// db.Maestros.aggregate([
//   { $unwind: "$Cursos" },
//   { $group: { _id: "$nombre", totalalumni: { $sum: "$edad" } } },
// ]);
