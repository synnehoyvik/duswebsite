  function addToPortfolio(image, imgtext, url) {
  let portfolio = document.getElementById("portfolio");
  let port = document.createElement("div");
  port.setAttribute("class", "port");

  let container = document.createElement("div");
  container.setAttribute("class", "container");

  let a = document.createElement("a");
  a.setAttribute("href", url);

  let img = document.createElement("img");
  img.setAttribute("src", image);
  img.setAttribute("class", "image");
  img.setAttribute("alt", "prosjektbilde");
  a.appendChild(img);
  container.appendChild(a);

  let p = document.createElement("p");
  p.setAttribute("class", "imgtext");

  container.appendChild(p);

  port.appendChild(container);

  let h3 = document.createElement("h3");
  h3.innerHTML = imgtext;

  port.appendChild(h3);

  portfolio.appendChild(port);
}


//animasjon port
const elements = document.querySelectorAll('.port');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'animate-in-and-out 2s linear forwards';
    } else {
      entry.target.style.animation = 'none'; // Stopper animasjonen når den ikke er synlig
    }
  });
}, { threshold: 0.1 }); // 10% av elementet må være synlig for å trigge

elements.forEach((el) => observer.observe(el));