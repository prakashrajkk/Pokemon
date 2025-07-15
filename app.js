let body = document.querySelector("body");

let url =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

for (i = 1; i <= 1000; i++) {
  let img1 = document.createElement("img");
  img1.src = `${url}${i}.png`;
  body.append(img1);
}
