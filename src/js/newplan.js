const saveItem = () => {
  const actualPlans = JSON.parse(localStorage.getItem("plans"));

  const name = document.querySelector("#name-input").value;
  const description = document.querySelector("#description-input").value;
  const bans = [];
  document.querySelectorAll(".column.bans #select-bans").forEach((ban) => {
    bans.push(ban.value);
  });
  const picks = [];
  document.querySelectorAll(".column.picks #select-picks").forEach((pick) => {
    picks.push(pick.value);
  });
  const side = document.querySelector("#select-side").value;

  actualPlans.push({
    name,
    description,
    bans,
    picks,
    side,
  });

  localStorage.setItem("plans", JSON.stringify(actualPlans));
  document.querySelector("#back-button-link").click();
};

const loadSelectableChampions = () => {
  const options = [];

  data.champions.forEach((champion) => {
    const selectableOption = document.createElement("option");
    selectableOption.setAttribute("value", champion.value);
    selectableOption.textContent = champion.name;

    options.push(selectableOption);
  });

  return options;
};

window.addEventListener("load", () => {
  document.querySelectorAll(".select-champions").forEach((select) => {
    loadSelectableChampions().forEach((option) => {
      select.appendChild(option);
    });
  });
});

document.querySelector(".icon-back").addEventListener("click", () => {
  document.querySelector("#back-button-link").click();
});

document.querySelector(".confirm-button").addEventListener("click", saveItem);
