const bouton1 = document.getElementById("button1");

bouton1.addEventListener("click", function() {
  let experiences = document.getElementsByClassName("experiences")[0];
  // Forcer d'appliquer le display en inline pour que ça fonctionne ???
  if (experiences.style.display !== "none") {
    experiences.classList.toggle("mask");
  }
});


