const resetItems = () => {
  document.querySelector("#champions-grid").innerHTML = "";
};

const filter = (filter) => {
  switch (filter) {
    default:
      return data.champions;
    case "top":
      return data.champions.filter((champion) =>
        champion.roles.includes("top")
      );
    case "jungle":
      return data.champions.filter((champion) =>
        champion.roles.includes("jng")
      );
    case "middle":
      return data.champions.filter((champion) =>
        champion.roles.includes("mid")
      );
    case "bottom":
      return data.champions.filter((champion) =>
        champion.roles.includes("bot")
      );
    case "support":
      return data.champions.filter((champion) =>
        champion.roles.includes("sup")
      );
  }
};

const loadChampions = (role) => {
  resetItems();

  const champions = filter(role);

  champions.forEach((champion) => {
    const element = document.createElement("div");
    element.setAttribute("class", "champion");

    const image = document.createElement("img");
    image.setAttribute("src", `src/img/champions/${champion.value}.jpg`);

    const info = document.createElement("div");
    info.setAttribute("class", "info fs-18 text-primary");
    info.textContent = champion.name;

    element.appendChild(image);
    element.appendChild(info);

    document.querySelector("#champions-grid").appendChild(element);
  });

  document.querySelector(".count").textContent = `${role.toUpperCase()} (${
    champions.length
  })`;
};

const handleClickOnRole = (role) => {
  document
    .querySelectorAll(".role-decor.active")
    .forEach((element) => element.classList.remove("active"));

  document.querySelector(`#role-${role} ~ .role-decor`).classList.add("active");

  loadChampions(role);
};

document.querySelector("#role-top").addEventListener("click", () => {
  handleClickOnRole("top");
});

document.querySelector("#role-jungle").addEventListener("click", () => {
  handleClickOnRole("jungle");
});

document.querySelector("#role-middle").addEventListener("click", () => {
  handleClickOnRole("middle");
});

document.querySelector("#role-bottom").addEventListener("click", () => {
  handleClickOnRole("bottom");
});

document.querySelector("#role-support").addEventListener("click", () => {
  handleClickOnRole("support");
});

document.querySelector("#reset-filters").addEventListener("click", () => {
  document
    .querySelectorAll(".role-decor.active")
    .forEach((element) => element.classList.remove("active"));

  loadChampions("todos");
});

document.querySelector(".icon-back").addEventListener("click", () => {
  document.querySelector("#back-button-link").click();
});

loadChampions("todos");
