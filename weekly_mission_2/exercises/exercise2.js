const explorers = [
  {
    name: "Explorer 1",
    exercises_completed: 10,
    rate: 99,
    city: "CDMX",
    stack: ["js", "c#"],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true,
      },
      frontend: {
        isFinished: true,
        exercisesFinished: true,
      },
    },
  },
  {
    name: "Explorer 2",
    exercises_completed: 9,
    city: "Veracruz",
    rate: 50,
    stack: ["js"],
    missions: {
      onboarding: {
        isFinished: false,
        exercisesFinished: false,
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false,
      },
    },
  },
  {
    name: "Explorer 3",
    exercises_completed: 3,
    city: "Sonora",
    rate: 100,
    stack: ["elixir"],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true,
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false,
      },
    },
  },
];
// 1.Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
explorers.forEach((x) => console.log(x.name));
// 2.Imprime el stack de cada explorer, usa FOR EACH
explorers.forEach((x) => console.log(x.stack));
// 3.Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
const stacks_map = explorers.map((x) => x.stack);
console.log(stacks_map);
// 4.Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)
const explorers_js = explorers.filter((x) => x.stack.includes("js"));
console.log(explorers_js);
// 5.Busca el primer explorer que sea de la CDMX, usa FIND
const explorer_cdmx = explorers.find((x) => x.city == "CDMX");
console.log(explorer_cdmx);
// 6.Obtén la suma de todos los exercises_completed, usa REDUCE
const exercises_completed = explorers.map((x) => x.exercises_completed);
const sum_exercises_completed = exercises_completed.reduce(
  (acc, curr) => acc + curr,
  0
);
console.log(sum_exercises_completed);
// 7.Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME
const true_frontend_explorers = explorers.some(
  (x) => x.missions.frontend.exercisesFinished === true
);
console.log(true_frontend_explorers);
// 8.Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.
const true_onboarding_explorers = explorers.every(
  (x) => x.missions.onboarding.isFinished === true
);
console.log(true_onboarding_explorers);
