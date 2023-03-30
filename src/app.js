function favoriteBiome() {
  let name = prompt("What is your first name?");
  let biome = prompt("What is your favorite biome?").toLowerCase().trim();
  if (
    biome === "desert" ||
    biome === "savanna" ||
    biome === "tropical rain forest"
  ) {
    alert("Hello " + name + "! You must really like warm weather. ☀");
  } else {
    if (biome === "tundra" || biome === "taiga") {
      alert("Hello " + name + "! You must really like cold weather. ❄");
    } else {
      alert(
        "Hello " +
          name +
          "! You must enjoy all of the different seasons. 🍂❄🌱☀"
      );
    }
  }
}
let biomeButton = document.querySelector("button");
biomeButton.addEventListener("click", favoriteBiome);
