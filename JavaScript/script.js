const bouton1 = document.getElementById("bouton1");

bouton1.addEventListener("click", function() {
    const experiences = document.getElementsByClassName("experiences")[0];
    // Va ajouter la classe mask qui fixe display: none; si elle ne l'a pas et la retirer si elle l'a
    experiences.classList.toggle("mask");
    if (experiences.classList.contains("mask") === false) {
        bouton1.textContent = "Masquer les expériences";
    }
    else {
        bouton1.textContent = "Afficher les expériences";
    }
});


// API pour lier les repositories GitHub au CV


// Sélectionner les éléments HTML pour afficher le profil et les dépôts
const reposDiv = document.getElementById("repos");
const bouton2 = document.querySelector("#bouton2");

// Fonction pour récupérer et afficher les dépôts publics GitHub
async function fetchGitHubRepos(username) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        if (!response.ok) {
            throw new Error(`GitHub repos not found: ${response.statusText}`);
        }
        const repos = await response.json();

        // Construire le contenu HTML pour chaque dépôt
        const reposHTML = repos
            .map(repo => `
                <div style="width: auto%; margin: 10px 0 10px 0; padding: 10px; background-color: rgb(178, 215, 178); border: solid 5px rgb(105, 149, 105);">
                    <h3 style="margin: 0; overflow: hidden;"><a href="${repo.html_url}" target="_blank" style="text-decoration: none; color: blue;">${repo.name}</a></h3>
                    <p style="margin: 5px 0;">${repo.description || "No description available."}</p>
                    <p style="font-size: 12px; color: #555;">Last updated: ${new Date(repo.updated_at).toLocaleDateString()}</p>
                </div>
            `)
            .join("");

        // Insérer le contenu dans la div
        reposDiv.innerHTML = reposHTML;
    } catch (error) {
        reposDiv.innerHTML = `<p>Error: ${error.message}</p>`;
    }
}

// Fonction pour afficher les dépots au clic
bouton2.addEventListener("click", async () => {
    bouton2.textContent = "Loading...";
    await fetchGitHubRepos(username);
    // Faire disparaître le bouton après avoir cliqué dessus
    bouton2.style.display = "none";
    const repository = document.getElementsByClassName("repository")[0];
    repository.classList.remove("mask");
});

// Appeler les fonctions avec votre nom d'utilisateur GitHub
const username = "CorentinPolard"; // Remplacez par votre nom d'utilisateur GitHub
