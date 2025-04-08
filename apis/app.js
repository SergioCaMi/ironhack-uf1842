

const userName = document.querySelector("#username");
const button = document.querySelector("button");
const displayFullName = document.getElementById("fullName");
const displayBio = document.getElementById("bio");
const displayProfilePicture = document.getElementById("profilePicture");
const displayHomeURL = document.getElementById("homeUrl");
const newLinkURL = document.createElement("a");

button.addEventListener("click", async function () {
  const response = await fetch(
    `https://api.github.com/users/${userName.value}`
  );
  const data = await response.json();
  displayFullName.textContent = data.name || "Nombre no disponible";
  displayBio.textContent = data.bio || "Biografía no disponible";
  displayProfilePicture.src = data.avatar_url;
  newLinkURL.href = data.html_url;
  newLinkURL.textContent = data.html_url || "URL no disponible";
  newLinkURL.target = "_blank";
  displayHomeURL.appendChild(newLinkURL);
});
