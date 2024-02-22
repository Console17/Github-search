const apiUrl = "https://api.github.com/users/";
const main = document.querySelector("main");
const search = document.querySelector(".search");
const form = document.querySelector("form");

const searchProfile = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    const img = document.createElement("img");
    img.src = data.avatar_url;
    main.appendChild(img);

    const h3 = document.createElement("h3");
    h3.innerHTML = `Login : <a href="${data.html_url}" target="_blank">${data.login}</a>`;
    main.appendChild(h3);

    const h2 = document.createElement("h2");
    h2.innerHTML = `Name : ${data.name}`;
    main.appendChild(h2);

    const p = document.createElement("p");
    p.innerHTML = `Bio : ${data.bio}`;
    main.appendChild(p);
  } catch (error) {
    console.error(error);
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  main.innerHTML = "";

  const searchTerm = search.value;
  if (searchTerm) {
    searchProfile(apiUrl + searchTerm);
    search.value = "";
  }
});
