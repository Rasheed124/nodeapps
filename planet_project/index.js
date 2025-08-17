const fs = require("fs");
const { parse } = require("csv-parse");

const habitablePlanets = [];
const isHabitablePlanet = (planet) => {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
};

fs.createReadStream("kepler_data.csv")
  .pipe(
    parse({
      comment: "#",
      columns: true,
      trim: true,
    })
  )
  .on("data", (data) => {
    if (isHabitablePlanet(data)) {
      habitablePlanets.push(data);
    }
  })
  .on("error", (err) => {
    console.error("Error while parsing CSV:", err);
  })
  .on("end", () => {
    console.log("Finished parsing CSV.");
    habitablePlanets.map((planet) => {
      console.log(planet["kepler_name"]);
    });
    console.log(`Parsed ${habitablePlanets.length} rows.`);
  });
