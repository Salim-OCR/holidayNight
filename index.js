// // Convert today date to input format
// const today = new Date().toISOString().split("T")[0];
// start_date.value = today;
// start_date.min = today;

// // Tomorrow date calc
// let tomorrow = new Date();
// tomorrow.setDate(tomorrow.getDate() + 1);

// // Convert to input format
// let tomorrowFormat = tomorrow.toISOString().split("T")[0];
// end_date.value = tomorrowFormat;
// end_date.min = tomorrowFormat;

// start_date.addEventListener("change", (e) => {
//   let day = new Date(e.target.value);

//   if (end_date.value < start_date.value) {
//     day.setDate(day.getDate() + 1);
//     end_date.value = day.toISOString().split("T")[0];
//   }
// });

// end_date.addEventListener("change", (e) => {
//   let day = new Date(e.target.value);

//   if (end_date.value < start_date.value) {
//     day.setDate(day.getDate() - 1);
//     start_date.value = day.toISOString().split("T")[0];
//   }
// });

// const bookingCalc = () => {
//   let diffTime = Math.abs(
//     new Date(end_date.value) - new Date(start_date.value)
//   );
//   let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

//   totalPerNight.textContent = diffDays * nightPrice.textContent;
// };

// start_date.addEventListener("change", bookingCalc);
// end_date.addEventListener("change", bookingCalc);
// bookingCalc();

//---------------------------------------------------
//                     DEBUT DE L'EXERCICE
//---------------------------------------------------

//Formater la date au jour actuelle, utiliser toISOString() et la méthode split. Et désactiver les jours précédent avec .min, rajouter +1 pour le jour suivant
const today = new Date().toISOString().split("T")[0];
start_date.value = today;
start_date.min = today;

//Tomorrow date calc
let tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
let tomorrowFormat = tomorrow.toISOString().split("T")[0];
end_date.value = tomorrowFormat;
end_date.min = tomorrowFormat;

//Calcule le format date pour le convertir au prix de nuits faire une fonction; dans la fonction faire une différence entre le jour start et end en utlisant la méthode Math.abs et convertire ces secondes en jours puis le mettre dans le total
const bookingCalc = () => {
  //Faire le jour de différence
  let diffTime = Math.abs(
    new Date(end_date.value) - new Date(start_date.value)
  );
  //ON a les secondes de différences mnt on veux les jours
  let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  //1000 en secondes
  //60 en min
  //60 en heures
  //24 en jours

  //Injecter au DOM
  totalPerNight.textContent = diffDays * nightPrice.textContent;
};
bookingCalc();

//Faire un évènement change à chaque fois que je change de date
start_date.addEventListener("change", (e) => {
  let day = new Date(e.target.value);
  console.log(day);

  if (end_date.value < start_date.value) {
    day.setDate(day.getDate() + 1);
    end_date.value = day.toISOString().split("T")[0];
  }
  bookingCalc();
});

end_date.addEventListener("change", (e) => {
  let day = new Date(e.target.value);

  if (end_date.value < start_date.value) {
    day.setDate(day.getDate() - 1);
    start_date.value = day.toISOString().split("T")[0];
  }
  bookingCalc();
});
