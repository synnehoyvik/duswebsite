  function addToPortfolio(image, h1Text, beskrivelse) {
  let tjenester = document.getElementById("tjenester");
  let tjenesterboks = document.createElement("div");
  tjenesterboks.setAttribute("class", "tjenesterboks");

  let containertjenester = document.createElement("div");
  containertjenester.setAttribute("class", "containertjenester");

  let img = document.createElement("img");
  img.setAttribute("src", image);
  img.setAttribute("class", "imagetjenester");
  img.setAttribute("alt", "tjenestebilde");

  // Legg til tekst-div for bildeteksten
  let beskrivelse = document.createElement("div");
  beskrivelse.setAttribute("class", "beskrivelse");
  beskrivelse.innerHTML = beskrivelse;
  containertjenester.appendChild(beskrivelse); //slutt bildetekst add



  tjenesterboks.appendChild(containertjenester);

  let h1 = document.createElement("h1");
  h1.innerHTML = h1Text;
  tjenesterboks.appendChild(h3);

  tjenester.appendChild(tjenesterboks);
}

