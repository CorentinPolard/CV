const bouton1 = document.getElementById("button1");

bouton1.addEventListener("click", function() {
  let experiences = document.getElementsByClassName("experiences")[0];
  console.log(experiences.style.display);
  // Forcer d'appliquer le display en inline pour que ça fonctionne ???
  if (experiences.style.display === "none") {
    experiences.style.display = "block";
    bouton1.innerHTML = "Cacher les expériences";
  }
  else {
    experiences.style.display = "none";
    bouton1.innerHTML = "Afficher les expériences";
  }
});

